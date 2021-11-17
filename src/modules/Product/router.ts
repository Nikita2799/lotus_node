import { Router } from "express";
import { deleteProduct } from "./controllers/deleteProduct";
import { getAllProduct } from "./controllers/getAllProduct";
import { getByCategory } from "./controllers/getByCategory";
import { getProductById } from "./controllers/getPorductById";
import { getProductBySubcat } from "./controllers/getProductBySubcat";
import { getProductsByArray } from "./controllers/getProductsByArray";
import { postProduct } from "./controllers/postProduct";
import { postProductImg } from "./controllers/postProductImg";

export const ProductRouter = (router: Router) => {
  router.post("/product/post", postProduct);
  router.post("/product/post_img", postProductImg);
  router.post("/product/get_by_array", getProductsByArray);
  router.get("/product/get_all", getAllProduct);
  router.get("/product/get_by_sub/:subId", getProductBySubcat);
  router.get("/product/get_by_sub/:category", getByCategory);
  router.get("/product/get_by_id/:id", getProductById);
  router.delete("/product/delete/:id", deleteProduct);
};
