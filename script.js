// Conversion formulas - all conversions to base units
const conversionRates = {
    length: {
        meter: 1,
        kilometer: 1000,
        centimeter: 0.01,
        millimeter: 0.001,
        mile: 1609.344,
        yard: 0.9144,
        foot: 0.3048,
        inch: 0.0254
    },
    weight: {
        kilogram: 1,
        gram: 0.001,
        milligram: 0.000001,
        'metric-ton': 1000,
        pound: 0.45359237,
        ounce: 0.028349523125,
        ton: 907.18474
    },
    volume: {
        liter: 1,
        milliliter: 0.001,
        'cubic-meter': 1000,
        gallon: 3.785411784,
        quart: 0.946352946,
        pint: 0.473176473,
        cup: 0.2365882365,
        'fluid-ounce': 0.0295735295625
    },
    area: {
        'square-meter': 1,
        'square-kilometer': 1000000,
        'square-centimeter': 0.0001,
        hectare: 10000,
        'square-mile': 2589988.110336,
        acre: 4046.8564224,
        'square-yard': 0.83612736,
        'square-foot': 0.09290304,
        'square-inch': 0.00064516
    },
    time: {
        second: 1,
        minute: 60,
        hour: 3600,
        day: 86400,
        week: 604800,
        month: 2592000, // 30 days average
        year: 31536000 // 365 days
    },
    speed: {
        'meter-per-second': 1,
        'kilometer-per-hour': 0.277777778,
        'mile-per-hour': 0.44704,
        'foot-per-second': 0.3048,
        knot: 0.514444444
    },
    digital: {
        bit: 1,
        byte: 8,
        kilobyte: 8000,
        megabyte: 8000000,
        gigabyte: 8000000000,
        terabyte: 8000000000000,
        petabyte: 8000000000000000
    },
    energy: {
        joule: 1,
        kilojoule: 1000,
        calorie: 4.184,
        kilocalorie: 4184,
        'watt-hour': 3600,
        'kilowatt-hour': 3600000,
        btu: 1055.05585
    },
    pressure: {
        pascal: 1,
        kilopascal: 1000,
        bar: 100000,
        atmosphere: 101325,
        psi: 6894.757,
        torr: 133.322
    },
    angle: {
        degree: 1,
        radian: 57.2957795,
        gradian: 0.9
    },
    frequency: {
        hertz: 1,
        kilohertz: 1000,
        megahertz: 1000000,
        gigahertz: 1000000000
    }
};

