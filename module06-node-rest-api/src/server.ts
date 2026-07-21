import {
  createServer,
  IncomingMessage,
  Server,
  ServerResponse,
} from "node:http";

const server: Server = createServer(
  (req: IncomingMessage, res: ServerResponse) => {
    // console.log(req.url);  /, /user,  /product
    // console.log(req.method); get, post, delete, patch

    const url = req.url;
    const method = req.method;

    if (url === "/" && method === "GET") {
      res.writeHead(200, { "content-type": "application/json" });
      res.end(JSON.stringify({ message: "this is root route sdfgdfg" }));
    } else if (url?.startsWith("/products")) {
      res.writeHead(200, { "content-type": "application/json" });
      res.end(JSON.stringify({ message: "this is product route" }));
    } else {
      res.writeHead(404, { "content-type": "application/json" });

      res.end(JSON.stringify({ message: "not found" }));
    }
  },
);
server.listen(3000, () => {
  console.log("server is running on port 3000");
});
