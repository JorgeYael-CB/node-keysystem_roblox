import { RegisterUserDto, UpdateUserDto } from "../../domain/dtos";
import { UserEntity } from "../../domain/entities";
import { UsersRepository } from "../../domain/repositories";
import { UsersDatasource } from '../../domain/datasources/users.datasource';


export class UsersRepositoryImpl implements UsersRepository {

  constructor(
    private readonly usersDatasource: UsersDatasource,
  ){}


  checkUserVip(robloxId: any): Promise<UserEntity> {
    return this.usersDatasource.checkUserVip( robloxId );
  }

  registerUser(registerUserDto: RegisterUserDto): Promise<UserEntity> {
    return this.usersDatasource.registerUser( registerUserDto );
  }

  updateUser(updateUserDto: UpdateUserDto): Promise<UserEntity> {
    return this.usersDatasource.updateUser( updateUserDto );
  }

  getUsers(): Promise<UserEntity[]> {
    return this.usersDatasource.getUsers();
  }

}
