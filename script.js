// --- LANGUAGE & STATIC DATA ---
// const footerText = {
//   en: "🛠️ Developed with ❤️ by ALBEK",
//   ar: " ALBEK ❤️ تمت البرمجة بواسطة 🛠️",
//   tr: "🛠️ ALBEK tarafından ❤️ geliştirildi",
// };
const footerText = {
  en: {
    totalVisitors: "Total Visitors",
    todayVisitors: "Today's Visitors",
    developedBy: "🛠️ Developed with ❤️ by <strong>ALBEK</strong>",
    copyright: "Copyright &copy; 2025",
  },
  ar: {
    totalVisitors: "إجمالي الزوار",
    todayVisitors: "زوار اليوم",
    developedBy: "ALBEK ❤️ تمت البرمجة بواسطة 🛠️",
    copyright: "الحقوق محفوظة &copy; 2025",
  },
  tr: {
    totalVisitors: "Toplam Ziyaretçi",
    todayVisitors: "Bugünkü Ziyaretçi",
    developedBy: "🛠️ ALBEK tarafından ❤️ geliştirildi",
    copyright: "Tüm hakları saklıdır &copy; 2025",
  },
};

const langText = {
  en: {
    dir: "ltr",
    tabs: [
      "Electricity Calculator",
      "Wire & Breaker Calculator",
      "Solar System Calculator",
    ],
    electricity: {
      title: "Electricity Consumption Calculator",
      inputTypeLabel: "Input Type:",
      inputTypeOptions: ["Watt (W)", "Kilowatt (kW)", "Ampere (A)"],
      valueLabel: "Value:",
      voltageLabel: "Voltage:",
      hoursLabel: "Hours per Day:",
      daysLabel: "Number of Days:",
      priceLabel: "Electricity Price (kWh):",
      results: (kWh, dailyCost, totalKWh, totalCost, days) =>
        `✅ <strong>Results:</strong>\n🔋 Daily Consumption: <strong>${kWh.toFixed(
          2
        )}</strong> kWh\n💵 Daily Cost:<strong> ${dailyCost.toFixed(
          2
        )}</strong> \n📦 Total Consumption (<strong>${days}</strong> days): <strong>${totalKWh.toFixed(
          2
        )}</strong> kWh\n💰 Total Cost: <strong>${totalCost.toFixed(
          2
        )}</strong>`,
    },
    wire: {
      title: "Wire Gauge & Breaker Calculator",
      inputTypeLabel: "Input Type",
      inputTypeOptions: ["Current (A)", "Power (W)", "Power (kW)"],
      valueLabel: "Value",
      voltageLabel: "Voltage (V)",
      lengthLabel: "Wire Length (meters)",
      materialLabel: "Material",
      materialOptions: ["Copper", "Aluminum"],
      dropLabel: "Allowed Voltage Drop (%)",
      resultsDefault: "⚙️ Results will appear here automatically",
      results: (power, current, area, voltageDrop, breaker) =>
        `🔌 Power: <strong>${power.toFixed(
          2
        )}</strong> W\n⚡ Current: <strong>${current.toFixed(
          2
        )}</strong> A\n📏 Required Wire Cross-Section: <strong>${area.toFixed(
          2
        )}</strong> mm²\n⚠️ Actual Voltage Drop: <strong>${voltageDrop.toFixed(
          2
        )}</strong> V\n🛡️ Suitable Breaker: <strong>${breaker}</strong> A`,
    },
    solar: {
      title: "☀️ Solar System Calculator",
      loadsTitle: "1. Select Your Loads",
      paramsTitle: "2. System Parameters",
      loadNames: {
        ac: "Air Conditioner",
        fridge: "Refrigerator",
        washer: "Washing Machine",
        fan: "Fan",
        dishwasher: "Dishwasher",
        lighting: "Lighting",
        oven: "Oven",
        router: "Router",
        other: "Other (Custom)",
      },
      powerUnitLabel: "Power Unit",
      powerUnitOptions: ["Kilowatt", "Ton", "BTU/hr", "Ampere"],
      acVoltageLabel: "Voltage (V)",
      batteryTypeLabel: "Battery Type:",
      batteryTypeOptions: ["Lead-Acid", "Lithium"],
      systemVoltageLabel: "System Voltage:",
      lossesLabel: "System Losses (%):",
      gridHoursLabel: "Daily Grid/Generator Charging Hours:",
      autonomyLabel: "Days of Autonomy (cloudy days):",
      sunHoursLabel: "Peak Sun Hours per Day:",
      quantityLabel: "Qty",
      powerLabel: "Power",
      hoursLabel: "Hours/Day",
      resultsDefault: "Select your loads to see the required system size.",
      gridNote: (hours) =>
        hours > 0
          ? `\n💡 **Note:** With **${hours}** hours of grid charging, consider setting **'Days of Autonomy' to 1 or less** to reduce battery costs.`
          : "",
      results: (
        totalWh,
        batteryAh,
        panelWatts,
        inverterKW,
        controllerA,
        gridNoteText,
        voltage,
        dod
      ) =>
        `📊 **Total Daily Consumption:** <strong>${totalWh.toFixed(
          0
        )}</strong> Wh/day\n\n` +
        `🔋 **Recommended Battery Bank (${voltage}V):**\n    - Size: <strong>${batteryAh.toFixed(
          0
        )} Ah</strong>\n    <small>(Based on ${
          dod * 100
        }% DoD & selected autonomy)</small>\n\n` +
        `☀️ **Required Solar Panel Array:**\n    - Size: <strong>${panelWatts.toFixed(
          0
        )} Watts</strong>\n    <small>(Based on selected peak sun hours with a 25% buffer)</small>\n\n` +
        `⚡ **Recommended Inverter:**\n    - Size: <strong>${inverterKW.toFixed(
          2
        )} kW</strong> (Pure Sine Wave)\n    <small>(Sized for total load with a 25% safety margin)</small>\n\n` +
        `🔌 **Recommended Charge Controller (MPPT):**\n    - Size: <strong>${controllerA.toFixed(
          0
        )} Amps</strong>\n    <small>(For a ${voltage}V system with a 25% safety margin)</small>${gridNoteText}`,
    },
  },
  ar: {
    dir: "rtl",
    tabs: [
      "حاسبة استهلاك الكهرباء",
      "حاسبة قطر السلك والقاطع",
      "حاسبة المنظومة الشمسية",
    ],
    electricity: {
      title: "حاسبة استهلاك الكهرباء",
      inputTypeLabel: "نوع الإدخال:",
      inputTypeOptions: ["واط (W)", "كيلوواط (kW)", "أمبير (A)"],
      valueLabel: "القيمة:",
      voltageLabel: "الجهد الكهربائي:",
      hoursLabel: "عدد ساعات التشغيل يوميًا:",
      daysLabel: "عدد الأيام:",
      priceLabel: "سعر الكهرباء (kWh):",
      results: (kWh, dailyCost, totalKWh, totalCost, days) =>
        `✅ <strong>النتائج:</strong>\n🔋 الاستهلاك اليومي: <strong>${kWh.toFixed(
          2
        )}</strong> kWh\n💵 التكلفة اليومية: <strong>${dailyCost.toFixed(
          2
        )}</strong> \n📦 إجمالي الاستهلاك (<strong>${days}</strong> يوم): <strong>${totalKWh.toFixed(
          2
        )}</strong> kWh\n💰 التكلفة الإجمالية: <strong>${totalCost.toFixed(
          2
        )}</strong>`,
    },
    wire: {
      title: "حساب قطر السلك والقاطع",
      inputTypeLabel: "نوع الإدخال",
      inputTypeOptions: ["تيار (A)", "استطاعة (W)", "استطاعة (kW)"],
      valueLabel: "القيمة",
      voltageLabel: "الجهد (V)",
      lengthLabel: "طول السلك (بالمتر)",
      materialLabel: "المادة",
      materialOptions: ["نحاس", "ألمنيوم"],
      dropLabel: "نسبة فقدان الجهد المسموح (%)",
      resultsDefault: "⚙️ النتائج ستظهر هنا تلقائيًا",
      results: (power, current, area, voltageDrop, breaker) =>
        `🔌 الاستطاعة: <strong>${power.toFixed(
          2
        )}</strong> واط\n⚡ التيار: <strong>${current.toFixed(
          2
        )}</strong> أمبير\n📏 مقطع السلك المطلوب: <strong>${area.toFixed(
          2
        )}</strong> مم²\n⚠️ الفقد الفعلي في الجهد: <strong>${voltageDrop.toFixed(
          2
        )}</strong> فولت\n🛡️ القاطع المناسب: <strong>${breaker}</strong> أمبير`,
    },
    solar: {
      title: "☀️ حاسبة المنظومة الشمسية",
      loadsTitle: "١. حدد الأحمال",
      paramsTitle: "٢. متغيرات المنظومة",
      loadNames: {
        ac: "مكيّف",
        fridge: "برّاد (ثلاجة)",
        washer: "غسالة",
        fan: "مروحة",
        dishwasher: "جلاية صحون",
        lighting: "إنارة",
        oven: "فرن كهربائي",
        router: "راوتر",
        other: "حمل آخر (مخصص)",
      },
      powerUnitLabel: "وحدة الاستطاعة",
      powerUnitOptions: ["كيلوواط", "طن", "BTU/hr", "أمبير"],
      acVoltageLabel: "الجهد (V)",
      batteryTypeLabel: "نوع البطارية:",
      batteryTypeOptions: ["عادية (رصاص-حمض)", "ليثيوم"],
      systemVoltageLabel: "فولتية المنظومة:",
      lossesLabel: "نسبة الضياعات في المنظومة (%):",
      gridHoursLabel: "ساعات الشحن من الكهرباء العامة/المولد يوميًا:",
      autonomyLabel: "أيام الاكتفاء الذاتي (أيام غائمة):",
      sunHoursLabel: "عدد ساعات ذروة الشمس يوميًا:",
      quantityLabel: "الكمية",
      powerLabel: "القيمة",
      hoursLabel: "ساعات/يوم",
      resultsDefault: "اختر الأحمال الخاصة بك لرؤية حجم المنظومة المطلوب.",
      gridNote: (hours) =>
        hours > 0
          ? `\n💡 **ملاحظة:** بوجود **${hours}** ساعات شحن من الشبكة، يمكنك ضبط **'أيام الاكتفاء الذاتي' إلى 1 أو أقل** لتقليل تكلفة البطاريات.`
          : "",
      results: (
        totalWh,
        batteryAh,
        panelWatts,
        inverterKW,
        controllerA,
        gridNoteText,
        voltage,
        dod
      ) =>
        `📊 **إجمالي الاستهلاك اليومي:** <strong>${totalWh.toFixed(
          0
        )}</strong> واط.ساعة/يوم\n\n` +
        `🔋 **البطاريات الموصى بها (${voltage} فولت):**\n    - السعة: <strong>${batteryAh.toFixed(
          0
        )} أمبير.ساعة</strong>\n    <small>(بناءً على عمق تفريغ ${
          dod * 100
        }% وأيام الاكتفاء المحددة)</small>\n\n` +
        `☀️ **الألواح الشمسية المطلوبة:**\n    - الاستطاعة: <strong>${panelWatts.toFixed(
          0
        )} واط</strong>\n    <small>(بناءً على ساعات الذروة المحددة مع هامش أمان 25%)</small>\n\n` +
        `⚡ **الإنفرتر (المحول) الموصى به:**\n    - الاستطاعة: <strong>${inverterKW.toFixed(
          2
        )} kW</strong> (موجة جيبية نقية)\n    <small>(محسوب ليناسب مجموع الأحمال مع هامش أمان 25%)</small>\n\n` +
        `🔌 **منظم الشحن الموصى به (MPPT):**\n    - التيار: <strong>${controllerA.toFixed(
          0
        )} أمبير</strong>\n    <small>(لنظام ${voltage} فولت مع هامش أمان 25%)</small>${gridNoteText}`,
    },
  },
  tr: {
    dir: "ltr",
    tabs: [
      "Elektrik Tüketim Hesaplayıcı",
      "Kablo ve Sigorta Hesaplayıcı",
      "Güneş Enerjisi Sistemi Hesaplayıcı",
    ],
    electricity: {
      title: "Elektrik Tüketim Hesaplayıcı",
      inputTypeLabel: "Giriş Türü:",
      inputTypeOptions: ["Watt (W)", "Kilowatt (kW)", "Amper (A)"],
      valueLabel: "Değer:",
      voltageLabel: "Voltaj:",
      hoursLabel: "Günlük Çalışma Saati:",
      daysLabel: "Gün Sayısı:",
      priceLabel: "Elektrik Fiyatı (TL / kWh):",
      results: (kWh, dailyCost, totalKWh, totalCost, days) =>
        `✅ <strong>Sonuçlar:</strong>\n🔋 Günlük Tüketim: <strong>${kWh.toFixed(
          2
        )}</strong> kWh\n💵 Günlük Maliyet: <strong>${dailyCost.toFixed(
          2
        )}</strong> TL\n📦 Toplam Tüketim (<strong>${days}</strong> gün): <strong>${totalKWh.toFixed(
          2
        )}</strong> kWh\n💰 Toplam Maliyet: <strong>${totalCost.toFixed(
          2
        )}</strong> TL`,
    },
    wire: {
      title: "Kablo ve Sigorta Hesaplayıcı",
      inputTypeLabel: "Giriş Türü",
      inputTypeOptions: ["Akım (A)", "Güç (W)", "Güç (kW)"],
      valueLabel: "Değer",
      voltageLabel: "Voltaj (V)",
      lengthLabel: "Kablo Uzunluğu (metre)",
      materialLabel: "Malzeme",
      materialOptions: ["Bakır", "Alüminyum"],
      dropLabel: "İzin Verilen Voltaj Düşüşü (%)",
      resultsDefault: "⚙️ Sonuçlar otomatik olarak burada gösterilecektir",
      results: (power, current, area, voltageDrop, breaker) =>
        `🔌 Güç: <strong>${power.toFixed(
          2
        )}</strong> W\n⚡ Akım: <strong>${current.toFixed(
          2
        )}</strong> A\n📏 Gerekli Kablo Kesiti: <strong>${area.toFixed(
          2
        )}</strong> mm²\n⚠️ Gerçek Voltaj Düşüşü: <strong>${voltageDrop.toFixed(
          2
        )}</strong> V\n🛡️ Uygun Sigorta: <strong>${breaker}</strong> A`,
    },
    solar: {
      title: "☀️ Güneş Enerjisi Sistemi Hesaplayıcı",
      loadsTitle: "1. Yüklerinizi Seçin",
      paramsTitle: "2. Sistem Parametreleri",
      loadNames: {
        ac: "Klima",
        fridge: "Buzdolabı",
        washer: "Çamaşır Makinesi",
        fan: "Vantilatör",
        dishwasher: "Bulaşık Makinesi",
        lighting: "Aydınlatma",
        oven: "Fırın",
        router: "Router",
        other: "Diğer (Özel)",
      },
      powerUnitLabel: "Güç Birimi",
      powerUnitOptions: ["Kilowatt", "Ton", "BTU/saat", "Amper"],
      acVoltageLabel: "Voltaj (V)",
      batteryTypeLabel: "Akü Tipi:",
      batteryTypeOptions: ["Kurşun-Asit", "Lityum"],
      systemVoltageLabel: "Sistem Voltajı:",
      lossesLabel: "Sistem Kayıpları (%):",
      gridHoursLabel: "Günlük Şebeke/Jeneratör Şarj Saati:",
      autonomyLabel: "Otonomi Günü (bulutlu günler):",
      sunHoursLabel: "Günlük Güneşlenme Saati:",
      quantityLabel: "Adet",
      powerLabel: "Değer",
      hoursLabel: "Saat/Gün",
      resultsDefault: "Gerekli sistem boyutunu görmek için yüklerinizi seçin.",
      gridNote: (hours) =>
        hours > 0
          ? `\n💡 **Not:** Günde **${hours}** saat şebeke şarjı mevcutsa, akü maliyetlerini azaltmak için **'Otonomi Günü'nü 1 veya daha aza** ayarlayın.`
          : "",
      results: (
        totalWh,
        batteryAh,
        panelWatts,
        inverterKW,
        controllerA,
        gridNoteText,
        voltage,
        dod
      ) =>
        `📊 **Toplam Günlük Tüketim:** <strong>${totalWh.toFixed(
          0
        )}</strong> Wh/gün\n\n` +
        `🔋 **Önerilen Akü Grubu (${voltage}V):**\n    - Boyut: <strong>${batteryAh.toFixed(
          0
        )} Ah</strong>\n    <small>(%${
          dod * 100
        } deşarj derinliği ve otonomiye göre)</small>\n\n` +
        `☀️ **Gerekli Güneş Paneli Dizisi:**\n    - Boyut: <strong>${panelWatts.toFixed(
          0
        )} Watt</strong>\n    <small>(Seçilen güneşlenme saatine ve %25 güvenlik payına göre)</small>\n\n` +
        `⚡ **Önerilen İnverter:**\n    - Boyut: <strong>${inverterKW.toFixed(
          2
        )} kW</strong> (Tam Sinüs)\n    <small>(Toplam yüke göre %25 güvenlik payı ile)</small>\n\n` +
        `🔌 **Önerilen Şarj Regülatörü (MPPT):**\n    - Boyut: <strong>${controllerA.toFixed(
          0
        )} Amper</strong>\n    <small>(${voltage}V sistem için %25 güvenlik payı ile)</small>${gridNoteText}`,
    },
  },
};

