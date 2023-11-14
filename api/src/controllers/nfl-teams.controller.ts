import { NextFunction, Request, Response } from 'express';
import { Container } from 'typedi';
import { CreateNFLTeamDto } from '@dtos/nfl-teams.dto';
import { NFLTeam } from '@interfaces/nfl-teams.interface';
import { NFLTeamService } from '@services/nfl-teams.service';


export class NFLTeamController {
  public nflteam = Container.get(NFLTeamService);

  public getNFLTeams = async (req: Request, res: Response, next: NextFunction) : Promise<void> => {
    try {
      const findAllNFLTeamsData: NFLTeam[] = await this.nflteam.findAllNFLTeam();

      res.status(200).json({ data: findAllNFLTeamsData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  public getNFLTeamById = async (req: Request, res: Response, next: NextFunction) : Promise<void> => {
    try {
      const nflTeamId = Number(req.params.id);
      const findOneNFLTeamData: NFLTeam = await this.nflteam.findNFLTeamById(nflTeamId);

      res.status(200).json({ data: findOneNFLTeamData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };


}
