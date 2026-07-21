import type { IncomingMessage, ServerResponse } from "node:http";
import { readProduct } from "../services/product.service";

export const productController = (
  req: IncomingMessage,
  res: ServerResponse,
) => {
  const url = req.url;
  const method = req.method;

  if (url === "/products" && method === "GET") {
    // const products = [
    //   {
    //     id: 1,
    //     name: "product-1",
    //   },
    // ];
    const products = readProduct();
    res.writeHead(200, { "content-type": "application/json" });
    res.end(
      JSON.stringify({ message: "this is product route", data: products }),
    );
  }
};