const loadDefaults = {
  ac: { power: 1, isCustom: true },
  fridge: { power: 150, isCustom: false },
  washer: { power: 500, isCustom: false },
  fan: { power: 75, isCustom: false },
  dishwasher: { power: 1200, isCustom: false },
  lighting: { power: 50, isCustom: true },
  oven: { power: 2000, isCustom: false },
  router: { power: 10, isCustom: false },
  other: { power: 100, isCustom: true },
};

let currentLang = "en";
let activeTab = "electricity"; // Track the current active tab

// --- DOM ELEMENT REFERENCES ---
const allTabs = document.querySelectorAll(".tabs button");
const mainContainer = document.getElementById("main");
const contentContainer = document.getElementById("content-container");

// --- MAIN FUNCTIONS ---
function setLang(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  mainContainer.setAttribute("dir", langText[lang].dir);

  allTabs.forEach((tab) => {
    const page = tab.dataset.page;
    let tabIndex;
    if (page === "electricity") tabIndex = 0;
    if (page === "wire") tabIndex = 1;
    if (page === "solar") tabIndex = 2;
    tab.textContent = langText[lang].tabs[tabIndex];
  });

  // استدعاء الدالة الجديدة لتحديث التذييل
  updateFooterText(lang);
  // Refresh the content of the currently active tab with the new language
  loadTabContent(activeTab, true);
}

