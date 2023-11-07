import { IsString, IsNotEmpty, MinLength, MaxLength } from 'class-validator';

export class CreateNFLTeamDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  @MaxLength(5)
  public team_name_short: string; 

  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  @MaxLength(15)
  public team_name_long: string; 

  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  @MaxLength(5)
  public team_city_short: string; 

  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  @MaxLength(15)
  public team_city_long: string; 

  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  public team_logo: string; 

}