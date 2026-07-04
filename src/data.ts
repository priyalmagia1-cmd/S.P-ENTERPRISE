import { ProductCategory, Industry, Brand, TimelineEvent, FAQItem } from './types';

export const INDUSTRIES: Industry[] = [
  {
    id: 'automobiles',
    name: 'Automobiles & Vehicles',
    description: 'High-tensile fasteners engineered for engine assemblies, chassis, wheel hubs, and body panels with extreme vibration resistance.',
    iconName: 'Car',
    applications: ['Engine mounts', 'Suspension systems', 'Transmission assemblies', 'Wheel hubs', 'Chassis framing']
  },
  {
    id: 'construction',
    name: 'Infrastructure & Construction',
    description: 'Heavy-duty structural fasteners, concrete anchors, and threaded rods for buildings, bridges, pipelines, and steel structures.',
    iconName: 'Building2',
    applications: ['Steel frame buildings', 'Bridge girders', 'Concrete foundation anchoring', 'HVAC mounting', 'Roofing structures']
  },
  {
    id: 'railway',
    name: 'Railways & Metros',
    description: 'Specialized track fasteners, fishplates, locomotive bolts, and overhead electrical line (OHE) hardware matching railway security standards.',
    iconName: 'Train',
    applications: ['Track fastening systems', 'Bogies & underframes', 'Signaling structures', 'OHE line assembly', 'Coach interior fixtures']
  },
  {
    id: 'petroleum',
    name: 'Petroleum & Gas Refinery',
    description: 'Corrosion-resistant B7/L7 stud bolts and heavy nuts for high-pressure flanges, valves, pipelines, and offshore platforms.',
    iconName: 'Droplet',
    applications: ['Pipe flanges', 'Pressure vessels', 'Wellhead connections', 'Heat exchangers', 'Offshore structural joints']
  },
  {
    id: 'wind-power',
    name: 'Wind & Renewable Energy',
    description: 'Large-diameter high-tensile bolts for wind turbine tower segments, foundation rings, and blade rotor assemblies.',
    iconName: 'Wind',
    applications: ['Turbine foundation bolt rings', 'Tower segment joints', 'Rotor blade attachments', 'Nacelle housing bolts', 'Solar panel frames']
  },
  {
    id: 'chemical',
    name: 'Chemical Processing Plants',
    description: 'Highly acid- and chemical-resistant stainless steel (Duplex, SS 316) fasteners that maintain strength in corrosive atmospheres.',
    iconName: 'FlaskConical',
    applications: ['Acid tanks', 'Reactor vessels', 'Processing piping', 'Pumps & impellers', 'Ventilation ducting']
  },
  {
    id: 'electrical',
    name: 'Electricals & Electronics',
    description: 'Precision brass, copper, and self-clinching fasteners for control panels, switchgears, transformers, and electrical terminals.',
    iconName: 'Zap',
    applications: ['Busbars', 'Switchgear housings', 'Control panels', 'Transformer terminals', 'PCB standoffs']
  },
  {
    id: 'shipping',
    name: 'Marine & Shipping',
    description: 'Marine-grade stainless steel (SS 316, Duplex) fasteners with exceptional resistance to saltwater corrosion and stress cracking.',
    iconName: 'Ship',
    applications: ['Hull fittings', 'Propulsion systems', 'Deck equipment', 'Dock mooring systems', 'Sub-sea instruments']
  },
  {
    id: 'pharma',
    name: 'Pharmaceutical Equipment',
    description: 'Ultra-clean, sanitary stainless steel (SS 316L, 310) fasteners for processing mixers, autoclaves, and cleanrooms.',
    iconName: 'ShieldPlus',
    applications: ['Sanitary fittings', 'Mixers & blenders', 'Autoclaves', 'Sterilizer racks', 'Laboratory benches']
  }
];

