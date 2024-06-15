import { UserEntity } from "../../domain/entities";

export class UsersMapper{

  static getUserFromObj( body: {[key:string]: any} ): UserEntity{
    const { name, userRobloxId, id, _id, rebirths, banned, roles, lastDateGame } = body;

    return new UserEntity(name, userRobloxId, id || _id, rebirths, banned, roles, lastDateGame);
  }

}
