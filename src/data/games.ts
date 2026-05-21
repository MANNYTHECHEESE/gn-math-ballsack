export type Game = {
  slug: string;
  title: string;
  category: "Action" | "Arcade" | "Puzzle" | "Port" | "Tool" | "Sandbox" | "Horror" | "Sports" | "Racing";
  author?: string;
  cover: string;
  url: string;
  tags?: string[];
  featured?: boolean;
};

const cover = (id: string) => `https://cdn.jsdelivr.net/gh/freebuisness/covers@main/${id}.png`;
const play = (path: string) => `https://gn-math.dev${path}`;

export const games: Game[] = [
  { slug: "ovo", title: "OvO", category: "Arcade", cover: cover("1"), url: play("/g/ovo"), featured: true, tags: ["platformer", "parkour"] },
  { slug: "ovo-2", title: "OvO 2", category: "Arcade", cover: cover("2"), url: play("/g/ovo-2"), tags: ["platformer"] },
  { slug: "ovo-3", title: "OvO 3 Dimensions", category: "Arcade", cover: cover("3"), url: play("/g/ovo-3-dimensions") },
  { slug: "bowmasters", title: "Bowmasters", category: "Action", cover: cover("0"), url: play("/g/bowmasters"), featured: true },
  { slug: "gladihoppers", title: "Gladihoppers", category: "Action", cover: cover("4"), url: play("/g/gladihoppers") },
  { slug: "ice-dodo", title: "Ice Dodo", category: "Arcade", cover: cover("5"), url: play("/g/ice-dodo") },
  { slug: "block-blast", title: "Block Blast", category: "Puzzle", cover: cover("6"), url: play("/g/block-blast"), featured: true },
  { slug: "jetpack-joyride", title: "Jetpack Joyride", category: "Arcade", cover: cover("7"), url: play("/g/jetpack-joyride") },
  { slug: "fnf", title: "Friday Night Funkin'", category: "Arcade", cover: cover("8"), url: play("/g/friday-night-funkin"), featured: true },
  { slug: "sprunki", title: "Sprunki", category: "Tool", cover: cover("9"), url: play("/g/sprunki") },
  { slug: "temple-run-2", title: "Temple Run 2", category: "Arcade", cover: cover("10"), url: play("/g/temple-run-2") },
  { slug: "stickman-hook", title: "Stickman Hook", category: "Arcade", cover: cover("11"), url: play("/g/stickman-hook") },
  { slug: "attack-hole", title: "Attack Hole", category: "Arcade", cover: cover("13"), url: play("/g/attack-hole") },
  { slug: "bridge-race", title: "Bridge Race", category: "Arcade", cover: cover("14"), url: play("/g/bridge-race") },
  { slug: "slowroads", title: "Slowroads", category: "Racing", author: "Topograph Interactive", cover: cover("369"), url: play("/g/slowroads"), featured: true },
  { slug: "city-defense", title: "City Defense", category: "Arcade", author: "Yandex", cover: cover("380"), url: play("/g/city-defense") },
  { slug: "tnmn", title: "That's Not My Neighbor", category: "Horror", author: "Nacho Games", cover: cover("216"), url: play("/g/thats-not-my-neighbor"), featured: true },
  { slug: "getting-over-it", title: "Getting Over It", category: "Port", author: "Bennett Foddy", cover: cover("557"), url: play("/g/getting-over-it"), featured: true },
  { slug: "bad-parenting", title: "Bad Parenting", category: "Horror", cover: cover("166"), url: play("/g/bad-parenting") },
  { slug: "minecraft", title: "Minecraft 1.12.2", category: "Sandbox", cover: cover("182"), url: play("/g/minecraft-1-12-2"), featured: true },
  { slug: "fnaf-sl", title: "FNaF: Sister Location", category: "Horror", cover: cover("185"), url: play("/g/fnaf-sister-location") },
  { slug: "fnaf-ps", title: "FNaF: Pizzeria Simulator", category: "Horror", cover: cover("191"), url: play("/g/fnaf-pizzeria-simulator") },
  { slug: "people-playground", title: "People Playground", category: "Sandbox", cover: cover("194-m"), url: play("/g/people-playground"), featured: true },
  { slug: "repo", title: "R.E.P.O", category: "Horror", cover: cover("195"), url: play("/g/repo") },
  { slug: "ultrakill", title: "ULTRAKILL", category: "Action", cover: cover("196"), url: play("/g/ultrakill"), featured: true },
  { slug: "buckshot", title: "Buckshot Roulette", category: "Horror", cover: cover("205"), url: play("/g/buckshot-roulette") },
  { slug: "bendy", title: "Bendy and the Ink Machine", category: "Horror", cover: cover("215"), url: play("/g/bendy-and-the-ink-machine") },
  { slug: "half-life", title: "Half Life", category: "Action", cover: cover("262"), url: play("/g/half-life") },
  { slug: "pizza-tower", title: "Pizza Tower", category: "Action", cover: cover("267"), url: play("/g/pizza-tower"), featured: true },
  { slug: "webfishing", title: "WebFishing", category: "Sandbox", cover: cover("423"), url: play("/g/webfishing") },
  { slug: "omori", title: "OMORI", category: "Port", cover: cover("427"), url: play("/g/omori") },
  { slug: "yume-nikki", title: "Yume Nikki", category: "Port", cover: cover("433"), url: play("/g/yume-nikki") },
  { slug: "kindergarten", title: "Kindergarten", category: "Port", cover: cover("445"), url: play("/g/kindergarten") },
];

export const categories = Array.from(new Set(games.map((g) => g.category))).sort();

export const getGame = (slug: string) => games.find((g) => g.slug === slug);