// دالة جديدة مسؤولة عن تحديث نصوص التذييل فقط
function updateFooterText(lang) {
  // جلب كائن الترجمات للغة المطلوبة من footerText
  const translations = footerText[lang];

  // تحديث كل عنصر في الصفحة بالنص المناسب
  // نستخدم innerHTML لأن بعض النصوص تحتوي على وسوم HTML
  document.getElementById("total-visitors-label").innerHTML =
    translations.totalVisitors;
  document.getElementById("today-visitors-label").innerHTML =
    translations.todayVisitors;
  document.getElementById("developed-by-text").innerHTML =
    translations.developedBy;
  document.getElementById("copyright-text").innerHTML = translations.copyright;
}

// Fetches and loads tab content
async function loadTabContent(page, languageChange = false) {
  try {
    const response = await fetch(`partials/${page}.html`);
    if (!response.ok) throw new Error("Network response was not ok");
    const html = await response.text();
    contentContainer.innerHTML = html;

    // Setup the calculator for the newly loaded content
    if (page === "electricity") setupElectricityCalculator();
    if (page === "wire") setupWireCalculator();
    if (page === "solar") setupSolarCalculator();
  } catch (error) {
    contentContainer.innerHTML = `<p style="text-align:center; color:red;">Error loading content. Please try again.</p>`;
    console.error("Failed to load tab content:", error);
  }
}

