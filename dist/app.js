const defaultGifts = [
  {
    id: "hand-thrown-dinnerware-set",
    name: "Hand-thrown dinnerware set",
    category: "Kitchen",
    price: 19999,
    description: "A twenty one-piece luxe ceramic dinner set for slow Sunday lunches and festival dinners.",
    link: "https://www.fabindia.com/ceramic-decaled-luxe-dinner-set-20184880",
    reservedBy: "",
    message: "",
  },
  {
    id: "linen-bedding-bundle",
    name: "Linen bedding bundle",
    category: "Home",
    price: 6999,
    description: "Soft sheets and pillow covers for the couple's first home together.",
    link: "https://www.homecentre.in/in/en/Homeware/Furnishing/Bedding/HOMECENTRE-Chime-Doeskin-Cotton-4Pcs-Printed-Double-Bed-In-A-Bag-Set/p/1000014093014",
    reservedBy: "",
    message: "",
  },
  {
    id: "weekend-spa-retreat",
    name: "Weekend spa retreat",
    category: "Experiences",
    price: 28332,
    description: "A quiet post-wedding reset with massages, breakfast, and late checkout.",
    link: "https://www.roseatehotels.com/newdelhi/theroseate/aheli-spa/",
    reservedBy: "",
    message: "",
  },
  {
    id: "brass-floor-lamp",
    name: "Brass floor lamp",
    category: "Decor",
    price: 9800,
    description: "Warm evening light for reading, hosting, and settling into the new place.",
    link: "https://www.homecentre.in/in/en/Decor/Lighting/Floor-Lamps/HOMECENTRE-Melody-Div-Metal-Floor-Lamp/p/1000015317595",
    reservedBy: "",
    message: "",
  },
  {
    id: "stand-mixer",
    name: "Stand mixer",
    category: "Kitchen",
    price: 6999,
    description: "So that they can make you birthday cakes, late-night cookies, and ambitious weekend baking.",
    link: "amazon.in/Durability-Accessories-Dishwasher-Kneading-Kratos-Plus/dp/B0CX4T932R/ref=sr_1_2_sspa?adgrpid=58128411119&dib=eyJ2IjoiMSJ9.guKHDBDzmFC-7rFrWQr7AqRSUp3je-YC3cz1thBrcQuS6ewxOhGSOOMn8AuopbV0950yQpl3rQlERqj8TYyOwChjC3sj1EbIAMwl8SUWmY7UUzv9gbajqAV7r_DXAkvzZwhbvSKSvtDpwaTcNWpgoAsLSeYzaaU83yc02By-AddKvNcJjXiYWw_RZ6eT1FsoiY9iobE5d4cG-IUNMUsUosj03OawS87I_riZEWhKG44.l2v8gSCuELcdMcwo-fA_YvHYNj5MfvqSID5BQN2eOOQ&dib_tag=se&gad_source=1&hvadid=763390296434&hvdev=c&hvexpln=0&hvlocphy=1007765&hvnetw=g&hvocijid=3332950976916943811--&hvqmt=e&hvrand=3332950976916943811&hvtargid=kwd-24293601&hydadcr=10076_2260884&keywords=stand+mixer&mcid=143bc40c3a143b74b0cb321740a4127b&qid=1780655263&sr=8-2-spons&aref=L5g1IgT8SO&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1",
    reservedBy: "",
    message: "",
  },
  {
    id: "dishwasher",
    name: "Dishwasher",
    category: "Home",
    price: 42990,
    description: "So that the couple saves time.",
    link: "https://www.amazon.in/Setting-Dishwasher-Intensive-Program-Pre-Rinse/dp/B07JW77MVJ/ref=sr_1_4?crid=P7ECHD6C035V&dib=eyJ2IjoiMSJ9.kwk3FnNlSg4w3jtvxq5yTePRhw581eTPCrJqKGB1T_WNB9DGWfNA7riGTk5A1KlwjX1_--KFQpwd2l7ddmaPSfdMEyIMlqXhh57P1WrBASwt7t9QTtRDPHN_unXrpvAmptENhCMgblGtI8Pva39Bbn2QaZqwzOHB1lxfMG4QeibqnRiockW-WAvI9kBT2ejtiB13OSOCx3x19eHBs3oPitPxSJFtoaLhfxovzWiM43Y.icxT94YEeNtWERfJGfQUZTPNLS7XsnD7WNyd3Nm9Xsw&dib_tag=se&keywords=dish+washer+for+home&qid=1780655341&sprefix=dish+%2Caps%2C326&sr=8-4",
    reservedBy: "",
    message: "",
  },
  {
    id: "coffee-machine",
    name: "Coffee Machine",
    category: "Kitchen",
    price: 19999,
    description: "A coffee maker for the coffee lovers.",
    link: "https://www.amazon.in/DeLonghi-Dedica-Compact-Espresso-machine/dp/B0F3S1JJ4T?ref_=ast_sto_dp&th=1",
    reservedBy: "",
    message: "",
  },
  {
    id: "coffee-mug-set",
    name: "Coffee Mug set",
    category: "Kitchen",
    price: 19999,
    description: "A handsome set for morning coffee and slow evening chai.",
    link: "https://www.homecentre.in/in/en/Tableware/Crockery/Tea-and-Coffee-Sets/HOMECENTRE-Caraway-Somber-Set-of-6-Stoneware-Cups-and-Saucers-with-Metal-Stand--220ml/p/1000015640049",
    reservedBy: "",
    message: "",
  },
  {
    id: "walking-pad",
    name: "Walking pad",
    category: "Home",
    price: 29999,
    description: "So that the couple can stay fit.",
    link: "https://www.amazon.in/Flexnest-Flexpad-Foldable-Treadmill-Bluetooth/dp/B0F6VB8Y26/ref=sr_1_2_sspa?crid=36M9ME7WR48JQ&dib=eyJ2IjoiMSJ9.ULbrOQ3WKQ__mw8Wr2-OOBO4iv_qJQ4pItgZ8YBB9-olPeKrBWrwPkvbrZuoqeCQqVbAab0KOeUWsXH_AJTj14Z4EhbcP_SDHJ8BCSacEAeIGr4qf2V1lFbRHflgABwvE6a5Cd0CnFIuFeMcRADiBDHWbaL_RKGlHj7B7VGTmSS9pAKlTj5O7c1AtMVKRVPvtvY3tmHwMOD67WjaHPVuuvLqEBv1bcp1ISqbE4g8ckw.AOXclQerCWM3W8U-uMnMqxblJhbPQMMZwbXkzAn7ZlM&dib_tag=se&keywords=walking+pad+with+incline&qid=1780682519&sprefix=walking+pad%2Caps%2C267&sr=8-2-spons&aref=yTOGaGSY3T&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1",
    reservedBy: "",
    message: "",
  },
];

