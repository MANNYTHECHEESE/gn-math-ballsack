import { Link } from "@tanstack/react-router";
import type { Game } from "@/data/games";

export function GameCard({ game }: { game: Game }) {
  return (
    <Link
      to="/play/$slug"
      params={{ slug: game.slug }}
      className="group relative overflow-hidden rounded-xl border border-border bg-surface bg-card-grad transition-all hover:-translate-y-1 hover:border-neon/60 hover:shadow-glow"
    >
      <div className="aspect-[4/3] overflow-hidden bg-surface-2">
        <img
          src={game.cover}
          alt={game.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).style.opacity = "0.2";
          }}
        />
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
