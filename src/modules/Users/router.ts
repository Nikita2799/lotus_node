import { middelwareToken } from "../../middelwareToken/middelware";
import { login_admin } from "./controllers/admin_login";
import { changePassForPhone } from "./controllers/changePassForPhone";
import { changePasswordForPassword } from "./controllers/changePasswordForPassword";
import { confirmPhoneCode } from "./controllers/confirmPhoneCode";
import { getCount } from "./controllers/getCount";
import { getInvite } from "./controllers/getInvite";
import { getStructureUser } from "./controllers/getStructureUser";
import { getUserByToken } from "./controllers/getUserByToken";
import { updateUserAddress } from "./controllers/updateUserAddressDate";

export const UsersRouter = (router: any) => {
  router.get("/get_struct/:id", middelwareToken, getStructureUser);
  router.put("/update_data_user", middelwareToken, updateUserAddress);
  router.post("/update_pass", middelwareToken, changePasswordForPassword);
  router.post("/update_pass_code", middelwareToken, changePassForPhone);
  router.post("/update_pass_code", changePassForPhone);
  router.post("/confirm_code", confirmPhoneCode);
  router.post("/login_admin", login_admin);
  router.get("/get_user_by_token", middelwareToken, getUserByToken);
  router.get("/ ", middelwareToken, getInvite);
};