// Converter Configurations
const converterConfig = {
    "Distance & Length": [
        {
            id: "length",
            title: "Length",
            description: "Convert between meters, feet, inches, kilometers, miles, and more",
            icon: '<path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>',
            units: [
                { value: "meter", label: "Meter (m)" },
                { value: "kilometer", label: "Kilometer (km)" },
                { value: "centimeter", label: "Centimeter (cm)" },
                { value: "millimeter", label: "Millimeter (mm)" },
                { value: "mile", label: "Mile (mi)" },
                { value: "yard", label: "Yard (yd)" },
                { value: "foot", label: "Foot (ft)" },
                { value: "inch", label: "Inch (in)" }
            ],
            defaultFrom: "meter",
            defaultTo: "foot"
        }
    ],
    "Weight & Mass": [
        {
            id: "weight",
            title: "Weight / Mass",
            description: "Convert between kilograms, pounds, ounces, grams, and more",
            icon: '<path d="M12 2L8 8H16L12 2Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M8 8v8a4 4 0 0 0 8 0V8" stroke="currentColor" stroke-width="2"/>',
            units: [
                { value: "kilogram", label: "Kilogram (kg)" },
                { value: "gram", label: "Gram (g)" },
                { value: "milligram", label: "Milligram (mg)" },
                { value: "metric-ton", label: "Metric Ton (t)" },
                { value: "pound", label: "Pound (lb)" },
                { value: "ounce", label: "Ounce (oz)" },
                { value: "ton", label: "Ton (US)" }
            ],
            defaultFrom: "kilogram",
            defaultTo: "pound"
        }
    ],
    "Temperature": [
        {
            id: "temperature",
            title: "Temperature",
            description: "Convert between Celsius, Fahrenheit, and Kelvin",
            icon: '<path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
            units: [
                { value: "celsius", label: "Celsius (°C)" },
                { value: "fahrenheit", label: "Fahrenheit (°F)" },
                { value: "kelvin", label: "Kelvin (K)" }
            ],
            defaultFrom: "celsius",
            defaultTo: "fahrenheit"
        }
    ],
    "Volume": [
        {
            id: "volume",
            title: "Volume",
            description: "Convert between liters, gallons, milliliters, cubic meters, and more",
            icon: '<path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><line x1="3" y1="6" x2="21" y2="6" stroke="currentColor" stroke-width="2"/>',
            units: [
                { value: "liter", label: "Liter (L)" },
                { value: "milliliter", label: "Milliliter (mL)" },
                { value: "cubic-meter", label: "Cubic Meter (m³)" },
                { value: "gallon", label: "Gallon (US)" },
                { value: "quart", label: "Quart (US)" },
                { value: "pint", label: "Pint (US)" },
                { value: "cup", label: "Cup (US)" },
                { value: "fluid-ounce", label: "Fluid Ounce (fl oz)" }
            ],
            defaultFrom: "liter",
            defaultTo: "gallon"
        }
    ],
    "Area": [
        {
            id: "area",
            title: "Area",
            description: "Convert between square meters, acres, hectares, and square feet",
            icon: '<rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" stroke-width="2"/><path d="M3 9h18M3 15h18M9 21V3M15 21V3" stroke="currentColor" stroke-width="2"/>',
            units: [
                { value: "square-meter", label: "Square Meter (m²)" },
                { value: "square-kilometer", label: "Square Kilometer (km²)" },
                { value: "square-centimeter", label: "Square Centimeter (cm²)" },
                { value: "hectare", label: "Hectare (ha)" },
                { value: "square-mile", label: "Square Mile (mi²)" },
                { value: "acre", label: "Acre" },
                { value: "square-yard", label: "Square Yard (yd²)" },
                { value: "square-foot", label: "Square Foot (ft²)" },
                { value: "square-inch", label: "Square Inch (in²)" }
            ],
            defaultFrom: "square-meter",
            defaultTo: "square-foot"
        }
    ],
    "Time": [
        {
            id: "time",
            title: "Time",
            description: "Convert between seconds, minutes, hours, days, weeks, and years",
            icon: '<circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="2"/><path d="M12 7v5l3 3" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>',
            units: [
                { value: "second", label: "Second (s)" },
                { value: "minute", label: "Minute (min)" },
                { value: "hour", label: "Hour (h)" },
                { value: "day", label: "Day" },
                { value: "week", label: "Week" },
                { value: "month", label: "Month" },
                { value: "year", label: "Year" }
            ],
            defaultFrom: "hour",
            defaultTo: "minute"
        }
    ],
    "Speed": [
        {
            id: "speed",
            title: "Speed",
            description: "Convert between meters per second, kilometers per hour, and miles per hour",
            icon: '<path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>',
            units: [
                { value: "meter-per-second", label: "Meter/Second (m/s)" },
                { value: "kilometer-per-hour", label: "Kilometer/Hour (km/h)" },
                { value: "mile-per-hour", label: "Mile/Hour (mph)" },
                { value: "foot-per-second", label: "Foot/Second (ft/s)" },
                { value: "knot", label: "Knot (kn)" }
            ],
            defaultFrom: "meter-per-second",
            defaultTo: "mile-per-hour"
        }
    ],
    "Digital Storage": [
        {
            id: "digital",
            title: "Digital Storage",
            description: "Convert between bytes, kilobytes, megabytes, gigabytes, and terabytes",
            icon: '<rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" stroke-width="2"/><rect x="9" y="9" width="6" height="6" stroke="currentColor" stroke-width="2"/>',
            units: [
                { value: "bit", label: "Bit (b)" },
                { value: "byte", label: "Byte (B)" },
                { value: "kilobyte", label: "Kilobyte (KB)" },
                { value: "megabyte", label: "Megabyte (MB)" },
                { value: "gigabyte", label: "Gigabyte (GB)" },
                { value: "terabyte", label: "Terabyte (TB)" },
                { value: "petabyte", label: "Petabyte (PB)" }
            ],
            defaultFrom: "megabyte",
            defaultTo: "gigabyte"
        }
    ],
    "Energy": [
        {
            id: "energy",
            title: "Energy",
            description: "Convert between joules, calories, kilowatt-hours, and BTUs",
            icon: '<path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>',
            units: [
                { value: "joule", label: "Joule (J)" },
                { value: "kilojoule", label: "Kilojoule (kJ)" },
                { value: "calorie", label: "Calorie (cal)" },
                { value: "kilocalorie", label: "Kilocalorie (kcal)" },
                { value: "watt-hour", label: "Watt-hour (Wh)" },
                { value: "kilowatt-hour", label: "Kilowatt-hour (kWh)" },
                { value: "btu", label: "BTU" }
            ],
            defaultFrom: "joule",
            defaultTo: "kilocalorie"
        }
    ],
    "Pressure": [
        {
            id: "pressure",
            title: "Pressure",
            description: "Convert between pascals, bars, atmospheres, and PSI",
            icon: '<path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><circle cx="12" cy="9" r="2" stroke="currentColor" stroke-width="2"/>',
            units: [
                { value: "pascal", label: "Pascal (Pa)" },
                { value: "kilopascal", label: "Kilopascal (kPa)" },
                { value: "bar", label: "Bar" },
                { value: "atmosphere", label: "Atmosphere (atm)" },
                { value: "psi", label: "PSI" },
                { value: "torr", label: "Torr" }
            ],
            defaultFrom: "pascal",
            defaultTo: "atmosphere"
        }
    ],
    "Angle": [
        {
            id: "angle",
            title: "Angle",
            description: "Convert between degrees, radians, and gradians",
            icon: '<path d="M12 2v10l8-4-8-6z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="2"/>',
            units: [
                { value: "degree", label: "Degree (°)" },
                { value: "radian", label: "Radian (rad)" },
                { value: "gradian", label: "Gradian (grad)" }
            ],
            defaultFrom: "degree",
            defaultTo: "radian"
        }
    ],
    "Frequency": [
        {
            id: "frequency",
            title: "Frequency",
            description: "Convert between hertz, kilohertz, megahertz, and gigahertz",
            icon: '<path d="M3 12h4l3-9 4 18 3-9h4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
            units: [
                { value: "hertz", label: "Hertz (Hz)" },
                { value: "kilohertz", label: "Kilohertz (kHz)" },
                { value: "megahertz", label: "Megahertz (MHz)" },
                { value: "gigahertz", label: "Gigahertz (GHz)" }
            ],
            defaultFrom: "hertz",
            defaultTo: "megahertz"
        }
    ]
};

