import ProductVisual from './components/ProductVisual';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Intro from './components/Intro';
import Icon from './components/Icon';
import useSiteMotion from './hooks/useSiteMotion';

// Official Safshikan Products Dataset
const OFFICIAL_SAFSHIKAN_PRODUCTS = [
{
  "id": "building-cleaning",
  "name": "Building Cleaning Drone",
  "sector": "Industry Application",
  "category": "Building & Facade Cleaning",
  "tagline": "Building & Facade Cleaning",
  "image": "/assets/building-cleaning-scene.jpg",
  "description": "Aerial cleaning for glass facades and building exteriors, helping teams reach elevated surfaces with directed water spray.",
  "specs": {},
  "features": [
    "Building & Facade Cleaning",
    "Contact our team for configuration and technical specifications."
  ]
},
{
  "id": "fire-extinguisher",
  "name": "Fire Extinguisher Drone",
  "sector": "Industry Application",
  "category": "Fire Response Support",
  "tagline": "Fire Response Support",
  "image": "/assets/fire-extinguisher-scene.jpg",
  "description": "Aerial firefighting support with directed spray to help response teams reach elevated or difficult-to-access fire locations.",
  "specs": {},
  "features": [
    "Fire Response Support",
    "Contact our team for configuration and technical specifications."
  ]
},
{
  "id": "heavy-lifting",
  "name": "Heavy Lifting Drone",
  "sector": "Industry Application",
  "category": "Cargo & Site Logistics",
  "tagline": "Cargo & Site Logistics",
  "image": "/assets/heavy-lifting-scene.jpg",
  "description": "Aerial lifting and transport of cargo for work sites and remote locations, supporting logistics across challenging terrain.",
  "specs": {},
  "features": [
    "Cargo & Site Logistics",
    "Contact our team for configuration and technical specifications."
  ]
},
{
  "id": "water-rescue",
  "name": "Water Rescue Drone",
  "sector": "Industry Application",
  "category": "Lifebuoy Rescue",
  "tagline": "Lifebuoy Rescue",
  "image": "/assets/water-rescue-scene.jpg",
  "description": "A flying lifebuoy platform for delivering flotation assistance over water and supporting shoreline and boat-based rescue teams.",
  "specs": {},
  "features": [
    "Lifebuoy Rescue",
    "Contact our team for configuration and technical specifications."
  ]
},
  {
    id: 'grim-reaper',
    name: 'The Grim Reaper UAS',
    sector: 'Defense & Armed Reconnaissance',
    category: 'Military-Grade Tactical UAS',
    tagline: 'High-Endurance Tactical UAS with 6x 60mm Mortar Modular Rack',
    image: './assets/grim_reaper_optimized.jpg',
    description: 'Military-grade tactical UAS built for high-endurance missions and precision kinetic delivery. Features a custom modular rack for independent delivery of six 60mm mortars, centimeter-level RTK positioning, dual-sensor Thermal/Visible payload, and 4G C2 datalink.',
    specs: {
      payload: 'Custom Rack for 6x 60mm Mortars',
      range: '20 km Operational Radius',
      endurance: 'Up to 40 mins (no load) / 25 mins (full load)',
      positioning: 'Centimeter-Level RTK Positioning',
      sensors: 'Integrated Dual-Sensor Thermal & Visible Pod',
      comms: '4G Modules for Telemetry & C2 Links'
    },
    features: [
      'Modular independent release rack for six 60mm mortars',
      '20km operational communication radius',
      'Centimeter-level precision utilizing RTK positioning',
      'Integrated 4G telemetry and command-and-control links'
    ]
  },
  {
    id: 'bvlos-network',
    name: 'BVLOS: High Payload Delivery',
    sector: 'Defense & Armed Reconnaissance',
    category: 'Heavy-Lift Tactical UAS',
    tagline: 'High-Capacity Heavy-Lift Tactical UAS for BVLOS Operations',
    image: './assets/bvlos_catalog_actual_optimized.jpg',
    description: 'High-capacity, heavy-lift tactical UAS engineered for Beyond Visual Line of Sight (BVLOS) long-range logistics and mission-critical delivery. Utilizes a network-centric 4G architecture to ensure secure, global command and control up to 25km radius with a 16kg payload.',
    specs: {
      payload: '16 kg Maximum Heavy-Lift Payload',
      range: '25 km Operational Reach',
      endurance: 'Up to 45 mins (no load) / 30 mins (full load)',
      datalink: 'Integrated 4G Module Network-Centric Datalink',
      mode: 'Engineered for BVLOS Tactical Delivery'
    },
    features: [
      'Structural upgrades supporting maximum 16kg heavy-lift payload',
      '25km operational long-range reach for BVLOS missions',
      'Sustained flight operations up to 30 mins with full load (45 mins without)',
      'Integrated 4G modules for global command and telemetry datalink'
    ]
  },
  {
    id: 'sentinel-vigilance',
    name: 'Sentinel Vigilance Pro',
    sector: 'Defense & Armed Reconnaissance',
    category: 'Police-Grade Security Drone',
    tagline: 'Advanced Security & Night Surveillance with Megaphone',
    image: './assets/sentinel_catalog_optimized.jpg',
    description: 'Police-grade security drone specifically designed for surveillance, night operations, and emergency communication. Features multi-sensor camera with 640x480 thermal zoom and a high-output megaphone built into a rugged all-weather carbon fiber airframe.',
    specs: {
      payload: '5 kg Maximum Payload Capacity',
      range: '30 km Operational Reach',
      endurance: 'Up to 60 mins (no load) / 45 mins (full load)',
      sensors: 'Multi-Sensor Camera (Thermal Zoom) & Megaphone',
      datalink: 'Integrated 4G Module Global Telemetry'
    },
    features: [
      'Rugged all-weather carbon fiber security airframe',
      'Integrated multi-sensor thermal zoom optics & high-output megaphone',
      '30km operational long-range mission radius',
      'Sustained flight endurance up to 60 minutes (45 mins with payload)'
    ]
  },
  {
    id: 'sovraan-1',
    name: 'Edith Sovran-I',
    sector: 'Defense & Armed Reconnaissance',
    category: '10-Inch Tactical Delivery UAS',
    tagline: 'Short-Range 10-Inch UAS for Single 60mm Mortar Delivery',
    image: './assets/sovraan_1_catalog_optimized.jpg',
    description: 'Versatile 10-inch tactical UAS designed for precise short-range delivery operations. Engineered for transporting specialized single 60mm mortar payloads across challenging operational environments.',
    specs: {
      platform: '10-Inch Tactical Delivery UAS',
      payload: '1.5 kg Payload (Single 60mm Mortar)',
      range: '5 km Mission Radius',
      endurance: 'Up to 25 mins (no load) / 12.5 mins (full load)',
      loadout: 'Configured for Single 60mm Mortar'
    },
    features: [
      '10-inch heavy carbon fiber tactical frame',
      'Optimized for 1.5kg payload (single 60mm mortar delivery)',
      '5km operational mission radius',
      '12.5 minutes sustained flight carrying full 60mm payload'
    ]
  },
  {
    id: 'sovraan-2',
    name: 'Edith Sovran-II',
    sector: 'Defense & Armed Reconnaissance',
    category: '10-Inch Dual Grenade Delivery UAS',
    tagline: 'Tactical UAS for Simultaneous Delivery of 2x 750g Grenades',
    image: './assets/sovraan_2_catalog_optimized.jpg',
    description: 'Specialized 10-inch tactical UAS designed for dual-payload delivery operations. Features an integrated dual-sensor system (640x480 thermal and 2K visible camera) for simultaneous transport of two 750g grenades.',
    specs: {
      platform: '10-Inch Tactical Delivery UAS',
      payload: '1.5 kg Total Payload (2x 750g Grenades)',
      sensors: 'Integrated Dual-Sensor (640x480 Thermal & 2K Visible)',
      range: '5 km Mission Radius',
      endurance: 'Up to 25 mins (no load) / 12.5 mins (full load)'
    },
    features: [
      'Dual grenade release system (2x 750g grenades)',
      'Integrated dual-sensor optics: 640x480 thermal & 2K visible light',
      '5km mission engagement radius',
      '12.5 mins flight window under full tactical payload'
    ]
  },
  {
    id: 'sovraan-3',
    name: 'Edith Sovran-III',
    sector: 'Defense & Armed Reconnaissance',
    category: '10-Inch Reconnaissance & EW Anti-Jamming',
    tagline: 'Tactical ISR UAS with 22x Zoom, Thermal Optics & EW Anti-Jamming',
    image: './assets/sovraan_3_catalog_optimized.jpg',
    description: 'Specialized 10-inch tactical UAS designed for tactical level reconnaissance and night operations. Equipped with Thermal & Visible camera with 22x extended zoom and hardware anti-jamming module to monitor targets undetected.',
    specs: {
      platform: '10-Inch Tactical Reconnaissance UAS',
      sensors: 'Thermal & Visible Camera (22x Extended Zoom)',
      antiJamming: 'Integrated Hardware Anti-Jamming Module',
      payload: 'Optional Servo Payload Release Mechanism',
      range: '5 km Mission Radius',
      endurance: 'Up to 25 minutes Flight Time'
    },
    features: [
      '22x extended zoom with thermal and 2K visible optics',
      'Integrated electronic warfare anti-jamming module',
      'Optional servo-actuated payload drop mechanism',
      'Undetected night operations and tactical ISR loiter'
    ]
  },
  {
    id: '7inch-digital',
    name: '7-Inch Long Range Digital FPV UAV',
    sector: 'Defense & Armed Reconnaissance',
    category: '7-Inch Digital FPV Platform',
    tagline: 'High-Agility Digital FPV UAV with 4K HD Feed',
    image: './assets/7inch_digital_catalog_optimized.jpg',
    description: 'High-agility tactical kamikaze platform engineered for precision one-way missions. Optimized for low-latency 4K digital video feedback and high maneuverability carrying a 750g tactical payload.',
    specs: {
      platform: '7-Inch FPV Digital UAV',
      transmission: '4K High-Definition Digital Video Feed',
      payload: '750g Tactical Payload',
      range: '2 km+ Mission Radius',
      endurance: 'Up to 25 mins (no load) / 15 mins (full load)'
    },
    features: [
      '4K high-definition digital video feed for enhanced situational awareness',
      '750g tactical payload capacity for targeted delivery',
      '2km+ extended operational mission radius',
      '15 minutes sustained flight time with full 750g load'
    ]
  },
  {
    id: '7inch-analog',
    name: '7-Inch Long Range Analog FPV UAV',
    sector: 'Defense & Armed Reconnaissance',
    category: '7-Inch Analog FPV Platform',
    tagline: 'Zero-Latency Analog FPV UAV with Foxeer & Patch Antenna',
    image: './assets/7inch_analog_catalog_optimized.jpg',
    description: 'Specialized tactical kamikaze platform designed for rapid deployment and high-agility maneuvers. Optimized for zero-latency feedback via an analog link, Foxeer antenna, and high-gain patch antenna.',
    specs: {
      platform: '7-Inch FPV Analog UAV',
      transmission: 'Low-Latency Analog Video Feed',
      antenna: 'Foxeer Antenna & High-Gain Patch Antenna',
      payload: '750g Tactical Payload',
      range: '2 km+ Mission Radius',
      endurance: 'Up to 25 mins (no load) / 15 mins (full load)'
    },
    features: [
      'Zero-latency analog video link for screen-based display output',
      'Foxeer antenna & high-gain patch antenna for RF signal penetration',
      '750g tactical payload carrying capacity',
      '15 minutes flight endurance under full payload'
    ]
  },
  {
    id: '5inch-digital',
    name: '5-Inch Long Range Digital FPV UAV',
    sector: 'Defense & Armed Reconnaissance',
    category: '5-Inch Digital FPV Platform',
    tagline: 'Compact Tactical Interceptor with Digital DJI Video System',
    image: './assets/5inch_digital_catalog_optimized.jpg',
    description: 'Compact, high-velocity tactical interceptor designed for surgical precision in short-range operations. Leverages an integrated Digital DJI Video system for unmatched visual clarity carrying a 300g precision payload.',
    specs: {
      platform: '5-Inch FPV Digital UAV',
      transmission: 'Integrated Digital DJI Video System',
      payload: '300g Precision Payload',
      range: '2 km Operational Distance',
      endurance: 'Sustained Window up to 25 Minutes'
    },
    features: [
      'Integrated Digital DJI Video system for high-fidelity awareness',
      'Tailored for 300g precision payload delivery',
      'Compact, unobtrusive profile for restricted environments',
      '25 minutes operational flight window'
    ]
  },
  {
    id: '5inch-analog',
    name: '5-Inch Long Range Analog FPV UAV',
    sector: 'Defense & Armed Reconnaissance',
    category: '5-Inch Analog FPV Platform',
    tagline: 'Ultra-Responsive FPV UAV with Zero-Latency Analog Feed',
    image: './assets/5inch_analog_catalog_optimized.jpg',
    description: 'Ultra-responsive, small-form tactical asset engineered for rapid engagement in restricted environments. Prioritizes a high power-to-weight ratio and robust analog interface carrying a 300g payload.',
    specs: {
      platform: '5-Inch FPV Analog UAV',
      transmission: 'Integrated Analog Video System (Zero-Latency)',
      antenna: 'Foxeer Antenna & High-Gain Patch Antenna',
      payload: '300g Tactical Payload',
      range: '2 km Operational Distance',
      endurance: 'Sustained Window up to 25 Minutes'
    },
    features: [
      'Zero-latency analog video feed for screen-based output',
      'Foxeer & high-gain patch antenna system',
      'High-discharge battery system for explosive maneuverability',
      '25 minutes sustained operational window'
    ]
  },
  {
    id: 'agron-10l',
    name: 'AGRON 10L Agriculture Spray Drone',
    sector: 'Agriculture & Civil Solutions',
    category: 'Precision Agriculture Sprayer',
    tagline: 'Efficient Aerial Spraying Solution (96 Acres / Day)',
    image: './assets/agron_10l_catalog_optimized.jpg',
    description: 'High-efficiency aerial spraying platform designed for plain field crops. Features 10-liter spray tank, 4-axis sprinklers (up to 5L/min flow), 5km dual-frequency link, and front/back/down terrain-following radar.',
    specs: {
      payload: '10 Liters Spray Tank',
      coverage: '96 Acres / Day (4 Acres / Flight | 12 Acres / Hour)',
      flowRate: 'Max 5 L/min (4 Sprinklers)',
      range: '5 km Dual Frequency Transmission',
      swath: '6 Meters Swath Width (3 Battery Stager Ops)',
      avoidance: 'Front, Back & Down Terrain-Following Radar'
    },
    features: [
      'Replaces hazardous manual pesticide spraying on field crops',
      '96 acres per day coverage capacity (4 acres per flight)',
      'Automated terrain-following radar for uneven fields',
      '3-battery stager continuous operation setup'
    ]
  },
  {
    id: 'agron-30l',
    name: 'AGRON 30L Agriculture Spray Drone',
    sector: 'Agriculture & Civil Solutions',
    category: 'Commercial Farm & Orchard Heavy Sprayer',
    tagline: 'Heavy-Lift Agricultural System (336 Acres / Day)',
    image: './assets/agron_30l_catalog_optimized.jpg',
    description: 'Commercial-grade heavy agricultural drone with 30L spray tank and 50L spreading tank. Engineered for large farms and orchards with dual centrifugal sprinklers delivering up to 16L/min.',
    specs: {
      payload: '30L Spray Tank | 50L Spreading Tank',
      coverage: '336 Acres / Day (7 Acres / Flight | 42 Acres / Hour)',
      flowRate: 'Max 16 L/min (2 Centrifugal Sprinklers)',
      range: '5 km Dual Frequency Transmission',
      swath: '6 Meters Swath Width (3 Battery Stager Ops)',
      avoidance: 'Front, Back & Down Terrain-Following Radar'
    },
    features: [
      'Dual capability: 30L liquid spray & 50L granular spreading tank',
      'Dual centrifugal atomizing sprinklers for drift control',
      'High daily coverage of 336 acres per day (7 acres per flight)',
      '42 acres per hour operational efficiency'
    ]
  },
  {
    id: 'agron-50l',
    name: 'AGRON 50L Agriculture Spray Drone',
    sector: 'Agriculture & Civil Solutions',
    category: 'Ultra Heavy-Lift Sprayer & Spreader',
    tagline: 'Ultra Heavy-Lift Agricultural System (336+ Acres / Day)',
    image: './assets/agron_z50p.jpeg',
    description: 'Commercial-grade ultra heavy agricultural drone with 50L capacity (spray & granular spreading). Engineered for vast farm acreage with high-velocity atomizing sprinklers delivering up to 16L/min.',
    specs: {
      payload: '50L Tank (Liquid Spray & Granular Spreading)',
      coverage: '336+ Acres / Day (7+ Acres / Flight)',
      flowRate: 'Max 16 L/min (High-Velocity Atomizers)',
      range: '5 km Dual Frequency Transmission',
      avoidance: '360° Omnidirectional Obstacle Avoidance Radar'
    },
    features: [
      'Dual capability: 50L heavy spray & granular fertilizer spreading',
      'High-velocity atomizing nozzles for drift control',
      'Ultra high daily coverage for vast commercial acreage',
      '360° omnidirectional obstacle avoidance radar'
    ]
  }
];

