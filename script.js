//script.js

// --- LANGUAGE & STATIC DATA ---
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
      "HVAC Calculator"
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
        `✅ <strong>Results:</strong>\n🔋 Daily Consumption: <strong>${kWh.toFixed(2)}</strong> kWh\n💵 Daily Cost:<strong> ${dailyCost.toFixed(2)}</strong> \n📦 Total Consumption (<strong>${days}</strong> days): <strong>${totalKWh.toFixed(2)}</strong> kWh\n💰 Total Cost: <strong>${totalCost.toFixed(2)}</strong>`,
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
        `🔌 Power: <strong>${power.toFixed(2)}</strong> W\n⚡ Current: <strong>${current.toFixed(2)}</strong> A\n📏 Required Wire Cross-Section: <strong>${area.toFixed(2)}</strong> mm²\n⚠️ Actual Voltage Drop: <strong>${voltageDrop.toFixed(2)}</strong> V\n🛡️ Suitable Breaker: <strong>${breaker}</strong> A`,
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
      results: (totalWh, batteryAh, panelWatts, inverterKW, controllerA, gridNoteText, voltage, dod) =>
        `📊 **Total Daily Consumption:** <strong>${totalWh.toFixed(0)}</strong> Wh/day\n\n` +
        `🔋 **Recommended Battery Bank (${voltage}V):**\n    - Size: <strong>${batteryAh.toFixed(0)} Ah</strong>\n    <small>(Based on ${dod * 100}% DoD & selected autonomy)</small>\n\n` +
        `☀️ **Required Solar Panel Array:**\n    - Size: <strong>${panelWatts.toFixed(0)} Watts</strong>\n    <small>(Based on selected peak sun hours with a 25% buffer)</small>\n\n` +
        `⚡ **Recommended Inverter:**\n    - Size: <strong>${inverterKW.toFixed(2)} kW</strong> (Pure Sine Wave)\n    <small>(Sized for total load with a 25% safety margin)</small>\n\n` +
        `🔌 **Recommended Charge Controller (MPPT):**\n    - Size: <strong>${controllerA.toFixed(0)} Amps</strong>\n    <small>(For a ${voltage}V system with a 25% safety margin)</small>${gridNoteText}`,
    },
    hvac: {
      title: "HVAC Cooling & Heating Load Calculator",
      calculationTypeLabel: "Calculation Type:",
      calculationTypeOptions: ["Cooling", "Heating"],
      calculationModeLabel: "Calculation Mode:",
      calculationModeOptions: ["Quick Calculation", "Professional Calculation"],
      roomAreaLabel: "Room Area (m²):",
      roomHeightLabel: "Ceiling Height (m):",
      insulationLabel: "Insulation Quality:",
      insulationOptions: ["Excellent [105 BTU/m³]", "Good [127 BTU/m³]", "Medium [150 BTU/m³]", "Poor [187 BTU/m³]", "Very Poor [225 BTU/m³]"],
      sunExposureLabel: "Sun Exposure:",
      sunExposureOptions: ["Low", "Medium", "High"],
      peopleLabel: "Number of People:",
      windowsLabel: "Number of Windows:",
      appliancesLabel: "Internal Appliances (Watts):",

      // Advanced Options
      climateLabel: "Climate Conditions",
      outdoorTempLabel: "Outdoor Temperature (°C):",
      indoorTempLabel: "Indoor Desired Temperature (°C):",
      humidityLabel: "Outdoor Humidity (%):",

      // Heating specific
      outdoorWinterTempLabel: "Outdoor Winter Temperature (°C):",
      indoorHeatingTempLabel: "Indoor Heating Temperature (°C):",

      thermalLabel: "Thermal Insulation",
      wallTypeLabel: "Wall Type:",
      wallTypeOptions: ["Brick with insulation", "Brick no insulation", "Concrete", "Wood", "Metal"],
      windowTypeLabel: "Window Type:",
      windowTypeOptions: ["Single Glass [5.7 U(W/m²·K)]", "Double Glass [2.8 U(W/m²·K)]", "Triple Glass [1.8 U(W/m²·K)]", "Low-E Glass [1.4 U(W/m²·K)]"],
      frameTypeLabel: "Frame Type:",
      frameTypeOptions: ["Wood", "PVC", "Aluminum", "Aluminum with thermal break"],
      roomDirectionLabel: "Room Direction:",
      roomDirectionOptions: ["North", "South", "East", "West"],

      ventilationLabel: "Ventilation & Air Changes",
      achLabel: "Air Changes per Hour (ACH):",
      roomTypeLabel: "Room Type:",
      roomTypeOptions: ["Bedroom", "Living Room", "Office", "Kitchen", "Server Room"],

      peopleActivityLabel: "People Activity Level:",
      peopleActivityOptions: ["Seated (Resting)", "Light Office Work", "Standing/Light Work", "Moderate Work", "Heavy Work"],

      // Results functions
      coolingResults: (btu, tons, kw, recommendation, annualConsumption, cost) =>
        `❄️ <strong>Cooling Load Results:</strong><br>
        🔥 Required Cooling Capacity: <strong>${btu}</strong> BTU/hr<br>
        🧊 AC Size: <strong>${tons}</strong> Ton<br>
        ⚡ Power: <strong>${kw}</strong> kW<br>
        💡 Recommendation: <strong>${recommendation}</strong><br>
        📊 Annual Consumption: <strong>${annualConsumption}</strong> kWh/year<br>
        💰 Estimated Annual Cost: <strong>${cost}</strong>`,

      heatingResults: (btu, kw, recommendation, annualConsumption, cost) =>
        `🔥 <strong>Heating Load Results:</strong><br>
        ❄️ Required Heating Capacity: <strong>${btu}</strong> BTU/hr<br>
        ⚡ Power: <strong>${kw}</strong> kW<br>
        💡 Recommendation: <strong>${recommendation}</strong><br>
        📊 Annual Consumption: <strong>${annualConsumption}</strong> kWh/year<br>
        💰 Estimated Annual Cost: <strong>${cost}</strong>`,

      professionalResults: (sensible, latent, total, breakdown, type) =>
        `📊 <strong>Professional ${type} Load Analysis:</strong><br>
        ${type === 'Cooling' ? `🔥 Sensible Load: <strong>${sensible}</strong> BTU/hr<br>
        💧 Latent Load: <strong>${latent}</strong> BTU/hr<br>` : ''}
        ⚡ Total ${type} Load: <strong>${total}</strong> BTU/hr<br>
        ${breakdown}`,

      advancedTitle: "Advanced Professional Options",
      loadBreakdownTitle: "Load Breakdown:",
      wallsWindowsLabel: "Walls & Windows",
      infiltrationLabel: "Infiltration",
      peopleLabelBreakdown: "People",
      appliancesLabelBreakdown: "Appliances",
      solarLabel: "Solar",
      safetyMarginLabel: "Safety Margin"
    },
  },
  ar: {
    dir: "rtl",
    tabs: [
      "حاسبة استهلاك الكهرباء",
      "حاسبة قطر السلك والقاطع",
      "حاسبة المنظومة الشمسية",
      "حاسبة حمل التبريد والتدفئة (HVAC)"
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
        `✅ <strong>النتائج:</strong>\n🔋 الاستهلاك اليومي: <strong>${kWh.toFixed(2)}</strong> kWh\n💵 التكلفة اليومية: <strong>${dailyCost.toFixed(2)}</strong> \n📦 إجمالي الاستهلاك (<strong>${days}</strong> يوم): <strong>${totalKWh.toFixed(2)}</strong> kWh\n💰 التكلفة الإجمالية: <strong>${totalCost.toFixed(2)}</strong>`,
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
        `🔌 الاستطاعة: <strong>${power.toFixed(2)}</strong> واط\n⚡ التيار: <strong>${current.toFixed(2)}</strong> أمبير\n📏 مقطع السلك المطلوب: <strong>${area.toFixed(2)}</strong> مم²\n⚠️ الفقد الفعلي في الجهد: <strong>${voltageDrop.toFixed(2)}</strong> فولت\n🛡️ القاطع المناسب: <strong>${breaker}</strong> أمبير`,
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
      results: (totalWh, batteryAh, panelWatts, inverterKW, controllerA, gridNoteText, voltage, dod) =>
        `📊 **إجمالي الاستهلاك اليومي:** <strong>${totalWh.toFixed(0)}</strong> واط.ساعة/يوم\n\n` +
        `🔋 **البطاريات الموصى بها (${voltage} فولت):**\n    - السعة: <strong>${batteryAh.toFixed(0)} أمبير.ساعة</strong>\n    <small>(بناءً على عمق تفريغ ${dod * 100}% وأيام الاكتفاء المحددة)</small>\n\n` +
        `☀️ **الألواح الشمسية المطلوبة:**\n    - الاستطاعة: <strong>${panelWatts.toFixed(0)} واط</strong>\n    <small>(بناءً على ساعات الذروة المحددة مع هامش أمان 25%)</small>\n\n` +
        `⚡ **الإنفرتر (المحول) الموصى به:**\n    - الاستطاعة: <strong>${inverterKW.toFixed(2)} kW</strong> (موجة جيبية نقية)\n    <small>(محسوب ليناسب مجموع الأحمال مع هامش أمان 25%)</small>\n\n` +
        `🔌 **منظم الشحن الموصى به (MPPT):**\n    - التيار: <strong>${controllerA.toFixed(0)} أمبير</strong>\n    <small>(لنظام ${voltage} فولت مع هامش أمان 25%)</small>${gridNoteText}`,
    },
    hvac: {
      title: "حاسبة حمل التبريد والتدفئة (HVAC)",
      calculationTypeLabel: "نوع الحساب:",
      calculationTypeOptions: ["تبريد", "تدفئة"],
      calculationModeLabel: "نمط الحساب:",
      calculationModeOptions: ["حساب سريع", "حساب احترافي"],
      roomAreaLabel: "مساحة الغرفة (م²):",
      roomHeightLabel: "ارتفاع السقف (م):",
      insulationLabel: "جودة العزل:",
      insulationOptions: ["ممتاز [105 BTU/m³]", "جيد [127 BTU/m³]", "متوسط [150 BTU/m³]", "ضعيف [187 BTU/m³]", "ضعيف جداً [225 BTU/m³]"],
      sunExposureLabel: "التعرّض للشمس:",
      sunExposureOptions: ["منخفض", "متوسط", "عالٍ"],
      peopleLabel: "عدد الأشخاص:",
      windowsLabel: "عدد النوافذ:",
      appliancesLabel: "الأجهزة الداخلية (واط):",

      // Advanced Options
      climateLabel: "الظروف المناخية",
      outdoorTempLabel: "درجة الحرارة الخارجية (°C):",
      indoorTempLabel: "درجة الحرارة المطلوبة داخل الغرفة (°C):",
      humidityLabel: "الرطوبة الخارجية (%):",

      // Heating specific
      outdoorWinterTempLabel: "درجة الحرارة الخارجية في الشتاء (°C):",
      indoorHeatingTempLabel: "درجة الحرارة الداخلية للتدفئة (°C):",

      thermalLabel: "العزل الحراري",
      wallTypeLabel: "نوع الجدران:",
      wallTypeOptions: ["طوب مع عزل", "طوب بدون عزل", "خرسانة", "خشب", "معدن"],
      windowTypeLabel: "نوع النوافذ:",
      windowTypeOptions: ["زجاج مفرد [5.7 U(W/m²·K)]", "زجاج مزدوج [2.8 U(W/m²·K)]", "زجاج ثلاثي [1.8 U(W/m²·K)]", "زجاج منخفض الانبعاثية [1.4 U(W/m²·K)]"],
      frameTypeLabel: "نوع الإطار:",
      frameTypeOptions: ["خشب", "PVC", "ألمنيوم", "ألمنيوم مع كسر حراري"],
      roomDirectionLabel: "اتجاه الغرفة:",
      roomDirectionOptions: ["شمال", "جنوب", "شرق", "غرب"],

      ventilationLabel: "التهوية وتغيير الهواء",
      achLabel: "مرات تغيير الهواء في الساعة:",
      roomTypeLabel: "نوع الغرفة:",
      roomTypeOptions: ["غرفة نوم", "صالة", "مكتب", "مطبخ", "غرفة سيرفر"],

      peopleActivityLabel: "نشاط الأشخاص:",
      peopleActivityOptions: ["جلوس (راحة)", "عمل مكتبي خفيف", "وقوف/عمل خفيف", "عمل متوسط", "عمل شاق"],

      // Results functions
      coolingResults: (btu, tons, kw, recommendation, annualConsumption, cost) =>
        `❄️ <strong>نتائج حمل التبريد:</strong><br>
        🔥 السعة المطلوبة للتبريد: <strong>${btu}</strong> BTU/hr<br>
        🧊 حجم المكيّف: <strong>${tons}</strong> طن<br>
        ⚡ الاستطاعة: <strong>${kw}</strong> كيلوواط<br>
        💡 التوصية: <strong>${recommendation}</strong><br>
        📊 الاستهلاك السنوي: <strong>${annualConsumption}</strong> كيلوواط/ساعة سنوياً<br>
        💰 التكلفة السنوية المقدرة: <strong>${cost}</strong>`,

      heatingResults: (btu, kw, recommendation, annualConsumption, cost) =>
        `🔥 <strong>نتائج حمل التدفئة:</strong><br>
        ❄️ السعة المطلوبة للتدفئة: <strong>${btu}</strong> BTU/hr<br>
        ⚡ الاستطاعة: <strong>${kw}</strong> كيلوواط<br>
        💡 التوصية: <strong>${recommendation}</strong><br>
        📊 الاستهلاك السنوي: <strong>${annualConsumption}</strong> كيلوواط/ساعة سنوياً<br>
        💰 التكلفة السنوية المقدرة: <strong>${cost}</strong>`,

      professionalResults: (sensible, latent, total, breakdown, type) =>
        `📊 <strong>تحليل الحمل الاحترافي لل${type === 'Cooling' ? 'تبريد' : 'تدفئة'}:</strong><br>
        ${type === 'Cooling' ? `🔥 الحمل المحسوس: <strong>${sensible}</strong> BTU/hr<br>
        💧 الحمل الكامن: <strong>${latent}</strong> BTU/hr<br>` : ''}
        ⚡ إجمالي حمل ${type === 'Cooling' ? 'التبريد' : 'الدفئة'}: <strong>${total}</strong> BTU/hr<br>
        ${breakdown}`,

      advancedTitle: "خيارات احترافية متقدمة",
      loadBreakdownTitle: "تفصيل الحمل:",
      wallsWindowsLabel: "الجدران والنوافذ",
      infiltrationLabel: "تسرب الهواء",
      peopleLabelBreakdown: "الأشخاص",
      appliancesLabelBreakdown: "الأجهزة",
      solarLabel: "الشمس",
      safetyMarginLabel: "هامش الأمان"
    },
  },
  tr: {
    dir: "ltr",
    tabs: [
      "Elektrik Tüketim Hesaplayıcı",
      "Kablo ve Sigorta Hesaplayıcı",
      "Güneş Enerjisi Sistemi Hesaplayıcı",
      "HVAC Soğutma Yükü Hesaplayıcı"
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
        `✅ <strong>Sonuçlar:</strong>\n🔋 Günlük Tüketim: <strong>${kWh.toFixed(2)}</strong> kWh\n💵 Günlük Maliyet: <strong>${dailyCost.toFixed(2)}</strong> TL\n📦 Toplam Tüketim (<strong>${days}</strong> gün): <strong>${totalKWh.toFixed(2)}</strong> kWh\n💰 Toplam Maliyet: <strong>${totalCost.toFixed(2)}</strong> TL`,
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
        `🔌 Güç: <strong>${power.toFixed(2)}</strong> W\n⚡ Akım: <strong>${current.toFixed(2)}</strong> A\n📏 Gerekli Kablo Kesiti: <strong>${area.toFixed(2)}</strong> mm²\n⚠️ Gerçek Voltaj Düşüşü: <strong>${voltageDrop.toFixed(2)}</strong> V\n🛡️ Uygun Sigorta: <strong>${breaker}</strong> A`,
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
      results: (totalWh, batteryAh, panelWatts, inverterKW, controllerA, gridNoteText, voltage, dod) =>
        `📊 **Toplam Günlük Tüketim:** <strong>${totalWh.toFixed(0)}</strong> Wh/gün\n\n` +
        `🔋 **Önerilen Akü Grubu (${voltage}V):**\n    - Boyut: <strong>${batteryAh.toFixed(0)} Ah</strong>\n    <small>(%${dod * 100} deşarj derinliği ve otonomiye göre)</small>\n\n` +
        `☀️ **Gerekli Güneş Paneli Dizisi:**\n    - Boyut: <strong>${panelWatts.toFixed(0)} Watt</strong>\n    <small>(Seçilen güneşlenme saatine ve %25 güvenlik payına göre)</small>\n\n` +
        `⚡ **Önerilen İnverter:**\n    - Boyut: <strong>${inverterKW.toFixed(2)} kW</strong> (Tam Sinüs)\n    <small>(Toplam yüke göre %25 güvenlik payı ile)</small>\n\n` +
        `🔌 **Önerilen Şarj Regülatörü (MPPT):**\n    - Boyut: <strong>${controllerA.toFixed(0)} Amper</strong>\n    <small>(${voltage}V sistem için %25 güvenlik payı ile)</small>${gridNoteText}`,
    },
    hvac: {
      title: "HVAC Soğutma ve Isıtma Yükü Hesaplayıcı",
      calculationTypeLabel: "Hesaplama Türü:",
      calculationTypeOptions: ["Soğutma", "Isıtma"],
      calculationModeLabel: "Hesaplama Modu:",
      calculationModeOptions: ["Hızlı Hesaplama", "Profesyonel Hesaplama"],
      roomAreaLabel: "Oda Alanı (m²):",
      roomHeightLabel: "Tavan Yüksekliği (m):",
      insulationLabel: "Yalıtım Kalitesi:",
      insulationOptions: ["Mükemmel [105 BTU/m³]", "İyi [127 BTU/m³]", "Orta [150 BTU/m³]", "Zayıf [187 BTU/m³]", "Çok Zayıf [225 BTU/m³]"],
      sunExposureLabel: "Güneş Maruziyeti:",
      sunExposureOptions: ["Düşük", "Orta", "Yüksek"],
      peopleLabel: "Kişi Sayısı:",
      windowsLabel: "Pencere Sayısı:",
      appliancesLabel: "İç Cihazlar (Watt):",

      // Advanced Options
      climateLabel: "İklim Koşulları",
      outdoorTempLabel: "Dış Ortam Sıcaklığı (°C):",
      indoorTempLabel: "İstenen İç Ortam Sıcaklığı (°C):",
      humidityLabel: "Dış Ortam Nem (%):",

      // Heating specific
      outdoorWinterTempLabel: "Kış Dış Ortam Sıcaklığı (°C):",
      indoorHeatingTempLabel: "Isıtma İç Ortam Sıcaklığı (°C):",

      thermalLabel: "Termal Yalıtım",
      wallTypeLabel: "Duvar Tipi:",
      wallTypeOptions: ["Yalıtımlı Tuğla", "Yalıtımsız Tuğla", "Beton", "Ahşap", "Metal"],
      windowTypeLabel: "Pencere Tipi:",
      windowTypeOptions: ["Tek Cam [5.7 U(W/m²·K)]", "Çift Cam [2.8 U(W/m²·K)]", "Üçlü Cam [1.8 U(W/m²·K)]", "Düşük Emisyonlu Cam [1.4 U(W/m²·K)]"],
      frameTypeLabel: "Çerçeve Tipi:",
      frameTypeOptions: ["Ahşap", "PVC", "Alüminyum", "Termal Kopuklu Alüminyum"],
      roomDirectionLabel: "Oda Yönü:",
      roomDirectionOptions: ["Kuzey", "Güney", "Doğu", "Batı"],

      ventilationLabel: "Havalandırma ve Hava Değişimi",
      achLabel: "Saatlik Hava Değişim Sayısı:",
      roomTypeLabel: "Oda Tipi:",
      roomTypeOptions: ["Yatak Odası", "Oturma Odası", "Ofis", "Mutfak", "Sunucu Odası"],

      peopleActivityLabel: "Kişi Aktivite Seviyesi:",
      peopleActivityOptions: ["Oturma (Dinlenme)", "Hafif Ofis İşi", "Ayakta/Hafif İş", "Orta İş", "Ağır İş"],

      // Results functions
      coolingResults: (btu, tons, kw, recommendation, annualConsumption, cost) =>
        `❄️ <strong>Soğutma Yükü Sonuçları:</strong><br>
        🔥 Gerekli Soğutma Kapasitesi: <strong>${btu}</strong> BTU/saat<br>
        🧊 Klima Boyutu: <strong>${tons}</strong> Ton<br>
        ⚡ Güç: <strong>${kw}</strong> kW<br>
        💡 Öneri: <strong>${recommendation}</strong><br>
        📊 Yıllık Tüketim: <strong>${annualConsumption}</strong> kWh/yıl<br>
        💰 Tahmini Yıllık Maliyet: <strong>${cost}</strong>`,

      heatingResults: (btu, kw, recommendation, annualConsumption, cost) =>
        `🔥 <strong>Isıtma Yükü Sonuçları:</strong><br>
        ❄️ Gerekli Isıtma Kapasitesi: <strong>${btu}</strong> BTU/saat<br>
        ⚡ Güç: <strong>${kw}</strong> kW<br>
        💡 Öneri: <strong>${recommendation}</strong><br>
        📊 Yıllık Tüketim: <strong>${annualConsumption}</strong> kWh/yıl<br>
        💰 Tahmini Yıllık Maliyet: <strong>${cost}</strong>`,

      professionalResults: (sensible, latent, total, breakdown, type) =>
        `📊 <strong>Profesyonel ${type === 'Cooling' ? 'Soğutma' : 'Isıtma'} Yük Analizi:</strong><br>
        ${type === 'Cooling' ? `🔥 Duyulur Isı Yükü: <strong>${sensible}</strong> BTU/saat<br>
        💧 Gizli Isı Yükü: <strong>${latent}</strong> BTU/saat<br>` : ''}
        ⚡ Toplam ${type === 'Cooling' ? 'Soğutma' : 'Isıtma'} Yükü: <strong>${total}</strong> BTU/saat<br>
        ${breakdown}`,

      advancedTitle: "Gelişmiş Profesyonel Seçenekler",
      loadBreakdownTitle: "Yük Dağılımı:",
      wallsWindowsLabel: "Duvarlar ve Pencereler",
      infiltrationLabel: "Sızıntı",
      peopleLabelBreakdown: "Kişiler",
      appliancesLabelBreakdown: "Cihazlar",
      solarLabel: "Güneş",
      safetyMarginLabel: "Güvenlik Payı"
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
let activeTab = "electricity";

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
    if (page === "hvac") tabIndex = 3;
    tab.textContent = langText[lang].tabs[tabIndex];
  });

  updateFooterText(lang);
  loadTabContent(activeTab, true);
}

