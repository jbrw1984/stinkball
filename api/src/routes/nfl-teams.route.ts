import { Router } from 'express';
import { NFLTeamController } from '@controllers/nfl-teams.controller';
import { CreateNFLTeamDto } from '@dtos/nfl-teams.dto';
import { Routes } from '@interfaces/routes.interface';
import { ValidationMiddleware } from '@middlewares/validation.middleware';

export class NFLTeamRoute implements Routes {
  public path = '/nfl-teams';
  public router = Router();
  public nflteam = new NFLTeamController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.nflteam.getNFLTeams);
    this.router.get(`${this.path}/:id(\\d+)`, this.nflteam.getNFLTeamById);
    // this.router.post(`${this.path}`, ValidationMiddleware(CreateUserDto, 'body'), this.user.createUser);
    // this.router.put(`${this.path}/:id(\\d+)`, ValidationMiddleware(CreateUserDto, 'body', true), this.user.updateUser);
    // this.router.post(`${this.path}`, ValidationMiddleware(CreateUserDto), this.user.createUser);
    // this.router.put(`${this.path}/:id(\\d+)`, ValidationMiddleware(UpdateUserDto, true), this.user.updateUser);
    // this.router.delete(`${this.path}/:id(\\d+)`, this.user.deleteUser);
  }
}
