const SHEET_NAME = "Gifts";
const SCRIPT_TIMEZONE = "Asia/Kolkata";
const HEADERS = [
  "id",
  "name",
  "category",
  "price",
  "description",
  "link",
  "reservedBy",
  "message",
  "releaseCode",
  "createdAt",
  "updatedAt",
];

const DEFAULT_GIFTS = [
  {
    id: "hand-thrown-dinnerware-set",
    name: "Hand-thrown dinnerware set",
    category: "Kitchen",
    price: 19999,
    description: "A twenty one-piece luxe ceramic dinner set for slow Sunday lunches and festival dinners.",
    link: "https://www.fabindia.com/ceramic-decaled-luxe-dinner-set-20184880",
  },
  {
    id: "linen-bedding-bundle",
    name: "Linen bedding bundle",
    category: "Home",
    price: 6999,
    description: "Soft sheets and pillow covers for the couple's first home together.",
    link: "https://www.homecentre.in/in/en/Homeware/Furnishing/Bedding/HOMECENTRE-Chime-Doeskin-Cotton-4Pcs-Printed-Double-Bed-In-A-Bag-Set/p/1000014093014",
  },
  {
    id: "weekend-spa-retreat",
    name: "Weekend spa retreat",
    category: "Experiences",
    price: 28332,
    description: "A quiet post-wedding reset with massages, breakfast, and late checkout.",
    link: "https://www.roseatehotels.com/newdelhi/theroseate/aheli-spa/",
  },
  {
    id: "brass-floor-lamp",
    name: "Brass floor lamp",
    category: "Decor",
    price: 9800,
    description: "Warm evening light for reading, hosting, and settling into the new place.",
    link: "https://www.homecentre.in/in/en/Decor/Lighting/Floor-Lamps/HOMECENTRE-Melody-Div-Metal-Floor-Lamp/p/1000015317595",
  },
  {
    id: "stand-mixer",
    name: "Stand mixer",
    category: "Kitchen",
    price: 6999,
    description: "So that they can make you birthday cakes, late-night cookies, and ambitious weekend baking.",
    link: "https://www.amazon.in/Durability-Accessories-Dishwasher-Kneading-Kratos-Plus/dp/B0CX4T932R/",
  },
  {
    id: "dishwasher",
    name: "Dishwasher",
    category: "Home",
    price: 42990,
    description: "So that the couple saves time.",
    link: "https://www.amazon.in/Setting-Dishwasher-Intensive-Program-Pre-Rinse/dp/B07JW77MVJ/",
  },
  {
    id: "coffee-machine",
    name: "Coffee Machine",
    category: "Kitchen",
    price: 19999,
    description: "A coffee maker for the coffee lovers.",
    link: "https://www.amazon.in/DeLonghi-Dedica-Compact-Espresso-machine/dp/B0F3S1JJ4T",
  },
  {
    id: "coffee-mug-set",
    name: "Coffee Mug set",
    category: "Kitchen",
    price: 19999,
    description: "A handsome set for morning coffee and slow evening chai.",
    link: "https://www.homecentre.in/in/en/Tableware/Crockery/Tea-and-Coffee-Sets/HOMECENTRE-Caraway-Somber-Set-of-6-Stoneware-Cups-and-Saucers-with-Metal-Stand--220ml/p/1000015640049",
  },
  {
    id: "walking-pad",
    name: "Walking pad",
    category: "Home",
    price: 29999,
    description: "So that the couple can stay fit.",
    link: "https://www.amazon.in/Flexnest-Flexpad-Foldable-Treadmill-Bluetooth/dp/B0F6VB8Y26/",
  },
];

function setup() {
  const spreadsheet = getSpreadsheet_();
  const sheet = getSheet_(spreadsheet);
  seedSheetIfEmpty_(sheet);
  Logger.log("Registry spreadsheet: " + spreadsheet.getUrl());
}

