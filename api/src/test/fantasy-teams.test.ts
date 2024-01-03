/**
 * TESTS NEEDED
 * 
 * Create Fantasy Team (Success)
 * Get Fantasy Team (Success)
 * Get Fantasy Team (Error)
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
import { User } from '@/interfaces/users.interface';

// Global Variables
const fantasyTeamRoute = new FantasyTeamRoute();
const authRoute = new AuthRoute();
const app = new App([fantasyTeamRoute, authRoute]);
let userCookie;

beforeAll( async () => {
  // Clear out existing users from the database.
  await DB.Users.truncate();

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
        k: null,
        dst: null,
      }

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
  });
});