// Leadership Team Data
const LEADERSHIP_TEAM = [
  { name: 'Sumama Syed', role: 'CEO & Founder' },
  { name: 'Riaz Hussain Shah', role: 'Co-Founder & CBDO' },
  { name: 'Sheikh Awais', role: 'Agriculture Drone Operator & Social Media Manager' }
];

// Engineering & Defense Services Dataset
const SAFSHIKAN_ENGINEERING_SERVICES = [
  {
    id: 'hw-testing',
    title: 'Hardware Testing & Integration',
    category: 'Avionics & Mechanical Stress',
    icon: 'cpu',
    status: 'AS PER USER REQUIREMENT',
    desc: 'Comprehensive hardware stress testing, environmental vibration testing, thermal calibration, and avionics integration conducted under NASTP facility standards for military and industrial UAVs.',
    features: [
      'Vibration, Thermal & Environmental Stress Testing',
      'Structural Airframe Integration & Center-of-Gravity Tuning',
      'Avionics Power Distribution & ESC Calibration',
      'Payload Structural Mounting & Mechanism Integration'
    ]
  },
  {
    id: 'sitl-sim',
    title: 'SITL ( Software in the Loop ) Simulation',
    category: 'Autonomous Software Verification',
    icon: 'terminal',
    status: 'AS PER USER REQUIREMENT',
    desc: 'Digital twin autonomous flight simulation environment. Tests PX4 autopilot firmware, flight path navigation algorithms, failsafe trigger conditions, and ground control telemetry in full 3D physics environments prior to physical flight trials.',
    features: [
      'Digital Twin 3D Physics & Aerodynamic Modeling',
      'Autonomous Waypoint & Flight Controller Logic Verification',
      'Failsafe, Return-To-Home & Blackout Telemetry Simulation',
      'Multi-UAV Swarm Dynamic Routing Test'
    ]
  },
  {
    id: 'hitl-sim',
    title: 'HITL ( Hardware in the Loop ) Simulation',
    category: 'Real Physical Avionics Simulation',
    icon: 'sliders',
    status: 'AS PER USER REQUIREMENT',
    desc: 'Physical flight controller hardware (Pixhawk, custom PX4 boards, companion computers) linked directly to real-time physics simulators. Validates physical sensor response, PWM motor signals, and hardware timing under high-G tactical maneuvers.',
    features: [
      'Real Flight Controller Board Interfacing (PX4/Pixhawk)',
      'PWM Signal Response & Motor Output Telemetry',
      'Hardware Sensor Fusion & IMU Gyro Stress Testing',
      'Electronic Warfare Jamming & Sensor Noise Injection'
    ]
  },
  {
    id: 'px4-impl',
    title: 'PX4 Based Software & Hardware Implementation',
    category: 'Custom Autopilot Firmware & Stacks',
    icon: 'zap',
    status: 'AS PER USER REQUIREMENT',
    desc: 'Tailored PX4 autopilot software stack development, custom MAVLink protocol extensions, companion computer integration (NVIDIA Jetson / Raspberry Pi), AI vision-based obstacle avoidance, and custom sensor driver implementation.',
    features: [
      'Custom PX4 Autopilot Firmware & MAVLink Extensions',
      'AI Companion Computer Integration (NVIDIA Jetson / NPU)',
      'Obstacle Avoidance & Optical Flow Navigation Systems',
      'Encrypted Radio & SATCOM Telemetry Driver Development'
    ]
  },
  {
    id: 'custom-uav',
    title: 'Custom UAV Design & Development',
    category: 'Bespoke Airframe & Payload Engineering',
    icon: 'compass',
    status: 'AS PER USER REQUIREMENT',
    desc: 'End-to-end bespoke drone design from mission requirement analysis to 3D CAD modeling, CFD aerodynamic analysis, carbon fiber composite fabrication, custom payload rack design, and flight testing.',
    features: [
      'Mission-Specific 3D CAD & Aerodynamic CFD Simulation',
      'Lightweight Carbon Fiber & Kevlar Airframe Layup',
      'Custom Ordnance Release / Agricultural Spray Mechanism',
      'BVLOS Extended Range Airframe Configuration'
    ]
  }
];

