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

// Global Variables
const fantasyTeamRoute = new FantasyTeamRoute();
const authRoute = new AuthRoute();
const app = new App([fantasyTeamRoute, authRoute]);
let userLogIn;

beforeAll( async () => {
  await DB.Users.truncate();
  /**
   * We NEED
   * 
   * 1 User logged in
   */

  const userData: CreateUserDto = {
    email: "example@gmail.com",
    password: "123456789"
  }

  // SignUp User
  const signUp = await request(app.getServer()).post('/signup').send(userData);
  // Login User
  userLogIn = await request(app.getServer()).post('/login').send(userData);
});

afterAll(async () => {
  await new Promise<void>(resolve => setTimeout(() => resolve(), 500));
});

describe('Testing Fantasy Teams', () => {
  describe('[POST] /fantasy-teams', () => {
    it('Create Fantasy Team Success', async () => {
      console.log(userLogIn);
    }); 
  });
});


