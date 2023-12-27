import bcrypt from 'bcrypt';
import { Sequelize } from 'sequelize';
import request from 'supertest';
import { App } from '@/app';
import { CreateUserDto } from '@dtos/users.dto';
import { AuthRoute } from '@routes/auth.route';
import { DB } from '@database';

// Global Variables
const authRoute = new AuthRoute();
const app = new App([authRoute]);

beforeEach(() => {
  jest.clearAllMocks(); // Reset all mock function calls
});


afterAll(async () => {
  await new Promise<void>(resolve => setTimeout(() => resolve(), 500));
});

describe('Testing Auth', () => {
  describe('[POST] /signup', () => {
  
    it('response should have the Create userData', async () => {
      const userData: CreateUserDto = {
        email: 'test@email.com',
        password: 'q1w2e3r4!',
      };

      const hashedPassword = await bcrypt.hash(userData.password, 10); 
      DB.Users.findOne = jest.fn().mockReturnValue(null);
      DB.Users.create = jest.fn().mockReturnValue({
        id: 1,
        email: userData.email,
        password: hashedPassword,
      });

      (Sequelize as any).authenticate = jest.fn();
      const result = await request(app.getServer())
        .post(`/signup`)
        .send(userData);

      expect(result.status).toEqual(201);
      expect(result.body.data.email).toEqual(userData.email); 
    });
    
    
    it('response should have exception', async () => {
      const userData: CreateUserDto = {
        email: 'test@email.com',
        password: 'q1w2e3r4!',
      };

      const hashedPassword = await bcrypt.hash(userData.password, 10); 
      DB.Users.findOne = jest.fn().mockReturnValue(null);
      DB.Users.create = jest.fn().mockReturnValue({
        id: 1,
        email: userData.email,
        password: hashedPassword,
      });

      (Sequelize as any).authenticate = jest.fn();
      const result = await request(app.getServer())
        .post(`/signup`)
        .send(userData);

      expect(result.status).toEqual(409);
      expect(result.body.message).toEqual(`This email ${userData.email} already exists`); 
    });
    
  });

  describe('[POST] /login', () => {
    it('response should have the Set-Cookie header with the Authorization token', async () => {
      const userData: CreateUserDto = {
        email: 'test@email.com',
        password: 'q1w2e3r4!',
      };

      DB.Users.findOne = jest.fn().mockReturnValue({
        id: 1,
        email: userData.email,
        password: await bcrypt.hash(userData.password, 10),
      });

      (Sequelize as any).authenticate = jest.fn();
      const app = new App([authRoute]);
      return request(app.getServer())
        .post(`/login`)
        .send(userData)
        .expect('Set-Cookie', /^Authorization=.+/);
    });
  });

  // describe('[POST] /logout', () => {
  //   it('logout Set-Cookie Authorization=; Max-age=0', async () => {
  //     const authRoute = new AuthRoute();

  //     const app = new App([authRoute]);
  //     return request(app.getServer())
  //       .post(`${authRoute.path}logout`)
  //       .expect('Set-Cookie', /^Authorization=\;/);
  //   });
  // });
});
