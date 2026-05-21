export type Game = {
  slug: string;
  title: string;
  category: "Action" | "Arcade" | "Puzzle" | "Port" | "Tool" | "Sandbox" | "Horror" | "Sports" | "Racing";
  author?: string;
  cover: string;
  /** Embeddable HTML URL on the GN-Math content CDN (no X-Frame headers). */
  url: string;
  tags?: string[];
  featured?: boolean;
};

const COVER_BASE = "https://cdn.jsdelivr.net/gh/freebuisness/covers@main";
const HTML_BASE = "https://cdn.jsdelivr.net/gh/freebuisness/html@main";

const cover = (id: string | number) => `${COVER_BASE}/${id}.png`;
// Proxied through our own server route so the response carries
// `content-type: text/html` (jsdelivr serves raw files as text/plain
// with nosniff, which causes iframes to render the source as text).
const html = (file: string) => `/api/play/${file}.html`;
// Keep the original CDN URL accessible for the "Open source" link.
export const sourceUrl = (file: string) => `${HTML_BASE}/${file}.html`;

export const games: Game[] = [
  { slug: "ovo", title: "OvO", category: "Arcade", cover: cover(1), url: html("1-fde"), featured: true, tags: ["platformer", "parkour"] },
  { slug: "ovo-2", title: "OvO 2", category: "Arcade", cover: cover(2), url: html("2e"), tags: ["platformer"] },
  { slug: "ovo-3", title: "OvO 3 Dimensions", category: "Arcade", cover: cover(3), url: html("3") },
  { slug: "bowmasters", title: "Bowmasters", category: "Action", cover: cover(0), url: html("0"), featured: true },
  { slug: "gladihoppers", title: "Gladihoppers", category: "Action", cover: cover(4), url: html("4") },
  { slug: "ice-dodo", title: "Ice Dodo", category: "Arcade", cover: cover(5), url: html("5") },
  { slug: "block-blast", title: "Block Blast", category: "Puzzle", cover: cover(6), url: html("6"), featured: true },
  { slug: "jetpack-joyride", title: "Jetpack Joyride", category: "Arcade", cover: cover(7), url: html("7") },
  { slug: "fnf", title: "Friday Night Funkin'", category: "Arcade", cover: cover(8), url: html("8-wow"), featured: true },
  { slug: "sprunki", title: "Sprunki", category: "Tool", cover: cover(9), url: html("9") },
  { slug: "temple-run-2", title: "Temple Run 2", category: "Arcade", cover: cover(10), url: html("10") },
  { slug: "stickman-hook", title: "Stickman Hook", category: "Arcade", cover: cover(11), url: html("11") },
  { slug: "attack-hole", title: "Attack Hole", category: "Arcade", cover: cover(13), url: html("13") },
  { slug: "bridge-race", title: "Bridge Race", category: "Arcade", cover: cover(14), url: html("14") },
  { slug: "slowroads", title: "Slowroads", category: "Racing", author: "Topograph Interactive", cover: cover(369), url: html("369"), featured: true },
  { slug: "city-defense", title: "City Defense", category: "Arcade", author: "Yandex", cover: cover(380), url: html("380") },
  { slug: "tnmn", title: "That's Not My Neighbor", category: "Horror", author: "Nacho Games", cover: cover(216), url: html("216"), featured: true },
  { slug: "getting-over-it", title: "Getting Over It", category: "Port", author: "Bennett Foddy", cover: cover(557), url: html("557"), featured: true },
  { slug: "bad-parenting", title: "Bad Parenting", category: "Horror", cover: cover(166), url: html("166") },
  { slug: "minecraft", title: "Minecraft 1.12.2", category: "Sandbox", cover: cover(182), url: html("182"), featured: true },
  { slug: "fnaf-sl", title: "FNaF: Sister Location", category: "Horror", cover: cover(185), url: html("185") },
  { slug: "fnaf-ps", title: "FNaF: Pizzeria Simulator", category: "Horror", cover: cover(191), url: html("191") },
  { slug: "people-playground", title: "People Playground", category: "Sandbox", cover: cover("194-m"), url: html("194-a"), featured: true },
  { slug: "repo", title: "R.E.P.O", category: "Horror", cover: cover(195), url: html("195") },
  { slug: "ultrakill", title: "ULTRAKILL", category: "Action", cover: cover(196), url: html("196-fixed"), featured: true },
  { slug: "buckshot", title: "Buckshot Roulette", category: "Horror", cover: cover(205), url: html("205-f") },
  { slug: "bendy", title: "Bendy and the Ink Machine", category: "Horror", cover: cover(215), url: html("215") },
  { slug: "half-life", title: "Half Life", category: "Action", cover: cover(262), url: html("262") },
  { slug: "pizza-tower", title: "Pizza Tower", category: "Action", cover: cover(267), url: html("267"), featured: true },
  { slug: "webfishing", title: "WebFishing", category: "Sandbox", cover: cover(423), url: html("423") },
  { slug: "omori", title: "OMORI", category: "Port", cover: cover(427), url: html("427-z") },
  { slug: "yume-nikki", title: "Yume Nikki", category: "Port", cover: cover(433), url: html("433") },
  { slug: "kindergarten", title: "Kindergarten", category: "Port", cover: cover(445), url: html("445") },
];

export const categories = Array.from(new Set(games.map((g) => g.category))).sort();

export const getGame = (slug: string) => games.find((g) => g.slug === slug);
