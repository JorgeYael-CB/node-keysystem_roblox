import { CustomError } from "../../errors";
import { UsersRepository } from "../../repositories";



export class CheckUserBuyerUseCase {

  constructor(
    private readonly usersRepository:UsersRepository
  ){}


  async check( userRobloxId: any ){
    const user = await this.usersRepository.checkUserVip( userRobloxId );
    if( !user ) throw CustomError.InternalServerError('No viene el usuario al validarlo');

    return {
      status: 200,
      user,
    }
  }

}
