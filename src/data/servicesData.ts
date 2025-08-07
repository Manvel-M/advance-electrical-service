export const services = [
  {
    title: "Electrical Panel Upgrades",
    description:
      "Your electrical panel is the heart of your home’s power system. If it's outdated, undersized, or frequently tripping breakers, it may be time for an upgrade. Modern homes require more power than ever before, and an old panel may not be equipped to handle today’s appliances, EV chargers, and electronics safely.",
    details: {
      title: "Our panel upgrade services include:",
      items: [
        "Replacement of outdated panels with modern, high-capacity units",
        "Installation of new breakers, including AFCI and GFCI protection",
        "Rewiring and labeling for improved circuit management",
        "Load calculations to ensure your panel meets current and future needs",
        "Coordination with utility companies and permit handling, if required",
      ],
    },
    note: "Upgrading your panel improves safety, supports future electrical additions, and may even be required for insurance or resale. We provide clean, code-compliant installations with minimal disruption to your home.",
    image: "",
  },

  {
    title: "Breaker Replacement & Panel Maintenance",
    description:
      "Breaker panels are essential for protecting your electrical system from overloads. If your breakers trip frequently or are old and unreliable, timely replacement is critical. We ensure your electrical panel is safe, up-to-date, and compliant with current codes.",
    details: {
      title: "Our breaker services include:",
      items: [
        "Replacement of faulty or outdated circuit breakers",
        "Upgrading breakers to handle modern electrical loads",
        "Testing breaker functionality for safety and reliability",
        "Panel inspections and maintenance",
        "Proper labeling and documentation",
      ],
    },
    note: "Keep your electrical panel functioning safely and efficiently with our expert breaker replacement and maintenance services.",
    image: "", // Add relevant image
  },

  {
    title: "Rewiring",
    description:
      "Older homes often have outdated wiring that wasn’t built for today’s electrical demands. If your property still uses knob-and-tube, aluminum wiring, or you’re experiencing frequent electrical issues (like flickering lights, tripping breakers, or dead outlets), it might be time for a full or partial rewire.",
    details: {
      title: "Our rewiring services include:",
      items: [
        "Replacement of old, unsafe, or damaged wiring",
        "Grounding upgrades for outlets and fixtures",
        "Adding new circuits to support modern appliances and tech",
        "Upgrading to modern code (e.g., AFCI, GFCI, tamper-resistant outlets)",
        "Clean, minimally invasive work with respect for your walls and home",
      ],
    },
    note: "Whether you're renovating a single room or rewiring an entire house, we’ll walk you through the process, provide transparent pricing, and ensure your electrical system is built to last.",
    image: "",
  },

  {
    title: "EV Charger Installations",
    description:
      "Charging your electric vehicle at home is convenient, efficient, and cost-effective — but only if your electrical system is set up correctly. We install Level 2 EV chargers and dedicated NEMA 14-50 outlets to provide fast, reliable charging for all major EV brands, including Tesla, Ford, Rivian, Chevy, and more.",
    details: {
      title: "Our EV installation services include:",
      items: [
        "Installation of NEMA 14-50 or hardwired Level 2 charging stations",
        "Dedicated 240V circuits with proper wire sizing and breaker selection",
        "Load calculation to ensure your panel can safely support the charger",
        "Permitting, inspection coordination, and code-compliant installation",
        "Clean, discreet mounting indoors or outdoors, with weather protection",
      ],
    },
    note: "We’ll help you choose the right charging setup, ensure your system meets electrical code, and complete the installation with safety and longevity in mind so your EV is ready when you are.",
    image: "",
  },
  {
    title: "Lighting Installation & Upgrades",
    description:
      "Good lighting transforms the look, feel, and functionality of a space. Whether you're upgrading outdated fixtures, installing elegant chandeliers and wall sconces, adding lighting to dark areas, or designing a layered lighting plan for a remodel, we provide expert installation with a focus on both aesthetics and safety.",
    details: {
      title: "Our lighting services include:",
      items: [
        "Installation of chandeliers, wall sconces, ceiling lights, recessed, and pendant lighting",
        "Under-cabinet, closet, and accent lighting for enhanced visibility",
        "Outdoor and landscape lighting for safety, security, and curb appeal",
        "Motion-sensor and dusk-to-dawn lighting for energy-efficient automation",
        "Smart lighting setup and switch upgrades (compatible with Alexa, Google, etc.)",
      ],
    },
    note: "Whether it’s a single fixture or a whole-home lighting design, we install everything cleanly and professionally ensuring proper wiring, ideal placement, and full code compliance.",
    image: "",
  },
  {
    title: "Outlet Repairs & Upgrades",
    description:
      "Faulty or worn-out outlets can cause safety hazards and interrupt your daily routine. We diagnose and repair all types of outlets, including standard, GFCI, and USB-enabled receptacles. Need more outlets or upgrades? We can install additional outlets to meet your home or office needs safely and conveniently.",
    details: {
      title: "Our outlet services include:",
      items: [
        "Repair and replacement of damaged or non-functioning outlets",
        "Installation of GFCI outlets for moisture-prone areas like kitchens and bathrooms",
        "Upgrades to tamper-resistant and USB-enabled outlets",
        "Adding new outlets for home offices, workshops, or entertainment areas",
        "Ensuring proper grounding and code compliance",
      ],
    },
    note: "We prioritize safety and convenience in every outlet repair or installation, making sure your home’s wiring is reliable and up to code.",
    image: "", // Add relevant image
  },
  {
    title: "Ring & Transformer Wiring",
    description:
      "We specialize in the safe electrical wiring and installation of video doorbells and their power transformers. If you have a Ring, Nest, or similar device that requires dedicated 16-24V transformer wiring connected to your home’s electrical panel, we handle all the hardwiring, circuit installation, and compliance to code.",
    details: {
      title: "Our services include:",
      items: [
        "Hardwiring doorbell transformers to dedicated circuits",
        "Upgrading or installing doorbell chime wiring if needed",
        "Ensuring installations meet local electrical code and safety standards",
      ],
    },
    note: "We focus exclusively on the electrical side of doorbell systems — no low-voltage data or networking work. Our professional installations ensure your doorbell system is powered safely and reliably.",
    image: "",
  },
];

export type Service = typeof services;