const appConfig = {
  apiUrl: String(globalThis.WEDDING_REGISTRY_API_URL || "").trim(),
  adminKey: String(globalThis.WEDDING_REGISTRY_ADMIN_KEY || "").trim(),
  transport: String(globalThis.WEDDING_REGISTRY_API_TRANSPORT || "jsonp").trim().toLowerCase(),
};

const storageKey = "wedding-gift-registry";
const releaseCodeKey = "wedding-gift-release-codes";
const defaultCategories = ["Home", "Kitchen", "Experiences", "Decor"];
const maxReservationsPerGift = 5;
const currencyFormatter = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
});

let gifts = normalizeGifts(loadLocalGifts());
let releaseCodes = loadReleaseCodes();
let activeCategory = "All";
let activeStatusFilter = "available";
let activeGiftId = "";
let isSyncing = false;
let sharedStorageReady = !appConfig.apiUrl;

const giftGrid = document.querySelector("#giftGrid");
const emptyState = document.querySelector("#emptyState");
const searchInput = document.querySelector("#searchInput");
const categoryTabs = document.querySelector("#categoryTabs");
const categoryOptions = document.querySelector("#giftCategoryOptions");
const registrySummary = document.querySelector(".registry-summary");
const reserveDialog = document.querySelector("#reserveDialog");
const reserveForm = document.querySelector("#reserveForm");
const giftForm = document.querySelector("#giftForm");
const refreshButton = document.querySelector("#refreshButton");
const syncStatus = document.querySelector("#syncStatus");

function loadLocalGifts() {
  const saved = localStorage.getItem(storageKey);

  if (!saved) {
    return defaultGifts;
  }

  try {
    const parsed = JSON.parse(saved);
    return Array.isArray(parsed) ? parsed : defaultGifts;
  } catch {
    return defaultGifts;
  }
}

