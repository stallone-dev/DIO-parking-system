import { build, stop } from "https://deno.land/x/esbuild@v0.21.5/mod.js";

await build({
    entryPoints: ["src/modules/main.ts"],
    bundle: true,
    format: "esm",
    outdir: "src/public/scripts",
    outExtension: { ".js": ".mjs" },
});

await stop();