export const BRANDS: Brand[] = [
  {
    id: 'unbrako',
    name: 'Unbrako',
    logoText: 'Unbrako',
    description: 'World leader in high-strength industrial socket screws, bolts, and heavy-duty fasteners.',
    specialty: 'High-Tensile Socket Head Cap Screws & Bolts',
    featured: true
  },
  {
    id: 'hilti',
    name: 'Hilti',
    logoText: 'HILTI',
    description: 'Global benchmark for premium heavy anchoring systems, chemical injectables, and structural anchor bolts.',
    specialty: 'Chemical Anchors & Heavy-duty Concrete Anchoring',
    featured: true
  },
  {
    id: 'caparo',
    name: 'Caparo',
    logoText: 'caparo',
    description: 'Leading Indian brand manufacturing premium grade high-tensile fasteners for automotive and aerospace sectors.',
    specialty: 'Automotive and High-Tensile Standard Fasteners',
    featured: true
  },
  {
    id: 'fischer',
    name: 'Fischer Fixing Systems',
    logoText: 'fischer',
    description: 'German engineering excellence for light, heavy, and chemical fixing technology across construction.',
    specialty: 'Nylon Plugs, Steel Anchors, & Injection Mortars',
    featured: true
  },
  {
    id: 'fitright',
    name: 'Fit Right',
    logoText: 'FR',
    description: 'Trusted industrial supplier of precision nuts, cold forged bolts, and specialty engineering fasteners.',
    specialty: 'Industrial Cold and Hot Forged Bolts & Nuts'
  },
  {
    id: 'tvs',
    name: 'TVS Fasteners',
    logoText: 'TVS',
    description: 'Renowned Indian manufacturer of robust precision fasteners for automotive, machinery, and defense industries.',
    specialty: 'High-Tensile Bolts & Nuts, High Precision Hardware'
  },
  {
    id: 'apl',
    name: 'APL Bolts',
    logoText: 'APL',
    description: 'Specialist manufacturer of commercial and industrial structural bolts and carriage bolts.',
    specialty: 'Standard Structural and Carriage Bolts'
  },
  {
    id: 'viraj',
    name: 'Viraj Profiles',
    logoText: 'VIRAJ',
    description: 'One of the largest global manufacturers of stainless steel wire rods, fasteners, flanges, and bright bars.',
    specialty: 'Stainless Steel (SS 304/316) Fasteners'
  },
  {
    id: 'ups-lakshmi',
    name: 'UPS Lakshmi',
    logoText: 'UPS LAKSHMI',
    description: 'Leading brand for high-strength bolts, heavy hex nuts, and threaded studs serving infrastructure projects.',
    specialty: 'High-Tensile Studs and Structure Fasteners'
  },
  {
    id: 'hp',
    name: 'HP Fasteners',
    logoText: 'HP',
    description: 'Specialized manufacturer of self-drilling screws, drywall screws, and light engineering fasteners.',
    specialty: 'Self-Drilling & Self-Tapping Screws'
  },
  {
    id: 'kun',
    name: 'Kun SS',
    logoText: 'Kun',
    description: 'Elite specialist brand supplying high-integrity stainless steel bolts and nuts to chemical and process plants.',
    specialty: 'Premium Stainless Steel Nuts & Bolts'
  },
  {
    id: 'mfpl',
    name: 'MFPL',
    logoText: 'MFPL 8.8',
    description: 'High-precision hot-dip galvanized and zinc-plated Grade 8.8 Hex Bolts supplier.',
    specialty: 'Galvanized Grade 8.8 Structural Bolts'
  },
  {
    id: 'tuff',
    name: 'Tuff Fasteners',
    logoText: 'TUFF',
    description: 'Premium manufacturer of high-tensile and chemical-resistant industrial fasteners.',
    specialty: 'High-Tensile & Stainless Steel Fasteners'
  }
];

