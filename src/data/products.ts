import type { Product } from '../types';

export const PRODUCTS_DATA: Product[] = [
  // ==========================================
  // ELECTRICAL PRODUCTS (1 to 8)
  // ==========================================
  {
    id: 'elec-01',
    name: 'Polycab Flame Retardant House Wire',
    category: 'electricals',
    subCategory: 'Wires & Cables',
    brand: 'Polycab',
    demoPrice: 1850,
    unit: '90m coil',
    shortDescription: 'High conductivity electrolytic grade copper wire with FR (Flame Retardant) PVC insulation.',
    fullDescription: 'Engineered for residential and commercial concealed conduit installations. Polycab FR house wires feature 99.97% pure oxygen-free copper, multi-strand flexibility, and specialized heat-resistant self-extinguishing insulation.',
    specifications: {
      'Conductor': 'High purity multi-strand electrolytic copper',
      'Insulation': 'Flame Retardant (FR) grade PVC',
      'Standard Size': '1.5 sq mm (available in 1.0, 2.5, 4.0 sq mm)',
      'Voltage Rating': '1100 V',
      'Standard Length': '90 meters coil',
      'Certification': 'IS 694 / ISI Certified'
    },
    applications: [
      'Residential house wiring & lighting circuits',
      'Commercial office spaces & apartment blocks',
      'Concealed conduit electrical layouts',
      'Distribution board wiring'
    ],
    image: '/images/products/wires_cables_coils.jpg',
    availability: 'In Stock',
    featured: true,
    isWholesaleBulk: true,
    tags: ['wire', 'polycab', 'copper', 'cable', 'wiring', 'electrical']
  },
  {
    id: 'elec-02',
    name: 'Havells Modular 1-Way Switch 10A',
    category: 'electricals',
    subCategory: 'Switches & Sockets',
    brand: 'Havells',
    demoPrice: 85,
    unit: 'piece',
    shortDescription: 'Sleek ergonomic modular switch engineered with silver contact points for spark-free performance.',
    fullDescription: 'Havells modular switches feature captive screws, flame-retardant poly-carbonate body, and whisper-silent mechanical action tested for over 100,000 switching operations.',
    specifications: {
      'Current Rating': '10A, 240V AC',
      'Mechanism': '1-Way rocker with silver inlaid contacts',
      'Body Material': 'Virgin fire-retardant polycarbonate',
      'Operating Life': '> 100,000 switching cycles',
      'Mounting': 'Snap-fit modular grid'
    },
    applications: ['Lighting controls', 'Fan on/off circuits', 'Wall plates in modern homes & showrooms'],
    image: '/images/products/havells_products.jpg',
    availability: 'In Stock',
    featured: true,
    tags: ['switch', 'havells', 'modular', 'plate', 'light switch']
  },
  {
    id: 'elec-03',
    name: 'Legrand Single Pole MCB (Miniature Circuit Breaker)',
    category: 'electricals',
    subCategory: 'Circuit Protection & MCB',
    brand: 'Legrand',
    demoPrice: 240,
    unit: 'piece',
    shortDescription: 'C-Curve high-sensitivity miniature circuit breaker for precise overload and short-circuit defense.',
    fullDescription: 'Legrand RX3 series MCB provides unmatched thermal and magnetic tripping performance for distribution panels, safeguarding delicate home electronics and building wiring against hazardous faults.',
    specifications: {
      'Breaking Capacity': '10kA breaking capacity',
      'Trip Characteristic': 'C Curve (instantaneous magnetic trip)',
      'Poles': 'Single Pole (SP)',
      'Current Rating': '16A / 20A / 25A / 32A options',
      'DIN Rail Mount': 'Standard 35mm DIN rail compatible'
    },
    applications: ['Home distribution boards', 'Air conditioning circuits', 'Main load isolation', 'Kitchen heavy appliance safety'],
    image: '/images/products/mcb_rccb_units.jpg',
    availability: 'In Stock',
    featured: true,
    isWholesaleBulk: true,
    tags: ['mcb', 'legrand', 'circuit breaker', 'switchgear', 'fuse', 'distribution']
  },
  {
    id: 'elec-04',
    name: 'Goldmedal Modular Universal Socket with Shutter',
    category: 'electricals',
    subCategory: 'Switches & Sockets',
    brand: 'Goldmedal',
    demoPrice: 175,
    unit: 'piece',
    shortDescription: 'Child-safe shuttered universal modular power socket with brass heavy-duty terminals.',
    fullDescription: 'Designed for heavy daily plugging, Goldmedal modular sockets accept 2-pin and 3-pin universal plugs. Internal safety shutters guard against accidental contact, while premium phosphor-bronze springs eliminate looseness.',
    specifications: {
      'Current Rating': '6A / 16A combo',
      'Safety': 'Internal child protection safety shutter',
      'Material': 'High-gloss UV stabilized polycarbonate',
      'Terminals': 'Brass terminals with captive backing screws'
    },
    applications: ['Living room power points', 'Kitchen appliance counters', 'Television and computer workstations'],
    image: '/images/products/goldmedal_switches.jpg',
    availability: 'In Stock',
    featured: false,
    tags: ['socket', 'goldmedal', 'modular', 'power plug', 'plug']
  },
  {
    id: 'elec-05',
    name: 'Havells Energy Saver LED Bulb 9W',
    category: 'electricals',
    subCategory: 'LED Lighting',
    brand: 'Havells',
    demoPrice: 120,
    unit: 'piece',
    shortDescription: 'High lumen output cool day-white LED bulb with surge protection up to 3.5kV.',
    fullDescription: 'Eco-conscious energy-saving 9W LED bulb delivering 900+ lumens. Engineered with internal heat-dissipating aluminum core and isolated constant-current driver to handle local voltage fluctuations.',
    specifications: {
      'Wattage': '9 Watts',
      'Luminous Efficacy': '> 100 lm/W (900 Lumens)',
      'Color Temperature': '6500K (Cool Day White)',
      'Cap Base': 'B22 pin type',
      'Surge Protection': '3.5 kV withstand capacity'
    },
    applications: ['Home room lighting', 'Commercial corridors', 'Porch and balcony lamps', 'General task lighting'],
    image: '/images/products/goldmedal_lighting_panel.jpg',
    availability: 'In Stock',
    featured: true,
    tags: ['bulb', 'led', 'havells', 'lighting', 'light', 'lamp']
  },
  {
    id: 'elec-06',
    name: 'High Air Delivery Decorative Ceiling Fan',
    category: 'electricals',
    subCategory: 'Fans & Ventilation',
    brand: 'Havells',
    demoPrice: 2450,
    unit: 'piece',
    shortDescription: '1200mm aerodynamically profiled aluminum blade ceiling fan with double ball bearings.',
    fullDescription: 'Robust copper-wound motor delivers 230 CMM air delivery with silent rotation. Powder-coated finish resists rust in coastal climates, making it durable for Visakhapatnam conditions.',
    specifications: {
      'Sweep Size': '1200 mm (48 inch)',
      'Speed': '380 RPM',
      'Air Delivery': '230 m³/min',
      'Motor Type': '100% pure copper wire winding',
      'Bearings': 'Sealed double ball bearings'
    },
    applications: ['Bedrooms and living halls', 'Office conference spaces', 'Classrooms & retail shops'],
    image: '/images/products/ceiling_fan_cartons.jpg',
    availability: 'In Stock',
    featured: false,
    tags: ['fan', 'ceiling fan', 'havells', 'air delivery', 'cooling']
  },
  {
    id: 'elec-07',
    name: 'Surface/Concealed Electrical Distribution Board (8-Way)',
    category: 'electricals',
    subCategory: 'Circuit Protection & MCB',
    brand: 'Legrand',
    demoPrice: 1250,
    unit: 'piece',
    shortDescription: 'Sheet-steel enclosed 8-way double door MCB enclosure with insulated copper busbar.',
    fullDescription: 'Heavy gauge steel enclosure treated with 7-tank anti-rust phosphating and electro-static epoxy polyester powder coating. Features reversible transparent acrylic door and detachable top/bottom gland plates.',
    specifications: {
      'Way Capacity': '8-Way Double Door (8 SP modules)',
      'Material': 'CRCA heavy gauge sheet steel',
      'Protection Class': 'IP43 rated dust and splash guard',
      'Busbar': 'Electrolytic copper rated up to 100A'
    },
    applications: ['Main floor power control', 'Apartment sub-mains', 'Commercial switchboard cabinets'],
    image: '/images/products/legrand_db_mcb.jpg',
    availability: 'Wholesale Bulk Available',
    featured: false,
    isWholesaleBulk: true,
    tags: ['db box', 'distribution board', 'panel', 'legrand', 'enclosure']
  },
  {
    id: 'elec-08',
    name: 'Slim LED Concealed Ceiling Panel Light 15W',
    category: 'electricals',
    subCategory: 'LED Lighting',
    brand: 'Goldmedal',
    demoPrice: 450,
    unit: 'piece',
    shortDescription: 'Ultra-slim edge-lit circular LED downlight with anti-glare diffuser for false ceilings.',
    fullDescription: 'Equipped with a die-cast aluminum heat sink and flicker-free external driver. Produces uniform light spread across living rooms and false ceiling designs.',
    specifications: {
      'Wattage': '15 Watts',
      'Cutout Diameter': '6 inch / 150mm',
      'Luminance': '1350 Lumens',
      'Beam Angle': '120 degrees wide spread',
      'Driver': 'Isolated SMPS with surge filter'
    },
    applications: ['False ceiling living rooms', 'Showroom spotlights', 'Kitchen island ceiling illumination'],
    image: '/images/products/goldmedal_lighting_panel.jpg',
    availability: 'In Stock',
    featured: true,
    tags: ['panel light', 'led panel', 'goldmedal', 'ceiling light', 'downlight']
  },

  // ==========================================
  // PLUMBING PRODUCTS (9 to 16)
  // ==========================================
  {
    id: 'plumb-09',
    name: 'Astral CPVC Pro High-Pressure Pipe',
    category: 'plumbing',
    subCategory: 'Pipes & Conduit',
    brand: 'Astral Pipes',
    demoPrice: 420,
    unit: '3m length (1 inch)',
    shortDescription: 'Chlorinated polyvinyl chloride pipe certified for hot and cold potable water distribution.',
    fullDescription: 'Astral CPVC Pro is the benchmark in hot and cold plumbing. Withstands temperatures up to 93°C, resists scale and microbiological formation, and guarantees zero corrosion over decades.',
    specifications: {
      'Diameter Size': '1 inch (Available 1/2" to 2")',
      'Standard Class': 'SDR 11 / Class 1 (Schedule 40 & 80 available)',
      'Temp Range': 'Up to 93°C (200°F)',
      'Length': '3 meters standard length',
      'Standard': 'ASTM D2846 & IS 15778'
    },
    applications: ['Solar water heater piping', 'Bathroom hot & cold conceal lines', 'Commercial kitchens', 'RO water delivery'],
    image: '/images/products/astral_cpvc_pipes.jpg',
    availability: 'In Stock',
    featured: true,
    isWholesaleBulk: true,
    tags: ['pipe', 'cpvc', 'astral', 'hot water', 'plumbing pipe']
  },
  {
    id: 'plumb-10',
    name: 'Sudhakar Heavy Duty Rigid PVC Pipe',
    category: 'plumbing',
    subCategory: 'Pipes & Conduit',
    brand: 'Sudhakar Pipes & Fittings',
    demoPrice: 350,
    unit: '3m length (1.5 inch)',
    shortDescription: 'Tough unplasticized PVC pipe for cold water plumbing, drainage, and borewell suction.',
    fullDescription: 'Manufactured from 100% virgin lead-free compound. Exhibits exceptional tensile strength, impact resilience, and hydraulic flow efficiency with smooth mirror-like interior walls.',
    specifications: {
      'Nominal Size': '1.5 inch (40mm)',
      'Pressure Rating': '6 kg/cm² & 10 kg/cm²',
      'Material': 'Lead-Free Rigid uPVC',
      'Jointing': 'Solvent cement socket end'
    },
    applications: ['Main municipal inlet supply', 'Overhead tank down-take lines', 'Agricultural irrigation', 'Drainage waste water'],
    image: '/images/products/sudhakar_rigid_pvc.jpg',
    availability: 'Wholesale Bulk Available',
    featured: false,
    isWholesaleBulk: true,
    tags: ['pvc pipe', 'sudhakar', 'pvc', 'water pipe', 'drainage']
  },
  {
    id: 'plumb-11',
    name: 'Astral CPVC 90° Elbow Fitting',
    category: 'plumbing',
    subCategory: 'Pipe Fittings & Valves',
    brand: 'Astral Pipes',
    demoPrice: 45,
    unit: 'piece (1 inch)',
    shortDescription: 'Precision injection-molded 90-degree directional turn fitting for CPVC pressure lines.',
    fullDescription: 'Engineered with uniform wall thickness and tapered sockets ensuring leak-proof chemical solvent welding in high-pressure hot/cold piping networks.',
    specifications: {
      'Angle': '90 Degrees',
      'Size': '1 inch (25mm)',
      'Joining Type': 'Solvent weld socket',
      'Pressure Rating': 'Exceeds pipe bursting limit'
    },
    applications: ['Bathroom wall turns', 'Overhead tank header turns', 'Riser bends'],
    image: '/images/products/plumbing_fittings_elbows.jpg',
    availability: 'In Stock',
    featured: false,
    tags: ['elbow', 'astral', 'fitting', 'cpvc', 'pipe turn']
  },
  {
    id: 'plumb-12',
    name: 'PVC Equal Tee Connector',
    category: 'plumbing',
    subCategory: 'Pipe Fittings & Valves',
    brand: 'Sudhakar Pipes & Fittings',
    demoPrice: 65,
    unit: 'piece (1.25 inch)',
    shortDescription: 'Three-way branch pipe fitting for equal diversion of water lines in residential grids.',
    fullDescription: 'Smooth fluid flow profile prevents cavitation and pressure drop when splitting water supply across multiple bathrooms or agricultural outlets.',
    specifications: {
      'Configuration': 'Equal 3-Way Tee',
      'Size': '1.25 inch',
      'Material': 'Unplasticized Polyvinyl Chloride',
      'Standard': 'IS 7834'
    },
    applications: ['Main supply branch offs', 'Overhead water tank manifold', 'Garden line distribution'],
    image: '/images/products/plumbing_fittings_elbows.jpg',
    availability: 'In Stock',
    featured: false,
    tags: ['tee', 'sudhakar', 'branch fitting', 'connector', 'pvc']
  },
  {
    id: 'plumb-13',
    name: 'Watertec Heavy Duty Brass Ball Valve',
    category: 'plumbing',
    subCategory: 'Pipe Fittings & Valves',
    brand: 'Watertec',
    demoPrice: 180,
    unit: 'piece (1 inch)',
    shortDescription: 'Quarter-turn full-bore shutoff valve with stainless steel handle and Teflon seating.',
    fullDescription: 'Provides instant positive on/off isolation for residential water supply lines. Solid brass ball with chrome plating ensures effortless operation even after months of inactivity.',
    specifications: {
      'Body': 'Forged Brass Nickel Plated',
      'Handle': 'Vinyl grip stainless steel lever',
      'Seals': 'PTFE Teflon leak-proof seats',
      'Pressure Class': 'PN 25'
    },
    applications: ['Overhead tank outlet isolation', 'Water meter shutoff', 'Pump suction line cut-off'],
    image: '/images/products/brass_valves_taps.jpg',
    availability: 'In Stock',
    featured: true,
    tags: ['valve', 'ball valve', 'watertec', 'water shutoff', 'plumbing']
  },
  {
    id: 'plumb-14',
    name: 'Premium PTMT Long Body Water Tap',
    category: 'plumbing',
    subCategory: 'Taps & Bathroom Fixtures',
    brand: 'Watertec',
    demoPrice: 450,
    unit: 'piece',
    shortDescription: 'High-grade non-corrosive PTMT polymer bib tap with aerator for continuous soft flow.',
    fullDescription: 'Zero rust, food-grade virgin PTMT polymer bib tap resistant to borewell hard water and salt air. Long projection body is ideal for washing areas and utility courtyards.',
    specifications: {
      'Material': 'Polytetramethylene Terephthalate (PTMT)',
      'Inlet Size': '1/2 inch BSP male thread',
      'Cartridge': 'Ceramic disc quarter-turn spindle',
      'Nozzle': 'Built-in anti-splash aerator'
    },
    applications: ['Kitchen washbasins', 'Outdoor garden faucets', 'Utility washing machines', 'Balcony taps'],
    image: '/images/products/dualtone_white_chrome_taps.jpg',
    availability: 'In Stock',
    featured: true,
    tags: ['tap', 'faucet', 'watertec', 'ptmt', 'water tap']
  },
  {
    id: 'plumb-15',
    name: 'Astral CPVC Pipe Coupler Socket',
    category: 'plumbing',
    subCategory: 'Pipe Fittings & Valves',
    brand: 'Astral Pipes',
    demoPrice: 35,
    unit: 'piece (1 inch)',
    shortDescription: 'Direct inline connector socket for joining two equal lengths of CPVC piping.',
    fullDescription: 'Internal stop ensures balanced pipe penetration on both ends for maximum solvent weld strength across high-pressure water risers.',
    specifications: {
      'Size': '1 inch socket to socket',
      'Working Pressure': 'Up to 28 kg/cm²',
      'Material': 'High-tensile chlorinated polyvinyl chloride'
    },
    applications: ['Straight pipe extensions', 'Concealed plumbing repairs', 'Tank down-take joints'],
    image: '/images/products/plumbing_fittings_elbows.jpg',
    availability: 'In Stock',
    featured: false,
    tags: ['coupler', 'socket', 'astral', 'joint', 'pipe joint']
  },
  {
    id: 'plumb-16',
    name: 'Industrial Grade Plumbing Non-Return Check Valve',
    category: 'plumbing',
    subCategory: 'Pipe Fittings & Valves',
    brand: 'Texmo',
    demoPrice: 220,
    unit: 'piece (1.25 inch)',
    shortDescription: 'Spring loaded directional check valve to prevent backward water siphoning into pumps.',
    fullDescription: 'Prevents water hammer and loss of pump priming by allowing unidirectional flow. Essential safeguard for borewell pumps, overhead delivery lines, and sump suction.',
    specifications: {
      'Type': 'Spring Check NRV',
      'Body Material': 'High density cast alloy',
      'Thread Size': '1.25 inch female ends',
      'Working Pressure': 'Up to 16 Bar'
    },
    applications: ['Submersible pump delivery lines', 'Overhead tank check line', 'Booster pump setups'],
    image: '/images/products/brass_valves_taps.jpg',
    availability: 'Wholesale Bulk Available',
    featured: false,
    isWholesaleBulk: true,
    tags: ['valve', 'check valve', 'texmo', 'nrv', 'pump valve']
  },

  // ==========================================
  // SANITARY PRODUCTS (17 to 23)
  // ==========================================
  {
    id: 'sanit-17',
    name: 'Parryware Ceramic Vitreous Wash Basin',
    category: 'sanitary',
    subCategory: 'Wash Basins & Ceramics',
    brand: 'Parryware',
    demoPrice: 2800,
    unit: 'piece',
    shortDescription: 'Glossy white vitreous china wall-hung wash basin with pre-drilled central tap hole.',
    fullDescription: 'Fired at over 1200°C for exceptional glaze density and non-staining hygienic performance. Features smooth overflow channel and anti-bacterial glaze preventing mineral grime buildup.',
    specifications: {
      'Dimensions': '550mm x 400mm x 200mm',
      'Material': 'Grade-A Vitreous China ceramic',
      'Installation': 'Wall mounted / Pedestal option',
      'Color': 'Alpine White High-Gloss'
    },
    applications: ['Master bathrooms', 'Dining hall handwash areas', 'Commercial hotel washrooms'],
    image: '/images/products/ceramic_oval_wash_basin.jpg',
    availability: 'In Stock',
    featured: true,
    tags: ['wash basin', 'basin', 'parryware', 'sink', 'sanitaryware']
  },
  {
    id: 'sanit-18',
    name: 'Jaquar Chrome Single Lever Basin Mixer Tap',
    category: 'sanitary',
    subCategory: 'Showers & Bath Taps',
    brand: 'Jaquar',
    demoPrice: 1850,
    unit: 'piece',
    shortDescription: 'Mirror-finish chrome brass basin faucet with smooth single-lever hot/cold water blending.',
    fullDescription: 'Jaquar world-renowned brass craftsmanship with multi-layer nickel-chrome plating passing 450+ hours of salt spray testing. Incorporates aerator with lime cleaning mechanism for gentle foaming flow.',
    specifications: {
      'Cartridge': '35mm ceramic cartridge tested for 500,000 cycles',
      'Body': 'High purity cast brass alloy',
      'Finish': 'Triple layer mirror chrome',
      'Flow Rate': 'Aerated soft splash-free stream'
    },
    applications: ['Designer bathroom vanity counters', 'Luxury guest washrooms', 'Master suite bathrooms'],
    image: '/images/products/chrome_wall_mixer_faucet.jpg',
    availability: 'In Stock',
    featured: true,
    tags: ['tap', 'jaquar', 'basin mixer', 'faucet', 'chrome tap', 'bathroom']
  },
  {
    id: 'sanit-19',
    name: 'Parryware Western European Water Closet (EWC)',
    category: 'sanitary',
    subCategory: 'Water Closets & EWCs',
    brand: 'Parryware',
    demoPrice: 5500,
    unit: 'set with seat cover',
    shortDescription: 'Floor mounted S-Trap western toilet with soft-close UF seat cover and dual flush capability.',
    fullDescription: 'Rimless bowl architecture delivers a 360-degree siphon jet wash with minimal water consumption. Smooth glazed trapway prevents clogs and simplifies daily cleaning.',
    specifications: {
      'Trap Type': 'S-Trap 220mm (9 inch) distance',
      'Flush System': 'Dual flush 3L / 6L siphon jet',
      'Seat Cover': 'Heavy-duty hydraulic soft-close mechanism',
      'Material': 'Vitreous China with antimicrobial glaze'
    },
    applications: ['Home bathroom renovations', 'New residential builds', 'Commercial restrooms'],
    image: '/images/products/tiered_ceramic_pedestal_basin.jpg',
    availability: 'In Stock',
    featured: true,
    isWholesaleBulk: true,
    tags: ['commode', 'ewc', 'water closet', 'parryware', 'toilet', 'western']
  },
  {
    id: 'sanit-20',
    name: 'Jaquar High-Pressure Health Faucet with Hose & Hook',
    category: 'sanitary',
    subCategory: 'Showers & Bath Taps',
    brand: 'Jaquar',
    demoPrice: 650,
    unit: 'complete set',
    shortDescription: 'Ergonomic ABS chrome spray gun with 1.2m anti-twist flexible stainless steel braided hose.',
    fullDescription: 'High precision trigger sprayer gives effortless finger-touch water release with leak-proof internal brass spindle. Includes solid wall mounting bracket and brass connecting nuts.',
    specifications: {
      'Hose Length': '1.2 meters flexible SS hose',
      'Head Material': 'Tough ABS body with chrome plating',
      'Connection': 'Standard 1/2" BSP thread',
      'Pressure Tolerance': 'Up to 6 bar operating pressure'
    },
    applications: ['Adjacent to western water closets', 'Bidet spray solutions', 'Ablution areas'],
    image: '/images/products/chrome_bib_taps_panel.jpg',
    availability: 'In Stock',
    featured: false,
    tags: ['health faucet', 'jaquar', 'bidet spray', 'toilet jet', 'sanitary']
  },
  {
    id: 'sanit-21',
    name: 'Multi-Flow Overhead Bathroom Rain Shower',
    category: 'sanitary',
    subCategory: 'Showers & Bath Taps',
    brand: 'Jaquar',
    demoPrice: 1200,
    unit: 'piece with shower arm',
    shortDescription: '8-inch square chrome overhead rain shower with self-cleaning silicone rub-it nozzles.',
    fullDescription: 'Even distribution of water across 100 silicone spray jets provides a drenching rain experience. Rub-clean silicone tips allow instant removal of lime scale deposits from borewell water.',
    specifications: {
      'Dimensions': '200mm x 200mm (8 x 8 inch)',
      'Nozzles': 'Easy-clean anti-clog silicone nibs',
      'Joint': 'Brass swivel ball joint with 360° tilt',
      'Arm': 'Includes 9-inch heavy brass wall arm with flange'
    },
    applications: ['Shower enclosures', 'Master bathrooms', 'Guest bathrooms'],
    image: '/images/products/luxury_rain_shower_column.jpg',
    availability: 'In Stock',
    featured: false,
    tags: ['shower', 'rain shower', 'jaquar', 'overhead shower', 'bath']
  },
  {
    id: 'sanit-22',
    name: 'Heavy Gauge Stainless Steel Kitchen Sink (304 Grade)',
    category: 'sanitary',
    subCategory: 'Sinks & Drains',
    brand: 'Parryware',
    demoPrice: 2400,
    unit: 'piece with waste coupling',
    shortDescription: 'Satin finish SS 304 single bowl kitchen sink with sound-deadening undercoating pads.',
    fullDescription: 'Crafted from 1mm thick food-grade AISI 304 stainless steel. Resists dents, scratches, hot pans, and harsh cooking acids. Features deep 8-inch bowl with anti-overflow design.',
    specifications: {
      'Bowl Size': '24 x 18 x 8 inches',
      'Grade': 'AISI 304 Austenitic Stainless Steel',
      'Dampening': 'Rubber pads + anti-condensation coating',
      'Waste Coupling': 'Includes 3.5 inch stainless steel basket strainer'
    },
    applications: ['Modular kitchens', 'Utility pantry areas', 'Restaurant prep counters'],
    image: '/images/products/bathroom_accessories_set.jpg',
    availability: 'Wholesale Bulk Available',
    featured: false,
    isWholesaleBulk: true,
    tags: ['kitchen sink', 'sink', 'stainless steel', 'parryware', 'modular kitchen']
  },
  {
    id: 'sanit-23',
    name: 'Anti-Cockroach Stainless Steel Floor Drain (Jali)',
    category: 'sanitary',
    subCategory: 'Sinks & Drains',
    brand: 'Watertec',
    demoPrice: 350,
    unit: 'piece (5x5 inch)',
    shortDescription: 'Precision laser-cut floor drain trap with one-way gravity flap preventing insect entry and foul odor.',
    fullDescription: 'Engineered for bathroom and shower floor drainage. The weighted mechanical trap opens smoothly when water flows and snaps tightly shut when dry, locking out sewer odors and pests.',
    specifications: {
      'Size': '125mm x 125mm (5 x 5 inch)',
      'Trap Mechanism': 'Magnetic / gravity counter-weighted anti-odor flap',
      'Steel Grade': 'SS 304 mirror finish',
      'Outlet Size': 'Fits standard 3" & 4" drainage pipes'
    },
    applications: ['Shower floor drainage', 'Balconies', 'Kitchen utility areas', 'Basement wet floors'],
    image: '/images/products/stainless_towel_rail_accessories.jpg',
    availability: 'In Stock',
    featured: false,
    tags: ['floor drain', 'jali', 'drain trap', 'anti cockroach', 'watertec']
  },

  // ==========================================
  // HARDWARE PRODUCTS (24 to 30)
  // ==========================================
  {
    id: 'hard-24',
    name: 'Stainless Steel Self-Tapping Wood & Drywall Screw Set',
    category: 'hardware',
    subCategory: 'Fasteners, Screws & Nails',
    brand: 'Goldmedal',
    demoPrice: 180,
    unit: 'box (100 pieces)',
    shortDescription: 'High tensile SS 304 phillips head countersunk wood screws with sharp self-tapping thread.',
    fullDescription: 'Treated for high torque penetration without wood splitting. Rust-proof alloy makes them ideal for cabinetry, door frames, switchboard backings, and drywall partition work.',
    specifications: {
      'Material': 'SS 304 Marine Grade Stainless Steel',
      'Head Type': 'Countersunk Phillips Head',
      'Quantity': '100 pieces per box',
      'Sizes': 'Assorted 1" to 2.5" options'
    },
    applications: ['Carpentry and furniture assembly', 'Electrical switchboard framing', 'Drywall installations', 'General repairs'],
    image: '/images/products/hardware_tools_kit.jpg',
    availability: 'In Stock',
    featured: false,
    isWholesaleBulk: true,
    tags: ['screws', 'fasteners', 'hardware', 'wood screws', 'stainless steel']
  },
  {
    id: 'hard-25',
    name: 'Heavy Duty 6-Lever Brass Mortise Door Lock',
    category: 'hardware',
    subCategory: 'Locks & Security',
    brand: 'Sudhakar Pipes & Fittings',
    demoPrice: 850,
    unit: 'complete set with 3 keys',
    shortDescription: 'Double-throw deadbolt mortise lock with hardened steel roller latch and designer handles.',
    fullDescription: 'Equipped with 6 brass levers providing high pick resistance and over 50,000 key combinations. Includes matching brushed antique brass handle set and strike plate.',
    specifications: {
      'Lock Type': '6-Lever Double Throw Mortise Lock',
      'Keying': 'Includes 3 precision machined brass keys',
      'Bolt': 'Solid extruded brass deadbolt',
      'Finish': 'Satin Antique Brass & Stainless Steel options'
    },
    applications: ['Main entrance wooden doors', 'Bedroom privacy doors', 'Office cabin security'],
    image: '/images/products/brass_valves_taps.jpg',
    availability: 'In Stock',
    featured: true,
    tags: ['door lock', 'lock', 'mortise', 'handle', 'security', 'hardware']
  },
  {
    id: 'hard-26',
    name: 'Bearing Stainless Steel Door Hinge Set (5-inch)',
    category: 'hardware',
    subCategory: 'Hinges, Clamps & Brackets',
    brand: 'Sudhakar Pipes & Fittings',
    demoPrice: 220,
    unit: 'pair (2 pieces)',
    shortDescription: 'Heavy gauge 5x3x3mm ball-bearing butt hinge for silent, sag-free door operation.',
    fullDescription: 'Two precision ball bearings eliminate metal-on-metal friction, preventing annoying squeaks and door sagging even under heavy solid teak or flush doors.',
    specifications: {
      'Dimensions': '125mm x 75mm x 3mm (5 inch)',
      'Bearings': '2 sealed ball bearings per hinge',
      'Material': 'AISI 201 / 304 Stainless Steel',
      'Load Rating': 'Holds doors up to 65 kg per pair'
    },
    applications: ['Heavy wooden main doors', 'Internal bedroom doors', 'French window shutters'],
    image: '/images/products/hardware_tools_kit.jpg',
    availability: 'In Stock',
    featured: false,
    tags: ['hinge', 'door hinge', 'bearing', 'hardware', 'stainless steel']
  },
  {
    id: 'hard-27',
    name: 'Professional Heavy-Duty Adjustable Pipe Wrench 14"',
    category: 'hardware',
    subCategory: 'Tools & Construction',
    brand: 'Texmo',
    demoPrice: 450,
    unit: 'piece',
    shortDescription: 'Drop-forged carbon steel plumbing wrench with induction-hardened serrated jaws.',
    fullDescription: 'An indispensable tool for plumbers and contractors. The floating hook jaw with knurled adjusting nut delivers ferocious non-slip gripping torque on smooth round pipes and fittings.',
    specifications: {
      'Length': '14 inch (350mm)',
      'Max Jaw Opening': '50mm (2 inch pipe capacity)',
      'Material': 'Drop-forged ductile iron body with chrome vanadium jaws',
      'Jaw Hardness': 'HRC 55-60 induction hardened'
    },
    applications: ['Plumbing installation & repair', 'GI and PVC pipe tightening', 'Borewell pump assembly'],
    image: '/images/products/hardware_tools_kit.jpg',
    availability: 'In Stock',
    featured: true,
    tags: ['wrench', 'pipe wrench', 'tools', 'plumbing tool', 'hardware tool']
  },
  {
    id: 'hard-28',
    name: 'Insulated High-Leverage Combination Plier 8"',
    category: 'hardware',
    subCategory: 'Tools & Construction',
    brand: 'Legrand',
    demoPrice: 320,
    unit: 'piece',
    shortDescription: '1000V rated dual-color cushioned grip gripping, twisting, and wire-cutting plier.',
    fullDescription: 'Forged from high-grade alloy steel with laser-hardened cutting edges capable of severing hard and soft copper electrical cables without dulling.',
    specifications: {
      'Size': '200mm (8 inches)',
      'Electrical Insulation': 'Tested to 10,000V, rated safe for 1000V AC live work',
      'Cutting Capacity': 'Cuts wire up to 2.5mm hard wire',
      'Handle': 'Bi-material ergonomic anti-slip grip'
    },
    applications: ['Electrical installation wiring', 'Gripping nuts & bolts', 'Cable stripping & cutting'],
    image: '/images/products/electrician_hand_tools.jpg',
    availability: 'In Stock',
    featured: false,
    tags: ['plier', 'tools', 'combination plier', 'electrician tool', 'wire cutter']
  },
  {
    id: 'hard-29',
    name: 'Multi-Size Nylon Wall Anchor & Fastener Set',
    category: 'hardware',
    subCategory: 'Fasteners, Screws & Nails',
    brand: 'Polycab',
    demoPrice: 280,
    unit: 'box (150 pieces assorted)',
    shortDescription: 'Expansion wall plugs with matching zinc-plated screws for masonry and brick walls.',
    fullDescription: 'Dual-ribbed anti-rotation wings prevent spinning inside drill holes while the screw is driven home. Assorted 6mm, 8mm, and 10mm sizes cover all electrical and sanitary hanging needs.',
    specifications: {
      'Box Contents': '50 pcs 6mm + 50 pcs 8mm + 50 pcs 10mm plugs with screws',
      'Plug Material': 'Virgin high elasticity nylon PA6',
      'Screw Material': 'Carbon steel with yellow zinc anti-corrosion plating'
    },
    applications: ['Hanging switchboards & MCB boxes', 'Mounting wash basins & bathroom mirrors', 'Curtain rod and shelf fixing'],
    image: '/images/products/hardware_tools_kit.jpg',
    availability: 'In Stock',
    featured: false,
    isWholesaleBulk: true,
    tags: ['fasteners', 'wall plugs', 'gitti', 'rawplug', 'anchors']
  },
  {
    id: 'hard-30',
    name: 'Heavy Duty Instant Grab Construction Adhesive (Cartridge)',
    category: 'hardware',
    subCategory: 'Adhesives, Sealants & Glues',
    brand: 'Astral Pipes',
    demoPrice: 180,
    unit: 'tube / 310ml',
    shortDescription: 'High-strength structural adhesive replacing screws and nails on drywall, tiles, and wood.',
    fullDescription: 'Gap-filling waterproof bond that bridges gaps up to 9mm. Provides immediate green strength grab for skirting boards, mirror panels, PVC pipes, and acoustic tiles.',
    specifications: {
      'Volume': '310ml cartridge for sealant gun',
      'Tensile Bond Strength': '> 2.5 MPa',
      'Curing Time': 'Initial grab 15 minutes, full cure 24 hours',
      'Water Resistance': '100% waterproof interior and exterior'
    },
    applications: ['Fixing bathroom mirrors without drilling', 'Skirting boards & wooden paneling', 'Granite sill bonding'],
    image: '/images/products/astral_cpvc_pipes.jpg',
    availability: 'In Stock',
    featured: true,
    tags: ['adhesive', 'sealant', 'construction glue', 'hardware', 'astral bond']
  },

  // ==========================================
  // AUTHENTIC SHOWROOM DISPLAY PRODUCTS (31 to 40)
  // (From Vijaya Lakshmi Electricals Live Showroom)
  // ==========================================
  {
    id: 'sanit-31',
    name: 'Designer Table-Top Art Ceramic Wash Basin (Gold / Marble Finish)',
    category: 'sanitary',
    subCategory: 'Wash Basins & Ceramics',
    brand: 'Parryware',
    demoPrice: 3400,
    unit: 'piece',
    shortDescription: 'Luxury artisanal countertop ceramic basin with high-gloss gold mandala and Italian marble textures.',
    fullDescription: 'As displayed on our primary showroom gallery wall. Features nano-glazed high-density porcelain resistant to scratches, hard water scaling, and stains. Available in circular, rectangular, and oval profiles.',
    specifications: {
      'Mounting': 'Table-Top / Countertop Vessel Installation',
      'Finish': 'Polished Gold Artwork / Italian Black Marble / Natural Woodgrain',
      'Material': 'High-Density Vitreous Fine Ceramic',
      'Overflow': 'Precision overflow channel with brass collar compatibility',
      'Dimensions': '480mm x 370mm x 135mm'
    },
    applications: ['Modern vanity counters', 'Guest powder rooms', 'Dining handwash stations', 'Hotel suites'],
    image: '/images/products/designer_gold_mandala_basin.jpg',
    availability: 'In Stock',
    featured: true,
    tags: ['designer basin', 'table top basin', 'gold basin', 'art ceramic', 'parryware', 'sanitary']
  },
  {
    id: 'sanit-32',
    name: 'One-Piece Designer Pedestal Wash Basin (Tree Art & Hourglass Flutes)',
    category: 'sanitary',
    subCategory: 'Wash Basins & Ceramics',
    brand: 'Parryware',
    demoPrice: 6800,
    unit: 'piece',
    shortDescription: 'Monolithic floor-standing ceramic pedestal basin with nature tree motif and fluted contours.',
    fullDescription: 'Exclusive showroom centerpiece. Combines integrated wash bowl and pedestal into a seamless monolithic sculpture. Conceals all waste and water inlet pipes completely inside the ceramic body.',
    specifications: {
      'Style': 'Single Piece Floor-Standing Pedestal (Monolithic)',
      'Height': '820mm (32 inches)',
      'Motif': 'Sunset Tree Landscape & Golden Pinstripe accents',
      'Glaze': 'Double-fired antibacterial crystal glaze',
      'Drainage': 'Floor waste outlet with universal P-trap / S-trap adaptor'
    },
    applications: ['Living room dining foyers', 'Luxury villa master bathrooms', 'Commercial reception handwash'],
    image: '/images/products/tree_art_pedestal_basin.jpg',
    availability: 'In Stock',
    featured: true,
    tags: ['pedestal basin', 'one piece basin', 'designer pedestal', 'sanitaryware', 'luxury wash basin']
  },
  {
    id: 'sanit-33',
    name: 'Luxury Chrome Multi-Function Rain Shower Column System',
    category: 'sanitary',
    subCategory: 'Showers & Bath Taps',
    brand: 'Jaquar',
    demoPrice: 4850,
    unit: 'complete system',
    shortDescription: 'Exposed shower column featuring 9-inch rain shower, telephonic hand shower, and swivel bath spout.',
    fullDescription: 'Showroom display set crafted with heavy brass body and triple nickel-chrome plating. Includes smooth mechanical 3-way diverter allowing instant switching between overhead rainfall, multi-mode hand spray, and bottom tub filling.',
    specifications: {
      'Overhead Shower': '9-inch ultra-slim stainless steel rain head with anti-lime nozzles',
      'Hand Shower': '3-Flow adjustable spray wand with 1.5m SS braided hose',
      'Column Rail': 'Telescopic adjustable height stainless steel riser pipe',
      'Diverter': 'Heavy brass quarter-turn 3-way ceramic cartridge'
    },
    applications: ['Master bathroom shower enclosures', 'Modern walk-in showers', 'Bathroom renovations'],
    image: '/images/products/luxury_rain_shower_column.jpg',
    availability: 'In Stock',
    featured: true,
    tags: ['shower system', 'rain shower column', 'jaquar', 'hand shower', 'shower mixer']
  },
  {
    id: 'sanit-34',
    name: 'Dual-Tone White & Chrome Designer Wall Mixer & Faucets',
    category: 'sanitary',
    subCategory: 'Showers & Bath Taps',
    brand: 'Jaquar',
    demoPrice: 1650,
    unit: 'piece',
    shortDescription: 'Contemporary dual-tone white lacquer & chrome plated bib cock and wall mixer series.',
    fullDescription: 'Direct from our showroom tap wall. Blends crisp glossy white powder coating with mirror-finish chrome accents. Ceramic disc spindle ensures smooth quarter-turn control without drips.',
    specifications: {
      'Colorway': 'Arctic White & Mirror Chrome Accent',
      'Body': 'Virgin ingot brass casting',
      'Spindle': 'German ceramic disc cartridge',
      'Aerator': 'Neoperl honey-comb splashless aerator'
    },
    applications: ['Designer bathroom basins', 'Modern utility counters', 'Kitchen sink faucets'],
    image: '/images/products/dualtone_white_chrome_taps.jpg',
    availability: 'In Stock',
    featured: false,
    tags: ['white tap', 'chrome faucet', 'bib tap', 'angle cock', 'jaquar tap']
  },
  {
    id: 'plumb-35',
    name: 'Vectus Granito 4-Layer Antimicrobial Overhead Water Tank',
    category: 'plumbing',
    subCategory: 'Pipes & Conduit',
    brand: 'Vectus Tanks',
    demoPrice: 7200,
    unit: '1000 Litres tank',
    shortDescription: 'Heavy-duty 4-layer UV stabilized overhead water storage tank with Microban antibacterial layer.',
    fullDescription: 'Featured in our plumbing catalogue. Vectus multi-layer tanks prevent algae formation and keep water cooler under coastal Andhra summer sunshine. Includes airtight threaded lid to keep out dust and insects.',
    specifications: {
      'Capacity': '1000 Litres (Also available in 500L, 750L, 2000L)',
      'Layers': '4 Layers: Outer UV shield + Foam insulation + Strength layer + Antibacterial food grade lining',
      'Material': '100% Virgin Food Grade LLDPE',
      'Lid': 'Heavy threaded lockable top lid'
    },
    applications: ['Residential rooftop water storage', 'Apartment multi-tank banks', 'Commercial building supply'],
    image: '/images/products/vectus_water_tanks.jpg',
    availability: 'Wholesale Bulk Available',
    featured: true,
    isWholesaleBulk: true,
    tags: ['water tank', 'vectus', 'storage tank', '1000 litre', 'overhead tank']
  },
  {
    id: 'plumb-36',
    name: 'Crompton Greaves 1.0 HP High-Lift Domestic Water Pump',
    category: 'plumbing',
    subCategory: 'Pipe Fittings & Valves',
    brand: 'Crompton Greaves',
    demoPrice: 6500,
    unit: 'unit',
    shortDescription: 'Self-priming regenerative monobloc water pump with 100% copper winding and brass impeller.',
    fullDescription: 'Designed for residential water pumping from underground sumps to multi-storey overhead tanks. Equipped with thermal overload protection (TOP) and dynamically balanced rotor for vibration-free operation.',
    specifications: {
      'Power Rating': '1.0 HP / 0.75 kW',
      'Head Range': '6 to 45 meters',
      'Discharge': 'Up to 3,200 Litres per hour',
      'Winding': 'Class-F insulated copper winding',
      'Impeller': 'Forged high-wear brass'
    },
    applications: ['Bunglow sump to rooftop tank', 'Apartment water booster', 'Agricultural garden supply'],
    image: '/images/products/domestic_water_pumps.jpg',
    availability: 'In Stock',
    featured: true,
    isWholesaleBulk: true,
    tags: ['water pump', 'crompton', 'monobloc', 'submersible', 'motor pump']
  },
  {
    id: 'plumb-37',
    name: 'Prince Flowguard Plus CPVC Pipe & Brass Fittings Bundle',
    category: 'plumbing',
    subCategory: 'Pipes & Conduit',
    brand: 'Prince Piping Systems',
    demoPrice: 460,
    unit: '3m length (1.25 inch)',
    shortDescription: 'High-impact chlorinated PVC pipe tested for rigorous high-rise hot and cold water pressure.',
    fullDescription: 'Prince Flowguard Plus CPVC systems guarantee non-toxic potable drinking water delivery. Withstands high hydrostatic pressures and hot water geyser supplies up to 93°C with zero chemical leaching.',
    specifications: {
      'Size': '1.25 inch (SDR 11 / Class 1)',
      'Material': 'Flowguard Plus Chlorinated Polyvinyl Chloride',
      'Standard': 'IS 15778 & ASTM D2846 certified',
      'Impact Strength': '25% higher impact resistance than conventional CPVC'
    },
    applications: ['Solar water lines', 'Geyser concealed piping', 'High-rise plumbing shafts'],
    image: '/images/products/prince_piping_systems.jpg',
    availability: 'Wholesale Bulk Available',
    featured: false,
    isWholesaleBulk: true,
    tags: ['prince pipe', 'cpvc', 'prince piping', 'plumbing', 'hot water pipe']
  },
  {
    id: 'elec-38',
    name: 'Cona Original Heavy Duty Double Pole (DP) MCB 40A',
    category: 'electricals',
    subCategory: 'Circuit Protection & MCB',
    brand: 'Cona Electricals',
    demoPrice: 380,
    unit: 'piece',
    shortDescription: 'Double pole isolator switch with positive contact indicator for residential main power distribution.',
    fullDescription: 'Cona Original & Genuine switchgear engineered to disconnect both phase and neutral simultaneously. Robust silver alloy contacts minimize arcing and withstand heavy motor and AC startup currents.',
    specifications: {
      'Current Rating': '40 Amps, 240/415V AC',
      'Poles': 'Double Pole (DP) with mechanical interlock',
      'Breaking Capacity': '10 kA short circuit rating',
      'Housing': 'Self-extinguishing thermoset polymer body'
    },
    applications: ['Main residential entrance switch', 'Heavy air conditioner isolation', 'Pump control switchboards'],
    image: '/images/products/cona_switchgear_mcb.jpg',
    availability: 'In Stock',
    featured: false,
    tags: ['dp mcb', 'cona', 'mcb', 'switchgear', 'isolator', 'circuit breaker']
  },
  {
    id: 'elec-39',
    name: 'Crompton Speedo Air Energy-Saving BLDC Ceiling Fan 1200mm',
    category: 'electricals',
    subCategory: 'Fans & Ventilation',
    brand: 'Crompton Greaves',
    demoPrice: 3150,
    unit: 'piece with remote',
    shortDescription: 'Super-efficient 28W BLDC motor ceiling fan with smart remote control and timer functions.',
    fullDescription: 'Stocked in our front showroom fan inventory. Consumes 60% less electricity than conventional induction fans, saving up to ₹1,500/year on power bills. Operates consistently even under low voltage conditions.',
    specifications: {
      'Motor Type': 'Brushless DC (BLDC) 28 Watts',
      'Sweep': '1200 mm (48 inch)',
      'Speed': '370 RPM with 225 CMM air delivery',
      'Control': 'Full function RF remote with sleep timer and breeze mode',
      'Warranty': '2 Years on-site manufacturer warranty'
    },
    applications: ['Bedrooms and living rooms', 'Offices and commercial stores', 'Inverter-powered homes'],
    image: '/images/products/ceiling_fan_cartons.jpg',
    availability: 'In Stock',
    featured: true,
    tags: ['bldc fan', 'ceiling fan', 'crompton', 'speedo air', 'remote fan', 'energy saving']
  },
  {
    id: 'elec-40',
    name: 'Goldmedal Smart Modular LED Display & 15L Storage Water Heater Geyser',
    category: 'electricals',
    subCategory: 'LED Lighting',
    brand: 'Goldmedal',
    demoPrice: 5800,
    unit: 'unit',
    shortDescription: 'Glasslined storage geyser with digital temperature display and high-density PUF insulation.',
    fullDescription: 'Displayed alongside our Goldmedal lighting panel in the showroom. Heavy gauge steel inner tank coated with blue diamond vitreous enamel to withstand 8-bar pressure in multi-storey apartments and hard borewell water.',
    specifications: {
      'Capacity': '15 Litres Storage (25L option available)',
      'Heating Element': 'Incoloy 840 high-efficiency glasslined element 2000W',
      'Pressure Rating': '8 Bar (suitable for high-rise buildings)',
      'Anode': 'Extra-long magnesium anode rod for anti-corrosion defense'
    },
    applications: ['Modern bathroom hot water', 'Kitchen sink utility', 'Winter bathing systems'],
    image: '/images/products/storage_water_heater_geyser.jpg',
    availability: 'In Stock',
    featured: true,
    tags: ['geyser', 'water heater', 'goldmedal', 'heating', 'bathroom geyser']
  }
];

