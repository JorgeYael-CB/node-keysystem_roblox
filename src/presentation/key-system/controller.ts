import { Request, Response } from "express";
import { RegisterUserDto } from "../../domain/dtos";
import { UsersRepositoryImpl } from "../../infrastucture/repositories";
import { JwtAdapter } from '../../config/jsonwebtoken';
import { RegisterUserUseCase } from "../../domain/use-cases";
import { CustomError } from "../../domain/errors";
import { UserModel } from "../../data/mongo";
import { UsersMapper } from "../../infrastucture/mappers";


export class KeySystemController {

  constructor(
    private readonly usersRepositoryImpl: UsersRepositoryImpl,
    private readonly jwtAdapter: JwtAdapter,
  ){};


  private handleError = ( err:any, res: Response ) => {
    if( err instanceof CustomError ){
      return res.status( err.codeError ).json(err.message);
    }

    // TODO: manejar el error interno
    console.log(err);
    res.status(500).json(`Internal server error :(`);
  };


  registerUser = ( req:Request, res:Response ) => {
    const [messageError, registerUserDto] = RegisterUserDto.create( req.body );
    if( messageError ) return res.status(400).json({error: true, messageError});

    RegisterUserUseCase(this.usersRepositoryImpl, this.jwtAdapter, registerUserDto!)
      .then( data => res.status(200).json(data) )
      .catch( err => this.handleError(err, res) );
  }

  validateJwt = async(req:Request, res:Response) => {
    const { token, id } = req.query;

    const user = await UserModel.findOne({userRobloxId: id});

    if( user && user.roles.includes('BUYER') ){
      return res.status(200).json({
        succes: true,
        data: {
          id: UsersMapper.getUserFromObj(user).userRobloxId,
        },
      })
    }


    if( !token ){
      return res.status(401).json({error: true, messageError: 'Missing token!'});
    }

    this.jwtAdapter
      .decodedJwt( token.toString() )
        .then( data => {
          if( data ){
            res.status(200).json({
              succes: true,
              data,
            })
          } else {
            res.status(401).json({error: true, messageError: 'Token is not valid!'});
          }

        })
        .catch( err => this.handleError(err, res) );

  };

}
