import { Router } from "express";
import { KeySystemController } from "./controller";


export class KeySystemRoutes{

  static get router():Router {
    const routes = Router();
    const controller = new KeySystemController();


    routes.post('/register-user', controller.registerUser);


    return routes;
  }

}