// Defense Value Propositions Dataset
const DEFENSE_VALUE_PROPOSITIONS = [
  {
    id: 'ew-antijam',
    title: 'EW Anti-Jamming & Resilient Datalinks',
    tagline: 'Hardware GNSS Anti-Jamming & Dual-Band Frequency Hopping',
    icon: 'shield-alert',
    stats: { immunity: '99.4%', recovery: '< 50ms', protocols: 'AES-256 Encrypted C2' },
    desc: 'Engineered specifically for high-threat Electronic Countermeasure (ECM) environments. Safshikan airframes feature integrated hardware-level GNSS anti-jamming arrays and dual-frequency telemetry links that maintain flight stability and control even under heavy electronic signal suppression.',
    keyFeatures: [
      'Dual-band frequency-hopping spread spectrum (FHSS)',
      'Hardware GNSS CRPA anti-jamming antenna module',
      'Autonomous return-to-base on telemetry link override',
      'Real-time signal health & spectrum disruption monitoring'
    ]
  },
  {
    id: 'kinetic-ordnance',
    title: 'Kinetic Ordnance & Precision Drop Racks',
    tagline: 'Modular Independent Release Systems for 60mm & Grenade Payloads',
    icon: 'target',
    stats: { accuracy: 'Centimeter RTK', capacity: '6x 60mm Mortars', releaseMode: 'Individual / Salvo' },
    desc: 'From single 60mm mortar tactical drops to independent 6-mortar salvo releases on The Grim Reaper UAS, our payload drop mechanisms feature high-torque digital servos with dual mechanical safety locks and real-time arming status confirmation.',
    keyFeatures: [
      'Independent servo-actuated release pins for precise salvo targeting',
      'Centimeter-precision RTK positioning lock before release authorization',
      'Dual mechanical and electronic arm-before-fire safety interlocks',
      'Modular rack quick-swaps under 90 seconds in field conditions'
    ]
  },
  {
    id: 'c4isr-optics',
    title: 'C4ISR Multi-Sensor Thermal & Daylight Optics',
    tagline: '640x480 Uncooled Thermal Pods with 22x Optical Zoom',
    icon: 'eye',
    stats: { thermalRes: '640 x 480 @ 30fps', zoom: '22x Optical Daylight', range: '5 km Target ID' },
    desc: 'Superior night reconnaissance and perimeter surveillance. Equipped with dual-sensor gyro-stabilized gimbals combining high-resolution thermal imaging for pitch-black operations and 2K daylight cameras with 22x continuous optical zoom.',
    keyFeatures: [
      'Gyro-stabilized 3-axis gimbal payload mount',
      '640x480 thermal sensor for pitch-black target tracking',
      '22x optical daylight zoom for standoff distance identification',
      'Low-latency encrypted video feed transmission to ground station'
    ]
  },
  {
    id: 'bvlos-autonomy',
    title: 'Long-Range BVLOS & Tactical Logistics',
    tagline: '25km+ Mission Radius with 16kg Heavy-Lift Delivery Capacity',
    icon: 'navigation',
    stats: { maxRadius: '25 KM', maxLift: '16 KG Payload', control: 'Network-Centric 4G' },
    desc: 'Beyond Visual Line of Sight (BVLOS) operations enabled by network-centric 4G/LTE C2 modules. Enables secure long-range payload transport, rapid emergency medical resupply, and persistent border patrol beyond line-of-sight boundaries.',
    keyFeatures: [
      'Global 4G/LTE telemetry backup for unlimited C2 link range',
      'Autonomous dynamic waypoint route re-calculation',
      'Multi-UAV swarm management and ground station coordination',
      'Fail-safe parachute emergency recovery system integration'
    ]
  }
];

