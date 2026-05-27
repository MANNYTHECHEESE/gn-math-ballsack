export type Game = {
  slug: string;
  title: string;
  category:
    | "Action"
    | "Arcade"
    | "Puzzle"
    | "Port"
    | "Tool"
    | "Sandbox"
    | "Horror"
    | "Sports"
    | "Racing"
    | "Adventure"
    | "Emulator";
  author?: string;
  /** Cover image URL. May be undefined — GameCard renders a brutalist fallback. */
  cover?: string;
  /** Embeddable HTML URL served through our proxy. */
  url: string;
  /** Source repo URL for the "Open source" link. */
  source?: string;
  tags?: string[];
  featured?: boolean;
};

const GENIZY = "https://cdn.jsdelivr.net/gh/genizy/web-port@main";
const WPO = (slug: string) => `https://cdn.jsdelivr.net/gh/web-ports/${slug}@main`;

type Source =
  | { kind: "genizy"; folder: string; coverFile?: string }
  | { kind: "wpo"; repo: string; coverFile?: string }
  | { kind: "emujs"; page: string; cover?: string };

type GameSeed = {
  slug: string;
  title: string;
  category: Game["category"];
  author?: string;
  source: Source;
  tags?: string[];
  featured?: boolean;
};

const seeds: GameSeed[] = [
  // ===== genizy/web-port =====
  { slug: "amanda-the-adventurer", title: "Amanda the Adventurer", category: "Horror", source: { kind: "genizy", folder: "amanda-the-adventurer" } },
  { slug: "andys-apple-farm", title: "Andy's Apple Farm", category: "Horror", source: { kind: "genizy", folder: "andys-apple-farm" } },
  { slug: "baldi-plus", title: "Baldi's Basics Plus", category: "Horror", source: { kind: "genizy", folder: "baldi-plus" } },
  { slug: "baldi-remaster", title: "Baldi's Basics Remastered", category: "Horror", source: { kind: "genizy", folder: "baldi-remaster" } },
  { slug: "bendy", title: "Bendy and the Ink Machine", category: "Horror", source: { kind: "genizy", folder: "bendy" } },
  { slug: "bloodmoney", title: "This Is the Only Level (Blood Money)", category: "Puzzle", source: { kind: "genizy", folder: "bloodmoney" } },
  { slug: "buckshot-roulette", title: "Buckshot Roulette", category: "Horror", featured: true, source: { kind: "genizy", folder: "buckshot-roulette", coverFile: "buckshot-roulette.apple-touch-icon.png" } },
  { slug: "class-of-09", title: "Class of '09", category: "Adventure", source: { kind: "genizy", folder: "class-of-09" } },
  { slug: "dead-plate", title: "Dead Plate", category: "Horror", source: { kind: "genizy", folder: "dead-plate" } },
  { slug: "deadseat", title: "Deadseat", category: "Horror", source: { kind: "genizy", folder: "deadseat", coverFile: "index.apple-touch-icon.png" } },
  { slug: "deltatraveler", title: "Deltatraveler", category: "Adventure", source: { kind: "genizy", folder: "deltatraveler" } },
  { slug: "donottakethiscathome", title: "Do Not Take This Cat Home", category: "Horror", source: { kind: "genizy", folder: "donottakethiscathome" } },
  { slug: "getting-over-it", title: "Getting Over It", category: "Port", author: "Bennett Foddy", featured: true, source: { kind: "genizy", folder: "getting-over-it" } },
  { slug: "happy-sheepies", title: "Happy Sheepies", category: "Puzzle", source: { kind: "genizy", folder: "happy-sheepies" } },
  { slug: "hotline-miami", title: "Hotline Miami", category: "Action", featured: true, source: { kind: "genizy", folder: "hotline-miami", coverFile: "favicon.ico" } },
  { slug: "human-expenditure-program", title: "Human Expenditure Program", category: "Horror", source: { kind: "genizy", folder: "human-expenditure-program" } },
  { slug: "jelly-drift", title: "Jelly Drift", category: "Racing", source: { kind: "genizy", folder: "jelly-drift" } },
  { slug: "karlson", title: "Karlson", category: "Action", featured: true, source: { kind: "genizy", folder: "karlson" } },
  { slug: "lacysflashgames", title: "Lacy's Flash Games", category: "Arcade", source: { kind: "genizy", folder: "lacysflashgames", coverFile: "Lacey's Flash Games.apple-touch-icon.png" } },
  { slug: "milkman-karlson", title: "Milkman Karlson", category: "Action", source: { kind: "genizy", folder: "milkman-karlson" } },
  { slug: "omori-fixed", title: "OMORI", category: "Port", source: { kind: "genizy", folder: "omori-fixed" } },
  { slug: "people-playground", title: "People Playground", category: "Sandbox", featured: true, source: { kind: "genizy", folder: "people-playground" } },
  { slug: "pizza-tower", title: "Pizza Tower", category: "Action", featured: true, source: { kind: "genizy", folder: "pizza-tower", coverFile: "favicon.png" } },
  { slug: "raft", title: "Raft", category: "Sandbox", source: { kind: "genizy", folder: "raft" } },
  { slug: "repo", title: "R.E.P.O", category: "Horror", source: { kind: "genizy", folder: "repo" } },
  { slug: "schoolboy-runaway", title: "Schoolboy Runaway", category: "Adventure", source: { kind: "genizy", folder: "schoolboy-runaway" } },
  { slug: "slender", title: "Slender", category: "Horror", source: { kind: "genizy", folder: "slender" } },
  { slug: "sonic.exe", title: "Sonic.exe", category: "Horror", source: { kind: "genizy", folder: "sonic.exe" } },
  { slug: "speed-stars", title: "Speed Stars", category: "Sports", source: { kind: "genizy", folder: "speed-stars" } },
  { slug: "tattletail", title: "Tattletail", category: "Horror", source: { kind: "genizy", folder: "tattletail" } },
  { slug: "thats-not-my-neighbor", title: "That's Not My Neighbor", category: "Horror", featured: true, source: { kind: "genizy", folder: "thats-not-my-neighbor", coverFile: "thats-not-my-neighbor.apple-touch-icon.png" } },
  { slug: "the-man-in-the-window", title: "The Man in the Window", category: "Horror", source: { kind: "genizy", folder: "the-man-in-the-window" } },
  { slug: "ultrakill", title: "ULTRAKILL", category: "Action", featured: true, source: { kind: "genizy", folder: "ultrakill" } },
  { slug: "undertale-yellow", title: "Undertale Yellow", category: "Adventure", featured: true, source: { kind: "genizy", folder: "undertale-yellow", coverFile: "favicon.png" } },
  { slug: "web-fishing", title: "WebFishing", category: "Sandbox", source: { kind: "genizy", folder: "web-fishing", coverFile: "webfishing.apple-touch-icon.png" } },
  { slug: "witch-heart", title: "Witch's Heart", category: "Adventure", source: { kind: "genizy", folder: "witch-heart" } },
  { slug: "yandere-simulator", title: "Yandere Simulator", category: "Sandbox", source: { kind: "genizy", folder: "yandere-simulator" } },
  { slug: "yume-nikki", title: "Yume Nikki", category: "Port", source: { kind: "genizy", folder: "yume-nikki" } },
  { slug: "minesweeperplus", title: "Minesweeper Plus", category: "Puzzle", source: { kind: "genizy", folder: "minesweeperplus", coverFile: "MinesweeperPlus.apple-touch-icon.png" } },

  // ===== web-ports org (each entry is its own repo) =====
  { slug: "jsab", title: "Just Shapes & Beats", category: "Action", featured: true, source: { kind: "wpo", repo: "jsab" } },
  { slug: "cuphead", title: "Cuphead", category: "Action", featured: true, source: { kind: "wpo", repo: "cuphead" } },
  { slug: "hollow-knight", title: "Hollow Knight", category: "Adventure", featured: true, source: { kind: "wpo", repo: "hollow-knight" } },
  { slug: "hollow-knight-silksong", title: "Hollow Knight: Silksong", category: "Adventure", featured: true, source: { kind: "wpo", repo: "hollow-knight-silksong" } },
  { slug: "celeste", title: "Celeste", category: "Action", featured: true, source: { kind: "wpo", repo: "celeste" } },
  { slug: "terraria", title: "Terraria", category: "Sandbox", featured: true, source: { kind: "wpo", repo: "terraria" } },
  { slug: "fnac", title: "Five Nights at Candy's", category: "Horror", source: { kind: "wpo", repo: "fnac" } },
  { slug: "fnae", title: "Five Nights at Erics", category: "Horror", source: { kind: "wpo", repo: "fnae" } },
  { slug: "fnaf-world-refreshed", title: "FNAF World Refreshed", category: "Horror", source: { kind: "wpo", repo: "fnaf-world-refreshed" } },
  { slug: "slime-ranchers", title: "Slime Rancher", category: "Adventure", source: { kind: "wpo", repo: "slime-ranchers" } },
  { slug: "doom-3", title: "Doom 3", category: "Action", source: { kind: "wpo", repo: "doom-3" } },
  { slug: "iron-lung", title: "Iron Lung", category: "Horror", source: { kind: "wpo", repo: "iron-lung" } },
  { slug: "scoutdingo", title: "Scoutdingo", category: "Adventure", source: { kind: "wpo", repo: "scoutdingo" } },
  { slug: "buster-jam", title: "Buster Jam", category: "Action", source: { kind: "wpo", repo: "buster-jam" } },
  { slug: "mindwave", title: "Mindwave", category: "Action", source: { kind: "wpo", repo: "mindwave" } },
  { slug: "look-outside", title: "Look Outside", category: "Horror", source: { kind: "wpo", repo: "look-outside" } },
  { slug: "milk-bag-games", title: "Milk Inside/Outside a Bag", category: "Adventure", source: { kind: "wpo", repo: "milk-bag-games" } },
  { slug: "in-stars-and-time", title: "In Stars and Time", category: "Adventure", featured: true, source: { kind: "wpo", repo: "in-stars-and-time" } },
  { slug: "gorilla-tag", title: "Gorilla Tag", category: "Sandbox", source: { kind: "wpo", repo: "gorilla-tag" } },
  { slug: "raldi", title: "Raldi's Crackhouse", category: "Horror", source: { kind: "wpo", repo: "raldi" } },
  { slug: "adgac", title: "A Difficult Game About Climbing", category: "Sports", source: { kind: "wpo", repo: "adgac" } },
  { slug: "soft-and-wet", title: "Soft & Wet", category: "Adventure", source: { kind: "wpo", repo: "soft-and-wet" } },
  { slug: "duck-8", title: "Duck-8", category: "Arcade", source: { kind: "wpo", repo: "duck-8" } },
  { slug: "antonblast", title: "Antonblast", category: "Action", source: { kind: "wpo", repo: "antonblast" } },
  { slug: "jumbo-mario", title: "Jumbo Mario", category: "Arcade", source: { kind: "wpo", repo: "jumbo-mario" } },
  { slug: "peaks-of-yore", title: "Peaks of Yore", category: "Sports", source: { kind: "wpo", repo: "peaks-of-yore" } },
  { slug: "clover-pit", title: "Clover Pit", category: "Horror", source: { kind: "wpo", repo: "clover-pit" } },
  { slug: "untitled-goose-game", title: "Untitled Goose Game", category: "Puzzle", featured: true, source: { kind: "wpo", repo: "untitled-goose-game" } },
  { slug: "christmas-massacre", title: "Christmas Massacre", category: "Horror", source: { kind: "wpo", repo: "christmas-massacre" } },
  { slug: "bendy-and-the-ink-machine", title: "Bendy & the Ink Machine (WPO)", category: "Horror", source: { kind: "wpo", repo: "bendy-and-the-ink-machine" } },
  { slug: "saihate-station", title: "Saihate Station", category: "Adventure", source: { kind: "wpo", repo: "saihate-station" } },
  { slug: "power-hover", title: "Power Hover", category: "Racing", source: { kind: "wpo", repo: "power-hover" } },
  { slug: "dumb-ways-to-die", title: "Dumb Ways to Die", category: "Arcade", source: { kind: "wpo", repo: "dumb-ways-to-die" } },
  { slug: "fish", title: "Fish", category: "Arcade", source: { kind: "wpo", repo: "fish" } },
  { slug: "flying-gorilla", title: "Flying Gorilla", category: "Arcade", source: { kind: "wpo", repo: "flying-gorilla" } },
  { slug: "granny", title: "Granny", category: "Horror", source: { kind: "wpo", repo: "granny" } },
  { slug: "granny-2", title: "Granny 2", category: "Horror", source: { kind: "wpo", repo: "granny-2" } },
  { slug: "yomi-hustle", title: "Your Only Move Is Hustle", category: "Action", source: { kind: "wpo", repo: "yomi-hustle" } },
  { slug: "gash", title: "Gabriel's Awesome Schoolhouse", category: "Horror", source: { kind: "wpo", repo: "gash" } },
  { slug: "daddygame", title: "DaddyGame", category: "Adventure", source: { kind: "wpo", repo: "daddygame" } },
  { slug: "countryballsdictator", title: "Countryballs: Dictator", category: "Arcade", source: { kind: "wpo", repo: "countryballsdictator" } },
  { slug: "fear-and-hunger", title: "Fear & Hunger", category: "Horror", source: { kind: "wpo", repo: "fear-and-hunger" } },
  { slug: "fear-and-hunger-2", title: "Fear & Hunger 2: Termina", category: "Horror", source: { kind: "wpo", repo: "fear-and-hunger-2" } },
  { slug: "lethal-ape", title: "Lethal Ape", category: "Horror", source: { kind: "wpo", repo: "lethal-ape" } },
  { slug: "slendytubbies", title: "Slendytubbies", category: "Horror", source: { kind: "wpo", repo: "slendytubbies" } },
  { slug: "srb2", title: "Sonic Robo Blast 2", category: "Action", source: { kind: "wpo", repo: "srb2" } },
  { slug: "spaceflight-simulator", title: "Spaceflight Simulator", category: "Sandbox", source: { kind: "wpo", repo: "spaceflight-simulator" } },
  { slug: "miside", title: "MiSide", category: "Horror", source: { kind: "wpo", repo: "miside" } },
  { slug: "baldi-mods", title: "Baldi Mods", category: "Horror", source: { kind: "wpo", repo: "baldi-mods" } },
  { slug: "20-minutes", title: "20 Minutes Till Dawn", category: "Action", source: { kind: "wpo", repo: "20-minutes" } },
  { slug: "cruelty-squad", title: "Cruelty Squad", category: "Action", source: { kind: "wpo", repo: "cruelty-squad" } },
  { slug: "tabs", title: "Totally Accurate Battle Simulator", category: "Sandbox", featured: true, source: { kind: "wpo", repo: "tabs" } },
  { slug: "ac-gamecube", title: "Animal Crossing (GameCube)", category: "Adventure", source: { kind: "wpo", repo: "ac-gamecube" } },
  { slug: "pvz", title: "Plants vs. Zombies GOTY", category: "Arcade", featured: true, source: { kind: "wpo", repo: "pvz" } },
  { slug: "needy-streamer-overload", title: "Needy Streamer Overload", category: "Adventure", source: { kind: "wpo", repo: "needy-streamer-overload" } },

  // ===== Emulator ports (EmulatorJS, via genizy/emujs) =====
  { slug: "emu-aceattorney", title: "Phoenix Wright: Ace Attorney", category: "Emulator", tags: ["NDS"], source: { kind: "emujs", page: "aceattorney" } },
  { slug: "emu-justiceforall", title: "Ace Attorney: Justice for All", category: "Emulator", tags: ["NDS"], source: { kind: "emujs", page: "justiceforall" } },
  { slug: "emu-trialsandtribulations", title: "Ace Attorney: Trials & Tribulations", category: "Emulator", tags: ["NDS"], source: { kind: "emujs", page: "trialsandtribulations" } },
  { slug: "emu-apollojustice", title: "Apollo Justice: Ace Attorney", category: "Emulator", tags: ["NDS"], source: { kind: "emujs", page: "apollojustice" } },
  { slug: "emu-milesedgeworth", title: "Ace Attorney Investigations: Miles Edgeworth", category: "Emulator", tags: ["NDS"], source: { kind: "emujs", page: "milesedgeworth" } },
  { slug: "emu-rhythm-heaven", title: "Rhythm Heaven", category: "Emulator", tags: ["GBA"], source: { kind: "emujs", page: "rhythm-heaven" }, featured: true },
  { slug: "emu-warioware-touched", title: "WarioWare: Touched!", category: "Emulator", tags: ["NDS"], source: { kind: "emujs", page: "warioware-touched" } },
  { slug: "emu-tomodachi-collection", title: "Tomodachi Collection", category: "Emulator", tags: ["NDS"], source: { kind: "emujs", page: "tomodachi-collection" } },
  { slug: "emu-vib-ribbon", title: "Vib-Ribbon", category: "Emulator", tags: ["PSX"], source: { kind: "emujs", page: "vib-ribbon" } },
  { slug: "emu-nfsmostwanted", title: "Need for Speed: Most Wanted", category: "Emulator", tags: ["PSP"], featured: true, source: { kind: "emujs", page: "nfsmostwanted" } },
  { slug: "emu-nfscarbon", title: "Need for Speed: Carbon", category: "Emulator", tags: ["PSP"], source: { kind: "emujs", page: "nfscarbon" } },
  { slug: "emu-nfsunderground2", title: "Need for Speed: Underground 2", category: "Emulator", tags: ["PSP"], source: { kind: "emujs", page: "nfsunderground2" } },
  { slug: "emu-san-andreas", title: "GTA: San Andreas", category: "Emulator", tags: ["PSP"], featured: true, source: { kind: "emujs", page: "san-andreas" } },
];

