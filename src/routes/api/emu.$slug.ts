import { createFileRoute } from "@tanstack/react-router";

// Proxy a game's <slug>.html from genizy/emujs via jsDelivr. Those pages
// already wire up EmulatorJS with bundled ROMs in the same repo.
export const Route = createFileRoute("/api/emu/$slug")({
  server: {
    handlers: {
      GET: async ({ params }) => {
        const slug = params.slug.replace(/\.html$/, "");
        if (!/^[a-zA-Z0-9._-]+$/.test(slug)) {
          return new Response("Bad request", { status: 400 });
        }
        const base = `https://cdn.jsdelivr.net/gh/genizy/emujs@main/`;
        const res = await fetch(`${base}${slug}.html`);
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
