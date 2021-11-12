import { middelwareToken } from "../../middelwareToken/middelware";
import { getInvite } from "./controllers/getInvite";
import { getStructureUser } from "./controllers/getStructureUser";
import { getUserByToken } from "./controllers/getUserByToken";

export const UsersRouter = (router: any) => {
  router.get("/get_struct", getStructureUser);
  router.get("/get_user_by_token", middelwareToken, getUserByToken);
  router.get("/ ", middelwareToken, getInvite);
};
