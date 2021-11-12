import { login } from "./controllers/login";

export const LoginRouter = (router: any) => {
  router.post("/login", login);
};
