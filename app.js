const defaultGifts = [
  {
    id: createId(),
    name: "Hand-thrown dinnerware set",
    category: "Kitchen",
    price: 19999,
    description: "A twenty one-piece luxe ceramic dinner set for slow Sunday lunches and festival dinners.",
    link: "https://www.fabindia.com/ceramic-decaled-luxe-dinner-set-20184880",
    reservedBy: "",
    message: "",
  },
  {
    id: createId(),
    name: "Linen bedding bundle",
    category: "Home",
    price: 6999,
    description: "Soft sheets and pillow covers for the couple's first home together.",
    link: "https://www.homecentre.in/in/en/Homeware/Furnishing/Bedding/HOMECENTRE-Chime-Doeskin-Cotton-4Pcs-Printed-Double-Bed-In-A-Bag-Set/p/1000014093014",
    reservedBy: "",
    message: "",
  },
  {
    id: createId(),
    name: "Weekend spa retreat",
    category: "Experiences",
    price: 28332,
    description: "A quiet post-wedding reset with massages, breakfast, and late checkout.",
    link: "https://www.roseatehotels.com/newdelhi/theroseate/aheli-spa/",
    reservedBy: "",
    message: "",
  },
  {
    id: createId(),
    name: "Brass floor lamp",
    category: "Decor",
    price: 9800,
    description: "Warm evening light for reading, hosting, and settling into the new place.",
    link: "https://www.homecentre.in/in/en/Decor/Lighting/Floor-Lamps/HOMECENTRE-Melody-Div-Metal-Floor-Lamp/p/1000015317595",
    reservedBy: "",
    message: "",
  },
  {
    id: createId(),
    name: "Stand mixer",
    category: "Kitchen",
    price: 6999,
    description: "So that they can make you birthday cakes, late-night cookies, and ambitious weekend baking.",
    link: "amazon.in/Durability-Accessories-Dishwasher-Kneading-Kratos-Plus/dp/B0CX4T932R/ref=sr_1_2_sspa?adgrpid=58128411119&dib=eyJ2IjoiMSJ9.guKHDBDzmFC-7rFrWQr7AqRSUp3je-YC3cz1thBrcQuS6ewxOhGSOOMn8AuopbV0950yQpl3rQlERqj8TYyOwChjC3sj1EbIAMwl8SUWmY7UUzv9gbajqAV7r_DXAkvzZwhbvSKSvtDpwaTcNWpgoAsLSeYzaaU83yc02By-AddKvNcJjXiYWw_RZ6eT1FsoiY9iobE5d4cG-IUNMUsUosj03OawS87I_riZEWhKG44.l2v8gSCuELcdMcwo-fA_YvHYNj5MfvqSID5BQN2eOOQ&dib_tag=se&gad_source=1&hvadid=763390296434&hvdev=c&hvexpln=0&hvlocphy=1007765&hvnetw=g&hvocijid=3332950976916943811--&hvqmt=e&hvrand=3332950976916943811&hvtargid=kwd-24293601&hydadcr=10076_2260884&keywords=stand+mixer&mcid=143bc40c3a143b74b0cb321740a4127b&qid=1780655263&sr=8-2-spons&aref=L5g1IgT8SO&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1",
    reservedBy: "",
    message: "",
  },
  {
    id: createId(),
    name: "Dishwasher",
    category: "Home",
    price: 42990,
    description: "So that the couple saves time",
    link: "https://www.amazon.in/Setting-Dishwasher-Intensive-Program-Pre-Rinse/dp/B07JW77MVJ/ref=sr_1_4?crid=P7ECHD6C035V&dib=eyJ2IjoiMSJ9.kwk3FnNlSg4w3jtvxq5yTePRhw581eTPCrJqKGB1T_WNB9DGWfNA7riGTk5A1KlwjX1_--KFQpwd2l7ddmaPSfdMEyIMlqXhh57P1WrBASwt7t9QTtRDPHN_unXrpvAmptENhCMgblGtI8Pva39Bbn2QaZqwzOHB1lxfMG4QeibqnRiockW-WAvI9kBT2ejtiB13OSOCx3x19eHBs3oPitPxSJFtoaLhfxovzWiM43Y.icxT94YEeNtWERfJGfQUZTPNLS7XsnD7WNyd3Nm9Xsw&dib_tag=se&keywords=dish+washer+for+home&qid=1780655341&sprefix=dish+%2Caps%2C326&sr=8-4",
    reservedBy: "",
    message: "",
  },
  {
    id: createId(),
    name: "Coffee Machine",
    category: "Kitchen",
    price: 19999,
    description: "A coffee maker for the coffee lovers",
    link: "https://www.amazon.in/DeLonghi-Dedica-Compact-Espresso-machine/dp/B0F3S1JJ4T?ref_=ast_sto_dp&th=1",
    reservedBy: "",
    message: "",
  },
  {
    id: createId(),
    name: "Coffee Mug set",
    category: "Kitchen",
    price: 19999,
    description: "A coffee maker for the coffee lovers",
    link: "https://www.homecentre.in/in/en/Tableware/Crockery/Tea-and-Coffee-Sets/HOMECENTRE-Caraway-Somber-Set-of-6-Stoneware-Cups-and-Saucers-with-Metal-Stand--220ml/p/1000015640049",
    reservedBy: "",
    message: "",
  },
  {
    id: createId(),
    name: "Walking pad",
    category: "Home",
    price: 29999,
    description: "So that the couple can stay fit",
    link: "https://www.amazon.in/Flexnest-Flexpad-Foldable-Treadmill-Bluetooth/dp/B0F6VB8Y26/ref=sr_1_2_sspa?crid=36M9ME7WR48JQ&dib=eyJ2IjoiMSJ9.ULbrOQ3WKQ__mw8Wr2-OOBO4iv_qJQ4pItgZ8YBB9-olPeKrBWrwPkvbrZuoqeCQqVbAab0KOeUWsXH_AJTj14Z4EhbcP_SDHJ8BCSacEAeIGr4qf2V1lFbRHflgABwvE6a5Cd0CnFIuFeMcRADiBDHWbaL_RKGlHj7B7VGTmSS9pAKlTj5O7c1AtMVKRVPvtvY3tmHwMOD67WjaHPVuuvLqEBv1bcp1ISqbE4g8ckw.AOXclQerCWM3W8U-uMnMqxblJhbPQMMZwbXkzAn7ZlM&dib_tag=se&keywords=walking+pad+with+incline&qid=1780682519&sprefix=walking+pad%2Caps%2C267&sr=8-2-spons&aref=yTOGaGSY3T&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1",
    reservedBy: "",
    message: "",
  }
  
];

