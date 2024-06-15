import { Router } from "express";
import { KeySystemController } from "./controller";
import { UsersMongoDatasourceImpl } from "../../infrastucture/datasources/mongo";
import { UsersRepositoryImpl } from "../../infrastucture/repositories";
import { JwtAdapter, envs } from "../../config";



const usersDatasourceImpl = new UsersMongoDatasourceImpl();
export const usersRepositoryImpl = new UsersRepositoryImpl( usersDatasourceImpl );
const jwtAdapter = new JwtAdapter(envs.JWT_SEED);


export class KeySystemRoutes{

  static get router():Router {
    const routes = Router();
    const controller = new KeySystemController( usersRepositoryImpl, jwtAdapter );


    routes.post('/register-user', controller.registerUser);
    routes.get('/validate-token', controller.validateJwt);


    return routes;
  }

}