// Interactive Defense Threat Scenarios
const DEFENSE_SCENARIOS = [
  {
    id: 'night-isr',
    name: 'Night Perimeter & Border ISR',
    threat: 'Unsanctioned border intrusion & low-visibility stealth reconnaissance',
    recommendedPlatform: 'Edith Sovran-III / Sentinel Vigilance Pro',
    readinessScore: 98,
    deployTime: '90 Seconds',
    payload: '22x Zoom & 640x480 Thermal Pod',
    datalink: 'Encrypted RF / 4G LTE Backup',
    tacticalAdvantage: 'High-altitude silent loiter with pitch-black thermal tracking and immediate threat identification.'
  },
  {
    id: 'kinetic-strike',
    name: 'Precision Kinetic Strike Mission',
    threat: 'Fortified hostile target requiring surgical ordnance delivery',
    recommendedPlatform: 'The Grim Reaper UAS (6x 60mm Mortar Rack)',
    readinessScore: 96,
    deployTime: '120 Seconds',
    payload: '6x 60mm Mortars (Independent Servo Rack)',
    datalink: 'Dual-Band FHSS Telemetry',
    tacticalAdvantage: 'Centimeter RTK positioning for precision single or salvo ordnance release with zero collateral footprint.'
  },
  {
    id: 'ecm-defense',
    name: 'Heavily Jammed ECM Environment',
    threat: 'Electronic warfare signal disruption & GNSS spoofing attack',
    recommendedPlatform: 'Edith Sovran Series (Anti-Jamming Edition)',
    readinessScore: 99,
    deployTime: '60 Seconds',
    payload: 'CRPA Anti-Jamming Array + Optical Tracking',
    datalink: 'Hardened Frequency-Hopping C2',
    tacticalAdvantage: 'Hardware CRPA anti-jamming protection maintains flight telemetry and mission execution under intense RF jamming.'
  },
  {
    id: 'bvlos-resupply',
    name: 'Forward Operating Base BVLOS Resupply',
    threat: 'Inaccessible terrain resupply under contested airspace',
    recommendedPlatform: 'BVLOS High Payload Delivery (16kg Heavy-Lift)',
    readinessScore: 95,
    deployTime: '180 Seconds',
    payload: '16kg Tactical Resupply Container',
    datalink: 'Network-Centric 4G & Encrypted SATCOM',
    tacticalAdvantage: '25km operational radius delivery carrying heavy critical ordnance and supplies without risking human pilot lives.'
  }
];

