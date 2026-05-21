import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/api/play/$file")({
  server: {
    handlers: {
      GET: async ({ params }) => {
        const file = params.file;
        if (!/^[a-zA-Z0-9_-]+\.html$/.test(file)) {
          return new Response("Bad request", { status: 400 });
        }
        const upstream = `https://cdn.jsdelivr.net/gh/freebuisness/html@main/${file}`;
        const res = await fetch(upstream);
        if (!res.ok) {
          return new Response("Not found", { status: res.status });
        }
        const body = await res.text();
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
