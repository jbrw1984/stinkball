import { Sequelize } from 'sequelize';
import request from 'supertest';
import { App } from '@/app';
import { CreateNFLTeamDto } from '@dtos/nfl-teams.dto';
import { NFLTeamRoute } from '@routes/nfl-teams.route';
import {NFLTeam} from '@/interfaces/nfl-teams.interface';
import { mockNFLTeams } from '@/test/nfl-teams-list';
import exp from 'constants';
import { HttpException } from '@/exceptions/httpException';
import { DB } from '@database';

// Global Variables
const nflTeamsRoute = new NFLTeamRoute();
const app = new App([nflTeamsRoute]);
const nflteams = nflTeamsRoute.nflteam.nflteam;


afterAll(async () => {
  await new Promise<void>(resolve => setTimeout(() => resolve(), 500));
});

describe('Testing NFL Teams', () => {

  describe('[GET] /nfl-teams', () => {
    it('response findAll nfl-teams', async () => {
      const mockNFLTeamsList : NFLTeam[] = mockNFLTeams; 
      
      DB.NFLTeams.findAll = jest.fn().mockReturnValue(mockNFLTeamsList);
      (Sequelize as any).authenticate = jest.fn(); 

      const result = await request(app.getServer()).get(`${nflTeamsRoute.path}`); 
      
      expect(result.status).toEqual(200);
      expect(result.body.data.length).toEqual(32);
      expect(result.body.data[0].id).toEqual(mockNFLTeams[0].id);
      expect(result.body.data[0].team_name_short).toEqual(mockNFLTeams[0].team_name_short);
      expect(result.body.data[0].team_name_long).toEqual(mockNFLTeams[0].team_name_long);
      expect(result.body.data[0].team_city_short).toEqual(mockNFLTeams[0].team_city_short);
      expect(result.body.data[0].team_city_long).toEqual(mockNFLTeams[0].team_city_long);
      expect(result.body.data[0].team_logo).toEqual(mockNFLTeams[0].team_logo);
      expect(result.body.data).toContainEqual(mockNFLTeams[5]);
      expect(result.body.data).toContainEqual(mockNFLTeams[10]);
      expect(result.body.data).toContainEqual(mockNFLTeams[15]);
      expect(result.body.data).toContainEqual(mockNFLTeams[20]);
      expect(result.body.data).toContainEqual(mockNFLTeams[25]);
      expect(result.body.data).toContainEqual(mockNFLTeams[30]);
      expect(result.body.data).toContainEqual(mockNFLTeams[31]);
    });
  });


});
