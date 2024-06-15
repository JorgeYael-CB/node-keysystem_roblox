import { envs } from "./config"
import { MongoDb } from "./data/mongo"
import { Routes } from "./presentation/routes"
import { Server } from "./presentation/server"

(()=>{
  main()
})()


async function main(){
  await new MongoDb(envs.MONGO_DB_URI)
    .connect();


  const routes = Routes.router;
  const server = new Server({
    port: envs.PORT,
    routes
  });


  server.start();

}