const storageKey = "wedding-gift-registry";
const currencyFormatter = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
});

let gifts = loadGifts();
let activeCategory = "All";
let activeGiftId = "";

const giftGrid = document.querySelector("#giftGrid");
const emptyState = document.querySelector("#emptyState");
const searchInput = document.querySelector("#searchInput");
const categoryTabs = document.querySelectorAll(".category-tabs button");
const reserveDialog = document.querySelector("#reserveDialog");
const reserveForm = document.querySelector("#reserveForm");
const giftForm = document.querySelector("#giftForm");

function loadGifts() {
  const saved = localStorage.getItem(storageKey);

  if (!saved) {
    return normalizeGifts(defaultGifts);
  }

  try {
    const parsed = JSON.parse(saved);
    return Array.isArray(parsed) ? normalizeGifts(parsed) : normalizeGifts(defaultGifts);
  } catch {
    return normalizeGifts(defaultGifts);
  }
}

function saveGifts() {
  localStorage.setItem(storageKey, JSON.stringify(gifts));
}

const API_URL = "https://script.google.com/macros/s/AKfycbx2-9EliCfZmTZGwgF8KL6D3eaYILfeJH-xakXGsGUNqtbE9EMElDMlIpahcX4HbN4N/exec";

async function fetchGifts() {
  const response = await fetch(API_URL);
  gifts = await response.json();
  render();
}

async function updateGift(gift) {
  await fetch(API_URL, {
    method: "POST",
    body: JSON.stringify(gift),
  });
}

function render() {
  const query = searchInput.value.trim().toLowerCase();
  const visibleGifts = gifts.filter((gift) => {
    const matchesCategory = activeCategory === "All" || gift.category === activeCategory;
    const searchable = `${gift.name} ${gift.category} ${gift.description}`.toLowerCase();
    return matchesCategory && searchable.includes(query);
  });

  giftGrid.innerHTML = visibleGifts.map(createGiftCard).join("");
  emptyState.hidden = visibleGifts.length > 0;
  updateSummary();
}

