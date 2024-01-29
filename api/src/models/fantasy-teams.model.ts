import { Sequelize, DataTypes, Model, Optional } from 'sequelize';
import { FantasyTeam } from '@/interfaces/fantasy-teams';

export type FantasyTeamCreationAttributes = Optional<FantasyTeam, 'id' | 'team_name' | 'owner' |
  'logo' | 'points' | 'qb' | 'wr1' | 'wr2' | 'rb1' | 'rb2' | 'te' | 'pk' | 'dst'>;


export class FantasyTeamModel extends Model<FantasyTeam, FantasyTeamCreationAttributes> implements FantasyTeam {
  public id: number; 
  public team_name: string; 
  public owner: number;
  public logo: string; 
  public points: number;

  public qb: number;
  public rb1: number;
  public rb2: number;
  public wr1: number;
  public wr2: number;
  public te: number;
  public pk: number;
  public dst: number;

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
      qb: {
        allowNull: true,
        type: DataTypes.INTEGER,
      },
      rb1: {
        allowNull: true,
        type: DataTypes.INTEGER,
      },
      rb2: {
        allowNull: true,
        type: DataTypes.INTEGER,
      },
      wr1: {
        allowNull: true,
        type: DataTypes.INTEGER,
      },
      wr2: {
        allowNull: true,
        type: DataTypes.INTEGER,
      },
      te: {
        allowNull: true,
        type: DataTypes.INTEGER,
      },
      pk: {
        allowNull: true,
        type: DataTypes.INTEGER,
      },
      dst: {
        allowNull: true,
        type: DataTypes.INTEGER,
      },
    },
    {
      tableName: 'FantasyTeams',
      sequelize,
    },
  );

  return FantasyTeamModel;
}
                                  