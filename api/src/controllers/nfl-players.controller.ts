import { NextFunction, Request, Response } from 'express';
import { Container } from 'typedi';
import { NFLPlayerService } from '@/services/nfl-players.service';
import { NFLPlayer } from '@/interfaces/nfl-players.interface';


export class NFLPlayerController {
  public nflPlayer = Container.get(NFLPlayerService);

  public getNFLPlayers = async (req: Request, res: Response, next: NextFunction) : Promise<void> => {
    try {
      const findAllNFLPlayersData: NFLPlayer[] = await this.nflPlayer.findAllNFLPlayers();

      res.status(200).json({ data: findAllNFLPlayersData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  public getNFLPlayerById = async (req: Request, res: Response, next: NextFunction) : Promise<void> => {
    try {
      const nflPlayerId = Number(req.params.id);
      const findOneNFLPlayerData: NFLPlayer = await this.nflPlayer.findNFLPlayerById(nflPlayerId);

      res.status(200).json({ data: findOneNFLPlayerData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };
}