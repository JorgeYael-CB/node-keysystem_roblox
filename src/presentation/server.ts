import express, { Router } from "express";
import cors from 'cors';


interface Props {

  port: number;
  routes:Router;

}


export class Server{

  private readonly port: number;
  private readonly routes: Router;
  private readonly app = express();


  constructor( config: Props ){
    const { port, routes } = config;

    this.port = port;
    this.routes = routes;

    this.config();
  }


  config(){
    this.app.use( cors() );
    this.app.use( express.json() );
    this.app.use( express.urlencoded({ extended: true }) );

    this.app.use( this.routes );
  }

  start(){
    this.app.listen(this.port, () => {
      console.log(`Server running on port: ${this.port}`);
    })
  }


}
