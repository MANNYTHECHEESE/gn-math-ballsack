import { createFileRoute } from "@tanstack/react-router";

// Generic GitHub proxy: /api/gh/<owner>/<repo>[/<subpath...>]
// Loads index.html from jsDelivr at the given owner/repo[@main]/subpath/
// and injects <base href> so relative assets resolve against the CDN.
export const Route = createFileRoute("/api/gh/$")({
  server: {
    handlers: {
      GET: async ({ params }) => {
        const splat = (params._splat ?? "").replace(/^\/+|\/+$/g, "");
        const parts = splat.split("/");
        if (parts.length < 2 || !parts.every((p) => /^[a-zA-Z0-9._-]+$/.test(p))) {
          return new Response("Bad request", { status: 400 });
        }
        const [owner, repo, ...rest] = parts;
        const sub = rest.length ? rest.join("/") + "/" : "";
        const base = `https://cdn.jsdelivr.net/gh/${owner}/${repo}@main/${sub}`;
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