function buildUrl(s: Source, name: string): string {
  if (s.kind === "genizy") return `/api/wp/${s.folder}`;
  if (s.kind === "wpo") return `/api/wpo/${s.repo}`;
  const params = new URLSearchParams({
    core: s.core,
    rom: s.rom,
    name,
  });
  if (s.bios) params.set("bios", s.bios);
  return `/api/emu/launch?${params.toString()}`;
}

function buildCover(s: Source): string | undefined {
  if (s.kind === "genizy" && s.coverFile)
    return `${GENIZY}/${s.folder}/${encodeURIComponent(s.coverFile)}`;
  if (s.kind === "wpo" && s.coverFile)
    return `${WPO(s.repo)}/${encodeURIComponent(s.coverFile)}`;
  if (s.kind === "emu") return s.cover;
  return undefined;
}

function buildSource(s: Source): string {
  if (s.kind === "genizy") return `https://github.com/genizy/web-port/tree/main/${s.folder}`;
  if (s.kind === "wpo") return `https://github.com/web-ports/${s.repo}`;
  return s.rom;
}

export const games: Game[] = seeds.map((s) => ({
  slug: s.slug,
  title: s.title,
  category: s.category,
  author: s.author,
  cover: buildCover(s.source),
  url: buildUrl(s.source, s.title),
  source: buildSource(s.source),
  tags: s.tags,
  featured: s.featured,
}));

export const categories = Array.from(new Set(games.map((g) => g.category))).sort();

export const getGame = (slug: string) => games.find((g) => g.slug === slug);

export const sourceUrl = (slug: string) => getGame(slug)?.source ?? "#";