function saveLocalGifts() {
  localStorage.setItem(storageKey, JSON.stringify(gifts));
}

function loadReleaseCodes() {
  const saved = localStorage.getItem(releaseCodeKey);

  if (!saved) {
    return {};
  }

  try {
    const parsed = JSON.parse(saved);
    return parsed && typeof parsed === "object" && !Array.isArray(parsed) ? parsed : {};
  } catch {
    return {};
  }
}

function saveReleaseCodes() {
  localStorage.setItem(releaseCodeKey, JSON.stringify(releaseCodes));
}

async function loadSharedGifts() {
  if (!appConfig.apiUrl) {
    sharedStorageReady = true;
    setSyncStatus("Local preview mode", "info");
    render();
    return;
  }

  await runWithSyncStatus("Loading shared registry...", "Google storage needs public access. Changes are not saved yet.", async () => {
    const result = await callRegistryApi("list");
    applyServerResult(result);
    sharedStorageReady = true;
    setSyncStatus("Shared registry connected", "ok");
  });
}

async function callRegistryApi(action, payload = {}) {
  if (appConfig.transport === "fetch") {
    return callRegistryApiWithFetch(action, payload);
  }

  return callRegistryApiWithJsonp(action, payload);
}

async function callRegistryApiWithFetch(action, payload = {}) {
  const response = await fetch(appConfig.apiUrl, {
    method: "POST",
    body: JSON.stringify({ action, payload }),
  });

  if (!response.ok) {
    throw new Error(`Registry request failed with status ${response.status}`);
  }

  const result = await response.json();

  if (!result.ok) {
    throw new Error(result.error || "Registry request failed");
  }

  return result;
}

function callRegistryApiWithJsonp(action, payload = {}) {
  return new Promise((resolve, reject) => {
    const callbackName = `registryCallback_${Date.now()}_${Math.random().toString(16).slice(2)}`;
    const script = document.createElement("script");
    const timeoutId = window.setTimeout(() => {
      cleanup();
      reject(new Error("Registry request timed out."));
    }, 15000);

    function cleanup() {
      window.clearTimeout(timeoutId);
      script.remove();
      delete window[callbackName];
    }

    window[callbackName] = (result) => {
      cleanup();

      if (!result.ok) {
        reject(new Error(result.error || "Registry request failed"));
        return;
      }

      resolve(result);
    };

    const url = new URL(appConfig.apiUrl);
    url.searchParams.set("action", action);
    url.searchParams.set("payload", JSON.stringify(payload));
    url.searchParams.set("callback", callbackName);
    script.src = url.href;
    script.onerror = () => {
      cleanup();
      reject(new Error("Registry request failed."));
    };
    document.body.append(script);
  });
}

function applyServerResult(result) {
  if (Array.isArray(result.gifts)) {
    gifts = normalizeGifts(result.gifts);
    saveLocalGifts();
  }

  if (result.releaseCode && result.giftId) {
    releaseCodes[result.giftId] = result.releaseCode;
    saveReleaseCodes();
  }
}

async function runWithSyncStatus(label, failureMessage, operation) {
  isSyncing = true;
  setSyncStatus(label, "info");
  render();

  try {
    await operation();
  } catch (error) {
    console.error(error);
    if (appConfig.apiUrl) {
      sharedStorageReady = false;
      setSyncStatus(failureMessage || "Shared storage unavailable; showing saved copy", "error");
    } else {
      setSyncStatus("Local preview mode", "info");
    }
  } finally {
    isSyncing = false;
    render();
  }
}

function render() {
  if (!getCategories().includes(activeCategory)) {
    activeCategory = "All";
  }

  const query = searchInput.value.trim().toLowerCase();
  const visibleGifts = gifts.filter((gift) => {
    const matchesCategory = activeCategory === "All" || gift.category === activeCategory;
    const matchesStatus = getStatusMatchesFilter(gift);
    const searchable = `${gift.name} ${gift.category} ${gift.description}`.toLowerCase();
    return matchesCategory && matchesStatus && searchable.includes(query);
  });

  renderCategoryTabs();
  renderCategoryOptions();
  giftGrid.innerHTML = visibleGifts.map(createGiftCard).join("");
  emptyState.hidden = visibleGifts.length > 0;
  updateSummary();
  updateFormState();
}

