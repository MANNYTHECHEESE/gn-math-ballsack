import { Link } from "@tanstack/react-router";
import { useState } from "react";
import type { Game } from "@/data/games";

// Deterministic brutalist pop palette per slug.
const PALETTE = [
  { bg: "#ff5722", fg: "#0a0a0a" },
  { bg: "#ffeb3b", fg: "#0a0a0a" },
  { bg: "#0a0a0a", fg: "#ffeb3b" },
  { bg: "#0a0a0a", fg: "#ff5722" },
  { bg: "#ffffff", fg: "#0a0a0a" },
];

function pickPalette(slug: string) {
  let h = 0;
  for (let i = 0; i < slug.length; i++) h = (h * 31 + slug.charCodeAt(i)) >>> 0;
  return PALETTE[h % PALETTE.length];
}

function Fallback({ title, slug }: { title: string; slug: string }) {
  const { bg, fg } = pickPalette(slug);
  const initials = title
    .replace(/[^a-zA-Z0-9 ]/g, "")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase())
    .join("");
  return (
    <div
      className="flex h-full w-full items-center justify-center"
      style={{ backgroundColor: bg, color: fg }}
    >
      <span className="font-display text-5xl font-black tracking-tighter">{initials || "?"}</span>
    </div>
  );
}

export function GameCard({ game }: { game: Game }) {
  const [broken, setBroken] = useState(false);
  const showImage = !!game.cover && !broken;
  return (
    <Link
      to="/play/$slug"
      params={{ slug: game.slug }}
      className="group relative overflow-hidden rounded-xl border border-border bg-surface bg-card-grad transition-all hover:-translate-y-1 hover:border-neon/60 hover:shadow-glow"
    >
      <div className="aspect-[4/3] overflow-hidden bg-surface-2">
        {showImage ? (
          <img
            src={game.cover}
            alt={game.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            onError={() => setBroken(true)}
          />
        ) : (
          <Fallback title={game.title} slug={game.slug} />
        )}
      </div>
      <div className="p-3">
        <div className="mb-1 flex items-center gap-2">
          <span className="rounded-full bg-neon/15 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-neon">
            {game.category}
          </span>
        </div>
        <h3 className="line-clamp-1 font-display text-sm font-semibold">{game.title}</h3>
        {game.author && (
          <p className="mt-0.5 line-clamp-1 text-xs text-muted-foreground">by {game.author}</p>
        )}
      </div>
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-background/70 opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
        <span className="rounded-full bg-neon px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary-foreground">
          ▶ Play
        </span>
      </div>
    </Link>
  );
}