function switchTab(e) {
  const selectedTab = e.target;
  activeTab = selectedTab.dataset.page;

  allTabs.forEach((tab) => {
    tab.classList.remove("active");
  });
  selectedTab.classList.add("active");

  loadTabContent(activeTab);
}

// --- CALCULATOR SETUP FUNCTIONS ---

function setupElectricityCalculator() {
  updateElectricityText();
  const elementsToWatch = [
    "inputType",
    "value",
    "voltage",
    "hours",
    "days",
    "price",
  ];
  elementsToWatch.forEach((id) =>
    document.getElementById(id).addEventListener("input", calculateElectricity)
  );

  // Special listener for the dropdown that shows/hides the voltage field
  document.getElementById("inputType").addEventListener("change", () => {
    document
      .getElementById("voltageSection")
      .classList.toggle(
        "hidden",
        document.getElementById("inputType").value !== "amp"
      );
    calculateElectricity();
  });

  calculateElectricity(); // Initial calculation
}

function setupWireCalculator() {
  updateWireText();
  const elementsToWatch = [
    "inputTypeWire",
    "inputValue",
    "voltageWire",
    "length",
    "drop",
    "material",
  ];
  elementsToWatch.forEach((id) =>
    document.getElementById(id).addEventListener("input", calculateWire)
  );
  calculateWire(); // Initial calculation
}

