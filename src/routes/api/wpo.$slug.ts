import { createFileRoute } from "@tanstack/react-router";

// Proxy a game's index.html from the web-ports org via jsDelivr.
// Each repo at github.com/web-ports/<slug> contains an index.html at root.
export const Route = createFileRoute("/api/wpo/$slug")({
  server: {
    handlers: {
      GET: async ({ params }) => {
        const slug = params.slug.replace(/\.html$/, "");
        if (!/^[a-zA-Z0-9._-]+$/.test(slug)) {
          return new Response("Bad request", { status: 400 });
        }
        const base = `https://cdn.jsdelivr.net/gh/web-ports/${slug}@main/`;
        const res = await fetch(base + "index.html");
        if (!res.ok) return new Response("Not found", { status: res.status });
        let body = await res.text();
        const baseTag = `<base href="${base}">`;
        if (/<head[^>]*>/i.test(body)) {
          body = body.replace(/<head[^>]*>/i, (m) => `${m}\n${baseTag}`);
        } else {
          body = `${baseTag}\n${body}`;
        }
        return new Response(body, {
          status: 200,
          headers: {
            "content-type": "text/html; charset=utf-8",
            "cache-control": "public, max-age=86400",
          },
        });
      },
    },
  },
});
