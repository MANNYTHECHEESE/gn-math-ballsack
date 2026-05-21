import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { z } from "zod";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { GameCard } from "@/components/GameCard";
import { games, categories } from "@/data/games";

const search = z.object({
  category: z.string().optional(),
  q: z.string().optional(),
});

export const Route = createFileRoute("/games")({
  component: GamesPage,
  validateSearch: search,
  head: () => ({
    meta: [
      { title: "All Games — GN-Math Mirror" },
      {
        name: "description",
        content: "Browse the full GN-Math game catalog. Filter by category or search by title.",
      },
      { property: "og:title", content: "All Games — GN-Math Mirror" },
      {
        property: "og:description",
        content: "Browse the full GN-Math game catalog.",
      },
      { property: "og:url", content: "https://gn-math.dev/games" },
    ],
    links: [{ rel: "canonical", href: "/games" }],
  }),
});

function GamesPage() {
  const { category, q } = Route.useSearch();
  const navigate = useNavigate({ from: "/games" });
  const [query, setQuery] = useState(q ?? "");

  const filtered = useMemo(() => {
    return games.filter((g) => {
      if (category && g.category !== category) return false;
      if (query && !g.title.toLowerCase().includes(query.toLowerCase())) return false;
      return true;
    });
  }, [category, query]);

  return (
    <div className="min-h-screen">
      <Header />
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="mb-8">
          <p className="text-xs uppercase tracking-widest text-neon">Library</p>
          <h1 className="mt-1 font-display text-4xl font-bold sm:text-5xl">All games</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            {filtered.length} of {games.length} games
          </p>
        </div>

        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <input
            type="search"
            placeholder="Search games…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full max-w-sm rounded-md border border-border bg-surface-2 px-4 py-2.5 text-sm placeholder:text-muted-foreground focus:border-neon focus:outline-none"
          />
          <div className="flex flex-wrap gap-1.5">
            <button
              onClick={() => navigate({ search: { q: query || undefined } })}
              className={`rounded-full border px-3 py-1.5 text-xs font-medium uppercase tracking-wider transition-colors ${
                !category
                  ? "border-neon bg-neon text-primary-foreground"
                  : "border-border text-muted-foreground hover:border-neon hover:text-neon"
              }`}
            >
              All
            </button>
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => navigate({ search: { category: c, q: query || undefined } })}
                className={`rounded-full border px-3 py-1.5 text-xs font-medium uppercase tracking-wider transition-colors ${
                  category === c
                    ? "border-neon bg-neon text-primary-foreground"
                    : "border-border text-muted-foreground hover:border-neon hover:text-neon"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {filtered.length === 0 ? (
          <div className="rounded-xl border border-border bg-surface p-12 text-center text-muted-foreground">
            No games match your filters.
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {filtered.map((g) => (
              <GameCard key={g.slug} game={g} />
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