function setupSolarCalculator() {
  updateSolarText(); // This will populate the checklist
  addSolarEventListeners(); // This will attach listeners to the newly created elements
  calculateSolar(); // Initial calculation
}

// --- ELECTRICITY CALCULATOR ---
function updateElectricityText() {
  const texts = langText[currentLang].electricity;
  document.getElementById("title").textContent = texts.title;
  document.getElementById("inputTypeLabel").textContent = texts.inputTypeLabel;
  const inputTypeSelect = document.getElementById("inputType");
  texts.inputTypeOptions.forEach((text, i) => {
    if (inputTypeSelect.options[i])
      inputTypeSelect.options[i].textContent = text;
  });
  document.getElementById("valueLabel").textContent = texts.valueLabel;
  document.getElementById("voltageLabel").textContent = texts.voltageLabel;
  document.getElementById("hoursLabel").textContent = texts.hoursLabel;
  document.getElementById("daysLabel").textContent = texts.daysLabel;
  document.getElementById("priceLabel").textContent = texts.priceLabel;
}
function calculateElectricity() {
  const inputType = document.getElementById("inputType").value;
  const value = parseFloat(document.getElementById("value").value);
  const voltage = parseFloat(document.getElementById("voltage").value);
  const hours = parseFloat(document.getElementById("hours").value);
  const days = parseFloat(document.getElementById("days").value);
  const price = parseFloat(document.getElementById("price").value);
  if (
    isNaN(value) ||
    isNaN(hours) ||
    isNaN(days) ||
    isNaN(price) ||
    (inputType === "amp" && isNaN(voltage))
  ) {
    document.getElementById(
      "resultBox"
    ).innerHTML = `⚠️ <strong>Please enter valid numbers.</strong>`;
    return;
  }
  let powerKW =
    inputType === "amp"
      ? (value * voltage) / 1000
      : inputType === "watt"
      ? value / 1000
      : value;
  const dailyKWh = powerKW * hours,
    totalKWh = dailyKWh * days;
  const dailyCost = dailyKWh * price,
    totalCost = totalKWh * price;
  document.getElementById("resultBox").innerHTML = langText[
    currentLang
  ].electricity.results(dailyKWh, dailyCost, totalKWh, totalCost, days);
}