// Temperature conversion (requires special handling)
const temperatureConversion = {
    celsiusToFahrenheit: (c) => (c * 9/5) + 32,
    celsiusToKelvin: (c) => c + 273.15,
    fahrenheitToCelsius: (f) => (f - 32) * 5/9,
    fahrenheitToKelvin: (f) => (f - 32) * 5/9 + 273.15,
    kelvinToCelsius: (k) => k - 273.15,
    kelvinToFahrenheit: (k) => (k - 273.15) * 9/5 + 32
};

// Convert temperature
function convertTemperature(value, fromUnit, toUnit) {
    if (fromUnit === toUnit) return value;
    
    const conversionKey = `${fromUnit}To${toUnit.charAt(0).toUpperCase() + toUnit.slice(1)}`;
    
    if (temperatureConversion[conversionKey]) {
        return temperatureConversion[conversionKey](value);
    }
    
    return value;
}

// Convert standard units (non-temperature)
function convertStandard(value, fromUnit, toUnit, category) {
    if (fromUnit === toUnit) return value;
    
    const rates = conversionRates[category];
    if (!rates) return value;
    
    // Convert to base unit first, then to target unit
    const baseValue = value * rates[fromUnit];
    const result = baseValue / rates[toUnit];
    
    return result;
}

// Main conversion function
function convert(value, fromUnit, toUnit, category) {
    if (isNaN(value) || value === '') return '';
    
    const numValue = parseFloat(value);
    
    if (category === 'temperature') {
        return convertTemperature(numValue, fromUnit, toUnit);
    }
    
    return convertStandard(numValue, fromUnit, toUnit, category);
}

