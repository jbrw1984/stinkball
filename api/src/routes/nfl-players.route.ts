import { Router } from 'express';
import { NFLPlayerController } from '@/controllers/nfl-players.controller';
import { Routes } from '@interfaces/routes.interface';

export class NFLPlayerRoute implements Routes {
  public path = '/nfl-players';
  public router = Router();
  public nflPlayer = new NFLPlayerController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.nflPlayer.getNFLPlayers);
    this.router.get(`${this.path}/:id(\\d+)`, this.nflPlayer.getNFLPlayerById);
    this.router.post(`${this.path}`, this.nflPlayer.postNFLPlayers);
    this.router.get(`${this.path}/filter`, this.nflPlayer.getNFLPlayersByPositions);
  }
}