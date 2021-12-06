import { Router } from "express";
import { getAllOrder } from "./controllers/getAllOrder";
import { getOrderProducts } from "./controllers/getOrderProducts";
import { postOrder } from "./controllers/postOrder";

export const OrderRouter = (router: Router) => {
  router.post("/order/post", postOrder);
  router.get("/order/get_all", getAllOrder);
  router.get("/order/get_order_product/:orderId", getOrderProducts);
};
