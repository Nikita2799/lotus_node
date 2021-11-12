import { checkInviteCode } from "./controllers/checkInviteCode";
import { registration } from "./controllers/registration";

export const RegistrationRouter = (router: any) => {
  router.post("/registration", registration);
  router.post("/check", checkInviteCode);
};
