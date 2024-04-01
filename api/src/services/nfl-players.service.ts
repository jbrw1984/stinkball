import { Service } from 'typedi';
import { DB } from '@database';
import { HttpException } from '@/exceptions/httpException';
import { NFLPlayer } from '@/interfaces/nfl-players.interface';
import { NFLPlayerDTO } from '@/dtos/nfl-players.dto';

@Service()
export class NFLPlayerService {
  public async findAllNFLPlayers(): Promise<NFLPlayer[]> {
    const allNFLPlayers: NFLPlayer[] = await DB.NFLPlayers.findAll();
    return allNFLPlayers;
  }

  public async findNFLPlayerById(nflPlayerId: number): Promise<NFLPlayer> {
    const findNFLPlayer: NFLPlayer = await DB.NFLPlayers.findByPk(nflPlayerId);
    if (!findNFLPlayer) throw new HttpException(409, "NFL Player doesn't exist");

    return findNFLPlayer;
  }

  public async findNFLPlayersByFilter(positions: string[]): Promise<NFLPlayer[]> {
    const findNFLPlayers: {
      rows: NFLPlayer[],
      count: number
    } = await DB.NFLPlayers.findAndCountAll({
      where: {
        position: {
          [DB.Sequelize.Op.in]: positions
        }
      }
    })
    if (findNFLPlayers.count === 0) throw new HttpException(409, 'No players match the filters')

    return findNFLPlayers.rows;
  }

  public async createNFLPlayer(nflPlayer: NFLPlayerDTO): Promise<NFLPlayer> {
    // Check if player already exists. (portraits are unique)
    const findNFLPlayer: NFLPlayer = await DB.NFLPlayers.findOne({ 
      where: { 
        player_name: nflPlayer.player_name, 
        player_portrait: nflPlayer.player_portrait,
        position: nflPlayer.position,
        teamId: nflPlayer.teamId 
      } 
    });
    if (findNFLPlayer) throw new HttpException(409, `This nfl player ${nflPlayer.player_name} already exists`);

    const createNFLPlayer: NFLPlayer = await DB.NFLPlayers.create(nflPlayer);
    return createNFLPlayer;
  }
}