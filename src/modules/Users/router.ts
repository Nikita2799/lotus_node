import { middelwareToken } from "../../middelwareToken/middelware";
import { getCount } from "./controllers/getCount";
import { getInvite } from "./controllers/getInvite";
import { getStructureUser } from "./controllers/getStructureUser";
import { getUserByToken } from "./controllers/getUserByToken";
import { updateUserAddress } from "./controllers/updateUserAddressDate";

export const UsersRouter = (router: any) => {
  router.get("/get_struct/:id", middelwareToken, getStructureUser);
  router.put("/update_data_user", middelwareToken, updateUserAddress);
  router.get("/get_user_by_token", middelwareToken, getUserByToken);
  router.get("/ ", middelwareToken, getInvite);
};
