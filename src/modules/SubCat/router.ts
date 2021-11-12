import { Router } from "express";
import { getSubCategoryByCat } from "./controllers/getSubCatByCat";
import { postSubCategory } from "./controllers/postSubCat";

export const SubCategorytRouter = (router: Router) => {
  router.post("/subcat/post", postSubCategory);
  router.get("/subcat/get_subcat_by_cat/:id", getSubCategoryByCat);
};
