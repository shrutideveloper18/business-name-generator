const adjectives = [
  "Creative", "Smart", "Modern", "Royal", "Prime",
  "Elite", "Dynamic", "Bright", "Urban", "Classic",
  "Fresh", "Bold", "Swift", "Golden", "Rapid",
  "Innovative", "Trusted", "NextGen", "Power", "Pure",
  "Epic", "Mega", "Nova", "Infinity", "Supreme",
  "Global", "Future", "Vision", "Ace", "Pro",
  "Blue", "Green", "Red", "Silver", "Diamond",
  "Premium", "Ultimate", "Alpha", "Beta", "Zen",
  "Spark", "Fusion", "Matrix", "Core", "Pulse",
  "Orbit", "Peak", "Edge", "Velocity","Aether", "Nova", "Zenith", "Luxe", "Velvet",
  "Echo", "Neon", "Aura", "Vibe", "Pulse",
  "Orbit", "Flux", "Drift", "Halo", "Silk",
  "Iris", "Solace", "Mystic", "Cosmic", "Eclipse",
  "Radiant", "Opal", "Ember", "Frost", "Midnight",
  "Aurora", "Stellar", "Ethereal", "Golden", "Crimson",
  "Azure", "Ivory", "Onyx", "Pearl", "Saffron",
  "Indigo", "Coral", "Jade", "Slate", "Graphite",
  "Prime", "Elite", "Urban", "Modern", "Classic",
  "Bold", "Swift", "Pure", "True", "Bright",
  "Epic", "Infinite", "Future", "Vision", "Dynamic",
  "Alpha", "Omega", "Vertex", "Summit", "Peak",
  "Core", "Edge", "Fusion", "Matrix", "Nexus",
  "Spark", "Bloom", "Rise", "Flow", "Craft",
  "Driven", "Inspired", "Curated", "Refined", "Timeless",
  "Minimal", "Grand", "Iconic", "Vivid", "Serene",
  "Horizon", "Velocity", "Momentum", "Gravity", "Essence"
];
const suffixes = [
  "Hub", "World", "Works", "Enterprises", "Group",
  "Solutions", "Systems", "Networks", "Ventures", "Industries",
  "Co", "Corp", "Ltd", "LLP", "Inc",
  "Studio", "Agency", "Consultancy", "Services", "Partners",
  "Point", "Zone", "Center", "House", "Mart",
  "Market", "Factory", "Unit", "Labs", "Tech",
  "Global", "Prime", "Plus", "Edge", "Base",
  "Space", "Nest", "Bridge", "Circle", "Square",
  "Plaza", "Heights", "Valley", "Arena", "Gateway","Hub", "World", "Works", "Enterprises", "Group",
  "Solutions", "Systems", "Networks", "Ventures", "Industries",
  "Co", "Corp", "Ltd", "LLP", "Inc",
  "Studio", "Agency", "Consultancy", "Services", "Partners",
  "Collective", "Society", "Union", "Guild", "Alliance",
  "House", "Point", "Zone", "Center", "Space",
  "Nest", "Base", "Forge", "Foundry", "Lab",
  "Labs", "Factory", "Unit", "Works", "Atelier",
  "Market", "Plaza", "Avenue", "Street", "Square",
  "Circle", "Corner", "Gateway", "Heights", "Valley",
  "Peak", "Summit", "Edge", "Core", "Nexus",
  "Prime", "Plus", "Pro", "X", "One",
  "Sphere", "Orbit", "Wave", "Flow", "Spark",
  "Canvas", "Spectrum", "Vista", "Horizon", "Realm",
  "Origin", "Pulse", "Essence", "Echo", "Aura"
];

function generateName() {
  const business = document.getElementById("businessType").value;

  const adj = adjectives[Math.floor(Math.random() * adjectives.length)];
  const suf = suffixes[Math.floor(Math.random() * suffixes.length)];

  const result = `${adj} ${business} ${suf}`;

  document.getElementById("out").innerText =
    "YOUR BUSINESS NAME CAN BE:\n" + result;
}