// Format output number
function formatNumber(num) {
    if (num === '' || isNaN(num)) return '';
    
    // Handle very large and very small numbers
    if (Math.abs(num) >= 1e10 || (Math.abs(num) < 1e-6 && num !== 0)) {
        return num.toExponential(6);
    }
    
    // Round to 8 decimal places to avoid floating point errors
    const rounded = Math.round(num * 100000000) / 100000000;
    
    // Remove trailing zeros
    return parseFloat(rounded.toPrecision(10)).toString();
}

// Generate Converters Dynamically
function generateConverters() {
    const container = document.getElementById('converters');
    container.innerHTML = '<div class="converters-grid"></div>';
    
    const grid = container.querySelector('.converters-grid');
    
    Object.entries(converterConfig).forEach(([categoryName, converters]) => {
        converters.forEach(converter => {
            const card = document.createElement('div');
            card.className = 'converter-card';
            card.dataset.category = converter.id;
            
            const unitsOptions = converter.units.map(unit => 
                `<option value="${unit.value}"${unit.value === converter.defaultFrom || unit.value === converter.defaultTo ? ' selected' : ''}>${unit.label}</option>`
            ).join('');
            
            card.innerHTML = `
                <div class="card-header">
                    <div class="card-icon-wrapper">
                        <svg class="card-icon" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            ${converter.icon}
                        </svg>
                    </div>
                    <div class="card-title-group">
                        <h3 class="card-title">${converter.title}</h3>
                        <p class="card-badge">${categoryName} • ${converter.units.length} units</p>
                    </div>
                </div>
                <p class="card-description">${converter.description}</p>
                <div class="card-body">
                    <div class="conversion-row">
                        <div class="input-wrapper">
                            <input type="number" class="converter-input" data-converter="${converter.id}" data-unit="${converter.defaultFrom}" placeholder="0">
                            <select class="unit-select" data-converter="${converter.id}" data-type="from">
                                ${unitsOptions}
                            </select>
                        </div>
                        <div class="conversion-arrow">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M17 8l4 4-4 4M21 12H3M7 16l-4-4 4-4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        <div class="input-wrapper">
                            <input type="number" class="converter-input" data-converter="${converter.id}" data-unit="${converter.defaultTo}" placeholder="0" readonly>
                            <select class="unit-select" data-converter="${converter.id}" data-type="to">
                                ${converter.units.map(unit => 
                                    `<option value="${unit.value}"${unit.value === converter.defaultTo ? ' selected' : ''}>${unit.label}</option>`
                                ).join('')}
                            </select>
                        </div>
                    </div>
                </div>
            `;
            
            grid.appendChild(card);
        });
    });
}

// Initialize all converters
function initializeConverters() {
    const converterCards = document.querySelectorAll('.converter-card');
    
    converterCards.forEach(card => {
        const category = card.dataset.category;
        const inputs = card.querySelectorAll('.converter-input');
        const selects = card.querySelectorAll('.unit-select');
        
        // Add event listeners to inputs
        inputs[0].addEventListener('input', (e) => {
            handleConversion(e.target, inputs[1], selects[0], selects[1], category);
        });
        
        // Add event listeners to selects
        selects.forEach(select => {
            select.addEventListener('change', () => {
                handleConversion(inputs[0], inputs[1], selects[0], selects[1], category);
            });
        });
    });
}