// --- WIRE CALCULATOR ---
function updateWireText() {
  const texts = langText[currentLang].wire;
  document.getElementById("wireTitle").textContent = texts.title;
  document.getElementById("wireInputTypeLabel").textContent =
    texts.inputTypeLabel;
  const inputTypeWireSelect = document.getElementById("inputTypeWire");
  texts.inputTypeOptions.forEach((text, i) => {
    if (inputTypeWireSelect.options[i])
      inputTypeWireSelect.options[i].textContent = text;
  });
  document.getElementById("wireValueLabel").textContent = texts.valueLabel;
  document.getElementById("wireVoltageLabel").textContent = texts.voltageLabel;
  document.getElementById("wireLengthLabel").textContent = texts.lengthLabel;
  document.getElementById("wireMaterialLabel").textContent =
    texts.materialLabel;
  const materialSelect = document.getElementById("material");
  texts.materialOptions.forEach((text, i) => {
    if (materialSelect.options[i]) materialSelect.options[i].textContent = text;
  });
  document.getElementById("wireDropLabel").textContent = texts.dropLabel;
  document.getElementById("results").innerHTML = texts.resultsDefault;
}
function calculateWire() {
  const inputType = document.getElementById("inputTypeWire").value;
  const inputValue = parseFloat(document.getElementById("inputValue").value);
  const voltageWire = parseFloat(document.getElementById("voltageWire").value);
  const length = parseFloat(document.getElementById("length").value);
  const dropPercent = parseFloat(document.getElementById("drop").value);
  const material = document.getElementById("material").value;
  if (
    isNaN(inputValue) ||
    isNaN(voltageWire) ||
    isNaN(length) ||
    isNaN(dropPercent)
  ) {
    document.getElementById(
      "results"
    ).innerHTML = `⚠️ <strong>Please enter valid numbers.</strong>`;
    return;
  }
  let resistivity = material === "copper" ? 0.0175 : 0.0282;
  let current = 0,
    power = 0;
  if (inputType === "amp") {
    current = inputValue;
    power = current * voltageWire;
  } else if (inputType === "kw") {
    power = inputValue * 1000;
    current = power / voltageWire;
  } else {
    power = inputValue;
    current = power / voltageWire;
  }
  let dropVolts = voltageWire * (dropPercent / 100);
  let requiredArea = (2 * length * current * resistivity) / dropVolts;
  if (requiredArea <= 0 || !isFinite(requiredArea)) {
    requiredArea = 0;
  }
  let breaker = Math.ceil(current * 1.25);
  let actualDrop =
    requiredArea > 0 ? (2 * length * current * resistivity) / requiredArea : 0;
  document.getElementById("results").innerHTML = langText[
    currentLang
  ].wire.results(power, current, requiredArea, actualDrop, breaker);
}