export const CATEGORIES_CONFIG = [
  {
    id: 'electricals' as const,
    name: 'Electricals',
    tagline: 'Powering Safety & Innovation',
    description: 'High conductivity wires, modular switches, MCBs, DB boxes, fans, and modern LED lighting systems.',
    bgGradient: 'from-blue-600/10 via-blue-500/5 to-transparent',
    accentColor: '#0266C8',
    itemCount: '12+ Sub-categories',
    items: [
      'Wires & Cables', 'Modular Switches', 'Sockets & Plates', 'MCBs & DB Boxes',
      'Distribution Boards', 'LED Lights', 'Ceiling Fans', 'Circuit Protection',
      'Conduit Pipes', 'Electrical Accessories'
    ],
    image: '/images/products/goldmedal_switches.jpg'
  },
  {
    id: 'plumbing' as const,
    name: 'Plumbing',
    tagline: 'Engineered Water Flow Systems',
    description: 'CPVC, UPVC, PVC pressure pipes, brass valves, leak-proof elbows, couplers, and heavy-duty fittings.',
    bgGradient: 'from-cyan-600/10 via-cyan-500/5 to-transparent',
    accentColor: '#0891B2',
    itemCount: '10+ Sub-categories',
    items: [
      'CPVC Hot & Cold Pipes', 'Rigid PVC Pipes', 'Pipe Fittings (Elbows, Tees)',
      'Brass Ball Valves', 'Water Taps', 'Couplers & Unions', 'Non-Return Valves',
      'Solvent Cements', 'Agricultural Casings'
    ],
    image: '/images/products/astral_cpvc_pipes.jpg'
  },
  {
    id: 'sanitary' as const,
    name: 'Sanitary',
    tagline: 'Elegance, Hygiene & Craftsmanship',
    description: 'Vitreous wash basins, western water closets, chrome mixers, rain showers, health faucets, and kitchen sinks.',
    bgGradient: 'from-teal-600/10 via-teal-500/5 to-transparent',
    accentColor: '#0D9488',
    itemCount: '10+ Sub-categories',
    items: [
      'Wash Basins', 'Western Water Closets', 'Chrome Basin Mixers',
      'Overhead Rain Showers', 'Health Faucets', 'Stainless Steel Kitchen Sinks',
      'Anti-Cockroach Floor Drains', 'Flush Cisterns', 'Bathroom Accessories'
    ],
    image: '/images/products/designer_gold_mandala_basin.jpg'
  },
  {
    id: 'hardware' as const,
    name: 'Hardware',
    tagline: 'Strength, Fasteners & Professional Tools',
    description: 'Precision brass door locks, bearing hinges, stainless screws, heavy pipe wrenches, pliers, and adhesives.',
    bgGradient: 'from-amber-600/10 via-amber-500/5 to-transparent',
    accentColor: '#D97706',
    itemCount: '10+ Sub-categories',
    items: [
      'Mortise Door Locks', 'Stainless Steel Screws', 'Ball Bearing Hinges',
      'Adjustable Pipe Wrenches', 'Combination Pliers', 'Wall Anchor Sets',
      'Construction Adhesives', 'Tower Bolts & Latches', 'Cutting Wheels'
    ],
    image: '/images/products/hardware_tools_kit.jpg'
  }
];
