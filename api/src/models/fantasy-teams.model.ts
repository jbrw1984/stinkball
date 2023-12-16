import { Sequelize, DataTypes, Model, Optional } from 'sequelize';
import { FantasyTeam } from '@/interfaces/fantasy-teams';
import { FantasyRoster } from '@/interfaces/fantasy-roster';

export type FantasyTeamCreationAttributes = Optional<FantasyTeam, 'id' | 'team_name' | 'owner' |
                                        'logo' | 'points' | 'positions'>;


export class FantasyTeamModel extends Model<FantasyTeam, FantasyTeamCreationAttributes> implements FantasyTeam {
  public id: number; 
  public team_name: string; 
  public owner: number;
  public logo: string; 
  public points: number;
  public positions: FantasyRoster;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export default function (sequelize: Sequelize): typeof FantasyTeamModel {
  FantasyTeamModel.init(
    {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      team_name: {
        allowNull: false,
        type: DataTypes.STRING(40),
      },
      owner: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      logo: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      points: {
        allowNull: true,
        type: DataTypes.INTEGER,
      },
      positions: {
        allowNull: true,
        type: DataTypes.ABSTRACT,
      },
    },
    {
      tableName: 'FantasyTeams',
      sequelize,
    },
  );

  return FantasyTeamModel;
}
                                  