import type { IncomingMessage, ServerResponse } from "node:http";
import { productController } from "../controller/product.controller";
import { readProduct } from "../services/product.service";

export const routeHandler = (req: IncomingMessage, res: ServerResponse) => {
  // console.log(req.url);  /, /user,  /product
  // console.log(req.method); get, post, delete, patch

  const url = req.url;
  const method = req.method;

  if (url === "/" && method === "GET") {
    res.writeHead(200, { "content-type": "application/json" });
    res.end(JSON.stringify({ message: "this is root route sdfgdfg" }));
  } else if (url?.startsWith("/products")) {
    productController(req, res);
    readProduct();
  } else {
    res.writeHead(404, { "content-type": "application/json" });

    res.end(JSON.stringify({ message: "not found" }));
  }
};
