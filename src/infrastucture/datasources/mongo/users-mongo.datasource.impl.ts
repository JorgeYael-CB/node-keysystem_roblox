import { UserModel } from "../../../data/mongo";
import { UsersDatasource } from "../../../domain/datasources";
import { RegisterUserDto, UpdateUserDto } from "../../../domain/dtos";
import { UserEntity } from "../../../domain/entities";
import { CustomError } from "../../../domain/errors";
import { UsersMapper } from "../../mappers";


export class UsersMongoDatasourceImpl implements UsersDatasource {

  constructor(){}


  async checkUserVip(robloxId: any): Promise<UserEntity> {
    const user = await UserModel.findOne({userRobloxId: robloxId});
    if( !user ) throw CustomError.BadRequestException('User not exist!');
    if( !user.roles.includes('BUYER') ) throw CustomError.BadRequestException('Is not a buyer');

    return UsersMapper.getUserFromObj( user );
  }


  async registerUser(registerUserDto: RegisterUserDto): Promise<UserEntity> {
    const { name, rebirths, userRobloxId } = registerUserDto;
    let user = await UserModel.findOne({userRobloxId});

    if( !user ){
      user = await UserModel.create({
        banned: false,
        lastDateGame: new Date(),
        name,
        rebirths,
        userRobloxId,
      })
    } else {
      user.lastDateGame = new Date();
      user.rebirths = rebirths;
      user.name = name;
      await user.save();
    }

    if( user.banned ){
      throw CustomError.unauthorized(`Oops, this user has been permanently banned from the script.`);
    }

    return UsersMapper.getUserFromObj(user);
  };


  updateUser(updateUserDto: UpdateUserDto): Promise<UserEntity> {
    throw new Error("Method not implemented.");
  };


  getUsers(): Promise<UserEntity[]> {
    throw new Error("Method not implemented.");
  };


}
