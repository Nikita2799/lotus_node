import { Router } from "express";
import { postOrder } from "./controllers/postOrder";

export const OrderRouter = (router: Router) => {
  router.post("/order/post", postOrder);
};