function createGiftCard(gift) {
  const reservations = getReservations(gift);
  const reservationCount = reservations.length;
  const hasReservations = reservationCount > 0;
  const canRelease = reservationCount > 0 && Boolean(releaseCodes[gift.id] || appConfig.adminKey);
  const normalizedLink = normalizeUrl(gift.link);
  const storeInfo = normalizedLink
    ? `<a class="gift-link" href="${escapeHtml(normalizedLink)}" target="_blank" rel="noreferrer">View gift</a>`
    : gift.link
      ? `<span class="store-label">${escapeHtml(shortStoreLabel(gift.link))}</span>`
      : "";
  const reservation = hasReservations
    ? `
      <div class="reservation-box">
        <p class="reserved-note">Reserved by ${escapeHtml(formatReservationNames(reservations))}</p>
        <div class="reservation-meter" aria-label="${reservationCount} of ${maxReservationsPerGift} reservation spots filled">
          ${Array.from({ length: maxReservationsPerGift }, (_, index) => `<span class="${index < reservationCount ? "filled" : ""}"></span>`).join("")}
        </div>
      </div>
    `
    : "";
  const button = getGiftButton(gift, reservationCount, canRelease);

  return `
    <article class="gift-card ${hasReservations ? "reserved" : ""}">
      <div class="gift-top">
        <span class="gift-category">${escapeHtml(gift.category)}</span>
        <span class="gift-price">${currencyFormatter.format(gift.price)}</span>
      </div>
      <h3>${escapeHtml(gift.name)}</h3>
      <p>${escapeHtml(gift.description || "A thoughtful gift for the couple.")}</p>
      <p class="gift-capacity">${reservationCount} of ${maxReservationsPerGift} spots reserved</p>
      ${reservation}
      <div class="gift-actions">
        ${button}
        ${storeInfo}
      </div>
    </article>
  `;
}

function getGiftButton(gift, reservationCount, canRelease) {
  const isFull = reservationCount >= maxReservationsPerGift;

  if (canRelease) {
    const label = appConfig.adminKey ? "Clear Reservations" : "Release My Spot";
    return `<button class="secondary-button" data-action="release" data-id="${escapeHtml(gift.id)}" type="button">${label}</button>`;
  }

  if (isFull) {
    return `<button class="secondary-button" type="button" disabled>Fully Reserved</button>`;
  }

  const label = reservationCount > 0 ? "Join Gift" : "Reserve Gift";
  return `<button class="primary-button" data-action="reserve" data-id="${escapeHtml(gift.id)}" type="button">${label}</button>`;
}

function updateSummary() {
  const reserved = gifts.filter((gift) => getReservations(gift).length > 0).length;
  const available = gifts.filter((gift) => getReservations(gift).length < maxReservationsPerGift).length;

  document.querySelector("#availableCount").textContent = available;
  document.querySelector("#reservedCount").textContent = reserved;
  document.querySelector("#totalGiftCount").textContent = gifts.length;

  document.querySelectorAll(".summary-tile").forEach((tile) => {
    tile.classList.toggle("active", tile.dataset.statusFilter === activeStatusFilter);
  });
}

function updateFormState() {
  const controls = document.querySelectorAll("button, input, select, textarea");
  controls.forEach((control) => {
    if (control.id === "refreshButton") {
      control.disabled = isSyncing;
      return;
    }

    control.disabled = isSyncing;
  });
}

function setSyncStatus(message, state = "info") {
  syncStatus.textContent = message;
  syncStatus.dataset.state = state;
}

function openReserveDialog(giftId) {
  const gift = gifts.find((item) => item.id === giftId);

  if (!gift || getReservations(gift).length >= maxReservationsPerGift || releaseCodes[gift.id]) {
    return;
  }

  activeGiftId = giftId;
  const reservationCount = getReservations(gift).length;
  document.querySelector("#dialogGiftName").textContent = gift.name;
  document.querySelector("#dialogGiftDescription").textContent = gift.description;
  document.querySelector("#dialogGiftCapacity").textContent =
    `${reservationCount} of ${maxReservationsPerGift} reservation spots are already taken.`;
  document.querySelector("#guestName").value = "";
  document.querySelector("#guestMessage").value = "";
  document.querySelector("#confirmReserveButton").textContent = reservationCount > 0 ? "Join Gift" : "Reserve Gift";
  reserveDialog.showModal();
}