function createGiftCard(gift) {
  const isReserved = Boolean(gift.reservedBy);
  const reserveLabel = isReserved ? "Reserved" : "Reserve Gift";
  const normalizedLink = normalizeUrl(gift.link);
  const storeInfo = normalizedLink
    ? `<a class="gift-link" href="${escapeHtml(normalizedLink)}" target="_blank">View gift</a>`
    : gift.link
    ? `<span class="store-label">${escapeHtml(shortStoreLabel(gift.link))}</span>`
    : "";
  const reservation = isReserved
    ? `<p class="reserved-note">Reserved by ${escapeHtml(gift.reservedBy)}</p>`
    : "";
  const button = isReserved
    ? `<button class="secondary-button" data-action="release" data-id="${gift.id}" type="button">Make Available</button>`
    : `<button class="primary-button" data-action="reserve" data-id="${gift.id}" type="button">${reserveLabel}</button>`;

  return `
    <article class="gift-card ${isReserved ? "reserved" : ""}">
      <div class="gift-top">
        <span class="gift-category">${escapeHtml(gift.category)}</span>
        <span class="gift-price">${currencyFormatter.format(gift.price)}</span>
      </div>
      <h3>${escapeHtml(gift.name)}</h3>
      <p>${escapeHtml(gift.description || "A thoughtful gift for the couple.")}</p>
      ${reservation}
      <div class="gift-actions">
        ${button}
        ${storeInfo}
      </div>
    </article>
  `;
}

function updateSummary() {
  const reserved = gifts.filter((gift) => gift.reservedBy).length;
  const available = gifts.length - reserved;
  const totalValue = gifts.reduce((sum, gift) => sum + Number(gift.price || 0), 0);

  document.querySelector("#availableCount").textContent = available;
  document.querySelector("#reservedCount").textContent = reserved;
  document.querySelector("#totalValue").textContent = currencyFormatter.format(totalValue);
}

function openReserveDialog(giftId) {
  const gift = gifts.find((item) => item.id === giftId);

  if (!gift) {
    return;
  }

  activeGiftId = giftId;
  document.querySelector("#dialogGiftName").textContent = gift.name;
  document.querySelector("#dialogGiftDescription").textContent = gift.description;
  document.querySelector("#guestName").value = "";
  document.querySelector("#guestMessage").value = "";
  reserveDialog.showModal();
}

function reserveGift(event) {
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

  gifts = gifts.map((gift) =>
    gift.id === activeGiftId ? { ...gift, reservedBy: guestName, message: guestMessage } : gift
  );
  saveGifts();
  render();
  reserveDialog.close();
}

function releaseGift(giftId) {
  gifts = gifts.map((gift) =>
    gift.id === giftId ? { ...gift, reservedBy: "", message: "" } : gift
  );
  saveGifts();
  render();
}

function addGift(event) {
  event.preventDefault();

  const newGift = {
    id: createId(),
    name: document.querySelector("#giftName").value.trim(),
    category: document.querySelector("#giftCategory").value,
    price: Number(document.querySelector("#giftPrice").value),
    link: cleanGiftLink(document.querySelector("#giftLink").value),
    description: document.querySelector("#giftDescription").value.trim(),
    reservedBy: "",
    message: "",
  };

  gifts = [newGift, ...gifts];
  saveGifts();
  giftForm.reset();
  activeCategory = "All";
  searchInput.value = "";
  categoryTabs.forEach((button) => {
    button.classList.toggle("active", button.dataset.category === "All");
  });
  render();
}

function resetDemo() {
  gifts = normalizeGifts(defaultGifts.map((gift) => ({ ...gift, id: createId() })));
  saveGifts();
  activeCategory = "All";
  searchInput.value = "";
  categoryTabs.forEach((button) => {
    button.classList.toggle("active", button.dataset.category === "All");
  });
  render();
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
  return items.map((gift) => ({ ...gift, link: cleanGiftLink(gift.link) }));
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

categoryTabs.forEach((button) => {
  button.addEventListener("click", () => {
    activeCategory = button.dataset.category;
    categoryTabs.forEach((tab) => tab.classList.toggle("active", tab === button));
    render();
  });
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
document.querySelector("#resetDemoButton").addEventListener("click", resetDemo);

render();
