/**
 * TESTS NEEDED
 * 
 * Update Fantasy Team - qb (Success)
 * Update Fantasy Team - rb1 (Success)
 * Update Fantasy Team - rb2 (Success)
 * Update Fantasy Team - wr1 (Success)
 * Update Fantasy Team - wr2 (Success)
 * Update Fantasy Team - te (Success)
 * Update Fantasy Team - k (Success)
 * Update Fantasy Team - dst (Success)
 */


import bcrypt from 'bcrypt';
import { Sequelize } from 'sequelize';
import request from 'supertest';
import { App } from '@/app';
import { FantasyTeamRoute } from '@/routes/fantasy-teams.route';
import { CreateFantasyTeamDto, UpdateFantasyTeamDto } from '@/dtos/fantasy-teams.dto';
import exp from 'constants';
import { HttpException } from '@/exceptions/httpException';
import { DB } from '@database';
import { AuthRoute } from '@/routes/auth.route';
import { CreateUserDto } from '@/dtos/users.dto';
import { 
  player1, 
  player2, 
  player3, 
  player4, 
  player5, 
  player6, 
  player7, 
  player8 
} from './fantasy-players-list';

// Global Variables
const fantasyTeamRoute = new FantasyTeamRoute();
const authRoute = new AuthRoute();
const app = new App([fantasyTeamRoute, authRoute]);
let userCookie;

const mockFantasyTeam: CreateFantasyTeamDto = {
  team_name: "Team 1",
  owner: 1,
  logo: "teamlogo",
  points: 0,
  qb: null,
  rb1: null,
  rb2: null,
  wr1: null,
  wr2: null,
  te: null,
  pk: null,
  dst: null,
}

beforeAll( async () => {
  // Clear out existing users from the database.
  await DB.Users.truncate();
  await DB.FantasyTeams.truncate();
  await DB.NFLPlayers.truncate();

  // Add Players to DB (used to fill fantasy team)
  await DB.NFLPlayers.create(player1);
  await DB.NFLPlayers.create(player2);
  await DB.NFLPlayers.create(player3);
  await DB.NFLPlayers.create(player4);
  await DB.NFLPlayers.create(player5);
  await DB.NFLPlayers.create(player6);
  await DB.NFLPlayers.create(player7);
  await DB.NFLPlayers.create(player8);

  const userData: CreateUserDto = {
    email: "example@gmail.com",
    password: "123456789"
  }

  // SignUp User
  const signUp = await request(app.getServer()).post('/signup').send(userData);
  // Login User
  const userLogIn = await request(app.getServer()).post('/login').send(userData);

  userCookie = userLogIn.header['set-cookie'];
});

afterAll(async () => {
  await new Promise<void>(resolve => setTimeout(() => resolve(), 500));
});