async function reserveGift(event) {
  event.preventDefault();

  if (!activeGiftId) {
    reserveDialog.close();
    return;
  }

  const guestName = document.querySelector("#guestName").value.trim();
  const guestMessage = document.querySelector("#guestMessage").value.trim();

  if (!guestName) {
    return;
  }

  const payload = { id: activeGiftId, guestName, message: guestMessage };
  reserveDialog.close();

  await saveGiftChange("reserve", payload, () => {
    const releaseCode = createId();
    gifts = gifts.map((gift) =>
      gift.id === activeGiftId
        ? addReservationToGift(gift, { name: guestName, message: guestMessage, releaseCode })
        : gift
    );
    releaseCodes[activeGiftId] = releaseCode;
    saveReleaseCodes();
  });

  activeGiftId = "";
}

async function releaseGift(giftId) {
  await saveGiftChange(
    "release",
    {
      id: giftId,
      releaseCode: releaseCodes[giftId] || "",
      adminKey: appConfig.adminKey,
    },
    () => {
      gifts = gifts.map((gift) =>
        gift.id === giftId ? removeReservationFromGift(gift, releaseCodes[giftId] || "", Boolean(appConfig.adminKey)) : gift
      );
      delete releaseCodes[giftId];
      saveReleaseCodes();
    }
  );
}

async function addGift(event) {
  event.preventDefault();

  const newGift = normalizeGift({
    id: createId(),
    name: document.querySelector("#giftName").value.trim(),
    category: document.querySelector("#giftCategory").value,
    price: Number(document.querySelector("#giftPrice").value),
    link: cleanGiftLink(document.querySelector("#giftLink").value),
    description: document.querySelector("#giftDescription").value.trim(),
    reservedBy: "",
    message: "",
    reservations: [],
  });

  if (!newGift.name || !newGift.price) {
    return;
  }

  await saveGiftChange("add", newGift, () => {
    gifts = [newGift, ...gifts];
  });

  giftForm.reset();
  setActiveCategory(newGift.category);
  setActiveStatusFilter("all");
  searchInput.value = "";
}

async function refreshRegistry() {
  await loadSharedGifts();
}

async function saveGiftChange(action, payload, applyLocalChange) {
  if (appConfig.apiUrl && !sharedStorageReady) {
    setSyncStatus("Cannot save yet: Google storage is not public.", "error");
    render();
    return;
  }

  await runWithSyncStatus("Saving registry...", "Could not save. Check Google Apps Script access.", async () => {
    if (appConfig.apiUrl) {
      const result = await callRegistryApi(action, payload);
      applyServerResult(result);
      sharedStorageReady = true;
      setSyncStatus("Shared registry updated", "ok");
      return;
    }

    applyLocalChange();
    gifts = normalizeGifts(gifts);
    saveLocalGifts();
    setSyncStatus("Saved in this browser", "ok");
  });
}

function setActiveCategory(category) {
  activeCategory = getCategories().includes(category) ? category : "All";
  renderCategoryTabs();
}

function setActiveStatusFilter(statusFilter) {
  activeStatusFilter = ["available", "reserved", "all"].includes(statusFilter) ? statusFilter : "available";
}

function renderCategoryTabs() {
  const categories = getCategories();

  if (!categories.includes(activeCategory)) {
    activeCategory = "All";
  }

  categoryTabs.innerHTML = categories
    .map(
      (category) => `
        <button class="${category === activeCategory ? "active" : ""}" data-category="${escapeHtml(category)}" type="button">
          ${escapeHtml(category)}
        </button>
      `
    )
    .join("");
}

function renderCategoryOptions() {
  categoryOptions.innerHTML = getCategories()
    .filter((category) => category !== "All")
    .map((category) => `<option value="${escapeHtml(category)}"></option>`)
    .join("");
}

function getCategories() {
  const categorySet = new Set(["All", ...defaultCategories]);

  gifts.forEach((gift) => {
    if (gift.category) {
      categorySet.add(gift.category);
    }
  });

  return Array.from(categorySet);
}

function getStatusMatchesFilter(gift) {
  const reservationCount = getReservations(gift).length;

  if (activeStatusFilter === "available") {
    return reservationCount < maxReservationsPerGift;
  }

  if (activeStatusFilter === "reserved") {
    return reservationCount > 0;
  }

  return true;
}