function updateFooterText(lang) {
  const translations = footerText[lang];
  document.getElementById("total-visitors-label").innerHTML = translations.totalVisitors;
  document.getElementById("today-visitors-label").innerHTML = translations.todayVisitors;
  document.getElementById("developed-by-text").innerHTML = translations.developedBy;
  document.getElementById("copyright-text").innerHTML = translations.copyright;
}

async function loadTabContent(page, languageChange = false) {
  try {
    const response = await fetch(`partials/${page}.html`);
    if (!response.ok) throw new Error("Network response was not ok");
    const html = await response.text();
    contentContainer.innerHTML = html;

    if (page === "electricity") setupElectricityCalculator();
    if (page === "wire") setupWireCalculator();
    if (page === "solar") setupSolarCalculator();
    if (page === "hvac") setupHvacCalculator();
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
  const elementsToWatch = ["inputType", "value", "voltage", "hours", "days", "price"];
  elementsToWatch.forEach((id) =>
    document.getElementById(id).addEventListener("input", calculateElectricity)
  );

  document.getElementById("inputType").addEventListener("change", () => {
    document.getElementById("voltageSection").classList.toggle("hidden", document.getElementById("inputType").value !== "amp");
    calculateElectricity();
  });

  calculateElectricity();
}

function setupWireCalculator() {
  updateWireText();
  const elementsToWatch = ["inputTypeWire", "inputValue", "voltageWire", "length", "drop", "material"];
  elementsToWatch.forEach((id) =>
    document.getElementById(id).addEventListener("input", calculateWire)
  );
  calculateWire();
}

function setupSolarCalculator() {
  updateSolarText();
  addSolarEventListeners();
  calculateSolar();
}

function setupHvacCalculator() {
  updateHVACText();

  const basicInputs = ['roomArea', 'roomHeight', 'insulation', 'sunExposure', 'peopleCount', 'windowsCount', 'appliancesW'];
  basicInputs.forEach(id => {
    document.getElementById(id).addEventListener('input', calculateHVAC);
  });

  // إضافة مستمع حدث لتغيير نوع الحساب
  document.getElementById('calculationType').addEventListener('change', function () {
    const isCooling = this.value === 'cooling';
    document.getElementById('coolingClimate').classList.toggle('hidden', !isCooling);
    document.getElementById('heatingClimate').classList.toggle('hidden', isCooling);
    calculateHVAC();
  });

  // إضافة مستمع حدث لتغيير وضع الحساب
  document.getElementById('calculationMode').addEventListener('change', function () {
    const isProfessional = this.value === 'professional';
    document.getElementById('advancedOptions').classList.toggle('hidden', !isProfessional);

    // إعادة تعيين عرض النتائج
    document.getElementById('quickResults').classList.toggle('hidden', isProfessional);
    document.getElementById('professionalResults').classList.toggle('hidden', !isProfessional);

    calculateHVAC();
  });

  const advancedInputs = [
    'outdoorTemp', 'indoorTemp', 'humidity', 'outdoorWinterTemp', 'indoorHeatingTemp',
    'wallType', 'windowType', 'frameType', 'roomDirection', 'roomType', 'ach', 'peopleActivity'
  ];

  advancedInputs.forEach(id => {
    const element = document.getElementById(id);
    if (element) {
      element.addEventListener('input', calculateHVAC);
    }
  });

  // التهيئة الأولية - إظهار النتائج السريعة فقط
  document.getElementById('quickResults').classList.remove('hidden');
  document.getElementById('professionalResults').classList.add('hidden');
  document.getElementById('advancedOptions').classList.add('hidden');

  calculateHVAC();
}

// --- ELECTRICITY CALCULATOR ---
function updateElectricityText() {
  const texts = langText[currentLang].electricity;
  document.getElementById("title").textContent = texts.title;
  document.getElementById("inputTypeLabel").textContent = texts.inputTypeLabel;
  const inputTypeSelect = document.getElementById("inputType");
  texts.inputTypeOptions.forEach((text, i) => {
    if (inputTypeSelect.options[i]) inputTypeSelect.options[i].textContent = text;
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

  if (isNaN(value) || isNaN(hours) || isNaN(days) || isNaN(price) || (inputType === "amp" && isNaN(voltage))) {
    document.getElementById("resultBox").innerHTML = `⚠️ <strong>Please enter valid numbers.</strong>`;
    return;
  }

  let powerKW = inputType === "amp" ? (value * voltage) / 1000 : inputType === "watt" ? value / 1000 : value;
  const dailyKWh = powerKW * hours, totalKWh = dailyKWh * days;
  const dailyCost = dailyKWh * price, totalCost = totalKWh * price;

  document.getElementById("resultBox").innerHTML = langText[currentLang].electricity.results(dailyKWh, dailyCost, totalKWh, totalCost, days);
}

// --- WIRE CALCULATOR ---
function updateWireText() {
  const texts = langText[currentLang].wire;
  document.getElementById("wireTitle").textContent = texts.title;
  document.getElementById("wireInputTypeLabel").textContent = texts.inputTypeLabel;
  const inputTypeWireSelect = document.getElementById("inputTypeWire");
  texts.inputTypeOptions.forEach((text, i) => {
    if (inputTypeWireSelect.options[i]) inputTypeWireSelect.options[i].textContent = text;
  });
  document.getElementById("wireValueLabel").textContent = texts.valueLabel;
  document.getElementById("wireVoltageLabel").textContent = texts.voltageLabel;
  document.getElementById("wireLengthLabel").textContent = texts.lengthLabel;
  document.getElementById("wireMaterialLabel").textContent = texts.materialLabel;
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

  if (isNaN(inputValue) || isNaN(voltageWire) || isNaN(length) || isNaN(dropPercent)) {
    document.getElementById("results").innerHTML = `⚠️ <strong>Please enter valid numbers.</strong>`;
    return;
  }

  let resistivity = material === "copper" ? 0.0175 : 0.0282;
  let current = 0, power = 0;

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
  if (requiredArea <= 0 || !isFinite(requiredArea)) requiredArea = 0;

  let breaker = Math.ceil(current * 1.25);
  let actualDrop = requiredArea > 0 ? (2 * length * current * resistivity) / requiredArea : 0;

  document.getElementById("results").innerHTML = langText[currentLang].wire.results(power, current, requiredArea, actualDrop, breaker);
}

// --- SOLAR CALCULATOR ---
function updateSolarText() {
  const texts = langText[currentLang].solar;
  document.getElementById("solarTitle").textContent = texts.title;
  document.getElementById("loadsTitle").textContent = texts.loadsTitle;
  document.getElementById("paramsTitle").textContent = texts.paramsTitle;
  document.getElementById("batteryTypeLabel").textContent = texts.batteryTypeLabel;
  const batteryTypeSelect = document.getElementById("batteryType");
  batteryTypeSelect.innerHTML = `<option value="lead-acid">${texts.batteryTypeOptions[0]}</option><option value="lithium">${texts.batteryTypeOptions[1]}</option>`;
  document.getElementById("systemVoltageLabel").textContent = texts.systemVoltageLabel;
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

    let powerUnitSelectorHTML = "", acVoltageHTML = "";

    if (key === "ac") {
      const options = langText[currentLang].solar.powerUnitOptions.map((opt, i) => {
        const value = langText["en"].solar.powerUnitOptions[i].toLowerCase().replace("/hr", "");
        return `<option value="${value}">${opt}</option>`;
      }).join("");
      powerUnitSelectorHTML = `<div class="input-group"><label>${texts.powerUnitLabel}</label><select class="power-unit-selector">${options}</select></div>`;
      acVoltageHTML = `<div class="input-group ac-voltage-group hidden"><label>${texts.acVoltageLabel}</label><input type="number" class="ac-voltage-input" value="220"></div>`;
    }

    entryDiv.innerHTML = `
      <div class="load-entry-header">
        <input type="checkbox" class="load-checkbox" id="check-${key}"><label for="check-${key}">${loadName}</label>
      </div>
      <div class="load-inputs hidden">
        <div class="input-group"><label>${texts.quantityLabel}</label><input type="number" class="quantity-input" value="1" min="1"></div>
        ${powerUnitSelectorHTML}
        <div class="input-group"><label>${texts.powerLabel}</label><input type="number" class="power-input" value="${loadData.power}" ${!loadData.isCustom ? "disabled" : ""}></div>
        ${acVoltageHTML}
        <div class="input-group"><label>${texts.hoursLabel}</label><input type="number" class="hours-input" value="1" min="0"></div>
      </div>`;
    loadsChecklist.appendChild(entryDiv);
  }
}

function addSolarEventListeners() {
  document.querySelectorAll(".load-checkbox").forEach((c) =>
    c.addEventListener("change", (e) => {
      e.target.closest(".load-entry").querySelector(".load-inputs").classList.toggle("hidden", !e.target.checked);
      calculateSolar();
    })
  );

  document.querySelectorAll("#solar-section input, #solar-section select").forEach((el) => el.addEventListener("input", calculateSolar));

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
  let totalWattHours = 0, totalPower = 0;
  document.querySelectorAll(".load-checkbox:checked").forEach((c) => {
    const p = c.closest(".load-entry"), key = p.dataset.loadKey;
    const quantity = parseFloat(p.querySelector(".quantity-input").value) || 0;
    const hours = parseFloat(p.querySelector(".hours-input").value) || 0;
    let power = parseFloat(p.querySelector(".power-input").value) || 0;

    if (key === "ac") {
      const unit = p.querySelector(".power-unit-selector").value;
      if (unit === "kilowatt") power *= 1000;
      else if (unit === "ampere") {
        const voltage = parseFloat(p.querySelector(".ac-voltage-input").value) || 220;
        power = power * voltage;
      } else if (unit === "ton") power *= 1200;
      else if (unit === "btu") power *= 0.1;
    }
    totalWattHours += quantity * power * hours;
    totalPower += quantity * power;
  });

  const solarResults = document.getElementById("solarResults");
  const batteryType = document.getElementById("batteryType").value;
  const systemVoltage = parseFloat(document.getElementById("systemVoltage").value);
  const lossesPercent = parseFloat(document.getElementById("lossesPercent").value) || 15;
  const gridHours = parseFloat(document.getElementById("gridHours").value) || 0;
  const autonomy = parseFloat(document.getElementById("autonomyDays").value) || 1;
  const sunHours = parseFloat(document.getElementById("sunHours").value) || 1;

  if (totalWattHours === 0) {
    solarResults.innerHTML = langText[currentLang].solar.resultsDefault;
    return;
  }

  const dod = batteryType === "lithium" ? 0.8 : 0.5;
  const eff = 1 - lossesPercent / 100;
  const pSF = 1.25, iSF = 1.25, cSF = 1.25;

  const consumption = totalWattHours / eff;
  const batAh = (consumption * autonomy) / systemVoltage / dod;
  const panW = (consumption / sunHours) * pSF;
  const invW = totalPower * iSF;
  const invKW = invW / 1000;
  const conA = panW / systemVoltage / cSF;
  const note = langText[currentLang].solar.gridNote(gridHours);

  solarResults.innerHTML = langText[currentLang].solar.results(totalWattHours, batAh, panW, invKW, conA, note, systemVoltage, dod);
}

// --- HVAC CALCULATOR ---
function updateHVACText() {
  const texts = langText[currentLang].hvac;
  document.getElementById('hvacResultBox').style.whiteSpace = "normal";

  document.getElementById('hvacTitle').textContent = texts.title;
  document.getElementById('calculationTypeLabel').textContent = texts.calculationTypeLabel;

  const calculationTypeSelect = document.getElementById('calculationType');
  texts.calculationTypeOptions.forEach((text, i) => {
    if (calculationTypeSelect.options[i]) calculationTypeSelect.options[i].textContent = text;
  });

  document.getElementById('calculationModeLabel').textContent = texts.calculationModeLabel;
  const calculationModeSelect = document.getElementById('calculationMode');
  texts.calculationModeOptions.forEach((text, i) => {
    if (calculationModeSelect.options[i]) calculationModeSelect.options[i].textContent = text;
  });

  document.getElementById('roomAreaLabel').textContent = texts.roomAreaLabel;
  document.getElementById('roomHeightLabel').textContent = texts.roomHeightLabel;
  document.getElementById('insulationLabel').textContent = texts.insulationLabel;

  const insulationSelect = document.getElementById('insulation');
  texts.insulationOptions.forEach((text, i) => {
    if (insulationSelect.options[i]) insulationSelect.options[i].textContent = text;
  });

  document.getElementById('sunExposureLabel').textContent = texts.sunExposureLabel;
  const sunExposureSelect = document.getElementById('sunExposure');
  texts.sunExposureOptions.forEach((text, i) => {
    if (sunExposureSelect.options[i]) sunExposureSelect.options[i].textContent = text;
  });

  document.getElementById('peopleLabel').textContent = texts.peopleLabel;
  document.getElementById('windowsLabel').textContent = texts.windowsLabel;
  document.getElementById('appliancesLabel').textContent = texts.appliancesLabel;

  const advancedTitle = document.querySelector('#advancedOptions h3');
  if (advancedTitle) advancedTitle.textContent = texts.advancedTitle;

  const climateSections = document.querySelectorAll('#advancedOptions .advanced-section h4');
  if (climateSections[0]) climateSections[0].textContent = texts.climateLabel;

  document.getElementById('outdoorTempLabel').textContent = texts.outdoorTempLabel;
  document.getElementById('indoorTempLabel').textContent = texts.indoorTempLabel;
  document.getElementById('humidityLabel').textContent = texts.humidityLabel;
  document.getElementById('outdoorWinterTempLabel').textContent = texts.outdoorWinterTempLabel;
  document.getElementById('indoorHeatingTempLabel').textContent = texts.indoorHeatingTempLabel;

  if (climateSections[1]) climateSections[1].textContent = texts.thermalLabel;

  document.getElementById('wallTypeLabel').textContent = texts.wallTypeLabel;
  const wallTypeSelect = document.getElementById('wallType');
  if (wallTypeSelect && texts.wallTypeOptions) {
    texts.wallTypeOptions.forEach((text, i) => {
      if (wallTypeSelect.options[i]) wallTypeSelect.options[i].textContent = text;
    });
  }

  document.getElementById('windowTypeLabel').textContent = texts.windowTypeLabel;
  const windowTypeSelect = document.getElementById('windowType');
  if (windowTypeSelect && texts.windowTypeOptions) {
    texts.windowTypeOptions.forEach((text, i) => {
      if (windowTypeSelect.options[i]) windowTypeSelect.options[i].textContent = text;
    });
  }

  document.getElementById('frameTypeLabel').textContent = texts.frameTypeLabel;
  const frameTypeSelect = document.getElementById('frameType');
  if (frameTypeSelect && texts.frameTypeOptions) {
    texts.frameTypeOptions.forEach((text, i) => {
      if (frameTypeSelect.options[i]) frameTypeSelect.options[i].textContent = text;
    });
  }

  document.getElementById('roomDirectionLabel').textContent = texts.roomDirectionLabel;
  const roomDirectionSelect = document.getElementById('roomDirection');
  if (roomDirectionSelect && texts.roomDirectionOptions) {
    texts.roomDirectionOptions.forEach((text, i) => {
      if (roomDirectionSelect.options[i]) roomDirectionSelect.options[i].textContent = text;
    });
  }

  if (climateSections[2]) climateSections[2].textContent = texts.ventilationLabel;

  document.getElementById('roomTypeLabel').textContent = texts.roomTypeLabel;
  const roomTypeSelect = document.getElementById('roomType');
  if (roomTypeSelect && texts.roomTypeOptions) {
    texts.roomTypeOptions.forEach((text, i) => {
      if (roomTypeSelect.options[i]) roomTypeSelect.options[i].textContent = text;
    });
  }

  document.getElementById('achLabel').textContent = texts.achLabel;
  document.getElementById('peopleActivityLabel').textContent = texts.peopleActivityLabel;

  const peopleActivitySelect = document.getElementById('peopleActivity');
  if (peopleActivitySelect && texts.peopleActivityOptions) {
    texts.peopleActivityOptions.forEach((text, i) => {
      if (peopleActivitySelect.options[i]) peopleActivitySelect.options[i].textContent = text;
    });
  }
}

function calculateHVAC() {
  const calculationType = document.getElementById('calculationType').value;
  const calculationMode = document.getElementById('calculationMode').value;

  // إخفاء جميع نتائج الاحترافية أولاً
  document.getElementById('professionalResults').classList.add('hidden');
  document.getElementById('loadBreakdown').classList.add('hidden');

  document.getElementById('quickResults').classList.remove('hidden');

  if (calculationMode === 'quick') {
    if (calculationType === 'cooling') {
      calculateQuickCooling();
    } else {
      calculateQuickHeating();
    }
  } else {
    // في الوضع الاحترافي، إخفاء السريع وإظهار الاحترافي
    document.getElementById('quickResults').classList.add('hidden');
    document.getElementById('professionalResults').classList.remove('hidden');

    if (calculationType === 'cooling') {
      calculateProfessionalCooling();
    } else {
      calculateProfessionalHeating();
    }
  }
}

function calculateQuickCooling() {
  const A = parseFloat(document.getElementById('roomArea').value) || 20;
  const H = parseFloat(document.getElementById('roomHeight').value) || 2.7;
  const insulation = document.getElementById('insulation').value;
  const sun = document.getElementById('sunExposure').value;
  const people = parseInt(document.getElementById('peopleCount').value) || 2;
  const windows = parseInt(document.getElementById('windowsCount').value) || 2;
  const appliances = parseFloat(document.getElementById('appliancesW').value) || 300;

  const volume = A * H;
  let baseBTU = volume * 150;

  const insulationFactors = { 'excellent': 0.7, 'good': 0.85, 'medium': 1.0, 'poor': 1.25, 'very-poor': 1.5 };
  baseBTU *= insulationFactors[insulation] || 1.0;

  const sunFactors = { 'low': 0.9, 'medium': 1.0, 'high': 1.3 };
  baseBTU *= sunFactors[sun] || 1.0;

  baseBTU += people * 600;
  baseBTU += windows * 900;
  baseBTU += appliances * 3.4;

  const btu = Math.round(baseBTU);
  const tons = (btu / 12000).toFixed(2);
  const kw = (btu / 3412).toFixed(2);

  const recommendedSize = getRecommendedSize(btu);
  const annualConsumption = (parseFloat(kw) * 1200).toFixed(0);
  const cost = calculateCost(annualConsumption);

  document.getElementById('quickResults').innerHTML = langText[currentLang].hvac.coolingResults(
    btu.toLocaleString(), tons, kw, recommendedSize, annualConsumption, cost
  );
  document.getElementById('professionalResults').classList.add('hidden');
  document.getElementById('loadBreakdown').classList.add('hidden');
}

function calculateQuickHeating() {
  const A = parseFloat(document.getElementById('roomArea').value) || 20;
  const H = parseFloat(document.getElementById('roomHeight').value) || 2.7;
  const insulation = document.getElementById('insulation').value;
  const people = parseInt(document.getElementById('peopleCount').value) || 2;
  const windows = parseInt(document.getElementById('windowsCount').value) || 2;
  const appliances = parseFloat(document.getElementById('appliancesW').value) || 300;

  const outdoorWinterTemp = parseFloat(document.getElementById('outdoorWinterTemp').value) || -5;
  const indoorHeatingTemp = parseFloat(document.getElementById('indoorHeatingTemp').value) || 22;
  const deltaT = indoorHeatingTemp - outdoorWinterTemp;

  const volume = A * H;
  let baseHeatingLoad = volume * 10 * deltaT;

  const insulationFactors = { 'excellent': 0.6, 'good': 0.8, 'medium': 1.0, 'poor': 1.4, 'very-poor': 1.8 };
  baseHeatingLoad *= insulationFactors[insulation] || 1.0;

  baseHeatingLoad += people * 400;
  baseHeatingLoad += appliances * 3.4;
  baseHeatingLoad -= windows * 200;

  baseHeatingLoad = Math.max(baseHeatingLoad, volume * 5);

  const btu = Math.round(baseHeatingLoad);
  const kw = (btu / 3412).toFixed(2);

  const recommendedSize = getRecommendedHeatingSize(btu);
  const annualConsumption = (parseFloat(kw) * 1500).toFixed(0);
  const cost = calculateCost(annualConsumption);

  document.getElementById('quickResults').innerHTML = langText[currentLang].hvac.heatingResults(
    btu.toLocaleString(), kw, recommendedSize, annualConsumption, cost
  );
  document.getElementById('professionalResults').classList.add('hidden');
}

function calculateProfessionalCooling() {
  const A = parseFloat(document.getElementById('roomArea').value) || 20;
  const H = parseFloat(document.getElementById('roomHeight').value) || 2.7;
  const volume = A * H;

  const outdoorTemp = parseFloat(document.getElementById('outdoorTemp').value) || 35;
  const indoorTemp = parseFloat(document.getElementById('indoorTemp').value) || 24;
  const deltaT = outdoorTemp - indoorTemp;

  const people = parseInt(document.getElementById('peopleCount').value) || 2;
  const activity = document.getElementById('peopleActivity').value;
  const windows = parseInt(document.getElementById('windowsCount').value) || 2;
  const appliances = parseFloat(document.getElementById('appliancesW').value) || 300;

  const wallLoad = calculateWallLoad(A, H, deltaT);
  const windowConductionLoad = calculateWindowLoad(windows, deltaT);
  const solarLoad = calculateSolarLoad(A, windows);
  const infiltrationLoad = calculateInfiltrationLoad(volume);
  const peopleLoad = calculatePeopleLoad(people, activity);
  const applianceLoad = calculateApplianceLoad(appliances);

  const sensibleLoad = wallLoad + windowConductionLoad + peopleLoad.sensible + applianceLoad + solarLoad + infiltrationLoad.sensible;
  const latentLoad = peopleLoad.latent + infiltrationLoad.latent;
  const totalLoad = sensibleLoad + latentLoad;

  const safetyMargin = 1.15;
  const finalLoad = totalLoad * safetyMargin;

  const btu = Math.round(finalLoad);
  const tons = (btu / 12000).toFixed(2);
  const kw = (btu / 3412).toFixed(2);

  const recommendedSize = getRecommendedSize(btu);
  const annualConsumption = (parseFloat(kw) * 1200).toFixed(0);
  const cost = calculateCost(annualConsumption);

  const texts = langText[currentLang].hvac;
  const breakdown = `
    <div class="load-breakdown">
      <h4>${texts.loadBreakdownTitle}</h4>
      <p>🏠 ${texts.wallsWindowsLabel}: <strong>${Math.round(wallLoad + windowConductionLoad).toLocaleString()}</strong> BTU/hr</p>
      <p>☀️ ${texts.solarLabel}: <strong>${Math.round(solarLoad).toLocaleString()}</strong> BTU/hr</p>
      <p>💨 ${texts.infiltrationLabel}: <strong>${Math.round(infiltrationLoad.total).toLocaleString()}</strong> BTU/hr</p>
      <p>👥 ${texts.peopleLabelBreakdown}: <strong>${Math.round(peopleLoad.sensible + peopleLoad.latent).toLocaleString()}</strong> BTU/hr</p>
      <p>🔌 ${texts.appliancesLabelBreakdown}: <strong>${Math.round(applianceLoad).toLocaleString()}</strong> BTU/hr</p>
      <p>🛡️ ${texts.safetyMarginLabel} (15%): <strong>${Math.round(totalLoad * 0.15).toLocaleString()}</strong> BTU/hr</p>
    </div>
  `;

  document.getElementById('quickResults').classList.add('hidden');
  document.getElementById('professionalResults').innerHTML = langText[currentLang].hvac.professionalResults(
    Math.round(sensibleLoad).toLocaleString(),
    Math.round(latentLoad).toLocaleString(),
    btu.toLocaleString(),
    breakdown,
    'Cooling'
  );
  document.getElementById('professionalResults').classList.remove('hidden');
}

function calculateProfessionalHeating() {
  const A = parseFloat(document.getElementById('roomArea').value) || 20;
  const H = parseFloat(document.getElementById('roomHeight').value) || 2.7;
  const volume = A * H;

  const outdoorWinterTemp = parseFloat(document.getElementById('outdoorWinterTemp').value) || -5;
  const indoorHeatingTemp = parseFloat(document.getElementById('indoorHeatingTemp').value) || 22;
  const deltaT = indoorHeatingTemp - outdoorWinterTemp;

  const people = parseInt(document.getElementById('peopleCount').value) || 2;
  const appliances = parseFloat(document.getElementById('appliancesW').value) || 300;

  const wallHeatLoss = calculateWallHeatLoss(A, H, deltaT);
  const windows = parseInt(document.getElementById('windowsCount').value) || 2;
  const windowHeatLoss = calculateWindowHeatLoss(windows, deltaT);
  const infiltrationHeatLoss = calculateHeatingInfiltration(volume, deltaT);
  const peopleHeatGain = calculatePeopleHeatGain(people);
  const applianceHeatGain = calculateApplianceHeatGain(appliances);

  const totalHeatLoss = wallHeatLoss + windowHeatLoss + infiltrationHeatLoss;
  const totalInternalHeat = peopleHeatGain + applianceHeatGain;

  let netHeatingLoad = totalHeatLoss - totalInternalHeat;
  netHeatingLoad = Math.max(netHeatingLoad, volume * 3);

  const safetyMargin = 1.20;
  const finalHeatingLoad = netHeatingLoad * safetyMargin;

  const btu = Math.round(finalHeatingLoad);
  const kw = (btu / 3412).toFixed(2);

  const recommendedSize = getRecommendedHeatingSize(btu);
  const annualConsumption = (parseFloat(kw) * 1500).toFixed(0);
  const cost = calculateCost(annualConsumption);

  const texts = langText[currentLang].hvac;
  const breakdown = `
    <div class="load-breakdown heating-breakdown">
      <h4>${texts.loadBreakdownTitle}</h4>
      <p>🏠 ${texts.wallsWindowsLabel}: <strong>${Math.round(wallHeatLoss + windowHeatLoss).toLocaleString()}</strong> BTU/hr</p>
      <p>💨 ${texts.infiltrationLabel}: <strong>${Math.round(infiltrationHeatLoss).toLocaleString()}</strong> BTU/hr</p>
      <p>👥 ${texts.peopleLabelBreakdown}: <strong>+${Math.round(peopleHeatGain).toLocaleString()}</strong> BTU/hr</p>
      <p>🔌 ${texts.appliancesLabelBreakdown}: <strong>+${Math.round(applianceHeatGain).toLocaleString()}</strong> BTU/hr</p>
      <p>🛡️ ${texts.safetyMarginLabel} (20%): <strong>${Math.round(netHeatingLoad * 0.20).toLocaleString()}</strong> BTU/hr</p>
    </div>
  `;

  document.getElementById('quickResults').classList.add('hidden');
  document.getElementById('professionalResults').innerHTML = langText[currentLang].hvac.professionalResults(
    '', '', btu.toLocaleString(), breakdown, 'Heating'
  );
  document.getElementById('professionalResults').classList.remove('hidden');
}

// HVAC Helper Functions
function calculateWallLoad(area, height, deltaT) {
  const wallType = document.getElementById('wallType').value;
  const windows = parseInt(document.getElementById('windowsCount').value) || 2;

  const roomLength = Math.sqrt(area);
  const totalWallArea = 2 * (roomLength + Math.sqrt(area)) * height;
  const windowArea = windows * 1.5;
  const effectiveWallArea = totalWallArea - windowArea;

  const uValues = {
    'brick-insulated': 0.35,
    'brick-uninsulated': 1.8,
    'concrete': 2.3,
    'wood': 1.0,
    'metal': 5.2
  };

  const uValue = uValues[wallType] || 1.8;
  return effectiveWallArea * uValue * deltaT * 3.412;
}

function calculateWindowLoad(windows, deltaT) {
  const windowType = document.getElementById('windowType').value;
  const frameType = document.getElementById('frameType').value;

  const uValues = {
    'single': 5.7,
    'double': 2.8,
    'triple': 1.8,
    'low-e': 1.4
  };

  const frameFactors = {
    'wood': 1.0,
    'pvc': 0.9,
    'aluminum': 1.3,
    'aluminum-thermal': 1.0
  };

  const windowArea = windows * 1.5;
  const uValue = uValues[windowType] || 2.8;
  const frameFactor = frameFactors[frameType] || 1.0;

  return windowArea * uValue * frameFactor * deltaT * 3.412;
}

function calculateInfiltrationLoad(volume) {
  const ach = parseFloat(document.getElementById('ach').value) || 1.5;
  const outdoorTemp = parseFloat(document.getElementById('outdoorTemp').value) || 35;
  const indoorTemp = parseFloat(document.getElementById('indoorTemp').value) || 24;
  const humidity = parseFloat(document.getElementById('humidity').value) || 60;
  const deltaT = outdoorTemp - indoorTemp;

  const sensibleLoad = 0.33 * ach * volume * deltaT;
  const humidityRatioOut = 0.62198 * (0.01 * humidity * 4.128) / (101.325 - 0.01 * humidity * 4.128);
  const humidityRatioIn = 0.62198 * (0.5 * 2.339) / (101.325 - 0.5 * 2.339);
  const latentLoad = 4840 * ach * volume * (humidityRatioOut - humidityRatioIn);

  return {
    sensible: sensibleLoad,
    latent: latentLoad,
    total: sensibleLoad + latentLoad
  };
}

function calculateSolarLoad(area, windows) {
  const direction = document.getElementById('roomDirection').value;
  const sun = document.getElementById('sunExposure').value;
  const windowType = document.getElementById('windowType').value;

  const shgcValues = {
    'single': 0.86,
    'double': 0.76,
    'triple': 0.68,
    'low-e': 0.40
  };

  const solarIntensity = {
    'north': 80,
    'south': 220,
    'east': 240,
    'west': 280
  };

  const shadingFactors = {
    'low': 0.3,
    'medium': 0.6,
    'high': 0.9
  };

  const windowArea = windows * 1.5;
  const shgc = shgcValues[windowType] || 0.76;
  const intensity = solarIntensity[direction] || 200;
  const shading = shadingFactors[sun] || 0.6;

  return windowArea * shgc * intensity * shading * 3.412;
}

function calculatePeopleLoad(people, activity) {
  const heatGains = {
    'seated': { sensible: 250, latent: 200 },
    'light-office': { sensible: 300, latent: 250 },
    'standing': { sensible: 400, latent: 300 },
    'moderate': { sensible: 500, latent: 450 },
    'heavy': { sensible: 800, latent: 700 }
  };
  const gains = heatGains[activity] || heatGains['light-office'];
  return {
    sensible: people * gains.sensible,
    latent: people * gains.latent
  };
}

function calculateApplianceLoad(appliances) {
  return appliances * 3.412;
}

function calculateWallHeatLoss(area, height, deltaT) {
  const wallType = document.getElementById('wallType').value;
  const windows = parseInt(document.getElementById('windowsCount').value) || 2;

  const roomLength = Math.sqrt(area);
  const totalWallArea = 2 * (roomLength + Math.sqrt(area)) * height;
  const windowArea = windows * 1.5;
  const effectiveWallArea = totalWallArea - windowArea;

  const uValues = {
    'brick-insulated': 0.35,
    'brick-uninsulated': 1.8,
    'concrete': 2.3,
    'wood': 1.0,
    'metal': 5.2
  };

  const uValue = uValues[wallType] || 1.8;
  return effectiveWallArea * uValue * deltaT * 3.412;
}

function calculateWindowHeatLoss(windows, deltaT) {
  const windowType = document.getElementById('windowType').value;

  const uValues = {
    'single': 5.7,
    'double': 2.8,
    'triple': 1.8,
    'low-e': 1.4
  };

  const windowArea = windows * 1.5;
  const uValue = uValues[windowType] || 2.8;
  return windowArea * uValue * deltaT * 3.412;
}

function calculateHeatingInfiltration(volume, deltaT) {
  const ach = parseFloat(document.getElementById('ach').value) || 1.0;
  return 0.33 * ach * volume * deltaT;
}

function calculatePeopleHeatGain(people) {
  return people * 400;
}

function calculateApplianceHeatGain(appliances) {
  return appliances * 3.412 * 0.3;
}

function getRecommendedSize(btu) {
  const standardSizes = [
    { tons: 0.75, btu: 9000 },
    { tons: 1.0, btu: 12000 },
    { tons: 1.5, btu: 18000 },
    { tons: 2.0, btu: 24000 },
    { tons: 2.5, btu: 30000 },
    { tons: 3.0, btu: 36000 },
    { tons: 4.0, btu: 48000 },
    { tons: 5.0, btu: 60000 }
  ];

  const recommended = standardSizes.find(size => size.btu >= btu) || standardSizes[standardSizes.length - 1];
  return `${recommended.tons} Ton (${recommended.btu.toLocaleString()} BTU)`;
}

function getRecommendedHeatingSize(btu) {
  const heatingSizes = [
    { capacity: 9000, type: "Small Heater" },
    { capacity: 12000, type: "Medium Heater" },
    { capacity: 18000, type: "Large Heater" },
    { capacity: 24000, type: "X-Large Heater" },
    { capacity: 30000, type: "XX-Large Heater" },
    { capacity: 36000, type: "Commercial Heater" },
    { capacity: 48000, type: "Commercial Heater" }
  ];

  const recommended = heatingSizes.find(size => size.capacity >= btu) || heatingSizes[heatingSizes.length - 1];
  return `${recommended.type} (${recommended.capacity.toLocaleString()} BTU)`;
}

function calculateCost(kwh) {
  const price = 0.15;
  return `$${(kwh * price).toFixed(2)}`;
}

// --- INITIALIZATION ---
document.addEventListener("DOMContentLoaded", () => {
  allTabs.forEach((tab) => tab.addEventListener("click", switchTab));
  setLang("en");
  fetchVisitorCount();
});

function fetchVisitorCount() {
  const apiUrl = "https://hitscounter.dev/api/hit?output=json&url=https%3A%2F%2Fm3lesh.github.io%2FElectricity-Consumption-Calculator%2F&tz=Turkey";
  const totalCountElement = document.getElementById("total-visitor-count");
  const todayCountElement = document.getElementById("today-visitor-count");

  if (!totalCountElement || !todayCountElement) {
    console.error("Visitor count placeholder elements not found.");
    return;
  }

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      totalCountElement.textContent = data.total_hits;
      todayCountElement.textContent = data.today_hits;
    })
    .catch((error) => {
      console.error("Failed to fetch visitor count:", error);
      totalCountElement.textContent = "N/A";
      todayCountElement.textContent = "N/A";
    });
}