export const novelUniverse = {
  id: "ss-survivor",
  title: "SS Survivor: Break the Overseers",
  tagline: "Millions were chosen. Worlds were created. Humanity became entertainment.",
  subtitle: "A cinematic survival story spanning Earth, SS World, Aetheris, and the hidden architecture behind the multiverse.",
  genres: ["Science Fiction", "Fantasy", "Isekai", "Post-Apocalyptic", "Military", "Psychological Drama", "Mystery", "Multiversal Adventure"],
  tone: ["Dark", "Serious", "Emotional", "Cinematic", "Mysterious", "Strategic", "Occasionally hopeful"],
  status: "Ongoing",
  premise: "Millions of people from Earth suddenly disappear and are transported into different worlds. These worlds are secretly controlled by mysterious entities called the Overseers. The transported humans are called Players, while humans sent into Aetheris become Heroes. What begins as disaster slowly reveals itself as a massive multiversal experiment, and the ultimate objective becomes breaking the game itself.",
  latestLore: "The Overseers broadcast major events back to Earth, forcing humanity to watch as the worlds evolve. While some support the Heroes, others sympathize with the Players and begin to suspect the game is not simply survival—it is control.",
  overview: {
    worldCount: 3,
    majorWorlds: ["Real World", "World SS", "Aetheris"],
    currentFocus: "The final conflict between humanity, the Overseers, and the deeper truth behind the Gates and World Cores.",
    spoilerWarning: "Major lore revelations, including Overseer identities, the Saint connection, Zenon's revelation, and the Arbiter, are intentionally protected behind spoiler reveals."
  },
  worlds: [
    {
      id: "real-world",
      name: "Real World",
      summary: "Earth around 2025, where James Klyde Honor, Mai Sakurajima, and Futaba Rio begin their lives before the transformations begin.",
      environment: "Modern Earth, online culture, universities, cities, and the hidden broadcast of the worlds above.",
      factions: ["Earth governments", "Public observers", "Overseers"],
      status: "Origin point"
    },
    {
      id: "ss-world",
      name: "World SS",
      summary: "A near duplicate of Earth, but without any intended survivors. It is a ruined world where humanity fights to remain alive amid the VOID.",
      environment: "Ruined cities, military logistics, contaminated infrastructure, fractured governments, and endless warfare against evolving infected creatures.",
      factions: ["UEA", "Behemoth", "Western Coalition", "Overseers"],
      status: "Primary war front"
    },
    {
      id: "aetheris",
      name: "Aetheris",
      summary: "A fantasy world of kingdoms, magic, beasts, divine powers, and escalating catastrophe as the Hero system unfolds and the VOID begins to infect the realm.",
      environment: "Kingdoms, wildlands, magical forests, demon regions, and vast battlefields where magic and technology collide.",
      factions: ["Eldoria", "Varkhess", "Lunaris", "Sylvaris", "Nethrakar"],
      status: "Hero battlefield"
    }
  ],
  characters: [
    {
      id: "james",
      name: "James Klyde Honor",
      aliases: ["The Survivor", "Supreme General"],
      age: "18 in the original timeline",
      origin: "Philippines",
      role: "Main protagonist",
      world: "Real World / SS World",
      faction: "UEA / Behemoth",
      relationships: ["Mai Sakurajima", "Futaba Rio", "Behemoth personnel"],
      abilities: ["Strategic leadership", "survival instinct", "moral conflict", "command discipline"],
      summary: "A college student transformed into a battlefield leader whose responsibility grows beyond survival and into protecting civilization."
    },
    {
      id: "mai",
      name: "Mai Sakurajima",
      aliases: ["The Hero", "Emotional Face of A World"],
      age: 19,
      origin: "Japan",
      role: "Hero and emotional anchor",
      world: "Aetheris",
      faction: "Heroes / Eldoria",
      relationships: ["James Klyde Honor", "Eldorian allies", "Heroes"],
      abilities: ["Heroic resolve", "leadership", "symbolic influence", "emotional strength"],
      summary: "A close friend of James from the real world who becomes one of the most important Heroes of Aetheris."
    },
    {
      id: "futaba",
      name: "Futaba Rio",
      aliases: ["The Researcher"],
      age: "Youngest known scientist/researcher in Japan",
      origin: "Japan",
      role: "Researcher and strategic mind",
      world: "Real World / SS World",
      faction: "UEA Research",
      relationships: ["James Klyde Honor", "Major UEA specialists"],
      abilities: ["Scientific genius", "technology adaptation", "research leadership"],
      summary: "James' longtime friend and a critical technical mind behind the UEA's research efforts."
    }
  ],
  factions: [
    {
      id: "uea",
      name: "United Eastern Alliance",
      type: "Alliance / Military coalition",
      leader: "James Klyde Honor (eventually Supreme General)",
      territory: "Eastern survivors and recovered territory across SS World",
      objectives: ["Protect humanity", "secure resources", "fight the VOID", "understand the worlds", "find a way home"],
      summary: "A coalition of surviving eastern nations that eventually organizes into a military and political alliance against the VOID."
    },
    {
      id: "behemoth",
      name: "Behemoth",
      type: "Elite military force",
      leader: "James Klyde Honor",
      territory: "SS World and limited Aetheris deployments",
      objectives: ["Elite protection", "combat operations", "strategic warfare", "specialized anti-VOID missions"],
      summary: "The strongest military arm of the UEA. It is powerful, disciplined, and not invincible."
    },
    {
      id: "lunaris",
      name: "Lunaris Theocracy",
      type: "Theocratic power",
      leader: "The Saint / religious authorities",
      territory: "Aetheris theocracy",
      objectives: ["Defend divine authority", "resist external interference", "preserve magical order"],
      summary: "A religious and magical power that eventually becomes a major enemy of the UEA."
    },
    {
      id: "overseers",
      name: "The Overseers",
      type: "Hidden system controllers",
      leader: "Unknown / system-level authorities",
      territory: "Across all created worlds",
      objectives: ["Observe", "manipulate", "control progression", "broadcast events", "maintain the experiment"],
      summary: "Mysterious entities who design worlds, control progression, and manipulate the lives of Players and Heroes."
    }
  ],
  races: [
    { name: "Humans", tier: "B / A" },
    { name: "Sylvari Elves", tier: "S" },
    { name: "Noctari Elves", tier: "A" },
    { name: "Vulkar", tier: "A" },
    { name: "Leonhart", tier: "S" },
    { name: "Ferryn", tier: "A" },
    { name: "Iron Dwarves", tier: "S" },
    { name: "Ashen Dwarves", tier: "A" },
    { name: "Orcs", tier: "B" },
    { name: "Hobgoblins", tier: "C" },
    { name: "Goblins", tier: "C" },
    { name: "Kobolds", tier: "C" },
    { name: "Trolls", tier: "SS / S" },
    { name: "Dragonkin", tier: "SS" },
    { name: "True Dragons", tier: "SS" },
    { name: "Shadeborn", tier: "S / SS" },
    { name: "Celestials", tier: "SSS" },
    { name: "Astrals", tier: "SSS" },
    { name: "Titanbloods", tier: "SSS" },
    { name: "Primordials", tier: "SSS" },
    { name: "VOID Orcs", tier: "VOID-corrupted" },
    { name: "VOID Wyverns", tier: "VOID-corrupted" },
    { name: "Hollow Elves", tier: "VOID-corrupted" },
    { name: "Aberrants", tier: "VOID-corrupted" }
  ],
  technology: [
    {
      name: "Exoframe Combat Suits",
      category: "Infantry",
      description: "Combat armor used to amplify human mobility, survivability, and battlefield efficiency in SS World.",
      faction: "UEA / Behemoth",
      world: "SS World"
    },
    {
      name: "Neural Link System",
      category: "Infantry",
      description: "An integrated connection layer between combatant, suit system, and tactical AI for improved battlefield awareness.",
      faction: "UEA / Behemoth",
      world: "SS World"
    },
    {
      name: "Arc Rifles",
      category: "Weapons",
      description: "High energy weapons designed to penetrate hardened targets and adapted enemy forms.",
      faction: "UEA",
      world: "SS World"
    },
    {
      name: "Magnetic Rail Weapons",
      category: "Weapons",
      description: "Large-scale kinetic weaponry that offers heavy fire support and armor-breaking force.",
      faction: "UEA",
      world: "SS World"
    },
    {
      name: "Adaptive Shield Systems",
      category: "Defense",
      description: "Reactive defense systems that can reconfigure based on incoming fire or contamination patterns.",
      faction: "UEA",
      world: "SS World"
    },
    {
      name: "Anti-VOID Resonance Towers",
      category: "Defense",
      description: "Structures used to disrupt, weaken, and contain VOID entities and contamination spread.",
      faction: "UEA",
      world: "SS World"
    },
    {
      name: "ECHO AI",
      category: "AI",
      description: "A frontline tactical intelligence system that supports command decisions, battlefield analytics, and enemy pattern recognition.",
      faction: "UEA",
      world: "SS World"
    },
    {
      name: "Gate Stabilizers",
      category: "Interdimensional",
      description: "Devices designed to stabilize breaches and keep access routes open for military and research operations.",
      faction: "UEA / Overseers",
      world: "World SS / Aetheris"
    }
  ],
  voidLore: {
    overview: "The VOID is the primary biological threat of SS World. It begins as a zombie-like viral outbreak, but it evolves each time it infects another host. The threat becomes more intelligent, more adaptive, and more unpredictable as it spreads.",
    behavior: ["Amplifies biological weakness", "adapts to new species", "changes tactical behavior over time", "thrives in contaminated environments"],
    knownThreats: ["VOID humans", "VOID animals", "mutated creatures", "VOID-corrupted fantasy races"],
    research: "UEA research teams attempt to identify patterns in the infection, build anti-VOID countermeasures, and prevent collapse of civilization."
  },
  heroes: [
    { name: "Mai Sakurajima", role: "Hero of Aetheris" },
    { name: "Other Heroes", role: "Aetheris adventurers and soldiers" },
    { name: "James Klyde Honor", role: "Survivor turned military commander" }
  ],
  arcs: [
    { id: "transportation", name: "Initial Transportation", status: "Established" },
    { id: "apocalypse", name: "SS World Apocalypse", status: "Established" },
    { id: "uea-formation", name: "UEA Formation", status: "Established" },
    { id: "behemoth", name: "Behemoth Development", status: "Established" },
    { id: "aetheris-heroes", name: "Aetheris Hero System", status: "Established" },
    { id: "infected-aetheris", name: "Infected Aetheris Arc", status: "Established" },
    { id: "lunaris-war", name: "Lunaris War", status: "Established" },
    { id: "western-war", name: "Western War", status: "Established" },
    { id: "final-overseer", name: "Final Overseer Arc", status: "Ongoing" },
    { id: "ending", name: "Ending / Return to Earth", status: "Canon endpoint" }
  ],
  chapters: [
    {
      id: "chapter-1",
      number: 1,
      title: "The First Fall",
      arc: "Initial Transportation",
      summary: "Earth changes, and the first wave of missing people is revealed to be part of a hidden system.",
      content: [
        "The world does not end with a single explosion. It ends quietly, with missing people, sudden absences, and the impossible certainty that reality itself has shifted.",
        "James Klyde Honor is forced to confront a truth no one wants to believe: the world is under observation, and humanity is already playing a game it never agreed to join.",
        "What follows is not only survival, but the beginning of a new set of rules written by forces no one can name."
      ],
      characters: ["James Klyde Honor", "Mai Sakurajima"],
      locations: ["Real World", "SS World"],
      factions: ["Overseers"],
      events: ["Initial Transportation"],
      media: [],
      music: null,
      spoilers: false
    },
    {
      id: "chapter-2",
      number: 2,
      title: "The World Below the Sky",
      arc: "SS World Apocalypse",
      summary: "SS World reveals its true nature: a world created for survival, not for mercy.",
      content: [
        "The survivors of SS World are not welcomed into a new home. They are thrown into a system built for extinction.",
        "The VOID begins as a biological nightmare but quickly evolves beyond ordinary infection. It adapts, learns, and spreads with terrifying efficiency.",
        "Against all odds, humanity begins to organize, build, and resist. The first steps of the UEA are born from crisis and necessity."
      ],
      characters: ["James Klyde Honor", "Futaba Rio"],
      locations: ["World SS"],
      factions: ["UEA", "Behemoth"],
      events: ["SS World apocalypse"],
      media: [],
      music: null,
      spoilers: false
    },
    {
      id: "chapter-3",
      number: 3,
      title: "The Saint and the Throne",
      arc: "Lunaris War",
      summary: "The conflict reaches its emotional peak, and James becomes a symbol of both salvation and fear.",
      content: [
        "The Lunaris war changes more than the battlefield. It reshapes how the surviving humans and Heroes understand power, divine authority, and the cost of winning.",
        "James sits upon the throne and realizes that survival and morality are no longer separate questions.",
        "In that moment, Mai sees the man she has known and the person he has become, and the gap between them becomes impossible to ignore."
      ],
      characters: ["James Klyde Honor", "Mai Sakurajima", "Futaba Rio"],
      locations: ["Aetheris", "Lunaris"],
      factions: ["UEA", "Lunaris", "Behemoth"],
      events: ["Throne Scene", "Lunaris War"],
      media: [],
      music: null,
      spoilers: false
    }
  ],
  timeline: [
    { title: "Initial Transportation", arc: "Initial Transportation", world: "Real World" },
    { title: "SS World apocalypse begins", arc: "SS World Apocalypse", world: "World SS" },
    { title: "UEA is formed", arc: "UEA Formation", world: "World SS" },
    { title: "Aetheris Hero system begins", arc: "Aetheris Hero System", world: "Aetheris" },
    { title: "Infected Aetheris Arc", arc: "Infected Aetheris Arc", world: "Aetheris" },
    { title: "Lunaris War", arc: "Lunaris War", world: "Aetheris" },
    { title: "Throne Scene", arc: "Lunaris War", world: "Aetheris" },
    { title: "Western War", arc: "Western War", world: "World SS / Aetheris" },
    { title: "Final Overseer Arc", arc: "Final Overseer Arc", world: "All worlds" },
    { title: "Return to Earth", arc: "Ending", world: "Real World" }
  ],
  locations: [
    { name: "Earth", world: "Real World", description: "The origin point and eventual final destination for those who survive the interdimensional conflict." },
    { name: "SS World", world: "World SS", description: "A near duplicate of Earth that was never meant to have survivors." },
    { name: "Aetheris", world: "Aetheris", description: "A fantasy realm of magic, kingdoms, demons, and divine conflict." },
    { name: "Lunaris", world: "Aetheris", description: "A theocratic power and major battlefield in the war against the UEA." }
  ],
  events: [
    { title: "Initial transportation", world: "Real World", description: "Humanity disappears across Earth as the worlds are created." },
    { title: "SS World apocalypse", world: "World SS", description: "The VOID spreads and survival becomes a military project." },
    { title: "Infected Aetheris Arc", world: "Aetheris", description: "The VOID crosses into the magical world and forces the UEA to intervene." },
    { title: "Lunaris War", world: "Aetheris", description: "The UEA and Lunaris confront each other through technology, magic, and strategic adaptation." },
    { title: "Throne Scene", world: "Aetheris", description: "James sits on the throne and the emotional fracture with Mai deepens." },
    { title: "Final Overseer Arc", world: "All worlds", description: "Humanity, Heroes, and survivors must cooperate to break the system itself." }
  ],
  glossary: [
    { term: "Players", definition: "Humans transported into worlds such as SS World and forced to survive under severe conditions." },
    { term: "Heroes", definition: "Humans transported into Aetheris, where they are expected to fight for a divine mission in the fantasy world." },
    { term: "Overseers", definition: "The hidden entities controlling worlds, progression, events, and the rules of the multiversal experiment." },
    { term: "VOID", definition: "A living biological threat that begins as a viral outbreak and evolves as it infects new hosts." },
    { term: "UEA", definition: "The United Eastern Alliance, a coalition of eastern survivors seeking to preserve humanity and understand the worlds." },
    { term: "Behemoth", definition: "The elite military force of the UEA, responsible for some of the most difficult missions against the VOID and enemy factions." },
    { term: "World Cores", definition: "A critical part of the larger system that governs the worlds and the gates leading toward the Overseers' domain." },
    { term: "Gates", definition: "Interdimensional access points that connect worlds and lead toward hidden strategic objectives." },
    { term: "Arbiter", definition: "An Overseer-aligned authority whose logic treats human lives as variables and statistics." },
    { term: "Aetheris", definition: "A fantasy realm of kingdoms, demons, dragons, and magic that collides with modern military technology." }
  ],
  media: [
    { title: "SS Survivor cover", type: "placeholder", description: "Placeholder cover art for the main story universe." },
    { title: "World SS tactical map", type: "placeholder", description: "A war map placeholder for the ruined Earth-like world." },
    { title: "Aetheris world map", type: "placeholder", description: "A fantasy map placeholder for the magical world and its kingdoms." }
  ],
  spoilers: [
    {
      title: "Overseer Revelation",
      content: "The Overseers are not just observers. They are the hidden architects, administrators, and system controllers behind the worlds. Human suffering is not accidental—it is part of the game."
    },
    {
      title: "St. Connection",
      content: "The Saint is linked to the larger system and the manipulation behind the events that shape both the sacred and the strategic fronts of the conflict."
    },
    {
      title: "Zenon's Revelation",
      content: "Zenon exposes the fact that various governments, including the Western Coalition and eastern powers, were manipulated by the Overseers as part of the larger experiment."
    },
    {
      title: "Arbiter and Final Truth",
      content: "The Arbiter treats every Player as a variable. James rejects this and chooses to remain human instead of becoming a weapon, a statistic, or entertainment."
    }
  ]
};
