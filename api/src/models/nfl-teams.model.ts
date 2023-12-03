import { Sequelize, DataTypes, Model, Optional } from 'sequelize';
import { NFLTeam } from '@/interfaces/nfl-teams.interface';

export type NFLTeamCreationAttributes = Optional<NFLTeam, 'id' | 'team_name_short' 
  | 'team_name_long' | 'team_city_long' | 'team_city_short' | 'team_logo'>;

export class NFLTeamModel extends Model<NFLTeam, NFLTeamCreationAttributes> implements NFLTeam {
  public id: number; 
  public team_name_short: string; 
  public team_name_long: string; 
  public team_city_short: string; 
  public team_city_long: string; 
  public team_logo: string; 

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}
  
export default function (sequelize: Sequelize): typeof NFLTeamModel {
  NFLTeamModel.init(
    {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      }, 
      team_name_short: {
        allowNull: false,
        unique: 'teamNameUnique', 
        type: DataTypes.STRING(15)
      }, 
      team_name_long: {
        allowNull: false,
        unique: 'teamNameUnique', 
        type: DataTypes.STRING(30)
      }, 
      team_city_long: {
        allowNull: false,
        unique: 'teamCityUnique', 
        type: DataTypes.STRING(15)
      }, 
      team_city_short: {
        allowNull: false,
        unique: 'teamCityUnique', 
        type: DataTypes.STRING(15)
      }, 
      team_logo: {
        allowNull: false,
        unique: 'teamLogoUnique', 
        type: DataTypes.STRING
      }
    
    }, 
    {
      tableName: 'NFLTeams', 
      sequelize
    },
  );

  return NFLTeamModel;
}

