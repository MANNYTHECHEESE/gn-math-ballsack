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
    | "Adventure";
  author?: string;
  /** Cover image URL. May be undefined — GameCard renders a brutalist fallback. */
  cover?: string;
  /** Embeddable HTML URL served through our proxy. */
  url: string;
  tags?: string[];
  featured?: boolean;
};

// Source repo: https://github.com/genizy/web-port
// Each folder contains an index.html plus assets. We proxy the HTML through
// /api/wp/<slug> so it loads with text/html, and let relative asset URLs
// resolve to jsDelivr directly via an injected <base href>.
const REPO_BASE = "https://cdn.jsdelivr.net/gh/genizy/web-port@main";
const play = (slug: string) => `/api/wp/${slug}`;
const cdnFile = (slug: string, file: string) =>
  `${REPO_BASE}/${slug}/${encodeURIComponent(file)}`;
export const sourceUrl = (slug: string) => `${REPO_BASE}/${slug}/index.html`;

type GameSeed = {
  slug: string;
  title: string;
  category: Game["category"];
  author?: string;
  /** Filename of a cover image inside the repo folder. */
  coverFile?: string;
  tags?: string[];
  featured?: boolean;
};

// Only includes folders confirmed to have an index.html in the repo.
const seeds: GameSeed[] = [
  { slug: "amanda-the-adventurer", title: "Amanda the Adventurer", category: "Horror" },
  { slug: "andys-apple-farm", title: "Andy's Apple Farm", category: "Horror" },
  { slug: "baldi-plus", title: "Baldi's Basics Plus", category: "Horror" },
  { slug: "baldi-remaster", title: "Baldi's Basics Remastered", category: "Horror" },
  { slug: "bendy", title: "Bendy and the Ink Machine", category: "Horror" },
  { slug: "bloodmoney", title: "This Is the Only Level (Blood Money)", category: "Puzzle" },
  {
    slug: "buckshot-roulette",
    title: "Buckshot Roulette",
    category: "Horror",
    featured: true,
    coverFile: "buckshot-roulette.apple-touch-icon.png",
  },
  { slug: "class-of-09", title: "Class of '09", category: "Adventure" },
  { slug: "dead-plate", title: "Dead Plate", category: "Horror" },
  {
    slug: "deadseat",
    title: "Deadseat",
    category: "Horror",
    coverFile: "index.apple-touch-icon.png",
  },
  { slug: "deltatraveler", title: "Deltatraveler", category: "Adventure" },
  { slug: "donottakethiscathome", title: "Do Not Take This Cat Home", category: "Horror" },
  { slug: "getting-over-it", title: "Getting Over It", category: "Port", author: "Bennett Foddy", featured: true },
  { slug: "happy-sheepies", title: "Happy Sheepies", category: "Puzzle" },
  {
    slug: "hotline-miami",
    title: "Hotline Miami",
    category: "Action",
    featured: true,
    coverFile: "favicon.ico",
  },
  { slug: "human-expenditure-program", title: "Human Expenditure Program", category: "Horror" },
  { slug: "jelly-drift", title: "Jelly Drift", category: "Racing" },
  { slug: "karlson", title: "Karlson", category: "Action", featured: true },
  {
    slug: "lacysflashgames",
    title: "Lacy's Flash Games",
    category: "Arcade",
    coverFile: "Lacey's Flash Games.apple-touch-icon.png",
  },
  { slug: "milkman-karlson", title: "Milkman Karlson", category: "Action" },
  { slug: "omori-fixed", title: "OMORI", category: "Port" },
  { slug: "people-playground", title: "People Playground", category: "Sandbox", featured: true },
  {
    slug: "pizza-tower",
    title: "Pizza Tower",
    category: "Action",
    featured: true,
    coverFile: "favicon.png",
  },
  { slug: "raft", title: "Raft", category: "Sandbox" },
  { slug: "repo", title: "R.E.P.O", category: "Horror" },
  { slug: "schoolboy-runaway", title: "Schoolboy Runaway", category: "Adventure" },
  { slug: "slender", title: "Slender", category: "Horror" },
  { slug: "sonic.exe", title: "Sonic.exe", category: "Horror" },
  { slug: "speed-stars", title: "Speed Stars", category: "Sports" },
  { slug: "tattletail", title: "Tattletail", category: "Horror" },
  {
    slug: "thats-not-my-neighbor",
    title: "That's Not My Neighbor",
    category: "Horror",
    featured: true,
    coverFile: "thats-not-my-neighbor.apple-touch-icon.png",
  },
  { slug: "the-man-in-the-window", title: "The Man in the Window", category: "Horror" },
  { slug: "ultrakill", title: "ULTRAKILL", category: "Action", featured: true },
  {
    slug: "undertale-yellow",
    title: "Undertale Yellow",
    category: "Adventure",
    featured: true,
    coverFile: "favicon.png",
  },
  {
    slug: "web-fishing",
    title: "WebFishing",
    category: "Sandbox",
    coverFile: "webfishing.apple-touch-icon.png",
  },
  { slug: "witch-heart", title: "Witch's Heart", category: "Adventure" },
  { slug: "yandere-simulator", title: "Yandere Simulator", category: "Sandbox" },
  { slug: "yume-nikki", title: "Yume Nikki", category: "Port" },
  { slug: "minesweeperplus", title: "Minesweeper Plus", category: "Puzzle", coverFile: "MinesweeperPlus.apple-touch-icon.png" },
];

export const games: Game[] = seeds.map((s) => ({
  slug: s.slug,
  title: s.title,
  category: s.category,
  author: s.author,
  cover: s.coverFile ? cdnFile(s.slug, s.coverFile) : undefined,
  url: play(s.slug),
  tags: s.tags,
  featured: s.featured,
}));

export const categories = Array.from(new Set(games.map((g) => g.category))).sort();

export const getGame = (slug: string) => games.find((g) => g.slug === slug);
