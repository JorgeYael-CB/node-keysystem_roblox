
export class UserEntity{

  constructor(
    public readonly name:string,
    public readonly userRobloxId:string,
    public readonly id:string | number,
    public readonly rebirths: number,
    public readonly banned: boolean,
    public readonly roles: string[],
    public readonly lastDateGame: Date,
  ){}

}
