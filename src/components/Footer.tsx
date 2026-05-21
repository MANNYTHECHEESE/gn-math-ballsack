export function Footer() {
  return (
    <footer className="mt-24 border-t border-border/60">
      <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-8 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p>
          GN-Math Mirror · A static mirror of the{" "}
          <a href="https://gn-math.dev" className="text-neon hover:underline">
            gn-math.dev
          </a>{" "}
          catalog.
        </p>
        <p>Not affiliated with original game authors. All trademarks belong to their owners.</p>
      </div>
    </footer>
  );
}
