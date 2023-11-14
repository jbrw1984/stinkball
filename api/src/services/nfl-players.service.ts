import { Service } from 'typedi';
import { DB } from '@database';
import { HttpException } from '@/exceptions/httpException';
import { NFLPlayer } from '@/interfaces/nfl-players.interface';

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
}