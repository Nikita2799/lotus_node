import { Router } from "express";
import { deleteProduct } from "./controllers/deleteProduct";
import { getAllProduct } from "./controllers/getAllProduct";
import { getProductById } from "./controllers/getPorductById";
import { getProductBySubcat } from "./controllers/getProductBySubcat";
import { postProduct } from "./controllers/postProduct";
import { postProductImg } from "./controllers/postProductImg";

export const ProductRouter = (router: Router) => {
  router.post("/product/post", postProduct);
  router.post("/product/post_img", postProductImg);
  router.get("/product/get_all", getAllProduct);
  router.get("/product/get_by_sub/:subId", getProductBySubcat);
  router.get("/product/get_by_id/:id", getProductById);
  router.delete("/product/delete/:id", deleteProduct);
};
