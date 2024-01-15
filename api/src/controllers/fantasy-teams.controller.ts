import { NextFunction, Request, Response } from 'express';
import { Container } from 'typedi';
import { CreateFantasyTeamDto, UpdateFantasyTeamDto } from '@/dtos/fantasy-teams.dto';
import { FantasyTeam } from '@/interfaces/fantasy-teams';
import { FantasyTeamService } from '@/services/fantasy-teams.service';

export class FantasyTeamController {
  public fantasyteam = Container.get(FantasyTeamService);

  public createFantasyTeam = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const fantasyTeamData: CreateFantasyTeamDto = req.body;
      const createFantasyTeam: FantasyTeam = await this.fantasyteam.createFantasyTeam(fantasyTeamData);

      res.status(201).json({ data: createFantasyTeam, message: 'created' });
    } catch (error: any) {
      next(error);
    }
  }

  public getFantasyTeamById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const fantasyTeamId = Number(req.params.id);
      const findOneFantasyTeamData: FantasyTeam = await this.fantasyteam.findFantasyTeamById(fantasyTeamId);

      res.status(200).json({ data: findOneFantasyTeamData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  }

  public updateFantasyTeam = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const fantasyTeamId = Number(req.params.id);
      const fantasyTeamData: UpdateFantasyTeamDto = req.body;
      const updateFantasyTeamData: FantasyTeam = await this.fantasyteam.updateFantasyTeam(fantasyTeamId, fantasyTeamData);

      res.status(200).json({ data: updateFantasyTeamData, message: 'updated' });
    } catch (error) {
      next(error);
    } 
  }
}