export default function App() {
  const [rfpOpen, setRfpOpen] = useState(false);
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [selectedDrone, setSelectedDrone] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');
  const siteRef = useSiteMotion(activeCategory);
  const [activeValueProp, setActiveValueProp] = useState('ew-antijam');
  const [activeScenario, setActiveScenario] = useState('night-isr');

  // Client Mission Requirements Configurator
  const [payloadGrams, setPayloadGrams] = useState(1500);
  const [desiredFlightMins, setDesiredFlightMins] = useState(25);
  const [desiredRangeKm, setDesiredRangeKm] = useState(5);
  const [videoLink, setVideoLink] = useState('Analog Zero-Latency');
  const [missionType, setMissionType] = useState('Kinetic / Payload Delivery');
  const [customNote, setCustomNote] = useState('');

  // Form State
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '', agency: '', email: '', phone: '', droneInterest: 'General Technical Inquiry', comments: ''
  });

  // Category Filtering
  const categories = ['All', 'Tactical Strike & Delivery', 'Heavy-Lift & BVLOS', 'ISR & Surveillance', 'FPV Interceptors', 'Precision Agriculture', 'Industry Application'];

  const filteredProducts = OFFICIAL_SAFSHIKAN_PRODUCTS.filter(product => {
    if (activeCategory === 'All') return true;
    if (activeCategory === 'Industry Application') return product.sector === 'Industry Application';
    if (activeCategory === 'Tactical Strike & Delivery') return product.id.includes('grim') || product.id.includes('sovraan-1') || product.id.includes('sovraan-2');
    if (activeCategory === 'Heavy-Lift & BVLOS') return product.id.includes('bvlos');
    if (activeCategory === 'ISR & Surveillance') return product.id.includes('sentinel') || product.id.includes('sovraan-3');
    if (activeCategory === 'FPV Interceptors') return product.id.includes('7inch') || product.id.includes('5inch');
    if (activeCategory === 'Precision Agriculture') return product.id.includes('agron');
    return true;
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const openRfpForProduct = (product) => {
    setFormData(prev => ({
      ...prev,
      droneInterest: `${product.name} (${product.category})`,
      comments: `[INQUIRY FOR ${product.name}]: Please provide technical data sheet, export compliance requirements, and quotation.`
    }));
    setSelectedDrone(null);
    setRfpOpen(true);
  };

  return (
    <div ref={siteRef} className="safshikan-site min-h-screen text-slate-100 flex flex-col font-sans">

      <a className="skip-link" href="#main-content">Skip to content</a>
      <Navbar />

      <main id="main-content" className="flex-1" tabIndex={-1}>

        <Hero onSelectCategory={setActiveCategory} />
        <Intro />

        {/* PRODUCT FLEET & PLATFORMS SECTION (DAS Defence Solutions Matrix Style) */}
        <section id="platforms" className="site-section section-platforms py-20 md:py-28 border-t border-slate-800/80 bg-[#0B101D]">
          <div className="home-container section-shell">

            {/* Section Header */}
            <div className="fleet-heading flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
              <div>
                <div className="das-badge mb-3">
                  <span className="das-badge-dot"></span>
                  <span>OUR SOLUTIONS</span>
                </div>
                <h2 data-reveal="" className="text-3xl sm:text-4xl font-heading font-extrabold text-white tracking-tight">
                  Tactical UAV <span className="section-title-accent">Platforms</span>
                </h2>
                <p data-reveal="" style={{ "--reveal-delay": "90ms" }} className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
                  Precision-engineered airframes configured for armed reconnaissance, BVLOS logistics, security loitering, and agricultural operations.
                </p>
              </div>

              {/* Category Filter Pills */}
              <div className="fleet-filters flex flex-wrap gap-2" aria-label="Filter drone platforms">
                {categories.map(cat => (
                  <button
                    key={cat}
                    type="button"
                    aria-pressed={activeCategory === cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-3.5 py-1.5 text-xs font-medium rounded-full transition-all ${
                      activeCategory === cat
                        ? 'bg-blue-600 text-white shadow-sm'
                        : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Product Grid */}
            <div className="fleet-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product, productIndex) => (
                <div key={product.id} className="fleet-item" data-reveal="" style={{ '--reveal-delay': `${(productIndex % 3) * 70}ms` }}>
                <div
                  data-motion-card=""
                  className="fleet-card card-clean rounded-2xl overflow-hidden flex flex-col group"
                >
                  {/* Product Photography */}
                  <div className="fleet-media relative aspect-[16/10] overflow-hidden bg-slate-950">
                    <ProductVisual product={product} />
                    <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] font-mono text-slate-300 border border-slate-700">
                      {product.category}
                    </div>
                    <span className="fleet-index" aria-hidden="true">{String(OFFICIAL_SAFSHIKAN_PRODUCTS.indexOf(product) + 1).padStart(2, '0')} / SAFSHIKAN</span>
                  </div>

                  {/* Card Content */}
                  <div className="fleet-body p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div className="fleet-copy space-y-2">
                      <h3 className="font-heading font-bold text-white text-lg group-hover:text-blue-400 transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {product.description}
                      </p>
                    </div>

                    {/* Specs Highlights */}
                    <div className="fleet-specs pt-3 border-t border-slate-800/80 space-y-1.5 font-mono text-xs">
                      {product.specs.payload && (
                        <div className="flex justify-between text-slate-400">
                          <span>Payload:</span>
                          <span className="text-slate-200 font-semibold">{product.specs.payload}</span>
                        </div>
                      )}
                      {product.specs.range && (
                        <div className="flex justify-between text-slate-400">
                          <span>Mission Radius:</span>
                          <span className="text-slate-200 font-semibold">{product.specs.range}</span>
                        </div>
                      )}
                      {product.specs.endurance && (
                        <div className="flex justify-between text-slate-400">
                          <span>Endurance:</span>
                          <span className="text-slate-200 font-semibold">{product.specs.endurance}</span>
                        </div>
                      )}
                    </div>

                    {/* Card CTA Actions */}
                    <div className="fleet-actions pt-2 flex items-center gap-2">
                      <button
                        onClick={() => setSelectedDrone(product)}
                        className="flex-1 py-2 text-center text-xs font-semibold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-slate-500 rounded-lg transition-colors"
                      >
                        View Technical Sheet <Icon name="arrow-up-right" className="fleet-arrow" />
                      </button>
                      <button
                        onClick={() => openRfpForProduct(product)}
                        className="px-3 py-2 bg-blue-600/90 hover:bg-blue-600 text-white rounded-lg transition-colors text-xs font-semibold"
                        title="Request Quotation"
                      >
                        Request TDS
                      </button>
                    </div>

                  </div>
                </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ENGINEERING CAPABILITIES & SERVICES (Clean DAS Defence Two-Column List) */}
        <section id="capabilities" className="site-section section-capabilities py-20 md:py-28 border-t border-slate-800/80 bg-[#0A0E17]">
          <div className="home-container section-shell">

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

              {/* Left Column: Heading & Advisory Overview */}
              <div className="section-aside lg:col-span-5 space-y-6">
                <div className="das-badge">
                  <span className="das-badge-dot"></span>
                  <span>CAPABILITIES & INTEGRATION</span>
                </div>
                <h2 data-reveal="" className="text-3xl sm:text-4xl font-heading font-extrabold text-white tracking-tight leading-tight">
                  Systems Integration & <span className="section-title-accent">Aerospace Engineering</span>
                </h2>
                <p data-reveal="" style={{ "--reveal-delay": "90ms" }} className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  Beyond off-the-shelf airframes, Safshikan provides comprehensive avionics calibration, hardware stress testing, SITL/HITL digital twin simulation, and bespoke autopilot firmware integration under NASTP engineering supervision.
                </p>

                <div className="p-6 rounded-xl border border-slate-800 bg-[#0F172A] space-y-3">
                  <div className="text-xs font-mono text-blue-400 uppercase font-semibold">Quality & Testing Standards</div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Every system undergoes rigorous center-of-gravity tuning, electronic warfare noise injection, and failsafe parachute testing before handover to end-users.
                  </p>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => setRfpOpen(true)}
                    className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs rounded-lg transition-colors"
                  >
                    Inquire for Custom Engineering
                  </button>
                </div>
              </div>

              {/* Right Column: Services List */}
              <div className="lg:col-span-7 space-y-4">
                {SAFSHIKAN_ENGINEERING_SERVICES.map((srv) => (
                  <div
                    key={srv.id}
                    data-reveal=""
                    className="service-card p-6 rounded-xl border border-slate-800 bg-[#0F172A] hover:border-slate-700 transition-colors space-y-3"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono text-blue-400 font-semibold">{srv.category}</span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300">AS PER SPEC</span>
                    </div>
                    <h3 className="font-heading font-bold text-white text-lg">
                      {srv.title}
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {srv.desc}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 border-t border-slate-800/80">
                      {srv.features.map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                          <Icon name="check" className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

            </div>

          </div>
        </section>

        {/* DEFENSE READINESS & VALUE PROPOSITIONS */}
        <section id="readiness" className="site-section section-readiness py-20 md:py-28 border-t border-slate-800/80 bg-[#0B101D]">
          <div className="home-container section-shell">

            <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
              <div className="das-badge">
                <span className="das-badge-dot"></span>
                <span>MISSION READINESS</span>
              </div>
              <h2 data-reveal="" className="text-3xl sm:text-4xl font-heading font-extrabold text-white tracking-tight">
                Engineered for <span className="section-title-accent">Contested Operations</span>
              </h2>
              <p data-reveal="" style={{ "--reveal-delay": "90ms" }} className="text-slate-400 text-sm sm:text-base">
                Built to maintain full command telemetry, pinpoint target tracking, and payload accuracy even under aggressive electronic jamming and hostile terrain.
              </p>
            </div>

            {/* Value Propositions Tabs */}
            <div className="readiness-options grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {DEFENSE_VALUE_PROPOSITIONS.map((vp) => (
                <div
                  key={vp.id}
                  data-reveal=""
                  role="button"
                  tabIndex={0}
                  aria-pressed={activeValueProp === vp.id}
                  onKeyDown={event => { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); setActiveValueProp(vp.id); } }}
                  onClick={() => setActiveValueProp(vp.id)}
                  className={`readiness-option cursor-pointer p-6 rounded-xl border transition-all ${
                    activeValueProp === vp.id
                      ? 'bg-[#131D33] border-blue-500 shadow-md'
                      : 'bg-[#0F172A] border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <Icon name={vp.icon} className={`w-5 h-5 ${activeValueProp === vp.id ? 'text-blue-400' : 'text-slate-400'}`} />
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400">Spec Active</span>
                  </div>
                  <h3 className="font-heading font-bold text-white text-base leading-snug mb-2">
                    {vp.title}
                  </h3>
                  <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed">
                    {vp.tagline}
                  </p>
                </div>
              ))}
            </div>

            {/* Active Value Proposition Detail Showcase */}
            {(() => {
              const activeItem = DEFENSE_VALUE_PROPOSITIONS.find(v => v.id === activeValueProp);
              if (!activeItem) return null;
              return (
                <div data-reveal="" className="readiness-detail p-8 rounded-2xl border border-slate-800 bg-[#0F172A] space-y-6">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    <div className="lg:col-span-7 space-y-4">
                      <div className="text-xs font-mono text-blue-400 uppercase font-semibold">{activeItem.tagline}</div>
                      <h3 className="text-2xl font-heading font-bold text-white">{activeItem.title}</h3>
                      <p className="text-sm text-slate-300 leading-relaxed">{activeItem.desc}</p>
                      <div className="space-y-2 pt-2">
                        {activeItem.keyFeatures.map((kf, i) => (
                          <div key={i} className="flex items-center gap-2.5 text-xs text-slate-200">
                            <Icon name="check-circle" className="w-4 h-4 text-emerald-400 shrink-0" />
                            <span>{kf}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="lg:col-span-5 grid grid-cols-2 gap-4">
                      {Object.entries(activeItem.stats).map(([k, v], i) => (
                        <div key={i} className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                          <div className="text-[10px] font-mono text-slate-400 uppercase">{k}</div>
                          <div className="text-base font-bold text-white font-heading mt-1">{v}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })()}

          </div>
        </section>

        {/* REQUIREMENTS CONFIGURATOR (Interactive & User-Friendly) */}
        <section id="configurator" className="site-section section-configurator py-20 md:py-28 border-t border-slate-800/80 bg-[#0A0E17]">
          <div className="home-container section-shell">

            <div className="max-w-3xl mx-auto text-center mb-16 space-y-3">
              <div className="das-badge">
                <span className="das-badge-dot"></span>
                <span>MISSION CONFIGURATOR</span>
              </div>
              <h2 data-reveal="" className="text-3xl sm:text-4xl font-heading font-extrabold text-white tracking-tight">
                Configure Your <span className="section-title-accent">Operational Requirements</span>
              </h2>
              <p data-reveal="" style={{ "--reveal-delay": "90ms" }} className="text-slate-400 text-sm sm:text-base">
                Select desired tactical parameters to calculate compatible airframe architectures and receive an instant specification brief.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

              {/* Controls Column */}
              <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl border border-slate-800 bg-[#0F172A] space-y-6">

                {/* Mission Profile Selection */}
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-400 mb-2 font-semibold">1. Mission Profile</label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {['Kinetic / Payload Delivery', 'Night ISR & Recon', 'Contested ECM Anti-Jam', 'Heavy BVLOS Logistics', 'Agricultural Spraying', 'Custom Bespoke'].map(m => (
                      <button
                        key={m}
                        type="button"
                        onClick={() => setMissionType(m)}
                        className={`p-2.5 text-xs text-left rounded-lg border transition-all ${
                          missionType === m
                            ? 'bg-blue-600 text-white border-blue-500 font-semibold'
                            : 'bg-slate-900 text-slate-300 border-slate-800 hover:border-slate-700'
                        }`}
                      >
                        {m}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Sliders: Payload, Range, Flight Time */}
                <div className="space-y-5">
                  <div>
                    <div className="flex justify-between text-xs font-mono text-slate-300 mb-1">
                      <span>Target Payload Capacity</span>
                      <span className="text-blue-400 font-bold">{payloadGrams >= 1000 ? `${(payloadGrams/1000).toFixed(1)} KG` : `${payloadGrams} G`}</span>
                    </div>
                    <input
                      type="range"
                      min="100"
                      max="16000"
                      step="100"
                      value={payloadGrams}
                      onChange={e => setPayloadGrams(Number(e.target.value))}
                      className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
                    />
                    <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-1">
                      <span>100g (Micro)</span>
                      <span>1.5kg (Mortar)</span>
                      <span>5kg (Security)</span>
                      <span>16kg (Heavy-Lift)</span>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-mono text-slate-300 mb-1">
                      <span>Required Operational Reach</span>
                      <span className="text-blue-400 font-bold">{desiredRangeKm} KM Radius</span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="30"
                      value={desiredRangeKm}
                      onChange={e => setDesiredRangeKm(Number(e.target.value))}
                      className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
                    />
                    <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-1">
                      <span>2 km (Line of Sight)</span>
                      <span>10 km</span>
                      <span>20 km (RTK Grid)</span>
                      <span>30 km (BVLOS 4G)</span>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-mono text-slate-300 mb-1">
                      <span>Desired Flight Window</span>
                      <span className="text-blue-400 font-bold">{desiredFlightMins} Minutes</span>
                    </div>
                    <input
                      type="range"
                      min="10"
                      max="60"
                      step="5"
                      value={desiredFlightMins}
                      onChange={e => setDesiredFlightMins(Number(e.target.value))}
                      className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
                    />
                  </div>
                </div>

                {/* Datalink Options */}
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-400 mb-2 font-semibold">2. Video / Datalink Protocol</label>
                  <div className="grid grid-cols-3 gap-2">
                    {['Analog Zero-Latency', 'Digital 4K HD Feed', '4G LTE Network C2'].map(v => (
                      <button
                        key={v}
                        type="button"
                        onClick={() => setVideoLink(v)}
                        className={`p-2.5 text-xs text-center rounded-lg border transition-all ${
                          videoLink === v
                            ? 'bg-blue-600 text-white border-blue-500 font-semibold'
                            : 'bg-slate-900 text-slate-300 border-slate-800 hover:border-slate-700'
                        }`}
                      >
                        {v}
                      </button>
                    ))}
                  </div>
                </div>

              </div>

              {/* Generated Spec Preview & RFQ Submission */}
              <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl border border-slate-800 bg-[#0F172A] space-y-6">
                <div className="das-badge">
                  <span className="das-badge-dot"></span>
                  <span>CONFIGURED ARCHITECTURE</span>
                </div>

                <div>
                  <div className="text-xs text-slate-400 uppercase font-mono">Recommended Airframe Tier</div>
                  <div className="text-xl font-heading font-bold text-white mt-1">
                    {payloadGrams > 5000
                      ? 'BVLOS Heavy-Lift Quad / Hexacopter (16kg Class)'
                      : payloadGrams > 1500
                        ? 'The Grim Reaper Tactical UAS (6-Mortar Class)'
                        : desiredRangeKm > 10
                          ? 'Sentinel Vigilance Pro Extended Range'
                          : 'Edith Sovran 10-Inch Precision Tactical UAS'}
                  </div>
                </div>

                <div className="space-y-3 pt-4 border-t border-slate-800 font-mono text-xs">
                  <div className="flex justify-between text-slate-300">
                    <span className="text-slate-500">Mission:</span>
                    <span>{missionType}</span>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span className="text-slate-500">Payload:</span>
                    <span>{payloadGrams >= 1000 ? `${(payloadGrams/1000).toFixed(1)} kg` : `${payloadGrams} g`}</span>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span className="text-slate-500">Reach:</span>
                    <span>{desiredRangeKm} km radius</span>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span className="text-slate-500">Datalink:</span>
                    <span>{videoLink}</span>
                  </div>
                </div>

                <button
                  onClick={() => {
                    setFormData(prev => ({
                      ...prev,
                      droneInterest: `Configured Requirement: ${missionType} (${payloadGrams}g, ${desiredRangeKm}km, ${videoLink})`,
                      comments: `[CONFIGURED REQUIREMENT BRIEF]: Mission: ${missionType} | Payload: ${payloadGrams}g | Range: ${desiredRangeKm}km | Endurance: ${desiredFlightMins} mins | Datalink: ${videoLink}. Please send feasibility review.`
                    }));
                    setRfpOpen(true);
                  }}
                  className="w-full py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs rounded-lg transition-colors shadow-md flex items-center justify-center gap-2"
                >
                  <Icon name="send" className="w-4 h-4" />
                  <span>Request Feasibility & Quote</span>
                </button>
              </div>

            </div>

          </div>
        </section>

        {/* WHO WE ARE & DEFENSE STANDING (DAS Defence Credibility Section) */}
        <section id="about" className="site-section section-about py-20 md:py-28 border-t border-slate-800/80 bg-[#0B101D]">
          <div className="home-container section-shell">

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

              <div className="lg:col-span-5 space-y-4">
                <div className="das-badge">
                  <span className="das-badge-dot"></span>
                  <span>WHO WE ARE</span>
                </div>
                <h2 data-reveal="" className="text-3xl sm:text-4xl font-heading font-extrabold text-white tracking-tight leading-tight">
                  Safshikan Aerospace & <span className="section-title-accent">Defense Systems</span>
                </h2>
                <p data-reveal="" style={{ "--reveal-delay": "90ms" }} className="text-slate-300 text-sm leading-relaxed">
                  Safshikan is a defense aerospace firm headquartered at the National Aerospace Science and Technology Park (NASTP Alpha 16 Enclave, Rawalpindi). We engineer tactical unmanned airframes, custom release mechanisms, and electronic countermeasure avionics for verified institutional and defense partners.
                </p>
              </div>

              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div data-reveal="" className="company-card p-6 rounded-xl border border-slate-800 bg-[#0F172A] space-y-2">
                  <div className="text-xs font-mono text-blue-400 font-semibold uppercase">NASTP Industrial Enclave</div>
                  <h3 className="font-heading font-bold text-white text-base">State-of-the-Art Facilities</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Design, composite manufacturing, SITL digital simulation, and flight calibration conducted within accredited aerospace research facilities.
                  </p>
                </div>

                <div data-reveal="" className="company-card p-6 rounded-xl border border-slate-800 bg-[#0F172A] space-y-2">
                  <div className="text-xs font-mono text-emerald-400 font-semibold uppercase">Regulatory Compliance</div>
                  <h3 className="font-heading font-bold text-white text-base">Verified End-User Supply</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Every military-grade UAS transaction follows strict end-user certification, export approval routing, and non-disclosure compliance.
                  </p>
                </div>

                <div data-reveal="" className="company-card p-6 rounded-xl border border-slate-800 bg-[#0F172A] space-y-2">
                  <div className="text-xs font-mono text-blue-400 font-semibold uppercase">Dual-Use Technology</div>
                  <h3 className="font-heading font-bold text-white text-base">Defense & Civil Solutions</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Commercial spin-offs include Project AGRON (high-capacity agricultural spraying up to 336 acres/day with precision terrain radar).
                  </p>
                </div>

                <div data-reveal="" className="company-card p-6 rounded-xl border border-slate-800 bg-[#0F172A] space-y-2">
                  <div className="text-xs font-mono text-purple-400 font-semibold uppercase">Field Support & Spares</div>
                  <h3 className="font-heading font-bold text-white text-base">Lifecycle Sustainment</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Rapid parts replacement, pilot training, and long-term MRO (Maintenance, Repair, and Overhaul) support packages.
                  </p>
                </div>
              </div>

            </div>

            {/* Leadership Team */}
            <div className="mt-16 pt-12 border-t border-slate-800/80">
              <div className="mb-8">
                <h3 className="text-xl font-heading font-bold text-white">Executive Leadership</h3>
                <p className="text-xs text-slate-400 mt-1">Key leadership directing engineering, avionics research, and operations.</p>
              </div>

              <div className="leadership-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {LEADERSHIP_TEAM.map((member, i) => (
                  <div key={i} data-reveal="" style={{ "--reveal-delay": `${i * 60}ms` }} className="leadership-card p-5 rounded-xl border border-slate-800 bg-[#0F172A] space-y-2">
                    <div className="text-sm font-bold text-white font-heading">{member.name}</div>
                    <div className="text-xs font-mono text-blue-400">{member.role}</div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* DIRECT CONTACT & ENQUIRY SECTION */}
        <section id="contact" className="site-section section-contact py-20 md:py-28 border-t border-slate-800/80 bg-[#0A0E17]">
          <div className="home-container section-shell">

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

              {/* Left Column: Direct Official Contact */}
              <div className="lg:col-span-5 space-y-6">
                <div className="das-badge">
                  <span className="das-badge-dot"></span>
                  <span>ENQUIRIES</span>
                </div>
                <h2 data-reveal="" className="text-3xl sm:text-4xl font-heading font-extrabold text-white tracking-tight leading-tight">
                  Talk to our <span className="section-title-accent">engineering team</span> directly.
                </h2>
                <p data-reveal="" style={{ "--reveal-delay": "90ms" }} className="text-slate-300 text-sm leading-relaxed">
                  Capability briefs and technical sheets are issued against stated institutional requirements. Tell us what your operational mission requires and our engineering team will respond within 24 hours.
                </p>

                <div data-reveal="" className="contact-details space-y-4 pt-4 border-t border-slate-800">
                  <div>
                    <div className="text-xs text-slate-500 font-mono uppercase">Direct Telephone</div>
                    <a href="tel:+923213630768" className="text-base font-bold text-white hover:text-blue-400 transition-colors">+92 321 3630768</a>
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-mono uppercase">Official Email</div>
                    <a href="mailto:info@safshikan.com" className="text-base font-bold text-white hover:text-blue-400 transition-colors">info@safshikan.com</a>
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-mono uppercase">Headquarters</div>
                    <div className="text-sm text-slate-300">Office No. 18, Alpha 16, NASTP Industrial Innovation Enclave, Rawalpindi, Pakistan</div>
                  </div>
                </div>
              </div>

              {/* Right Column: Clean RFQ / Inquiry Form */}
              <div data-reveal="" className="contact-panel lg:col-span-7 p-6 sm:p-8 rounded-2xl border border-slate-800 bg-[#0F172A]">
                {submitted ? (
                  <div className="text-center py-12 space-y-4">
                    <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                      <Icon name="check-circle" className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-heading font-bold text-white">Preview complete — request not sent</h3>
                    <p className="text-xs text-slate-400 max-w-sm mx-auto">
                      This preview does not send enquiries. Please contact us using the email, telephone, or WhatsApp links.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-2.5 text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
                    >
                      Submit Another Request
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <h3 className="text-lg font-heading font-bold text-white border-b border-slate-800 pb-3">
                      Request a Technical Data Sheet / Capability Brief
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono text-slate-400 mb-1">Official Name *</label>
                        <input
                          required
                          type="text"
                          placeholder="Name and Title"
                          value={formData.name}
                          onChange={e => setFormData({...formData, name: e.target.value})}
                          className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-800 rounded-lg text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-mono text-slate-400 mb-1">Agency / Organization *</label>
                        <input
                          required
                          type="text"
                          placeholder="Ministry / Enterprise"
                          value={formData.agency}
                          onChange={e => setFormData({...formData, agency: e.target.value})}
                          className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-800 rounded-lg text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono text-slate-400 mb-1">Official Email *</label>
                        <input
                          required
                          type="email"
                          placeholder="name@organization.com"
                          value={formData.email}
                          onChange={e => setFormData({...formData, email: e.target.value})}
                          className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-800 rounded-lg text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-mono text-slate-400 mb-1">Phone / WhatsApp *</label>
                        <input
                          required
                          type="tel"
                          placeholder="+92 3XX XXXXXXX"
                          value={formData.phone}
                          onChange={e => setFormData({...formData, phone: e.target.value})}
                          className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-800 rounded-lg text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-400 mb-1">Platform or Service of Interest</label>
                      <input
                        type="text"
                        value={formData.droneInterest}
                        onChange={e => setFormData({...formData, droneInterest: e.target.value})}
                        className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-800 rounded-lg text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-400 mb-1">Operational Requirements / Specifications</label>
                      <textarea
                        rows="3"
                        placeholder="Please outline target payload weight, range, sensor requirements, or mission environment..."
                        value={formData.comments}
                        onChange={e => setFormData({...formData, comments: e.target.value})}
                        className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-800 rounded-lg text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs rounded-lg transition-colors shadow-md"
                    >
                      Preview Enquiry
                    </button>
                  </form>
                )}
              </div>

            </div>

          </div>
        </section>

      </main>

      {/* CORPORATE FOOTER (DAS Defence Clean Multi-Column Style) */}
      <footer className="site-footer bg-[#070B12] border-t border-slate-800/80 text-slate-400 py-16 text-sm">
        <div className="home-container section-shell">
          <div className="footer-wordmark" data-reveal="" aria-hidden="true">SAFSHIKAN</div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">

            {/* Entity Column */}
            <div className="lg:col-span-4 space-y-4">
              <div className="footer-brand flex items-center gap-3">
                <img src="/assets/home-logo.webp" alt="Safshikan" className="h-8 w-auto" />
                <span className="font-heading font-bold text-white text-base tracking-tight">SAFSHIKAN</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
                Safshikan Aerospace & Defense Systems is a defense technology manufacturer and systems integration house.
              </p>
              <p className="text-xs font-mono text-slate-500">
                NASTP Industrial Innovation Enclave<br />
                Rawalpindi, Pakistan
              </p>
            </div>

            {/* Platforms Column */}
            <div className="lg:col-span-3 space-y-3">
              <h4 className="text-xs font-mono uppercase font-bold text-white tracking-wider">UAV Platforms</h4>
              <ul className="space-y-2 text-xs text-slate-400">
                <li><a href="#platforms" className="hover:text-white transition-colors">The Grim Reaper UAS (6-Mortar)</a></li>
                <li><a href="#platforms" className="hover:text-white transition-colors">BVLOS Heavy Payload (16kg)</a></li>
                <li><a href="#platforms" className="hover:text-white transition-colors">Sentinel Vigilance Pro Security</a></li>
                <li><a href="#platforms" className="hover:text-white transition-colors">Edith Sovran Series (I, II, III)</a></li>
                <li><a href="#platforms" className="hover:text-white transition-colors">7" & 5" Long-Range FPV Systems</a></li>
              </ul>
            </div>

            {/* Capabilities Column */}
            <div className="lg:col-span-3 space-y-3">
              <h4 className="text-xs font-mono uppercase font-bold text-white tracking-wider">Capabilities</h4>
              <ul className="space-y-2 text-xs text-slate-400">
                <li><a href="#capabilities" className="hover:text-white transition-colors">Hardware Testing & Integration</a></li>
                <li><a href="#capabilities" className="hover:text-white transition-colors">SITL / HITL Digital Twin Simulation</a></li>
                <li><a href="#capabilities" className="hover:text-white transition-colors">PX4 Autopilot Firmware & Stacks</a></li>
                <li><a href="#capabilities" className="hover:text-white transition-colors">Custom Ordnance Release Racks</a></li>
                <li><a href="https://agron.safshikan.com" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-emerald-300">Project AGRON Agri Drone Portal ↗</a></li>
              </ul>
            </div>

            {/* Contact Column */}
            <div className="lg:col-span-2 space-y-3">
              <h4 className="text-xs font-mono uppercase font-bold text-white tracking-wider">Contact</h4>
              <div className="space-y-2 text-xs text-slate-400">
                <p><a href="tel:+923213630768" className="hover:text-white transition-colors">+92 321 3630768</a></p>
                <p><a href="mailto:info@safshikan.com" className="hover:text-white transition-colors">info@safshikan.com</a></p>
                <p className="text-slate-400">NASTP Alpha 16</p>
              </div>
            </div>

          </div>

          {/* Bottom Copyright */}
          <div className="mt-12 pt-8 border-t border-slate-800/60 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500 font-mono">
            <div>&copy; 2026 Safshikan Aerospace & Defense Systems. All rights reserved.</div>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-slate-400 transition-colors">Export Policy</a>
              <span>•</span>
              <a href="#" className="hover:text-slate-400 transition-colors">End-User Terms</a>
              <span>•</span>
              <a href="#" className="hover:text-slate-400 transition-colors">NASTP Enclave</a>
            </div>
          </div>

        </div>
      </footer>

      {/* TECHNICAL SPEC SHEET MODAL */}
      {selectedDrone && (
        <div className="site-modal fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-[#0F172A] border border-slate-700 max-w-2xl w-full p-6 sm:p-8 rounded-2xl space-y-6 shadow-2xl relative my-8">

            <div className="flex justify-between items-start border-b border-slate-800 pb-4">
              <div>
                <span className="text-[10px] font-mono uppercase bg-blue-600/20 text-blue-400 px-2.5 py-1 rounded font-semibold">
                  {selectedDrone.category}
                </span>
                <h3 className="text-2xl font-heading font-bold text-white mt-2">{selectedDrone.name}</h3>
                <p className="text-xs text-slate-400 mt-0.5">{selectedDrone.tagline}</p>
              </div>
              <button
                onClick={() => setSelectedDrone(null)}
                className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
              >
                <Icon name="x" className="w-5 h-5" />
              </button>
            </div>

            <div className="aspect-[16/9] rounded-xl overflow-hidden bg-slate-950">
              <img src={selectedDrone.image} alt={selectedDrone.name} className="w-full h-full object-cover" />
            </div>

            <div>
              <h4 className="text-xs font-mono uppercase text-slate-400 mb-1 font-semibold">Platform Overview</h4>
              <p className="text-xs text-slate-300 leading-relaxed">{selectedDrone.description}</p>
            </div>

            <div>
              <h4 className="text-xs font-mono uppercase text-slate-400 mb-2 font-semibold">Technical Specifications</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono">
                {Object.entries(selectedDrone.specs).map(([key, val], idx) => (
                  <div key={idx} className="p-3 bg-slate-900 border border-slate-800 rounded-lg">
                    <span className="text-slate-500 uppercase block text-[10px]">{key}</span>
                    <span className="text-white font-semibold">{val}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xs font-mono uppercase text-slate-400 mb-2 font-semibold">Tactical Features</h4>
              <div className="space-y-1.5 text-xs text-slate-300">
                {selectedDrone.features.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <Icon name="check-circle" className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex gap-3 pt-4 border-t border-slate-800">
              <button
                onClick={() => openRfpForProduct(selectedDrone)}
                className="flex-1 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs rounded-lg transition-colors"
              >
                Request Technical Data Sheet & Quotation
              </button>
              <button
                onClick={() => setSelectedDrone(null)}
                className="px-5 py-3 bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold text-xs rounded-lg transition-colors"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}

      {/* GLOBAL RFP INQUIRY MODAL */}
      {rfpOpen && (
        <div className="site-modal fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-[#0F172A] border border-slate-700 max-w-lg w-full p-6 sm:p-8 rounded-2xl space-y-4 shadow-2xl relative my-8">

            <div className="flex justify-between items-center border-b border-slate-800 pb-3">
              <div>
                <h3 className="text-lg font-heading font-bold text-white">Defense & Institutional Inquiry</h3>
                <p className="text-xs text-slate-400">NASTP Alpha 16 Engineering Division</p>
              </div>
              <button
                onClick={() => setRfpOpen(false)}
                className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
              >
                <Icon name="x" className="w-5 h-5" />
              </button>
            </div>

            {submitted ? (
              <div className="text-center py-8 space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <Icon name="check" className="w-6 h-6" />
                </div>
                <h4 className="text-base font-heading font-bold text-white">Preview complete — request not sent</h4>
                <p className="text-xs text-slate-400">Please use our email, telephone, or WhatsApp links to send your enquiry.</p>
                <button
                  onClick={() => { setSubmitted(false); setRfpOpen(false); }}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg text-xs font-semibold"
                >
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-3 text-xs">
                <div>
                  <label className="block text-slate-400 font-mono mb-1">Official Name *</label>
                  <input
                    required
                    type="text"
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                    className="w-full p-2.5 bg-slate-900 border border-slate-800 rounded-lg text-white text-xs focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-slate-400 font-mono mb-1">Agency / Organization *</label>
                  <input
                    required
                    type="text"
                    value={formData.agency}
                    onChange={e => setFormData({...formData, agency: e.target.value})}
                    className="w-full p-2.5 bg-slate-900 border border-slate-800 rounded-lg text-white text-xs focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-slate-400 font-mono mb-1">Email *</label>
                  <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                    className="w-full p-2.5 bg-slate-900 border border-slate-800 rounded-lg text-white text-xs focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-slate-400 font-mono mb-1">Phone / WhatsApp *</label>
                  <input
                    required
                    type="tel"
                    value={formData.phone}
                    onChange={e => setFormData({...formData, phone: e.target.value})}
                    className="w-full p-2.5 bg-slate-900 border border-slate-800 rounded-lg text-white text-xs focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-slate-400 font-mono mb-1">Mission Requirements / Comments</label>
                  <textarea
                    rows="3"
                    value={formData.comments}
                    onChange={e => setFormData({...formData, comments: e.target.value})}
                    className="w-full p-2.5 bg-slate-900 border border-slate-800 rounded-lg text-white text-xs focus:outline-none focus:border-blue-500"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs rounded-lg transition-colors shadow-md mt-2"
                >
                  Transmit Encrypted Request
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* FLOATING WHATSAPP CHAT BUTTON */}
      <a
        href="https://wa.me/923213630768?text=Hello%20Safshikan%20Aerospace%2C%20I%20have%20an%20inquiry%20regarding%20UAV%20systems"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-semibold shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
        aria-label="Chat on WhatsApp"
      >
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
        </svg>
        <span>WhatsApp Liaison</span>
      </a>

    </div>
  );
}
