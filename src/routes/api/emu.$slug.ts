import { createFileRoute } from "@tanstack/react-router";

// EmulatorJS launcher. Reads ?core=...&rom=...&name=... and returns a
// fully-configured HTML page that boots the EmulatorJS player. Cores are
// loaded from the official EmulatorJS CDN.
//
// Example: /api/emu/anything?core=nes&rom=https://example.com/game.nes&name=Game
export const Route = createFileRoute("/api/emu/$slug")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const url = new URL(request.url);
        const core = url.searchParams.get("core") || "nes";
        const rom = url.searchParams.get("rom") || "";
        const name = url.searchParams.get("name") || "Game";
        const bios = url.searchParams.get("bios") || "";

        if (!/^[a-z0-9_]+$/.test(core)) {
          return new Response("Bad core", { status: 400 });
        }
        if (!rom || !/^https?:\/\//.test(rom)) {
          return new Response("Missing rom URL", { status: 400 });
        }

        const esc = (s: string) =>
          s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/"/g, "&quot;");

        const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<title>${esc(name)}</title>
<meta name="viewport" content="width=device-width,initial-scale=1" />
<style>
  html,body{margin:0;padding:0;background:#000;height:100%;overflow:hidden;font-family:system-ui,sans-serif;color:#fff}
  #game{position:fixed;inset:0}
</style>
</head>
<body>
<div id="game"></div>
<script>
  window.EJS_player = "#game";
  window.EJS_core = ${JSON.stringify(core)};
  window.EJS_gameName = ${JSON.stringify(name)};
  window.EJS_gameUrl = ${JSON.stringify(rom)};
  ${bios ? `window.EJS_biosUrl = ${JSON.stringify(bios)};` : ""}
  window.EJS_pathtodata = "https://cdn.emulatorjs.org/stable/data/";
  window.EJS_startOnLoaded = true;
</script>
<script src="https://cdn.emulatorjs.org/stable/data/loader.js"></script>
</body>
</html>`;

        return new Response(html, {
          status: 200,
          headers: {
            "content-type": "text/html; charset=utf-8",
            "cache-control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
