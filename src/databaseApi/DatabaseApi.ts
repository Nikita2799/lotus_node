import mysql from "mysql";
import { LoginApi } from "./api/LoginApi";
import { connection } from "./databsae_connection";
import { RegistrationApi } from "./api/RegistrationApi";
import { UserApi } from "./api/UserApi";
import { ProductApi } from "./api/ProductApi";
import { CategoryApi } from "./api/CategoryApi";
import { OrderApi } from "./api/OrderApi";

export class DatabaseApi {
  public login: LoginApi = new LoginApi(connection);
  public registration: RegistrationApi = new RegistrationApi(connection);
  public user: UserApi = new UserApi(connection);
  public product: ProductApi = new ProductApi(connection);
  public category: CategoryApi = new CategoryApi(connection);
  public order: OrderApi = new OrderApi(connection);
}
