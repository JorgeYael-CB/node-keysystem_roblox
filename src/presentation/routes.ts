import { Router } from "express";
import { KeySystemRoutes } from "./key-system/routes";


export class Routes {

  static get router():Router{
    const routes = Router();

    routes.use('/api/key-system', KeySystemRoutes.router);

    return routes;
  }

}
