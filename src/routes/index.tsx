import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { GameCard } from "@/components/GameCard";
import { games, categories } from "@/data/games";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "GN-Math Mirror — Play Unblocked Games Instantly" },
      {
        name: "description",
        content:
          "Browse and play the GN-Math unblocked games catalog. Hundreds of arcade, action, puzzle, and horror games — mirrored, fast, and ad-light.",
      },
      { property: "og:title", content: "GN-Math Mirror — Play Unblocked Games" },
      {
        property: "og:description",
        content: "Browse and play the GN-Math unblocked games catalog.",
      },
      { property: "og:url", content: "https://gn-math.dev" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function Index() {
  const featured = games.filter((g) => g.featured);
  const trending = games.slice(0, 12);

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden bg-hero">
        <div className="absolute inset-0 grid-bg opacity-60" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-neon/40 bg-neon/10 px-3 py-1 text-xs font-medium uppercase tracking-widest text-neon">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-neon" />
              Mirror is live
            </span>
            <h1 className="mt-5 font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl">
              Unblocked games,{" "}
              <span className="text-neon">no waiting.</span>
            </h1>
            <p className="mt-5 max-w-xl text-base text-muted-foreground sm:text-lg">
              A clean, fast mirror of the GN-Math catalog. Hundreds of games — arcade, action,
              ports and tools — ready to launch in one click.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/games"
                className="inline-flex items-center justify-center rounded-md bg-neon px-5 py-3 text-sm font-bold uppercase tracking-wider text-primary-foreground transition-transform hover:-translate-y-0.5 hover:shadow-glow"
              >
                Browse all games
              </Link>
              <a
                href="#trending"
                className="inline-flex items-center justify-center rounded-md border border-border bg-surface-2/60 px-5 py-3 text-sm font-medium text-foreground hover:border-neon hover:text-neon"
              >
                What's trending
              </a>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs uppercase tracking-widest text-muted-foreground">
              <span>{games.length}+ games</span>
              <span className="h-1 w-1 rounded-full bg-border" />
              <span>{categories.length} categories</span>
              <span className="h-1 w-1 rounded-full bg-border" />
              <span>No login</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="mb-6 flex items-end justify-between">
          <div>
            <p className="text-xs uppercase tracking-widest text-neon">Featured</p>
            <h2 className="mt-1 font-display text-3xl font-bold sm:text-4xl">Staff picks</h2>
          </div>
          <Link
            to="/games"
            className="hidden text-sm text-muted-foreground hover:text-neon sm:inline"
          >
            View all →
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {featured.slice(0, 8).map((g) => (
            <GameCard key={g.slug} game={g} />
          ))}
        </div>
      </section>

      {/* Trending */}
      <section id="trending" className="mx-auto max-w-7xl px-4 pb-16 sm:px-6">
        <div className="mb-6 flex items-end justify-between">
          <div>
            <p className="text-xs uppercase tracking-widest text-neon">Trending</p>
            <h2 className="mt-1 font-display text-3xl font-bold sm:text-4xl">This week</h2>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {trending.map((g) => (
            <GameCard key={g.slug} game={g} />
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6">
        <div className="mb-6">
          <p className="text-xs uppercase tracking-widest text-neon">Categories</p>
          <h2 className="mt-1 font-display text-3xl font-bold sm:text-4xl">Find your vibe</h2>
        </div>
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <Link
              key={c}
              to="/games"
              search={{ category: c }}
              className="rounded-full border border-border bg-surface-2 px-4 py-2 text-sm font-medium hover:border-neon hover:text-neon"
            >
              {c}
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
