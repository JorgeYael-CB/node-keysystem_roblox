import { RegisterUserDto, UpdateUserDto } from "../dtos";
import { UserEntity } from "../entities";



export abstract class UsersRepository {
  abstract registerUser( registerUserDto: RegisterUserDto ): Promise< UserEntity >;
  abstract updateUser( updateUserDto: UpdateUserDto ): Promise< UserEntity >;
  abstract getUsers(  ): Promise< UserEntity[] >;
}
