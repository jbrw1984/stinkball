import { NextFunction, Request, Response } from 'express';
import { Container } from 'typedi';
import { CreateNFLTeamDto } from '@dtos/nfl-teams.dto';
import { NFLTeam } from '@interfaces/nfl-teams.interface';
import { NFLTeamService } from '@services/nfl-teams.service';
const fetch = require('node-fetch');
import { DB } from '@database';


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
      const nflTeamId: number = Number(req.params.id);
      const findOneNFLTeamData: NFLTeam = await this.nflteam.findNFLTeamById(nflTeamId);

      res.status(200).json({ data: findOneNFLTeamData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };
  
  public postNFLTeams = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    let nflTeams: NFLTeam[] = [];

    // URL to GET NFL Teams externally.
    const url = 'https://tank01-nfl-live-in-game-real-time-statistics-nfl.p.rapidapi.com/getNFLTeams?rosters=false&schedules=false&topPerformers=false&teamStats=false';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'ca7f9abf22msh2ffe3e4ebe6d5d5p14d858jsn9109ea285446',
        'X-RapidAPI-Host': 'tank01-nfl-live-in-game-real-time-statistics-nfl.p.rapidapi.com'
      }
    };

    try {
      // Get NFL teams externally.
      const response = await fetch(url, options);
      const result = await response.json();
      
      // Iterate over each element in the external result adding each team to DB.
      try {
        for (const element of result.body) {
          let newNFLTeam: CreateNFLTeamDto = {
            team_name_short: element.teamName,
            team_name_long: element.teamCity + " " + element.teamName,
            team_city_short: element.teamAbv,
            team_city_long: element.teamCity,
            team_logo: element.espnLogo1,
          }
          // Create team and add to response array.
          let addNewNFLTeam: NFLTeam = await this.nflteam.createNFLTeam(newNFLTeam);
          if (addNewNFLTeam) nflTeams.push(addNewNFLTeam);
        }
        res.status(200).json({ data: nflTeams, message: 'seedNFLTeams' });
      } catch (error) {
        next(error)
      }
    } catch (error) {
      console.error(error);
    }
  }

}
