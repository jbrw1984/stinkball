import { IsString, IsEmail, IsNotEmpty, MinLength, MaxLength, IsNumber } from 'class-validator';

export class CreateFantasyTeamDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  @MaxLength(40)
  public team_name: string;

  @IsNumber()
  public owner: number;

  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  public logo: string;

  public points: number;

  public qb: number;
  public rb1: number;
  public rb2: number;
  public wr1: number;
  public wr2: number;
  public te: number;
  public k: number;
  public dst: number;
}

// Points and positions can be updated.
export class UpdateFantasyTeamDto {
  public points: number;

  public qb: number;
  public rb1: number;
  public rb2: number;
  public wr1: number;
  public wr2: number;
  public te: number;
  public k: number;
  public dst: number;
}