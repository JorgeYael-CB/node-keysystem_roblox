

export class RegisterUserDto {

  constructor(
    public readonly name:string,
    public readonly userRobloxId:string,
    public readonly rebirths: number,
  ){}


  static create( body: { [key:string]:any } ): [string?, RegisterUserDto?]{
    const { name, userRobloxId, rebirths } = body;

    if( !name || ! userRobloxId || !rebirths ){
      return ['name, userRobloxId and rebirths is required'];
    }

    if( typeof name !== 'string' || isNaN( +rebirths ) ){
      return ['name or rebirths is not valid'];
    }


    return[undefined, new RegisterUserDto(name.trim(), userRobloxId, +rebirths)];
  };

}