// --- SOLAR CALCULATOR ---
function updateSolarText() {
  const texts = langText[currentLang].solar;
  document.getElementById("solarTitle").textContent = texts.title;
  document.getElementById("loadsTitle").textContent = texts.loadsTitle;
  document.getElementById("paramsTitle").textContent = texts.paramsTitle;
  document.getElementById("batteryTypeLabel").textContent =
    texts.batteryTypeLabel;
  const batteryTypeSelect = document.getElementById("batteryType");
  batteryTypeSelect.innerHTML = `<option value="lead-acid">${texts.batteryTypeOptions[0]}</option><option value="lithium">${texts.batteryTypeOptions[1]}</option>`;
  document.getElementById("systemVoltageLabel").textContent =
    texts.systemVoltageLabel;
  document.getElementById("lossesLabel").textContent = texts.lossesLabel;
  document.getElementById("gridHoursLabel").textContent = texts.gridHoursLabel;
  document.getElementById("autonomyLabel").textContent = texts.autonomyLabel;
  document.getElementById("sunHoursLabel").textContent = texts.sunHoursLabel;
  populateLoadsChecklist();
}

function populateLoadsChecklist() {
  const loadsChecklist = document.getElementById("loadsChecklist");
  loadsChecklist.innerHTML = "";
  const texts = langText[currentLang].solar;
  for (const key in texts.loadNames) {
    const loadData = loadDefaults[key];
    const loadName = texts.loadNames[key];
    const entryDiv = document.createElement("div");
    entryDiv.className = "load-entry";
    entryDiv.dataset.loadKey = key;

    let powerUnitSelectorHTML = "",
      acVoltageHTML = "";

    if (key === "ac") {
      const options = langText[currentLang].solar.powerUnitOptions
        .map((opt, i) => {
          const value = langText["en"].solar.powerUnitOptions[i]
            .toLowerCase()
            .replace("/hr", "");
          return `<option value="${value}">${opt}</option>`;
        })
        .join("");
      powerUnitSelectorHTML = `<div class="input-group"><label>${texts.powerUnitLabel}</label><select class="power-unit-selector">${options}</select></div>`;
      acVoltageHTML = `<div class="input-group ac-voltage-group hidden"><label>${texts.acVoltageLabel}</label><input type="number" class="ac-voltage-input" value="220"></div>`;
    }

    entryDiv.innerHTML = `
          <div class="load-entry-header">
              <input type="checkbox" class="load-checkbox" id="check-${key}"><label for="check-${key}">${loadName}</label>
          </div>
          <div class="load-inputs hidden">
              <div class="input-group"><label>${
                texts.quantityLabel
              }</label><input type="number" class="quantity-input" value="1" min="1"></div>
              ${powerUnitSelectorHTML}
              <div class="input-group"><label>${
                texts.powerLabel
              }</label><input type="number" class="power-input" value="${
      loadData.power
    }" ${!loadData.isCustom ? "disabled" : ""}></div>
              ${acVoltageHTML}
              <div class="input-group"><label>${
                texts.hoursLabel
              }</label><input type="number" class="hours-input" value="1" min="0"></div>
          </div>`;
    loadsChecklist.appendChild(entryDiv);
  }
}

function addSolarEventListeners() {
  document.querySelectorAll(".load-checkbox").forEach((c) =>
    c.addEventListener("change", (e) => {
      e.target
        .closest(".load-entry")
        .querySelector(".load-inputs")
        .classList.toggle("hidden", !e.target.checked);
      calculateSolar();
    })
  );

  document
    .querySelectorAll("#solar-section input, #solar-section select")
    .forEach((el) => el.addEventListener("input", calculateSolar));

  document.querySelectorAll(".power-unit-selector").forEach((sel) => {
    sel.addEventListener("change", (e) => {
      const parent = e.target.closest(".load-inputs");
      const voltageGroup = parent.querySelector(".ac-voltage-group");
      if (voltageGroup) {
        voltageGroup.classList.toggle("hidden", e.target.value !== "ampere");
      }
      calculateSolar();
    });
  });
}