export const TIMELINE: TimelineEvent[] = [
  {
    year: '1992',
    title: 'Company Foundation',
    description: 'S.P. Enterprise was established by the visionary head Mr. Mehul Magia in Mumbai with a clear mission: to provide the highest-grade industrial fasteners to the Indian manufacturing sector.'
  },
  {
    year: '2000',
    title: 'Product Range Expansion',
    description: 'We expanded our product offering to over 10,000 fastener varieties, integrating high-tensile alloy steels, and established strong partnerships with certified national vendors.'
  },
  {
    year: '2008',
    title: 'Warehouse & Logistics Expansion',
    description: 'Moved into a state-of-the-art warehouse facility at Bibjan Street, Mumbai, streamlining our inventory system to support fast PAN India shipments.'
  },
  {
    year: '2015',
    title: 'ISO Certification & Quality Rigor',
    description: 'Received the ISO 9001:2015 Management System Certification (TÜV Austria), verifying that our inspection, quality testing, and batch tracking meet elite international standards.'
  },
  {
    year: 'Present',
    title: '50,000+ Fastener Varieties & Digital Presence',
    description: 'Today, S.P. Enterprise is a leading B2B supplier catering to over 9 core sectors, delivering robust standard and custom-engineered fastening solutions PAN India.'
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'q1',
    question: 'Do you supply fasteners PAN India?',
    answer: 'Yes, S.P. Enterprise supplies products across all major industrial zones, ports, and cities in India. We partner with reliable cargo and logistics providers to ensure fast, insured delivery to your facility or construction site.'
  },
  {
    id: 'q2',
    question: 'What is your Minimum Order Quantity (MOQ)?',
    answer: 'As a B2B manufacturer and wholesaler, our MOQs depend on the item type, size, and material. For standard inventory items, we offer highly flexible quantities, while custom-manufactured items or specialized coatings have specific batch-run minimums. Please submit an RFQ or contact our sales team with your exact needs.'
  },
  {
    id: 'q3',
    question: 'Do you manufacture custom fasteners based on client drawings?',
    answer: 'Absolutely. We specialize in producing custom fasteners matching your exact dimensions, thread specifications, material grades, and finishes. You can upload your PDF/CAD drawings directly via our "Request Quote" portal, and our technical department will review and submit a quote.'
  },
  {
    id: 'q4',
    question: 'What materials, grades, and finishes are available?',
    answer: 'We supply fasteners in Mild Steel (Grade 4.6, 5.6), High-Tensile Steel (Grade 8.8, 10.9, 12.9, 14.9, B7, B7M, L7, L7M), Stainless Steel (SS 202, 304, 304L, 316, 316L, 310, SS 410, Duplex), Brass, Copper, Aluminum, and Nylon. Available finishes include plain, zinc plated (trivalent blue, yellow), hot-dip galvanized (HDG), nickel, PTFE/Xylan, cadmium, and dacromet coatings.'
  },
  {
    id: 'q5',
    question: 'Are your products certified, and do you provide Test Certificates (TC)?',
    answer: 'Yes, S.P. Enterprise is an ISO 9001:2015 certified company (TÜV Austria). All high-tensile and critical-application fasteners are supplied with standard Material Test Certificates (MTC) containing chemical composition, mechanical properties, and hardness tests, conforming to DIN, ISO, ASTM, and IS standards.'
  },
  {
    id: 'q6',
    question: 'Do you export industrial fasteners?',
    answer: 'Yes, we handle international supply contracts. We can export fasteners globally, complying with all necessary customs documentation, sea/air shipping standards, and robust wooden crate packaging to protect cargo against sea moisture.'
  }
];

