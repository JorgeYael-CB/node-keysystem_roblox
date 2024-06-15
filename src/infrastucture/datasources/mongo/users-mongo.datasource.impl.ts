import { UsersDatasource } from "../../../domain/datasources";
import { RegisterUserDto, UpdateUserDto } from "../../../domain/dtos";
import { UserEntity } from "../../../domain/entities";


export class UsersMongoDatasourceImpl implements UsersDatasource {

  constructor(){}


  registerUser(registerUserDto: RegisterUserDto): Promise<UserEntity> {
    throw new Error("Method not implemented.");
  }

  updateUser(updateUserDto: UpdateUserDto): Promise<UserEntity> {
    throw new Error("Method not implemented.");
  }

  getUsers(): Promise<UserEntity[]> {
    throw new Error("Method not implemented.");
  }
;

}