// Handle conversion
function handleConversion(fromInput, toInput, fromSelect, toSelect, category) {
    const value = fromInput.value;
    const fromUnit = fromSelect.value;
    const toUnit = toSelect.value;
    
    if (value === '' || isNaN(value)) {
        toInput.value = '';
        return;
    }
    
    const result = convert(parseFloat(value), fromUnit, toUnit, category);
    const formattedResult = formatNumber(result);
    toInput.value = formattedResult;
    
    // Save to recent conversions if value is not empty
    if (value && formattedResult && window.saveRecentConversion) {
        // Get the unit labels from the select options
        const fromUnitText = fromSelect.options[fromSelect.selectedIndex].text;
        const toUnitText = toSelect.options[toSelect.selectedIndex].text;
        
        window.saveRecentConversion(
            category,
            `${value} ${fromUnitText}`,
            '',
            `${formattedResult} ${toUnitText}`,
            ''
        );
    }
}

// Search functionality
function initializeSearch() {
    const searchInput = document.getElementById('searchInput');
    const converterCards = document.querySelectorAll('.converter-card');
    const categorySections = document.querySelectorAll('.category-section');
    
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase().trim();
        let visibleCount = 0;
        
        converterCards.forEach(card => {
            const title = card.querySelector('.card-title').textContent.toLowerCase();
            const description = card.querySelector('.card-description').textContent.toLowerCase();
            const category = card.dataset.category.toLowerCase();
            
            // Check if search term matches title, description, or category
            const matches = title.includes(searchTerm) || 
                          description.includes(searchTerm) || 
                          category.includes(searchTerm);
            
            if (matches || searchTerm === '') {
                card.style.display = 'block';
                visibleCount++;
            } else {
                card.style.display = 'none';
            }
        });
        
        // Show/hide category sections based on visible cards
        categorySections.forEach(section => {
            const visibleCards = section.querySelectorAll('.converter-card:not([style*="display: none"])');
            if (visibleCards.length === 0 && searchTerm !== '') {
                section.style.display = 'none';
            } else {
                section.style.display = 'block';
            }
        });
        
        // Could add a "no results" message if needed
        if (visibleCount === 0 && searchTerm !== '') {
            console.log('No converters found for:', searchTerm);
        }
    });
}

// Handle keyboard shortcuts
function initializeKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
        // Focus search with Ctrl+F or Cmd+F
        if ((e.ctrlKey || e.metaKey) && e.key === 'f') {
            e.preventDefault();
            document.getElementById('searchInput').focus();
        }
        
        // Clear search with Escape
        if (e.key === 'Escape') {
            const searchInput = document.getElementById('searchInput');
            if (searchInput === document.activeElement) {
                searchInput.value = '';
                searchInput.dispatchEvent(new Event('input'));
            }
        }
    });
}

// Add smooth scroll behavior
function initializeSmoothScroll() {
    document.documentElement.style.scrollBehavior = 'smooth';
}

// Add input validation
function initializeInputValidation() {
    const inputs = document.querySelectorAll('.converter-input:not([readonly])');
    
    inputs.forEach(input => {
        input.addEventListener('keypress', (e) => {
            // Allow: backspace, delete, tab, escape, enter
            if ([8, 9, 27, 13].includes(e.keyCode)) {
                return;
            }
            
            // Allow: Ctrl+A, Ctrl+C, Ctrl+V, Ctrl+X
            if ((e.ctrlKey || e.metaKey) && [65, 67, 86, 88].includes(e.keyCode)) {
                return;
            }
            
            // Allow: decimal point
            if (e.key === '.' && !input.value.includes('.')) {
                return;
            }
            
            // Allow: minus sign at the beginning
            if (e.key === '-' && input.value.length === 0) {
                return;
            }
            
            // Ensure that it is a number
            if (e.key < '0' || e.key > '9') {
                e.preventDefault();
            }
        });
    });
}

