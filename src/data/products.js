// Centralized product catalog for ODDAWURLD Electrical Store

export const CATEGORIES = [
  {
    id: "lighting",
    name: "LED & Lighting",
    slug: "lighting",
    count: 14,
    description: "Architectural, pendant, smart filament, and industrial floodlights.",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=600&q=80",
    tag: "Popular"
  },
  {
    id: "switches",
    name: "Modular Switches",
    slug: "switches",
    count: 12,
    description: "Luxury tempered glass, tactile, and smart capacitive switchboards.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80",
    tag: "Top Rated"
  },
  {
    id: "protection",
    name: "MCBs & Protection",
    slug: "protection",
    count: 9,
    description: "Double pole MCBs, RCCB shock protection, and surge arresters.",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80",
    tag: "Essential"
  },
  {
    id: "smart-home",
    name: "Smart Automation",
    slug: "smart-home",
    count: 11,
    description: "Matter-compatible relays, wireless dimmer hubs, and power monitors.",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=600&q=80",
    tag: "Next-Gen"
  },
  {
    id: "cables",
    name: "Wires & Cables",
    slug: "cables",
    count: 10,
    description: "99.9% pure electrolytic copper, FR-LSH low smoke zero halogen wires.",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80",
    tag: "Heavy-Duty"
  },
  {
    id: "fans",
    name: "Fans & Ventilation",
    slug: "fans",
    count: 8,
    description: "BLDC energy-saving silent ceiling fans and heavy exhaust blowers.",
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=600&q=80",
    tag: "Energy Star"
  },
  {
    id: "tools",
    name: "Electrician Tools",
    slug: "tools",
    count: 7,
    description: "Digital multimeters, insulated VDE 1000V pliers, and wire strippers.",
    image: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=600&q=80",
    tag: "Pro Gear"
  },
  {
    id: "accessories",
    name: "Spike Guards & Boards",
    slug: "accessories",
    count: 8,
    description: "Universal surge protected extension boards and industrial sockets.",
    image: "https://images.unsplash.com/photo-1544716278-e56310e3d937?auto=format&fit=crop&w=600&q=80",
    tag: "Utility"
  }
];