describe('Testing Fantasy Teams', () => {
  describe('[POST] /fantasy-teams', () => {
    it('Create Fantasy Team Success (Mocking Form Submission)', async () => {
      const result = await request(app.getServer())
        .post('/fantasy-teams')
        .set('Cookie', userCookie)
        .send(mockFantasyTeam);

      // Check values.
      expect(result.status).toEqual(201);
      expect(result.body.message).toEqual('created');
      expect(result.body.data.team_name).toEqual(mockFantasyTeam.team_name);
      expect(result.body.data.owner).toEqual(mockFantasyTeam.owner);
      expect(result.body.data.logo).toEqual(mockFantasyTeam.logo);
      expect(result.body.data.owner).toEqual(mockFantasyTeam.owner);
      expect(result.body.data.wr2).toEqual(null);
    }); 

    it('Create Fantasy Team Missing Auth Token (Mocking Form Submission)', async () => {
      const result = await request(app.getServer())
        .post('/fantasy-teams')
        .send(mockFantasyTeam);

      // Check values.
      expect(result.status).toEqual(404);
      expect(result.body.message).toEqual('Authentication token missing');
    });
  });

  describe('[GET] /fantay-teams/:id', () => {
    it('GET fantasy team success', async () => {
      const result = await request(app.getServer())
        .get(`${fantasyTeamRoute.path}/1`)
        .set('Cookie', userCookie);

      // Check values.
      expect(result.status).toEqual(200);
      expect(result.body.message).toEqual('findOne');
      expect(result.body.data.team_name).toEqual(mockFantasyTeam.team_name);
      expect(result.body.data.owner).toEqual(mockFantasyTeam.owner);
      expect(result.body.data.logo).toEqual(mockFantasyTeam.logo);
      expect(result.body.data.owner).toEqual(mockFantasyTeam.owner);
      expect(result.body.data.rb1).toEqual(null);
    });

    it("GET fantasy team exception (Team doesn't exist)", async () => {
      const result = await request(app.getServer())
        .get(`${fantasyTeamRoute.path}/2`) // Check id 2 which does not exist
        .set('Cookie', userCookie);

      // Check values.
      expect(result.status).toEqual(409);
      expect(result.body.message).toEqual("Fantasy Team doesn't exist");
    });

    it('GET fantasy team exception (Missing auth token)', async () => {
      const result = await request(app.getServer())
        .get(`${fantasyTeamRoute.path}/1`) 

      // Check values.
      expect(result.status).toEqual(404);
      expect(result.body.message).toEqual('Authentication token missing');
    });
  });

  describe('[PUT] /fantasy-teams (updating teams)', () => {
    it('UPDATE Fantasy Team add one player', async () => {
      const addPlayer: UpdateFantasyTeamDto = {
        qb: 1, rb1: null, rb2: null, wr1: null, wr2: null, te: null, pk: null, dst: null, points: 0,
      }

      const result = await request(app.getServer())
        .put(`${fantasyTeamRoute.path}/1`)
        .set('Cookie', userCookie)
        .send(addPlayer);

      expect(result.status).toEqual(200);
      expect(result.body.data.qb).toEqual(addPlayer.qb);
      expect(result.body.data.te).toEqual(addPlayer.te);
    });

    it('UPDATE Fantasy Team fill team', async () => {
      // Note qb can be null because we already have a qb on the team
      const addPlayer: UpdateFantasyTeamDto = {
        qb: null, rb1: 2, rb2: 7, wr1: 3, wr2: 8, te: 4, pk: 5, dst: 6, points: 0,
      }

      const result = await request(app.getServer())
        .put(`${fantasyTeamRoute.path}/1`)
        .set('Cookie', userCookie)
        .send(addPlayer);

      expect(result.status).toEqual(200);
      expect(result.body.data.rb1).toEqual(addPlayer.rb1);
      expect(result.body.data.pk).toEqual(addPlayer.pk);
      expect(result.body.data.dst).toEqual(addPlayer.dst);
    });

    it('UPDATE Fantasy Team add one player (exception - invalid position', async () => {
      const addPlayer: UpdateFantasyTeamDto = {
        qb: 2, rb1: null, rb2: null, wr1: null, wr2: null, te: null, pk: null, dst: null, points: 0,
      }

      const result = await request(app.getServer())
        .put(`${fantasyTeamRoute.path}/1`)
        .set('Cookie', userCookie)
        .send(addPlayer);

      expect(result.status).toEqual(409);
      expect(result.body.message).toEqual("Invalid position");
    });

    it('UPDATE Fantasy Team add one player (exception - invalid position)', async () => {
      const addPlayer: UpdateFantasyTeamDto = {
        qb: 9, rb1: null, rb2: null, wr1: null, wr2: null, te: null, pk: null, dst: null, points: 0,
      }

      const result = await request(app.getServer())
        .put(`${fantasyTeamRoute.path}/1`)
        .set('Cookie', userCookie)
        .send(addPlayer);

      expect(result.status).toEqual(409);
      expect(result.body.message).toEqual("NFL Player doesn't exist");
    });

    it('UPDATE Fantasy Team add one player (exception - Fantasy team does not exsist)', async () => {
      const addPlayer: UpdateFantasyTeamDto = {
        qb: 1, rb1: null, rb2: null, wr1: null, wr2: null, te: null, pk: null, dst: null, points: 0,
      }

      const result = await request(app.getServer())
        .put(`${fantasyTeamRoute.path}/2`)
        .set('Cookie', userCookie)
        .send(addPlayer);

      expect(result.status).toEqual(409);
      expect(result.body.message).toEqual("Fantasy Team doesn't exist");
    });

    it('UPDATE Fantasy Team add one player (exception - No Cookies)', async () => {
      const addPlayer: UpdateFantasyTeamDto = {
        qb: 1, rb1: null, rb2: null, wr1: null, wr2: null, te: null, pk: null, dst: null, points: 0,
      }

      const result = await request(app.getServer())
        .put(`${fantasyTeamRoute.path}/1`)
        .send(addPlayer);

      expect(result.status).toEqual(404);
      expect(result.body.message).toEqual('Authentication token missing');
    });
  });
});


