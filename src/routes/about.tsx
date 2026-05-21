import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({
    meta: [
      { title: "About — GN-Math Mirror" },
      {
        name: "description",
        content:
          "About GN-Math Mirror — what it is, who it's for, and how the catalog is sourced from the GN-Math repository.",
      },
      { property: "og:title", content: "About — GN-Math Mirror" },
      { property: "og:description", content: "About the GN-Math Mirror project." },
      { property: "og:url", content: "https://gn-math.dev/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
});

function About() {
  return (
    <div className="min-h-screen">
      <Header />
      <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <p className="text-xs uppercase tracking-widest text-neon">About</p>
        <h1 className="mt-2 font-display text-4xl font-bold sm:text-5xl">
          What is GN-Math Mirror?
        </h1>
        <div className="prose-invert mt-8 space-y-5 text-muted-foreground">
          <p>
            GN-Math Mirror is a lightweight, ad-light front-end for the{" "}
            <a href="https://gn-math.dev" className="text-neon hover:underline">
              GN-Math
            </a>{" "}
            unblocked games catalog. It exists so that students and teams can browse the same
            collection through a faster, cleaner interface — without losing access when the main
            site is blocked.
          </p>
          <p>
            Game files are hosted by the original GN-Math project. This mirror only handles
            browsing, search, and embedding. Source for the catalog is available on{" "}
            <a
              href="https://github.com/helloman87/gn-math.github.io"
              className="text-neon hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            .
          </p>
          <h2 className="!mt-10 font-display text-2xl font-bold text-foreground">For my team</h2>
          <p>
            Built specifically for our team — bookmark{" "}
            <Link to="/games" className="text-neon hover:underline">
              /games
            </Link>{" "}
            and you'll always have a quick way in. Click any cover to launch the game in an embedded
            player. Use fullscreen for the full experience.
          </p>
          <h2 className="!mt-10 font-display text-2xl font-bold text-foreground">Credits</h2>
          <p>
            All games belong to their respective authors. GN-Math Mirror is unaffiliated with the
            original developers and claims no ownership of game content.
          </p>
        </div>
      </article>
      <Footer />
    </div>
  );
}