export const PRODUCTS = [
  {
    id: "vtx-001",
    name: "Oddawurld Lumina Halo 12W Smart Pendant Bulb",
    category: "lighting",
    price: 39.99,
    originalPrice: 59.99,
    rating: 4.9,
    reviewsCount: 148,
    badge: "Bestseller",
    isHero: true,
    inStock: true,
    stockCount: 34,
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1540932239986-30128078f3c5?auto=format&fit=crop&w=800&q=80"
    ],
    shortDesc: "Architectural amber filament smart bulb with 16M colors, ultra-smooth dimming and gold pedestal base.",
    description: "Engineered for high-end residential interiors and studio spaces, the Lumina Halo combines vintage filament charm with modern WiFi and Zigbee wireless control. Delivers 1100 lumens of ultra-high CRI 98 light with zero flicker.",
    specs: {
      "Wattage": "12W (equivalent to 100W halogen)",
      "Luminous Flux": "1100 Lumens",
      "Color Temperature": "2200K - 6500K Tunable White + RGB",
      "Voltage": "110V - 240V AC 50/60Hz",
      "Base Type": "E26 / E27 Brass Screw",
      "Lifespan": "35,000 Operating Hours",
      "Connectivity": "Wi-Fi 2.4GHz + Bluetooth 5.2 (No Hub Required)",
      "App Support": "Oddawurld Home, Apple HomeKit, Alexa, Google Home",
      "Warranty": "2 Years Replacement Warranty"
    },
    features: [
      "Zero-flicker constant current IC driver prevents eye strain",
      "CRI 98+ true color rendering index",
      "Aureolin ambient night-light mode with warm 1800K glow",
      "Voice activated dimming from 1% to 100%"
    ]
  },
  {
    id: "vtx-002",
    name: "Oddawurld BlackGlass 8-Module Smart Touch Switchboard",
    category: "switches",
    price: 64.50,
    originalPrice: 89.00,
    rating: 4.8,
    reviewsCount: 92,
    badge: "Trending",
    isHero: false,
    inStock: true,
    stockCount: 19,
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80"
    ],
    shortDesc: "Toughened 4mm crystal black glass panel with capacitive touch, backlit LED aureolin indicators.",
    description: "Elevate your switchboards with feather-touch capacitive sensors, flame-retardant poly-carbonate casing, and gold plated contacts. Fits standard 8-module electrical wall gang boxes.",
    specs: {
      "Material": "4mm Scratch-proof Toughened Glass + Fireproof PC",
      "Load Capacity": "Up to 1000W per gang (10A max)",
      "Backlight": "Subtle Aureolin Yellow LED in standby / Crisp White when ON",
      "Protection": "Surge protection up to 4kV & Overload shutoff",
      "Operating Voltage": "180V - 250V AC",
      "Warranty": "5 Years Manufacturer Warranty"
    },
    features: [
      "Waterproof surface safe to touch with damp hands",
      "Memory function restores last switch states after power cut",
      "Whisper quiet capacitive relay switching",
      "Child safety shuttered sockets included"
    ]
  },
  {
    id: "vtx-003",
    name: "Oddawurld GuardPro 63A Dual Pole C-Curve MCB",
    category: "protection",
    price: 24.99,
    originalPrice: 34.00,
    rating: 4.9,
    reviewsCount: 210,
    badge: "Safety Certified",
    isHero: false,
    inStock: true,
    stockCount: 65,
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80"
    ],
    shortDesc: "Heavy-duty industrial grade miniature circuit breaker with 10kA breaking capacity.",
    description: "Critical safety for homes and commercial panels. Features silver-graphite arc quenching plates, bi-metallic thermal strip, and instantaneous electromagnetic trip mechanism.",
    specs: {
      "Rated Current": "63 Amperes",
      "Number of Poles": "2 Pole (DP)",
      "Tripping Curve": "C-Curve (5-10 In)",
      "Breaking Capacity": "10kA (IEC/EN 60898-1)",
      "Mounting": "Standard 35mm DIN Rail",
      "Certification": "CE, ISI, RoHS, VDE",
      "Warranty": "3 Years Guarantee"
    },
    features: [
      "Bi-connect terminals for flexible busbar and cable hookup",
      "Clear visual trip indicator window (Red/Green)",
      "Flame retardant UL94 V-0 glass-fiber reinforced body",
      "Rapid arc extinguishing chamber"
    ]
  },
  {
    id: "vtx-004",
    name: "Oddawurld CoreFire 2.5 sq mm FR-LSH Copper Cable (90m)",
    category: "cables",
    price: 49.00,
    originalPrice: 62.00,
    rating: 4.9,
    reviewsCount: 320,
    badge: "100% Copper",
    isHero: false,
    inStock: true,
    stockCount: 42,
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80"
    ],
    shortDesc: "Flame Retardant Low Smoke & Halogen multi-strand 99.9% pure copper house wire.",
    description: "Designed for premium installations where human safety and maximum conductivity are paramount. Tested to withstand up to 105°C continuous temperature and emits 80% less toxic smoke in fire emergencies.",
    specs: {
      "Conductor": "99.9% Electrolytic Grade Annealed Bare Copper",
      "Cross Section": "2.5 sq mm Multi-Strand",
      "Length": "90 Meters Coil",
      "Insulation": "Dual Layer FR-LSH PVC compound",
      "Voltage Grade": "Up to 1100 Volts",
      "Standard": "IS 694 : 2010 / IEC 60227",
      "Warranty": "Lifetime Insulation Guarantee"
    },
    features: [
      "Energy saving 15% lower power dissipation due to ultra-pure copper",
      "Anti-rodent and anti-termite compound infused outer jacket",
      "High oxygen index (greater than 32%) inhibits self-combustion",
      "Sequential meter marking printed on full length"
    ]
  },
  {
    id: "vtx-005",
    name: "Oddawurld AeroSilent BLDC 1200mm Ceiling Fan (Remote)",
    category: "fans",
    price: 89.99,
    originalPrice: 129.00,
    rating: 4.7,
    reviewsCount: 78,
    badge: "5 Star Energy",
    isHero: false,
    inStock: true,
    stockCount: 22,
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80"
    ],
    shortDesc: "Whisper-quiet 28W brushless DC motor fan with aerodynamic blades and RF remote.",
    description: "Save up to 65% on your electricity bills with the AeroSilent BLDC motor. Runs 3x longer on home inverters, produces zero motor hum, and features sleep timer and reverse rotation modes.",
    specs: {
      "Sweep Size": "1200 mm (48 inches)",
      "Power Consumption": "28 Watts at top speed (6W at speed 1)",
      "Air Delivery": "235 CMM (Cubic Meters per Minute)",
      "Speed": "360 RPM",
      "Motor Type": "100% Copper Wound Brushless DC Motor",
      "Controls": "Point-anywhere RF remote with timer (1h, 2h, 4h, 8h)",
      "Warranty": "3 Years On-Site Warranty"
    },
    features: [
      "Saves over ₹1,800 / $25 annually per fan on utility bills",
      "Zero motor heating extends bearing life to 10+ years",
      "Ultra-modern matte black body with brushed gold accent ring",
      "Smooth step-less speed modulation"
    ]
  },
  {
    id: "vtx-006",
    name: "Oddawurld MultiMaster True-RMS Digital Multimeter 6000 Counts",
    category: "tools",
    price: 45.00,
    originalPrice: 65.00,
    rating: 4.9,
    reviewsCount: 165,
    badge: "Pro Choice",
    isHero: false,
    inStock: true,
    stockCount: 28,
    image: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80"
    ],
    shortDesc: "CAT III 1000V / CAT IV 600V safety rated auto-ranging multimeter with NCV and temperature probe.",
    description: "The ultimate diagnostic instrument for electricians, solar technicians, and hobbyists. Features auto-ranging, non-contact voltage (NCV) detection with buzzer, and heavy rubberized drop-proof holster.",
    specs: {
      "Display": "6000 Counts Backlit LCD with Bargraph",
      "Safety Rating": "CAT III 1000V / CAT IV 600V with ceramic fuse protection",
      "DC Voltage": "600mV to 1000V (±0.5%)",
      "AC Voltage": "6V to 750V True RMS (±0.8%)",
      "Current": "60uA to 10A AC/DC",
      "Capacitance": "6nF to 100mF",
      "Warranty": "2 Years Calibrated Warranty"
    },
    features: [
      "True RMS for exact measurements on non-linear sinusoidal loads",
      "Built-in work light and live wire phase detector probe",
      "Rugged 2m drop-proof anti-shock casing",
      "Auto power off to preserve 9V battery life"
    ]
  },
  {
    id: "vtx-007",
    name: "Oddawurld SmartGate Zigbee 3.0 Automation Gateway Hub",
    category: "smart-home",
    price: 52.00,
    originalPrice: 75.00,
    rating: 4.8,
    reviewsCount: 88,
    badge: "Matter Ready",
    isHero: false,
    inStock: true,
    stockCount: 17,
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=800&q=80"
    ],
    shortDesc: "Connect up to 128 smart switches, sensors, and lighting circuits with zero internet latency.",
    description: "The nerve center of your modern electrical setup. Supports local scene automations that continue working even when the internet goes down. Fully integrates with Home Assistant, Apple Home, and Alexa.",
    specs: {
      "Protocol": "Zigbee 3.0 + Bluetooth Mesh + Ethernet LAN",
      "Device Capacity": "Up to 128 Sub-devices",
      "Power Input": "USB-C 5V 1A (Adapter included)",
      "Security": "AES-128 bit hardware encryption",
      "Range": "Up to 100m open field mesh repeater range",
      "Warranty": "2 Years"
    },
    features: [
      "Local offline automation execution in under 15ms",
      "OTA firmware updates with automatic vulnerability patching",
      "Sleek minimalist puck design with stealth status LEDs",
      "Dual Ethernet and 2.4GHz WiFi fallback"
    ]
  },
  {
    id: "vtx-008",
    name: "Oddawurld PowerShield 6-Outlet Surge Protection Spike Guard",
    category: "accessories",
    price: 29.50,
    originalPrice: 42.00,
    rating: 4.9,
    reviewsCount: 312,
    badge: "1500 Joules",
    isHero: false,
    inStock: true,
    stockCount: 50,
    image: "https://images.unsplash.com/photo-1544716278-e56310e3d937?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1544716278-e56310e3d937?auto=format&fit=crop&w=800&q=80"
    ],
    shortDesc: "Heavy 1500 Joule MOV surge suppressor with 3x USB fast charging ports and 2m heavy cord.",
    description: "Guards expensive TVs, audio gear, workstations, and laboratory equipment from lightning spikes and line noise. Equipped with individual illuminated master trip switches.",
    specs: {
      "Outlets": "6 Universal Worldwide Sockets with safety shutters",
      "Surge Energy": "1500 Joules MOV Dissipation",
      "Maximum Current": "10 Amps / 2500 Watts",
      "USB Output": "2x USB-A (18W QuickCharge) + 1x USB-C (20W PD)",
      "Cable Length": "2.0 Meters Heavy-Duty Copper Cord",
      "Warranty": "3 Years Equipment Protection Warranty"
    },
    features: [
      "EMI/RFI noise filter cleans up audio/video signals",
      "Thermal circuit breaker auto-disconnects during overload",
      "Keyhole wall-mounting slots on rear for tidy cable routing",
      "Aureolin active protection indicator LED"
    ]
  },
  {
    id: "vtx-009",
    name: "Oddawurld BeamFocus 24W Magnetic Track Light Spotlight",
    category: "lighting",
    price: 42.00,
    originalPrice: 60.00,
    rating: 4.8,
    reviewsCount: 64,
    badge: "Architectural",
    isHero: false,
    inStock: true,
    stockCount: 38,
    image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=800&q=80"
    ],
    shortDesc: "Low-voltage 48V magnetic snap-in spotlight with 15°-45° zoomable optical lens.",
    description: "State of the art architectural lighting. Snaps seamlessly into standard 48V magnetic ceiling tracks with safe touch voltage and instant repositioning without tools.",
    specs: {
      "Wattage": "24W Bridgelux COB LED",
      "Voltage": "48V DC Low Voltage Track",
      "Beam Angle": "Adjustable 15° to 45°",
      "CRI": "Ra > 95",
      "Color Temp": "Warm White 3000K",
      "Warranty": "3 Years"
    },
    features: [
      "Safe 48V touchable track rails",
      "Deep anti-glare honeycomb baffle",
      "360° horizontal rotation and 90° tilt"
    ]
  },
  {
    id: "vtx-010",
    name: "Oddawurld ArcShield 40A 30mA 4-Pole RCCB Shock Protector",
    category: "protection",
    price: 36.00,
    originalPrice: 48.00,
    rating: 4.9,
    reviewsCount: 142,
    badge: "Lifesaver",
    isHero: false,
    inStock: true,
    stockCount: 29,
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80"
    ],
    shortDesc: "Residual Current Circuit Breaker detecting human earth leakage under 30 milliseconds.",
    description: "Guarantees electrocution prevention for homes and offices. Instantly interrupts power supply within 0.03 seconds upon detecting any microscopic current leak into human contact.",
    specs: {
      "Current": "40A 4-Pole (Three Phase + Neutral)",
      "Sensitivity": "30mA (Human Life Protection)",
      "Tripping Time": "< 30 milliseconds",
      "Standards": "IEC 61008-1 / IS 12640",
      "Warranty": "5 Years"
    },
    features: [
      "Monthly test button mechanism with internal resistor",
      "Immune to nuisance tripping from electrical spikes",
      "Terminal covers to prevent accidental finger shock"
    ]
  }
];

export const REVIEWS = [
  {
    id: 1,
    name: "David Chen",
    role: "Senior Electrical Contractor",
    rating: 5,
    comment: "The build quality of Oddawurld switchboards and copper cables is far superior to standard retail supplies. The halo pendant light is pure aesthetic perfection in our showroom project.",
    date: "2 days ago"
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Interior Architect",
    rating: 5,
    comment: "We used Oddawurld black glass touch panels throughout a luxury penthouse in Mumbai. The aureolin yellow LED indicator matches our palette flawlessly. Super prompt shipping too!",
    date: "1 week ago"
  },
  {
    id: 3,
    name: "Marcus Miller",
    role: "Smart Home Integrator",
    rating: 5,
    comment: "The Zigbee 3.0 gateway paired with 40 switches without a single drop. Zero latency on offline automations. I'm recommending Oddawurld to all my clients.",
    date: "2 weeks ago"
  }
];
