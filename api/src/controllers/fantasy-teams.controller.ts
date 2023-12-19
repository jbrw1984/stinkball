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
}
