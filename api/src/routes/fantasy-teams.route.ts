import { Router } from 'express';
import { Routes } from '@interfaces/routes.interface';
import { FantasyTeamController } from '@/controllers/fantasy-teams.controller';
import { CreateFantasyTeamDto, UpdateFantasyTeamDto } from '@/dtos/fantasy-teams.dto';
import { ValidationMiddleware } from '@middlewares/validation.middleware';
import { AuthMiddleware } from '@/middlewares/auth.middleware';

export class FantasyTeamRoute implements Routes {
  public path = '/fantasy-teams';
  public router = Router();
  public fantasyTeams = new FantasyTeamController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(`${this.path}`, AuthMiddleware, ValidationMiddleware(CreateFantasyTeamDto), this.fantasyTeams.createFantasyTeam);
    this.router.get(`${this.path}/:id(\\d+)`, AuthMiddleware,  this.fantasyTeams.getFantasyTeamById);
    this.router.put(`${this.path}/:id(\\d+)`, AuthMiddleware, ValidationMiddleware(UpdateFantasyTeamDto, true), this.fantasyTeams.updateFantasyTeam);
  }
}