const BASE_CATALOG: ProductCategory[] = [
  {
    id: 'hexagon-bolts',
    name: 'Hexagon Bolts',
    description: 'High-precision standard and structural hexagon bolts in high-tensile and mild steels.',
    iconName: 'bolt',
    products: [
      {
        id: 'hb-01',
        name: 'Hex Bolts (Mild Steel & High Tensile)',
        description: 'Standard heavy hex head bolts designed for versatile engineering and structural applications.',
        specs: {
          standards: 'IS 1364 / 1367, DIN 931 / 933, ISO 4017 / 4014',
          grade: '4.6, 4.8, 5.6, 6.8, 8.8, 10.9, 12.9, 14.9, B7, B7M, L7, L7M, B16',
          finish: 'Self, Zinc, Black, Hot-Dip Galvanized, Cadmium, Xylan/PTFE, Dacromet',
          sizeRange: '3mm to 100mm (3/16" to 3")',
          threads: 'Metric BSW, UNF, BSF, UNC Finepitch, Left-hand threads'
        },
        features: ['Precision forged head', 'Excellent load distribution', 'Massive size array available in stock', 'High corrosion protection variants'],
        applications: ['Steel frame buildings', 'Machinery fabrication', 'Vehicle assemblies', 'Pipe flange connections']
      },
      {
        id: 'hb-02',
        name: 'HSFG Structural Bolts',
        description: 'High Strength Friction Grip structural bolts engineered for heavy civil framing and joint friction grip applications.',
        specs: {
          standards: 'IS 3757, ISO 7412, ASTM A 325',
          grade: '8.8S, 10.9S',
          finish: 'Zinc Plated, Black Oxide, Hot-Dip Galvanized, Cadmium, XYLAN/PTFE, Dacromet',
          sizeRange: '12mm to 36mm',
          threads: 'Metric Standard threads'
        },
        features: ['Engineered for joint friction shear', 'Extreme tensile safety margins', 'Specifically hardened matching ISO requirements'],
        applications: ['Railway bridges', 'Heavy highway steel girders', 'High-rise steel columns', 'Transmission tower connections']
      },
      {
        id: 'hb-03',
        name: 'Specialty Hex Bolts',
        description: 'Corrosion resistant and custom application hex bolts including shear bolts, zinc plated, and colorful PTFE coated bolts.',
        specs: {
          standards: 'DIN 933, custom parameters',
          grade: '8.8, 10.9, 12.9',
          finish: 'Bright Zinc Plated, PTFE / Xylan Coated (Blue, Yellow, Green, Red), Dacromet',
          sizeRange: '6mm to 48mm',
          threads: 'Metric, UNF, UNC'
        },
        features: ['PTFE coatings block chemical attack', 'Easy dismantling in offshore/moist plants', 'Controlled friction coefficient during torqueing'],
        applications: ['Chemical processing plants', 'Sub-sea piping flange joints', 'Automotive suspension sheer points', 'Water treatment stations']
      }
    ]
  },
  {
    id: 'studs-rods',
    name: 'Studs & Threaded Rods',
    description: 'Continuously threaded bars and double-end stud bolts for heavy pressure flange connections.',
    iconName: 'sliders',
    products: [
      {
        id: 'st-01',
        name: 'ASTM A193 B7 Stud Bolts & Threaded Rods',
        description: 'Elite grade high-tensile alloy steel studs for high-temperature and high-pressure chemical/petroleum pipelines.',
        specs: {
          standards: 'DIN 939 / 938 / 975, ASTM A193 / A320',
          grade: '4.6, 4.8, 5.6, 6.8, 8.8, 10.9, 12.9, B7, B7M, L7, L7M, B16',
          finish: 'Self-color, Zinc Plated, Black Phosphated, Hot-Dip Galvanized, Cadmium, XYLAN / PTFE, Dacromet',
          sizeRange: '4mm to 100mm (3/16" to 3")'
        },
        features: ['Uniform thread pitch across full body', 'Capable of withstands extreme heat cycle pressure', 'High elongation properties to avert shear snaps'],
        applications: ['Oil refinery pipelines', 'Gas pressure valves', 'Turbine casings', 'Chemical storage tank flanges']
      },
      {
        id: 'st-02',
        name: 'Special Studs (Double End, Weld, GI)',
        description: 'Specialty studs including Double End studs, Weld studs, and general GI Threaded rods for engineering setups.',
        specs: {
          standards: 'DIN 938, DIN 939, custom drawings',
          grade: '4.6, 8.8, 10.9, 12.9, Stainless Steel',
          finish: 'Plain, Zinc Plated, GI (Galvanized Iron), PTFE coated, Copper plated (for weld studs)',
          sizeRange: 'M4 to M56'
        },
        features: ['Perfect double tap sizing', 'High-integrity weld flange bases', 'Excellent corrosion block'],
        applications: ['Engine manifold mounts', 'Sheet metal fastener plates', 'Suspension ceiling pipe hangers', 'Concrete insert plates']
      }
    ]
  },
  {
    id: 'nuts',
    name: 'Industrial Nuts',
    description: 'An exhaustive inventory of heavy hex, locking, cap, square, and torque prevailing nuts.',
    iconName: 'nut',
    products: [
      {
        id: 'nt-01',
        name: 'Hex Nuts & Heavy Hex Nuts',
        description: 'Standard and thick structural hex nuts for pairing with bolts and threaded rods.',
        specs: {
          standards: 'DIN 934 / IS 1364, ISO 4032',
          grade: '4.6, 6, 8.8, 10.9',
          sizeRange: '3mm to 100mm (1/8" to 4")',
          finish: 'Plain, Black Oxide, Zinc Plated, Hot-Dip Galvanized, Cadmium, PTFE, Nickel'
        },
        features: ['Clean cut internal threads', 'High proof load ratings', 'Excellent thread engagement depth'],
        applications: ['General steel construction', 'Machine equipment assembly', 'Flange bolting', 'Industrial framing']
      },
      {
        id: 'nt-02',
        name: '2H Nuts & HSFG Nuts',
        description: 'Heavy hex nuts engineered with critical tempering for extreme load structural and high-pressure duties.',
        specs: {
          standards: 'SA-194-2H / ASTM A194 Gr 2H, SA-194-UN15587 / IS 6623',
          grade: '2H, 2HM, 8S, 10S',
          sizeRange: '12mm to 64mm (1/2" UNC to 3" / HSFG: 12mm to 64mm)',
          finish: 'Plain, Black Oxide, ZP, HDG, PTFE/Xylan, Cadmium'
        },
        features: ['Tested for extreme proof stress load', 'No thread stripping under severe torqueing', 'Hardness calibrated matching high-grade bolts'],
        applications: ['High temperature pressure valves', 'Petroleum refineries', 'Heavy structural bridges', 'Marine structural couplings']
      },
      {
        id: 'nt-03',
        name: 'Nylock & Prevailing Torque Nuts',
        description: 'Self-locking nuts utilizing a nylon ring or distorted metal thread to prevent spin-off due to severe vibration.',
        specs: {
          standards: 'DIN 982 - 985 (Nylock), DIN 980 / ISO 7042 (Prevailing Metal)',
          grade: '4.6, 8, 10',
          sizeRange: '3mm to 52mm (Nylock: 3/16" to 2", Prevailing: 6mm to 24mm)'
        },
        features: ['Prevents self-loosening', 'Maintains joint clamp force in vibrating environments', 'Nylock handles temperatures up to 120°C'],
        applications: ['Automobile engines & chassis', 'Conveyor machinery', 'Pumps & motor assemblies', 'Railway track linkages']
      },
      {
        id: 'nt-04',
        name: 'Specialty Nuts (Dom, Wing, Flange, Square)',
        description: 'A collection of functional fasteners including cosmetic cap Dom nuts, hand-tight Wing nuts, flange-spreading Flange nuts, and vintage Square nuts.',
        specs: {
          standards: 'DIN 1587 (Dom), DIN 315 (Wing), DIN 6923 (Flange), DIN 557 (Square)',
          grade: '4.6, 8, 10',
          sizeRange: '3mm to 30mm (Wing: 3mm to 16mm, Flange: 4mm to 20mm, Square: 3mm to 12mm)'
        },
        features: ['Dom nuts cover thread ends to prevent skin cuts', 'Wing nuts permit quick manual adjustments without tools', 'Flange nuts distribute pressure and block lock slip with serrations'],
        applications: ['Bicycle frames', 'Electrical consumer boxes', 'Furniture structures', 'Machine access hatches']
      }
    ]
  },
  {
    id: 'socket-products',
    name: 'Socket Products',
    description: 'High-tensile Allen bolts, countersunk cap screws, and set screws for flush alignment.',
    iconName: 'wrench',
    products: [
      {
        id: 'sp-01',
        name: 'Socket Head Cap Screws',
        description: 'Classic high-tensile internal hex Allen bolts for high precision mechanical machinery assembly.',
        specs: {
          standards: 'DIN 912, ISO 898, ASTM A 574',
          grade: '4.6, 8.8, 10.9, 12.9',
          finish: 'Zinc Plated, Black, Cadmium, XYLAN / PTFE, Dacromet',
          sizeRange: 'M2 to M64 (1/8" to 1 1/2")'
        },
        features: ['Deep internal hexagonal drive', 'Enables compact, low-space joint layouts', 'Ultra-high shear and tensile strength properties'],
        applications: ['Dies & molds manufacturing', 'Robotics and aerospace jigs', 'Machine tools assembly', 'High speed engines']
      },
      {
        id: 'sp-02',
        name: 'Countersunk & Button Head Socket Screws',
        description: 'Countersunk screws for flush surface mounting, and rounded button heads for clean, decorative joints.',
        specs: {
          standards: 'DIN 7991 (CSK), DIN 7380 (Button)',
          grade: '4.6, 8.8, 10.9, 12.9',
          sizeRange: 'CSK: M2 to 30 mm (1/8" to 1") | Button: M3 to M16 (3/16" to 3/8")'
        },
        features: ['Flush joint surface profile preventing snagging', 'Aesthetic rounded head caps', 'Excellent torque transmitting hex drives'],
        applications: ['Medical laboratory machines', 'Electrical consumer appliances', 'Escalator safety plates', 'Furniture architectural framing']
      },
      {
        id: 'sp-03',
        name: 'Special Socket Screws (Low Head, Shoulder, Grub)',
        description: 'Specialty socket items: Low Head screws for micro clearances, Shoulder bolts for pivots, and Set Screws (Allen Grub screws) with various point profiles.',
        specs: {
          standards: 'DIN 7984-6912 (Low Head), ISO 7379 (Shoulder), DIN 916/913/914/915 (Grub)',
          type: 'Grub: Cup Point, Flat, Cone, Half Dog, Full Dog Points',
          grade: '8.8, 10.9, 12.9',
          sizeRange: 'Low Head: M4 to M24 | Shoulder: M4 to M20 | Grub: M2 to M36'
        },
        features: ['Grub screws lock shafts without any external head protruding', 'Shoulder screw shaft provides smooth unthreaded pivot bearing wall'],
        applications: ['Gear transmission shafts', 'Pulleys & belt tensioners', 'Compact camera brackets', 'Machinery linkages']
      }
    ]
  },
  {
    id: 'washers',
    name: 'Washers',
    description: 'Load-distributing washers, tension indicators, wave washers, and locking washers.',
    iconName: 'circle',
    products: [
      {
        id: 'ws-01',
        name: 'Standard Washers (Plane, Spring, HSFG)',
        description: 'Flat, spring lock, and thick hardened friction grip washers to manage joint clamp friction.',
        specs: {
          standards: 'DIN 125, IS 2016 (Plane & Spring) | IS 6649 (HSFG)',
          finish: 'Plain, Zinc plated, HDG, Cadmium, PTFE, Black'
        },
        features: ['Spring washers maintain continuous friction against minor settling', 'HSFG washers designed with precise planeness and hardness'],
        applications: ['All standard bolted joints', 'Heavy civil structural framings', 'HVAC mounting brackets']
      },
      {
        id: 'ws-02',
        name: 'Locking & Specialty Washers',
        description: 'Advanced engineering washers: DTI tension indicators, Wedge lock (DIN 25201), Star, Taper (DIN 434), Safety Knurled (DIN 9250), Wave, Disc spring (DIN 2093), Countersunk, and Push Lock washers.',
        specs: {
          standards: 'DTI: ASTM F 959 | Wedge Lock: DIN 25201 | Star: DIN 6797-6798 | Taper: IS 5372-5374 | Safety Knurled: DIN 9250 | Disc: DIN 2093'
        },
        features: ['DTI washers have physical protrusions that flatten when correct clamp load is hit', 'Wedge lock washers prevent self-rotation on extreme vibration by tension locking', 'Disc spring washers supply massive spring rates in very tight spaces'],
        applications: ['Bridge steel join reviews', 'Turbine vibration hubs', 'Under-track railway framing', 'Heavy electronic busbars']
      }
    ]
  },
  {
    id: 'stainless-steel',
    name: 'Stainless Steel Fasteners',
    description: 'Corrosion resistant nuts, bolts, washers, and pins in high-integrity SS alloys.',
    iconName: 'shield',
    products: [
      {
        id: 'ss-01',
        name: 'SS Industrial Fasteners',
        description: 'A rich selection of stainless steel nuts, hex bolts, socket cap screws, studs, washers, circlips, and dome bolts.',
        specs: {
          grade: 'SS 202, SS 304, SS 304L, SS 316, SS 316L, SS 310, B8, B8M, SS 410, DUPLEX',
          finish: 'Acid Cleaned, Passivated, Bright Polished'
        },
        features: ['High-alloy composition blocking moisture rust', 'SS 316L prevents chemical pitting corrosion', 'SS 310 handles high temperature scaling', 'Duplex steels provide double the strength of standard SS'],
        applications: ['Pharmaceutical equipment', 'Chemical processing piping', 'Marine deck fittings', 'Food processing reactors']
      },
      {
        id: 'ss-02',
        name: 'Special SS Fasteners',
        description: 'Precision SS components including dome bolts, blind rivets, weld nuts, nylock nuts, self-drilling & self-tapping screws, and socket set grub screws.',
        specs: {
          material: 'SS 304 / SS 316',
          finish: 'Bright Polish'
        },
        features: ['Clean sanitary profiles', 'High hardness drilling points on self-drill screws', 'Zero maintenance rustless life cycle'],
        applications: ['Outdoor panel frames', 'Sanitary medical apparatus', 'Coastal solar panel setups', 'Yacht framing']
      }
    ]
  },
  {
    id: 'anchor-fasteners',
    name: 'Anchor Fasteners',
    description: 'Heavy duty concrete anchors, chemical capsules, and expansion bolts for structural fixing.',
    iconName: 'anchor',
    products: [
      {
        id: 'af-01',
        name: 'Heavy Duty Mechanical Anchors',
        description: 'High shear strength concrete expansion anchors including Through Anchors, Pin Type, Bullet Anchors, and Nylon frame anchors.',
        specs: {
          standards: 'Conforms to European Technical Assessment (ETA) parameters',
          finish: 'Zinc Plated, Stainless Steel'
        },
        features: ['Wedge expanders lock securely deep in concrete pores', 'High pull-out and shear load capacity', 'Easy torque-controlled expansions'],
        applications: ['Elevator guide rail installations', 'Structural column bottom plates', 'Warehouse racking bases', 'Facade bracket systems']
      },
      {
        id: 'af-02',
        name: 'Chemical Anchors & Fixing Systems',
        description: 'Elite chemical resins and anchoring rods including Hilti chemical, Chemical anchor studs, Fischer chemicals (FIS V Plus), and chemical glass capsules.',
        specs: {
          material: 'High-strength Vinyl ester, Epoxy resin formulas with Grade 8.8 / SS studs'
        },
        features: ['Zero-stress expansion anchoring, ideal for close-to-edge fixing', 'Fills void spaces in concrete completely preventing water moisture entry', 'Superior resistance in dynamic load/seismic zones'],
        applications: ['Underwater marine anchorage', 'Seismic structural retrofits', 'Heavy machinery foundation vibration dampening', 'Heavy crane rail fixings']
      }
    ]
  },
  {
    id: 'nut-inserts',
    name: 'Nut Inserts',
    description: 'Round body and hex body rivet nuts in steel, stainless steel, and brass.',
    iconName: 'database',
    products: [
      {
        id: 'ni-01',
        name: 'Rivet Nut Inserts & Installation Tools',
        description: 'Blind rivet nuts that provide load-bearing internal threads in thin sheet materials.',
        specs: {
          material: 'Steel CR3+ (Trivalent Blue Zinc / Yellow), Stainless Steel (304 / 316), Aluminum, Brass',
          range: 'M3 to M12'
        },
        type: 'Round body flat head, Round body reduced head, Full hex flat head, Full hex reduced head, Half hex flat head, Half hex reduced head, Closed end inserts',
        features: ['No need for weld nut process on sheet metal', 'Provides strong steel threads in soft alloy walls', 'Closed-end variants prevent fluid or dust leakage from rear'],
        applications: ['Automotive car doors', 'HVAC sheet panels', 'Aircraft interior luggage racks', 'Metal switchboards', 'Accessories: Pneumatic guns, hand rivet guns']
      }
    ]
  },
  {
    id: 'self-clinching',
    name: 'Self-Clinching Fasteners',
    description: 'Standoffs, studs, and nuts designed for permanent mounting in thin sheet metal.',
    iconName: 'square',
    products: [
      {
        id: 'sc-01',
        name: 'Self-Clinching Nuts, Studs & Standoffs',
        description: 'Fasteners that permanently lock into sheet metal panels when pressed under high load.',
        specs: {
          material: 'Hardened Steel, EN8 alloy, Stainless Steel SS 304/316',
          finish: 'Trivalent Blue Zinc Plated, Yellow Zinc Plated',
          clinchNutSize: '2.5mm to 10mm',
          clinchStudSize: '2.5mm to 8mm (Length: 5mm to 40mm)'
        },
        features: ['Flange serrations cold-flow the sheet metal into the clinch groove', 'Extremely high push-out and torque-out resistance', 'Leaves rear of sheet metal completely flat and flush'],
        applications: ['Server rack chassis', 'Telecommunication cabinets', 'Medical equipment boxes', 'Electronics housings']
      },
      {
        id: 'sc-02',
        name: 'Clinch Weld Studs',
        description: 'MS Copper Coated and SS 304/316 projection weld studs designed for spot welding onto steel sheets.',
        specs: {
          material: 'Mild Steel Copper Coated, Stainless Steel 304 / 316'
        },
        features: ['Spot projection tip for instantaneous weld flow', 'Copper coating increases electrical weld conductivity', 'Provides solid threads on paper-thin panels'],
        applications: ['Home appliances cabinet frames', 'Automotive firewall panels', 'Heavy switchboards']
      }
    ]
  },
  {
    id: 'other-fasteners',
    name: 'Specialty Fasteners',
    description: 'Specialty components including helicoils, blind rivets, dowel pins, spring nuts, and circlips.',
    iconName: 'component',
    products: [
      {
        id: 'ot-01',
        name: 'Locking, Thread Repair & Pin Fasteners',
        description: 'Repair threads with Helicoils, secure panels with Blind Rivets, or locate parts with Dowel-Taper pins.',
        specs: {
          material: 'Carbon Steel, Stainless Steel, Spring Steel, Brass, Nylon'
        },
        type: 'Blind Rivets, Self Drilling Screw, Tiger Nuts, Helicoils, Thread Inserts, Dowel-Taper Pins, Spring Dowel Pins, Circlips, T Hammer Nuts, Spring Nuts, Tool Holder Bolt, Ball Plungers, R Pins, Nylon Bolt Nuts, Cage Nuts',
        features: ['Helicoils repair stripped spark plug or machinery threads', 'Circlips lock shaft bearings in grooves', 'Cage nuts fit server rails allowing quick clip installation'],
        applications: ['Data center server racks', 'Hydraulic cylinders', 'Precision alignment shafts', 'Electrical panel sheets']
      }
    ]
  },
  {
    id: 'industrial-hardware',
    name: 'Industrial Hardware & Fittings',
    description: 'Grease nipples, pipe plugs, rivets, eye bolts, carriage bolts, and hex coach screws.',
    iconName: 'settings',
    products: [
      {
        id: 'ih-01',
        name: 'Specialty Forged Fittings & Hardware',
        description: 'Core hardware fixtures including heavy carriage bolts, grease nipples, coach screws, KM locknuts, pipe plugs, eye bolts, and wood inserts.',
        specs: {
          material: 'Drop Forged Carbon Steel, Stainless Steel, Copper'
        },
        type: 'Allen Keys, Carriage Bolts, Copper Washers, Grease Nipples, Hex Coach Screw, KM Nuts, Monobolt Rivets, Pipe Plugs, Rivets, Splitpins, T Nut - Bolt, Wood Inserts, Wing Screws, Flange Bolts, Lifting Eyebolt & Eyenut',
        features: ['Heavy drop forged eye bolts handle major vertical hoist cranes', 'Grease nipples ensure grease enters bearings while locking dirt out', 'Hex coach screws drill directly into heavy wooden sleeper ties'],
        applications: ['Heavy machinery lifting points', 'Agriculture tractor components', 'Wooden structural joints', 'Hydraulic fluid plumbing plugs']
      }
    ]
  },
  {
    id: 'tools-bearings',
    name: 'Tools, Bearings & Cutters',
    description: 'Bearings, grinding wheels, carbide inserts, and high speed cutting tools.',
    iconName: 'binary',
    products: [
      {
        id: 'tb-01',
        name: 'Industrial Bearings & Grinding Wheels',
        description: 'Elite grade rolling bearings and grinding/cutting wheels to keep industrial machines moving smoothly.',
        specs: {
          type: 'Bearings: Ball Bearings, Roller Bearings, Linear Bearings, Fluid Bearings, Magnetic Bearings, Plain Bearings | Grinding & Cutting Wheels: All sizes/grit parameters'
        },
        features: ['Low friction running tolerance', 'Vibration resisting designs', 'Highly durable alumina abrasive grids on wheels'],
        applications: ['Electric motors', 'Machine tool spindles', 'CNC linear slides', 'Heavy metal cutting workstations']
      },
      {
        id: 'tb-02',
        name: 'House of Cutting Tools & Carbide Inserts',
        description: 'We represent leading brands like Alfa, Taurus, Totem, IT, Addison supplying bandsaws, drill bits, and premium Balzers coated carbide inserts.',
        specs: {
          coatingType: 'Balzers Coating (AITiN, TiN, DLC)',
          thickness: '2-4mm, suitable for stainless steel, super alloys, titanium alloy tooling'
        },
        type: 'Inserts: TNMG16-MA, WNMG08-MA, CNMG12-MA, VNMG16-MA, TCMT11/16-TF, DCMT07/11-MV, CCMT06/09-TF, DNMG15-MA, VCGT11, DCGT11, CCGT06/09, VCMT11/16',
        features: ['Handles high temperature heat during fast metal milling', 'Extreme wear life', 'Very sharp cutting edges preventing material deformation'],
        applications: ['CNC milling lathes', 'Heavy metal workshops', 'Piston manufacturing rings', 'Aerospace components cutting']
      }
    ]
  }
];