function calculateSolar() {
  let totalWattHours = 0,
    totalPower = 0;
  document.querySelectorAll(".load-checkbox:checked").forEach((c) => {
    const p = c.closest(".load-entry"),
      key = p.dataset.loadKey;
    const quantity = parseFloat(p.querySelector(".quantity-input").value) || 0;
    const hours = parseFloat(p.querySelector(".hours-input").value) || 0;
    let power = parseFloat(p.querySelector(".power-input").value) || 0;

    if (key === "ac") {
      const unit = p.querySelector(".power-unit-selector").value;
      if (unit === "kilowatt") {
        power *= 1000; // Convert kW to W
      } else if (unit === "ampere") {
        const voltage =
          parseFloat(p.querySelector(".ac-voltage-input").value) || 220;
        power = power * voltage;
      } else if (unit === "ton") {
        power *= 1200;
      } else if (unit === "btu") {
        power *= 0.1;
      }
    }
    totalWattHours += quantity * power * hours;
    totalPower += quantity * power;
  });

  const solarResults = document.getElementById("solarResults");
  const batteryType = document.getElementById("batteryType").value;
  const systemVoltage = parseFloat(
    document.getElementById("systemVoltage").value
  );
  const lossesPercent =
    parseFloat(document.getElementById("lossesPercent").value) || 15;
  const gridHours = parseFloat(document.getElementById("gridHours").value) || 0;
  const autonomy =
    parseFloat(document.getElementById("autonomyDays").value) || 1;
  const sunHours = parseFloat(document.getElementById("sunHours").value) || 1;

  if (totalWattHours === 0) {
    solarResults.innerHTML = langText[currentLang].solar.resultsDefault;
    return;
  }

  const dod = batteryType === "lithium" ? 0.8 : 0.5;
  const eff = 1 - lossesPercent / 100;
  const pSF = 1.25,
    iSF = 1.25,
    cSF = 1.25;

  const consumption = totalWattHours / eff;
  const batAh = (consumption * autonomy) / systemVoltage / dod;
  const panW = (consumption / sunHours) * pSF;
  const invW = totalPower * iSF;
  const invKW = invW / 1000;
  const conA = panW / systemVoltage / cSF;
  const note = langText[currentLang].solar.gridNote(gridHours);

  solarResults.innerHTML = langText[currentLang].solar.results(
    totalWattHours,
    batAh,
    panW,
    invKW,
    conA,
    note,
    systemVoltage,
    dod
  );
}

// --- INITIALIZATION ---
document.addEventListener("DOMContentLoaded", () => {
  // Attach click listeners to tabs
  allTabs.forEach((tab) => tab.addEventListener("click", switchTab));

  // Set initial language and load default tab
  setLang("en"); // This will also trigger the initial load
  fetchVisitorCount();
});

// function fetchVisitorCount() {
//   // الرابط الذي يرجع بيانات JSON
//   const apiUrl =
//     "https://hitscounter.dev/api/hit?output=json&url=https%3A%2F%2Fm3lesh.github.io%2FElectricity-Consumption-Calculator%2F&label=&icon=github&color=%23004d40&message=&style=plastic&tz=Turkey";

//   // الحصول على العنصر الذي سنضع فيه الرقم
//   const countElement = document.getElementById("visitor-count-placeholder");
//   const countElementToday = document.getElementById(
//     "visitor-count-placeholder-today"
//   );

//   // التأكد من أن العنصر موجود قبل محاولة استخدامه
//   if (!countElement || !countElementToday) {
//     console.error("Error: Placeholder element for visitor count not found.");
//     return;
//   }

//   // استخدام fetch لجلب البيانات
//   fetch(apiUrl)
//     .then((response) => {
//       console.log(response);
//       // التأكد من أن الطلب نجح
//       if (!response.ok) {
//         throw new Error("Network response was not ok");
//       }
//       // تحويل الاستجابة إلى صيغة JSON
//       return response.json();
//     })
//     .then((data) => {
//       console.log(data.today_hits);
//       // الوصول إلى العدد وعرضه في العنصر
//       countElement.textContent = data.today_hits;
//       countElementToday.textContent = data.total_hits;
//     })
//     .catch((error) => {
//       // في حال حدوث أي خطأ أثناء جلب البيانات
//       console.error("Failed to fetch visitor count:", error);
//       // عرض رسالة خطأ للمستخدم
//       countElement.textContent = "غير متاح";
//     });
// }
function fetchVisitorCount() {
  // The API URL you are using
  const apiUrl =
    "https://hitscounter.dev/api/hit?output=json&url=https%3A%2F%2Fm3lesh.github.io%2FElectricity-Consumption-Calculator%2F&tz=Turkey";

  // Get the placeholder elements
  const totalCountElement = document.getElementById("total-visitor-count");
  const todayCountElement = document.getElementById("today-visitor-count");

  // Check if elements exist
  if (!totalCountElement || !todayCountElement) {
    console.error("Visitor count placeholder elements not found.");
    return;
  }

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      // Update the text with the new data structure
      totalCountElement.textContent = data.total_hits;
      todayCountElement.textContent = data.today_hits;
    })
    .catch((error) => {
      console.error("Failed to fetch visitor count:", error);
      totalCountElement.textContent = "N/A";
      todayCountElement.textContent = "N/A";
    });
}