function doGet(event) {
  try {
    const action = (event.parameter && event.parameter.action) || "list";
    const payloadText = (event.parameter && event.parameter.payload) || "{}";
    const callback = safeCallback_(event.parameter && event.parameter.callback);
    const payload = JSON.parse(payloadText);
    return response_(handleAction_(action, payload), callback);
  } catch (error) {
    return response_(
      { ok: false, error: error.message || String(error) },
      safeCallback_(event.parameter && event.parameter.callback)
    );
  }
}

function doPost(event) {
  try {
    const body = JSON.parse((event.postData && event.postData.contents) || "{}");
    const action = body.action || "list";
    const payload = body.payload || {};
    return response_(handleAction_(action, payload));
  } catch (error) {
    return response_({ ok: false, error: error.message || String(error) });
  }
}

function handleAction_(action, payload) {
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);

  try {
    const spreadsheet = getSpreadsheet_();
    const sheet = getSheet_(spreadsheet);
    seedSheetIfEmpty_(sheet);

    if (action === "list") {
      return { ok: true, gifts: listGifts_(sheet) };
    }

    if (action === "add") {
      addGift_(sheet, payload);
      return { ok: true, gifts: listGifts_(sheet) };
    }

    if (action === "reserve") {
      const result = reserveGift_(sheet, payload);
      return { ok: true, gifts: listGifts_(sheet), giftId: result.giftId, releaseCode: result.releaseCode };
    }

    if (action === "release") {
      releaseGift_(sheet, payload);
      return { ok: true, gifts: listGifts_(sheet) };
    }

    if (action === "reset") {
      requireAdmin_(payload.adminKey);
      resetSheet_(sheet);
      return { ok: true, gifts: listGifts_(sheet) };
    }

    return { ok: false, error: "Unknown action: " + action };
  } finally {
    lock.releaseLock();
  }
}

function getSpreadsheet_() {
  const properties = PropertiesService.getScriptProperties();
  const savedId = properties.getProperty("REGISTRY_SPREADSHEET_ID");

  if (savedId) {
    return SpreadsheetApp.openById(savedId);
  }

  const active = SpreadsheetApp.getActiveSpreadsheet();
  const spreadsheet = active || SpreadsheetApp.create("Mithu and Atin Wedding Registry");
  properties.setProperty("REGISTRY_SPREADSHEET_ID", spreadsheet.getId());
  return spreadsheet;
}

function getSheet_(spreadsheet) {
  return spreadsheet.getSheetByName(SHEET_NAME) || spreadsheet.insertSheet(SHEET_NAME);
}

function seedSheetIfEmpty_(sheet) {
  if (sheet.getLastRow() > 0) {
    return;
  }

  resetSheet_(sheet);
}

function resetSheet_(sheet) {
  sheet.clear();
  sheet.appendRow(HEADERS);
  DEFAULT_GIFTS.forEach((gift) => appendGift_(sheet, gift));
  sheet.setFrozenRows(1);
}

function listGifts_(sheet) {
  const values = sheet.getDataRange().getValues();

  if (values.length < 2) {
    return [];
  }

  const headers = values[0];
  return values.slice(1).map((row) => rowToGift_(headers, row));
}

function addGift_(sheet, payload) {
  const gift = normalizeGift_(payload);

  if (!gift.name) {
    throw new Error("Gift name is required.");
  }

  appendGift_(sheet, gift);
}

function reserveGift_(sheet, payload) {
  const rowInfo = findGiftRow_(sheet, payload.id);

  if (!rowInfo) {
    throw new Error("Gift not found.");
  }

  const reservedBy = getCellValue_(sheet, rowInfo.rowNumber, "reservedBy");

  if (reservedBy) {
    throw new Error("This gift has already been reserved.");
  }

  const guestName = String(payload.guestName || "").trim();

  if (!guestName) {
    throw new Error("Guest name is required.");
  }

  const releaseCode = Utilities.getUuid();
  setCellValue_(sheet, rowInfo.rowNumber, "reservedBy", guestName);
  setCellValue_(sheet, rowInfo.rowNumber, "message", String(payload.message || "").trim());
  setCellValue_(sheet, rowInfo.rowNumber, "releaseCode", releaseCode);
  setCellValue_(sheet, rowInfo.rowNumber, "updatedAt", now_());

  return { giftId: payload.id, releaseCode };
}

