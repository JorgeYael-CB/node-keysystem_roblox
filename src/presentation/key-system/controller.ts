import { Request, Response } from "express";
import { RegisterUserDto } from "../../domain/dtos";


export class KeySystemController {

  constructor(){};


  registerUser( req:Request, res:Response ){
    const [messageError, registerUserDto] = RegisterUserDto.create( req.body );
    if( messageError ) return res.status(400).json({error: true, messageError});

    res.json(registerUserDto);
  }

}
