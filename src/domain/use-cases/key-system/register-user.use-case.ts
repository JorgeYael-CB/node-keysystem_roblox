import { UsersRepository } from '../../repositories/users.repository';
import { RegisterUserDto } from '../../dtos/key-system/verify-user.dto';
import { CustomError } from '../../errors';
import { JwtAdapter } from '../../../config/jsonwebtoken';



export const RegisterUserUseCase = async (
  usersRepository: UsersRepository,
  jwtAdapter:JwtAdapter,
  registerUserDto: RegisterUserDto,
) => {
  const user = await usersRepository.registerUser( registerUserDto );

  if( !user ){
    throw CustomError.InternalServerError(`El usuario no viene al registrarlo`, {file: __dirname});
  }

  const token = await jwtAdapter.getJwt({id: user.userRobloxId}, '1d');
  console.log(user)

  return {
    token,
    user,
    succes: true,
    message: 'Already register user!',
  }
}