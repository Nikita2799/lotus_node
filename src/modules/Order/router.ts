import { Router } from "express";
import { getAllOrder } from "./controllers/getAllOrder";
import { getOrderHistory } from "./controllers/getOrderHistory";
import { getOrderProducts } from "./controllers/getOrderProducts";
import { getOrdersProductHistory } from "./controllers/getOrdersProductHistory";
import { postOrder } from "./controllers/postOrder";

export const OrderRouter = (router: Router) => {
  router.post("/order/post", postOrder);
  router.get("/order/get_all", getAllOrder);
  router.get("/order/get_order_product/:orderId", getOrderProducts);
  router.get("/order/get_history/:userId", getOrderHistory);
  router.get("/order/get_history_product/:orderId", getOrdersProductHistory);
};
