import { Router } from "express";
import { getCategory } from "./controllers/getCategory";
import { postCategory } from "./controllers/postCategory";

export const CategorytRouter = (router: Router) => {
  router.post("/category/post", postCategory);
  router.get("/category/get_all", getCategory);
};
