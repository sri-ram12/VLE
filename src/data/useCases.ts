export interface ProjectUseCase {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  recommendedProducts: string[];
  image: string;
  tag: string;
}

export const PROJECT_USE_CASES: ProjectUseCase[] = [
  {
    id: 'home-construction',
    title: 'New Home Construction',
    subtitle: 'Foundation to Finishing Electrical & Plumbing Infrastructure',
    description: 'Comprehensive wholesale supply package for individual house builders and civil contractors. Includes underground conduit pipes, main distribution boards, heavy PVC drainage lines, and brass concealed fittings.',
    recommendedProducts: ['Polycab FR House Wires', 'Astral CPVC Pro Pipes', 'Legrand 8-Way DB Box', 'Sudhakar Heavy Duty PVC'],
    image: '/images/showroom/banner_brands_board.jpg',
    tag: 'Contractor Favorite'
  },
  {
    id: 'electrical-installation',
    title: 'Electrical Installation & Safety',
    subtitle: 'Complete Power Distribution & Decorative Modular Switches',
    description: 'Protect homes against short circuits and surges while enjoying quiet, elegant modular switchboards. Certified copper wiring, modular sockets, and C-curve miniature circuit breakers.',
    recommendedProducts: ['Havells Modular Switches', 'Legrand RX3 MCBs', 'Goldmedal Shuttered Sockets', 'Havells 9W LEDs'],
    image: '/images/products/goldmedal_switches.jpg',
    tag: 'Safety Certified'
  },
  {
    id: 'bathroom-renovation',
    title: 'Bathroom Renovation & Sanitary',
    subtitle: 'Modernize Fixtures, Vitreous EWCs & Luxury Showers',
    description: 'Transform bathrooms into spa-like spaces with premium vitreous ceramic wash basins, rimless dual-flush western water closets, and chrome-plated Jaquar mixers.',
    recommendedProducts: ['Parryware Vitreous Basin', 'Jaquar Single Lever Mixer', 'Western Water Closet', 'Multi-Flow Rain Shower'],
    image: '/images/showroom/showroom_basin_wall_goldmedal.png',
    tag: 'Luxury Living'
  },
  {
    id: 'plumbing-projects',
    title: 'Plumbing & Water Distribution',
    subtitle: 'Zero-Leak Hot & Cold Potable Supply Systems',
    description: 'Heavy duty Astral CPVC and Sudhakar uPVC pipe networks ensuring high pressure and zero corrosion across overhead water tanks, booster pumps, and solar geyser lines.',
    recommendedProducts: ['Astral CPVC Pro 1"', 'Watertec PTMT Taps', 'Brass Ball Valves', 'Check Non-Return Valves'],
    image: '/images/showroom/showroom_shower_tap_display.png',
    tag: 'High Pressure'
  },
  {
    id: 'commercial-projects',
    title: 'Commercial & Multi-Unit Buildings',
    subtitle: 'Volume Wholesale Supply for Apartments & Shops',
    description: 'Bulk delivery on schedule with competitive contractor rates, itemized billing, and genuine factory-inspected stock for builders and engineers across Visakhapatnam district.',
    recommendedProducts: ['Bulk Polycab 90m Coils', 'Astral Wholesale Bundles', 'Commercial Sinks', 'Industrial Fasteners'],
    image: '/images/showroom/showroom_pedestal_marble_row.png',
    tag: 'Bulk Wholesale'
  },
  {
    id: 'repair-maintenance',
    title: 'Daily Repair & Maintenance',
    subtitle: 'Essential Replacement Parts & Professional Tools',
    description: 'Quick-access inventory for local electricians, plumbers, and homeowners. Screws, anchors, adhesives, replacement valves, door locks, and pliers always ready in stock.',
    recommendedProducts: ['Adjustable Pipe Wrench', 'Insulated Pliers', 'Mortise Door Locks', 'SS Screws & Rawlplugs'],
    image: '/images/products/hardware_tools_kit.jpg',
    tag: 'Instant Store Pickup'
  }
];
