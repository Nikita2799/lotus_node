import Router from "express";
import { CategorytRouter } from "../src/modules/Category/router";
import { LoginRouter } from "../src/modules/Login/router";
import { OrderRouter } from "../src/modules/Order/router";
import { ProductRouter } from "../src/modules/Product/router";
import { RegistrationRouter } from "../src/modules/Registration/router";
import { SubCategorytRouter } from "../src/modules/SubCat/router";
import { UsersRouter } from "../src/modules/Users/router";
import { corsSettings } from "./corsSettings/corsSettings";

const router = Router();

router.use(corsSettings);

LoginRouter(router);
RegistrationRouter(router);
UsersRouter(router);
ProductRouter(router);
CategorytRouter(router);
SubCategorytRouter(router);
OrderRouter(router);

//enable pre-flight
router.options("*", corsSettings);

export default router;
