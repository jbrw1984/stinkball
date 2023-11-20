import { Sequelize, DataTypes, Model, Optional } from 'sequelize';
import { NFLPlayer } from '@/interfaces/nfl-players.interface';

export type NFLPlayerCreationAttributes = Optional<NFLPlayer, 'id' | 'player_name' 
  | 'teamId' | 'position' | 'player_portrait'>;

export class NFLPLayerModel extends Model<NFLPlayer, NFLPlayerCreationAttributes> implements NFLPlayer {
  public id: number; 
  public player_name: string; 
  public teamId: number;
  public position: string; 
  public player_portrait: string; 

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}
  
export default function (sequelize: Sequelize): typeof NFLPLayerModel {
  NFLPLayerModel.init(
    {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      }, 
      player_name: {
        allowNull: false,
        unique: 'uniquePlayer', 
        type: DataTypes.STRING(40)
      }, 
      teamId: {
        allowNull: true,
        type: DataTypes.INTEGER,
      }, 
      position: {
        allowNull: false,
        type: DataTypes.STRING(15)
      },
      player_portrait: {
        allowNull: false,
        unique: 'uniquePlayer', 
        type: DataTypes.STRING
      }
    }, 
    {
      tableName: 'NFLPlayers', 
      sequelize
    },
  );

  return NFLPLayerModel;
}

