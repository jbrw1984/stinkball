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
const mockNFLTeamsList : NFLTeam[] = mockNFLTeams; 

beforeAll(async () => {
  await DB.NFLTeams.truncate();
});

afterAll(async () => {
  await new Promise<void>(resolve => setTimeout(() => resolve(), 500));
});

describe('Testing NFL Teams', () => {

  describe('[POST] /nfl-teams', () => {
    it('response addAll nfl-teams', async () => {
      
      const result = await request(app.getServer()).post(`${nflTeamsRoute.path}`);
    
      expect(result.status).toEqual(200);
      expect(result.body.data[0].team_city_long).toEqual("Arizona");
      expect(result.body.data[31].team_city_short).toEqual("WSH");
      expect(result.body.data[25].team_name_short).toEqual("Steelers");
      expect(result.body.data[21].team_name_long).toEqual("New England Patriots");
      expect(result.body.data[17].team_logo).toEqual("https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/lac.png");
      expect(result.body.data.length).toEqual(32);
    }); 
  });

  describe('[GET] /nfl-teams', () => {
    it('response findAll nfl-teams', async () => {
      
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

  describe('[GET] /nfl-teams:id', () => {
    it('response findOne nfl-team', async () => {

      const mockNFLTeam : NFLTeam = {
        id: 18,
        team_name_short: 'Vikings',
        team_name_long: 'Minnesota Vikings',
        team_city_short: 'MIN',
        team_city_long: 'Minnesota',
        team_logo: 'image.png'
      } ;
      
      DB.NFLTeams.findByPk = jest.fn().mockResolvedValue(mockNFLTeam);
      (Sequelize as any).authenticate = jest.fn(); 

      const result = await request(app.getServer()).get(`${nflTeamsRoute.path}/${mockNFLTeam.id}`); 
      
      expect(result.status).toEqual(200);
      expect(result.body.data.id).toEqual(mockNFLTeam.id);
      expect(result.body.data.team_name_short).toEqual(mockNFLTeam.team_name_short);
      expect(result.body.data.team_name_long).toEqual(mockNFLTeam.team_name_long);
      expect(result.body.data.team_city_short).toEqual(mockNFLTeam.team_city_short);
      expect(result.body.data.team_city_long).toEqual(mockNFLTeam.team_city_long);
      expect(result.body.data.team_logo).toEqual(mockNFLTeam.team_logo);
    });

    it('response findOne nfl-team - exception', async () => {

      const mockNFLTeam : NFLTeam = {
        id: 44,
        team_name_short: 'Football Team',
        team_name_long: 'Duluth Football Team',
        team_city_short: 'DUL',
        team_city_long: 'Duluth',
        team_logo: 'image.png'
      };
      
      DB.NFLTeams.findByPk = jest.fn().mockResolvedValue(undefined);
      (Sequelize as any).authenticate = jest.fn(); 

      const result = await request(app.getServer()).get(`${nflTeamsRoute.path}/${mockNFLTeam.id}`); 
      
      expect(result.status).toEqual(409);
      expect(result.body.message).toEqual("NFL Team doesn't exist");
    });

  });
  
  
});
