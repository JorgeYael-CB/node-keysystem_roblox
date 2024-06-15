import { UserEntity } from "../../domain/entities";

export class UsersMapper{

  static getUserFromObj( body: {[key:string]: any} ): UserEntity{
    const { name, robloxUserId, id, _id, rebirths, banned, roles, lastDateGame } = body;

    return new UserEntity(name, robloxUserId, id || _id, rebirths, banned, roles, lastDateGame);
  }

}