function getReservations(gift) {
  if (Array.isArray(gift.reservations)) {
    return gift.reservations.map(normalizeReservation).filter((reservation) => reservation.name);
  }

  const reservedBy = String(gift.reservedBy || "").trim();

  if (!reservedBy) {
    return [];
  }

  return [
    normalizeReservation({
      name: reservedBy,
      message: gift.message,
      releaseCode: gift.releaseCode,
    }),
  ];
}

function normalizeReservation(reservation) {
  return {
    name: String(reservation?.name || reservation?.reservedBy || "").trim(),
    message: String(reservation?.message || "").trim(),
    releaseCode: String(reservation?.releaseCode || "").trim(),
    createdAt: String(reservation?.createdAt || "").trim(),
  };
}

function addReservationToGift(gift, reservation) {
  const reservations = [...getReservations(gift), normalizeReservation(reservation)].slice(0, maxReservationsPerGift);
  return withReservationSummary({ ...gift, reservations });
}

function removeReservationFromGift(gift, releaseCode, clearAll = false) {
  const reservations = clearAll
    ? []
    : getReservations(gift).filter((reservation) => reservation.releaseCode !== releaseCode);
  return withReservationSummary({ ...gift, reservations });
}

function withReservationSummary(gift) {
  const reservations = getReservations(gift);
  const messages = reservations.map((reservation) => reservation.message).filter(Boolean);

  return {
    ...gift,
    reservations,
    reservedBy: reservations.map((reservation) => reservation.name).join(", "),
    message: messages.join(" | "),
    releaseCode: "",
  };
}

function formatReservationNames(reservations) {
  if (reservations.length <= 3) {
    return reservations.map((reservation) => reservation.name).join(", ");
  }

  return `${reservations.slice(0, 3).map((reservation) => reservation.name).join(", ")} and ${reservations.length - 3} more`;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function createId() {
  if (globalThis.crypto?.randomUUID) {
    return globalThis.crypto.randomUUID();
  }

  return `gift-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function normalizeGifts(items) {
  return items.map(normalizeGift);
}

function normalizeGift(gift) {
  return withReservationSummary({
    id: String(gift.id || createId()),
    name: String(gift.name || "").trim(),
    category: String(gift.category || "Home").trim(),
    price: Number(gift.price || 0),
    description: String(gift.description || "").trim(),
    link: cleanGiftLink(gift.link),
    reservedBy: String(gift.reservedBy || "").trim(),
    message: String(gift.message || "").trim(),
    releaseCode: String(gift.releaseCode || "").trim(),
    reservations: Array.isArray(gift.reservations) ? gift.reservations : undefined,
  });
}

function cleanGiftLink(value) {
  const trimmed = String(value || "").trim();
  return normalizeUrl(trimmed) || trimmed;
}

function normalizeUrl(value) {
  const trimmed = String(value || "").trim();

  if (!trimmed) {
    return "";
  }

  const withProtocol = /^[a-z][a-z0-9+.-]*:/i.test(trimmed) ? trimmed : `https://${trimmed}`;

  try {
    const url = new URL(withProtocol);

    if (!url.hostname.includes(".")) {
      return "";
    }

    return url.href;
  } catch {
    return "";
  }
}

function shortStoreLabel(value) {
  const trimmed = String(value || "").trim();

  if (trimmed.length <= 34) {
    return trimmed;
  }

  return `${trimmed.slice(0, 31)}...`;
}

searchInput.addEventListener("input", render);

categoryTabs.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-category]");

  if (button) {
    setActiveCategory(button.dataset.category);
    render();
  }
});

registrySummary.addEventListener("click", (event) => {
  const tile = event.target.closest("[data-status-filter]");

  if (tile) {
    setActiveStatusFilter(tile.dataset.statusFilter);
    render();
  }
});

giftGrid.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-action]");

  if (!button) {
    return;
  }

  if (button.dataset.action === "reserve") {
    openReserveDialog(button.dataset.id);
  }

  if (button.dataset.action === "release") {
    releaseGift(button.dataset.id);
  }
});

reserveForm.addEventListener("submit", reserveGift);

reserveForm.addEventListener("click", (event) => {
  if (event.target.closest("[data-action='close-reserve']")) {
    reserveDialog.close();
  }
});

giftForm.addEventListener("submit", addGift);
refreshButton.addEventListener("click", refreshRegistry);

window.addEventListener("pageshow", (event) => {
  if (event.persisted) {
    refreshRegistry();
  }
});

render();
loadSharedGifts();
