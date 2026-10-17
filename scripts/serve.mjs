// Serves the static export in ./out, optionally under a sub-path, so the
// GitHub Pages build can be checked locally exactly as it will be hosted.
//
//   node scripts/serve.mjs                          -> http://localhost:3100/
//   node scripts/serve.mjs --base /navneet-portfolio -> http://localhost:3100/navneet-portfolio/

import { createReadStream } from "node:fs";
import { stat } from "node:fs/promises";
import { createServer } from "node:http";
import { extname, join, normalize, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const args = process.argv.slice(2);
const flag = (name, fallback) => {
  const i = args.indexOf(name);
  return i === -1 ? fallback : args[i + 1];
};

const root = resolve(fileURLToPath(new URL("..", import.meta.url)), flag("--dir", "out"));
const base = flag("--base", "").replace(/\/$/, "");
const port = Number(flag("--port", "3100"));

const types = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json",
  ".txt": "text/plain; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
  ".woff2": "font/woff2",
  ".woff": "font/woff",
};

async function resolveFile(urlPath) {
  const safe = normalize(decodeURIComponent(urlPath)).replace(/^(\.\.[/\\])+/, "");
  let file = join(root, safe);
  if (!file.startsWith(root)) return null;
  try {
    const info = await stat(file);
    if (info.isDirectory()) file = join(file, "index.html");
    await stat(file);
    return file;
  } catch {
    try {
      await stat(`${file}.html`);
      return `${file}.html`;
    } catch {
      return null;
    }
  }
}

createServer(async (req, res) => {
  const { pathname } = new URL(req.url ?? "/", "http://localhost");
  if (base && pathname === "/") {
    res.writeHead(302, { Location: `${base}/` }).end();
    return;
  }
  if (base && !pathname.startsWith(`${base}/`) && pathname !== base) {
    res.writeHead(404).end("Not found (outside base path)");
    return;
  }
  const file = await resolveFile(pathname.slice(base.length) || "/");
  if (!file) {
    const notFound = join(root, "404.html");
    res.writeHead(404, { "Content-Type": types[".html"] });
    createReadStream(notFound).on("error", () => res.end("Not found")).pipe(res);
    return;
  }
  res.writeHead(200, { "Content-Type": types[extname(file)] ?? "application/octet-stream" });
  createReadStream(file).pipe(res);
}).listen(port, () => {
  console.log(`Serving ${root} at http://localhost:${port}${base}/`);
});