// Add loading animation
function addLoadingAnimation() {
    const cards = document.querySelectorAll('.converter-card');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.05}s`;
    });
}

// Performance optimization: debounce input
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debouncing to search
function optimizeSearch() {
    const searchInput = document.getElementById('searchInput');
    const originalHandler = searchInput.oninput;
    
    searchInput.oninput = debounce((e) => {
        if (originalHandler) originalHandler(e);
    }, 150);
}

// Theme Toggle
function initializeTheme() {
    const themeToggle = document.getElementById('themeToggle');
    const htmlElement = document.documentElement;
    
    // Check for saved theme preference or default to 'dark'
    const savedTheme = localStorage.getItem('theme') || 'dark';
    htmlElement.setAttribute('data-theme', savedTheme);
    
    themeToggle.addEventListener('click', () => {
        const currentTheme = htmlElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        htmlElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });
}

// Recent Conversions
function initializeRecentConversions() {
    const recentSection = document.getElementById('recentSection');
    const recentGrid = document.getElementById('recentGrid');
    const clearButton = document.getElementById('clearRecent');
    
    // Load recent conversions from localStorage
    function loadRecentConversions() {
        const recent = JSON.parse(localStorage.getItem('recentConversions') || '[]');
        
        if (recent.length === 0) {
            recentSection.style.display = 'none';
            return;
        }
        
        recentSection.style.display = 'block';
        recentGrid.innerHTML = '';
        
        recent.forEach(item => {
            const recentItem = document.createElement('div');
            recentItem.className = 'recent-item';
            recentItem.innerHTML = `
                <div class="recent-item-header">${item.category}</div>
                <div class="recent-item-content">
                    ${item.from} → ${item.to}
                </div>
                <div class="recent-item-time">${item.time}</div>
            `;
            recentGrid.appendChild(recentItem);
        });
    }
    
    // Save conversion to recent
    function saveRecentConversion(category, fromValue, fromUnit, toValue, toUnit) {
        const recent = JSON.parse(localStorage.getItem('recentConversions') || '[]');
        
        const conversion = {
            category: category.charAt(0).toUpperCase() + category.slice(1),
            from: `${fromValue} ${fromUnit}`,
            to: `${toValue} ${toUnit}`,
            time: 'Earlier',
            timestamp: Date.now()
        };
        
        // Add to beginning of array
        recent.unshift(conversion);
        
        // Keep only last 6 conversions
        if (recent.length > 6) {
            recent.pop();
        }
        
        localStorage.setItem('recentConversions', JSON.stringify(recent));
        loadRecentConversions();
    }
    
    // Clear recent conversions
    clearButton.addEventListener('click', () => {
        localStorage.removeItem('recentConversions');
        recentSection.style.display = 'none';
    });
    
    // Return save function for use in handleConversion
    window.saveRecentConversion = saveRecentConversion;
    loadRecentConversions();
}

// Initialize app on DOM load
document.addEventListener('DOMContentLoaded', () => {
    // Generate converters first
    generateConverters();
    
    // Then initialize everything else
    initializeTheme();
    initializeRecentConversions();
    initializeConverters();
    initializeSearch();
    initializeKeyboardShortcuts();
    initializeSmoothScroll();
    initializeInputValidation();
    addLoadingAnimation();
    
    // Add focus to search on page load
    setTimeout(() => {
        const searchInput = document.getElementById('searchInput');
        if (window.innerWidth > 768) {
            searchInput.focus();
        }
    }, 500);
});

// Service Worker registration for PWA (optional - for offline support)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Uncomment to enable PWA
        // navigator.serviceWorker.register('/sw.js').catch(() => {});
    });
}

// Add viewport height fix for mobile browsers
function setViewportHeight() {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}

window.addEventListener('resize', debounce(setViewportHeight, 250));
setViewportHeight();

// Export for testing (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        convert,
        formatNumber,
        convertTemperature,
        convertStandard
    };
}
