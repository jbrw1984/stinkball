import { IsString, IsNumber, IsNotEmpty, MinLength, MaxLength } from 'class-validator';

export class NFLPlayerDTO {
  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  @MaxLength(40)
  public player_name: string;

  @IsNumber()
  public teamId: number;

  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  @MaxLength(15)
  public position: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  public player_portrait: string; 
}