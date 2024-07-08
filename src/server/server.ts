import { serveDir, serveFile } from "jsr:@std/http/file-server";

const port = Number(Deno.env.get("SERVER_PORT"));

Deno.serve({ port: port }, (req: Request) => {
    const pathname = new URL(req.url).pathname;

    if (pathname === "/") {
        return serveFile(req, "./src/public/index.html");
    }

    if (pathname.startsWith("/static")) {
        return serveDir(req, {
            fsRoot: "./src/public",
            urlRoot: "static",
        });
    }

    return new Response("404: Not Found", {
        status: 404,
    });
});