const PRODUCT_IMAGES: Record<string, string> = {
  'hb-01': '/src/assets/images/regenerated_image_1783145701581.png',
  'hb-02': 'https://images.unsplash.com/photo-1542156822-6924d1a71aba?auto=format&fit=crop&w=600&q=80',
  'hb-03': 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80',
  'st-01': 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=600&q=80',
  'st-02': 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80',
  'nt-01': 'https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?auto=format&fit=crop&w=600&q=80',
  'nt-02': 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80',
  'nt-03': 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=600&q=80',
  'nt-04': 'https://images.unsplash.com/photo-1534224039826-c7a0dea0e66a?auto=format&fit=crop&w=600&q=80',
  'sp-01': 'https://images.unsplash.com/photo-1590534247854-e97d5e3feef6?auto=format&fit=crop&w=600&q=80',
  'sp-02': 'https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&w=600&q=80',
  'sp-03': 'https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?auto=format&fit=crop&w=600&q=80',
  'ws-01': 'https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?auto=format&fit=crop&w=600&q=80',
  'ws-02': 'https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=600&q=80',
  'ss-01': 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=600&q=80',
  'ss-02': 'https://images.unsplash.com/photo-1611244419377-b0a78db53e3d?auto=format&fit=crop&w=600&q=80',
  'af-01': 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=600&q=80',
  'af-02': 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=600&q=80',
  'ni-01': 'https://images.unsplash.com/photo-1582921017967-79d1cb17e359?auto=format&fit=crop&w=600&q=80',
  'sc-01': 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=600&q=80',
  'sc-02': 'https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=600&q=80',
  'ot-01': 'https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?auto=format&fit=crop&w=600&q=80',
  'ih-01': 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=600&q=80',
  'tb-01': 'https://images.unsplash.com/photo-1513828742140-ccaa34f3168a?auto=format&fit=crop&w=600&q=80',
  'tb-02': 'https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=600&q=80'
};

export const CATALOG: ProductCategory[] = BASE_CATALOG.map(category => ({
  ...category,
  products: category.products.map(product => ({
    ...product,
    imageUrl: PRODUCT_IMAGES[product.id] || 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80'
  }))
}));