function releaseGift_(sheet, payload) {
  const rowInfo = findGiftRow_(sheet, payload.id);

  if (!rowInfo) {
    throw new Error("Gift not found.");
  }

  const releaseCode = String(payload.releaseCode || "").trim();
  const savedReleaseCode = String(getCellValue_(sheet, rowInfo.rowNumber, "releaseCode") || "").trim();
  const isAdmin = isAdminKey_(payload.adminKey);

  if (!isAdmin && (!releaseCode || releaseCode !== savedReleaseCode)) {
    throw new Error("This reservation can only be released from the browser that made it.");
  }

  setCellValue_(sheet, rowInfo.rowNumber, "reservedBy", "");
  setCellValue_(sheet, rowInfo.rowNumber, "message", "");
  setCellValue_(sheet, rowInfo.rowNumber, "releaseCode", "");
  setCellValue_(sheet, rowInfo.rowNumber, "updatedAt", now_());
}

function appendGift_(sheet, gift) {
  const normalized = normalizeGift_(gift);
  const now = now_();
  sheet.appendRow([
    normalized.id,
    normalized.name,
    normalized.category,
    normalized.price,
    normalized.description,
    normalized.link,
    normalized.reservedBy,
    normalized.message,
    "",
    now,
    now,
  ]);
}

function normalizeGift_(gift) {
  return {
    id: String(gift.id || Utilities.getUuid()).trim(),
    name: String(gift.name || "").trim(),
    category: String(gift.category || "Home").trim(),
    price: Number(gift.price || 0),
    description: String(gift.description || "").trim(),
    link: String(gift.link || "").trim(),
    reservedBy: String(gift.reservedBy || "").trim(),
    message: String(gift.message || "").trim(),
  };
}

function findGiftRow_(sheet, id) {
  const targetId = String(id || "").trim();
  const values = sheet.getDataRange().getValues();
  const headers = values[0];
  const idIndex = headers.indexOf("id");

  for (let index = 1; index < values.length; index += 1) {
    if (String(values[index][idIndex]) === targetId) {
      return { rowNumber: index + 1, headers };
    }
  }

  return null;
}

function rowToGift_(headers, row) {
  const gift = {};

  headers.forEach((header, index) => {
    if (header !== "releaseCode") {
      gift[header] = row[index];
    }
  });

  return gift;
}

function getCellValue_(sheet, rowNumber, header) {
  const columnNumber = getColumnNumber_(sheet, header);
  return sheet.getRange(rowNumber, columnNumber).getValue();
}

function setCellValue_(sheet, rowNumber, header, value) {
  const columnNumber = getColumnNumber_(sheet, header);
  sheet.getRange(rowNumber, columnNumber).setValue(value);
}

function getColumnNumber_(sheet, header) {
  const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
  const index = headers.indexOf(header);

  if (index === -1) {
    throw new Error("Missing sheet column: " + header);
  }

  return index + 1;
}

function requireAdmin_(adminKey) {
  if (!isAdminKey_(adminKey)) {
    throw new Error("Admin key is required.");
  }
}

function isAdminKey_(adminKey) {
  const savedAdminKey = PropertiesService.getScriptProperties().getProperty("ADMIN_KEY") || "";
  return Boolean(savedAdminKey) && String(adminKey || "") === savedAdminKey;
}

function now_() {
  return Utilities.formatDate(new Date(), SCRIPT_TIMEZONE, "yyyy-MM-dd HH:mm:ss");
}

function response_(payload, callback) {
  if (callback) {
    return ContentService
      .createTextOutput(String(callback) + "(" + JSON.stringify(payload) + ");")
      .setMimeType(ContentService.MimeType.JAVASCRIPT);
  }

  return ContentService
    .createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}

function safeCallback_(callback) {
  const value = String(callback || "").trim();
  return /^[A-Za-z_$][0-9A-Za-z_$]*$/.test(value) ? value : "";
}
