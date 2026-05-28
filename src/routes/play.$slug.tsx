import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { GameCard } from "@/components/GameCard";
import { games, getGame } from "@/data/games";

export const Route = createFileRoute("/play/$slug")({
  loader: ({ params }) => {
    const game = getGame(params.slug);
    if (!game) throw notFound();
    return { game };
  },
  head: ({ loaderData }) => {
    const g = loaderData?.game;
    if (!g) return { meta: [{ title: "Play — GN-Math Mirror" }] };
    return {
      meta: [
        { title: `${g.title} — Play on GN-Math Mirror` },
        {
          name: "description",
          content: `Play ${g.title} unblocked, free, in your browser via the GN-Math Mirror.`,
        },
        { property: "og:title", content: `${g.title} — GN-Math Mirror` },
        { property: "og:description", content: `Play ${g.title} unblocked, free.` },
        { property: "og:image", content: g.cover },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `https://gn-math.dev/play/${g.slug}` },
        { name: "twitter:image", content: g.cover },
      ],
      links: [{ rel: "canonical", href: `/play/${g.slug}` }],
    };
  },
  component: PlayPage,
  notFoundComponent: () => (
    <div className="grid min-h-screen place-items-center">
      <div className="text-center">
        <h1 className="font-display text-3xl font-bold">Game not found</h1>
        <Link to="/games" className="mt-4 inline-block text-neon hover:underline">
          Back to library
        </Link>
      </div>
    </div>
  ),
});

function PlayPage() {
  const { game } = Route.useLoaderData();
  const [launched, setLaunched] = useState(false);

  const related = games
    .filter((g) => g.category === game.category && g.slug !== game.slug)
    .slice(0, 6);

  return (
    <div className="min-h-screen">
      <Header />
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
        <Link
          to="/games"
          className="mb-4 inline-flex items-center gap-1 text-xs uppercase tracking-widest text-muted-foreground hover:text-neon"
        >
          ← Library
        </Link>

        <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
          <div>
            <span className="rounded-full bg-neon/15 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-neon">
              {game.category}
            </span>
            <h1 className="mt-2 font-display text-3xl font-bold sm:text-4xl">{game.title}</h1>
            {game.author && (
              <p className="mt-1 text-sm text-muted-foreground">by {game.author}</p>
            )}
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => openInBlank(game.url, game.title)}
              className="rounded-md border border-neon bg-neon px-3 py-2 text-xs font-bold uppercase tracking-wider text-primary-foreground hover:opacity-90"
            >
              Open in new tab ↗
            </button>
            {game.source && (
              <a
                href={game.source}
                target="_blank"
                rel="noreferrer"
                className="rounded-md border border-border bg-surface-2 px-3 py-2 text-xs font-medium uppercase tracking-wider hover:border-neon hover:text-neon"
              >
                Source ↗
              </a>
            )}
          </div>
        </div>

        <div className="relative overflow-hidden rounded-xl border border-border bg-surface shadow-glow">
          {launched ? (
            <iframe
              src={game.url}
              title={game.title}
              className="aspect-video w-full"
              allow="autoplay; fullscreen; gamepad; pointer-lock"
              allowFullScreen
              referrerPolicy="no-referrer"
            />
          ) : (
            <div
              className="relative grid aspect-video w-full place-items-center"
              style={{
                backgroundImage: game.cover
                  ? `linear-gradient(180deg, transparent, oklch(0.18 0.04 165 / 0.8)), url(${game.cover})`
                  : undefined,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundColor: "oklch(0.18 0.04 165)",
              }}
            >
              <button
                onClick={() => setLaunched(true)}
                className="group flex flex-col items-center gap-3"
              >
                <span className="grid h-20 w-20 place-items-center rounded-full bg-neon text-3xl text-primary-foreground shadow-glow transition-transform group-hover:scale-110">
                  ▶
                </span>
                <span className="rounded-full bg-background/80 px-4 py-1.5 text-xs font-bold uppercase tracking-widest backdrop-blur">
                  Click to play
                </span>
              </button>
            </div>
          )}
        </div>

        <p className="mt-3 text-xs text-muted-foreground">
          Tip: if the game runs poorly in the embed, use{" "}
          <a href={game.url} target="_blank" rel="noreferrer" className="text-neon hover:underline">
            Open in new tab
          </a>{" "}
          for full performance.
        </p>

        {related.length > 0 && (
          <section className="mt-12">
            <h2 className="mb-4 font-display text-2xl font-bold">More {game.category}</h2>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
              {related.map((g) => (
                <GameCard key={g.slug} game={g} />
              ))}
            </div>
          </section>
        )}
      </div>
      <Footer />
    </div>
  );
}
