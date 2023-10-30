import bcrypt from 'bcrypt';
import { Sequelize } from 'sequelize';
import request from 'supertest';
import { App } from '@/app';
import { CreateUserDto, UpdateUserDto } from '@dtos/users.dto';
import { UserRoute } from '@routes/users.route';
import exp from 'constants';
import { HttpException } from '@/exceptions/httpException';

// Global Variables
const usersRoute = new UserRoute();
const app = new App([usersRoute]);
const users = usersRoute.user.user;


afterAll(async () => {
  await new Promise<void>(resolve => setTimeout(() => resolve(), 500));
});

describe('Testing Users', () => {

  describe('[POST] /users', () => {
    it('response Create user', async () => {

      // Create mock user data
      const userData: CreateUserDto = {
        email: 'test@email.com',
        password: 'q1w2e3r4!',
      };

      const hashedPassword = await bcrypt.hash(userData.password, 10); 

      // Not sure how to mock the `findOne` and `create` methods in the service
      users.createUser = jest.fn().mockReturnValue({
        id: 1,
        email: userData.email,
        password: hashedPassword,
      }); 

      (Sequelize as any).authenticate = jest.fn();
      
      const result = await request(app.getServer())
        .post(`${usersRoute.path}`)
        .send(userData); 


      expect(result.status).toEqual(201);
      expect(result.body.data.email).toEqual(userData.email); 
      expect(result.body.data.password).toEqual(hashedPassword); 
    });

    it('response Create existing user - exception', async () => {
      const userData: CreateUserDto = {
        email: 'test@email.com',
        password: 'q1w2e3r4!',
      };
    
      users.createUser = jest.fn().mockRejectedValue(
        new HttpException(409, `This email ${userData.email} already exists`) 
      ); 

      (Sequelize as any).authenticate = jest.fn();
      
      const result = await request(app.getServer())
        .post(`${usersRoute.path}`)
        .send(userData); 

      expect(result.status).toEqual(409);
      expect(result.body.message).toEqual(`This email ${userData.email} already exists`); 
    });
  });

  describe('[GET] /users', () => {
    it('response findAll users', async () => {

      // const users = usersRoute.usersController.userService.users;
      // Create mock data array of users first
      const mockUsers = [
        {
          id: 1,
          email: 'a@email.com',
          password: await bcrypt.hash('q1w2e3r4!', 10),
        },
        {
          id: 2,
          email: 'b@email.com',
          password: await bcrypt.hash('a1s2d3f4!', 10),
        },
        {
          id: 3,
          email: 'c@email.com',
          password: await bcrypt.hash('z1x2c3v4!', 10),
        },
      ]

      // Mock the findAllUser method
      users.findAllUser = jest.fn().mockReturnValue(mockUsers);
      (Sequelize as any).authenticate = jest.fn(); 

      // Call the API for a get request
      const result = await request(app.getServer()).get(`${usersRoute.path}`); 
      
      expect(result.status).toEqual(200);
      expect(result.body.data.length).toEqual(3);
      expect(result.body.data[0].id).toEqual(mockUsers[0].id); 
      expect(result.body.data[0].email).toEqual(mockUsers[0].email); 
      expect(result.body.data[0].password).toEqual(mockUsers[0].password); 
      expect(result.body.data[1].id).toEqual(mockUsers[1].id); 
      expect(result.body.data[1].email).toEqual(mockUsers[1].email); 
      expect(result.body.data[1].password).toEqual(mockUsers[1].password); 
      expect(result.body.data[2].id).toEqual(mockUsers[2].id); 
      expect(result.body.data[2].email).toEqual(mockUsers[2].email); 
      expect(result.body.data[2].password).toEqual(mockUsers[2].password); 

    });
  });

  describe('[GET] /users/:id', () => {
    it('response findOne user', async () => {

      // Mock the user data for a specific user
      const userId = 1;
      const mockUser = {
        id: userId,
        email: 'a@email.com',
        password: await bcrypt.hash('q1w2e3r4!', 10),
      };

      // Mock the findUserById method to return the specific user
      users.findUserById = jest.fn().mockReturnValue(mockUser);

      (Sequelize as any).authenticate = jest.fn();

      const app = new App([usersRoute]);
      const result = await request(app.getServer()).get(`${usersRoute.path}/${userId}`);

      // Perform assertions
      expect(result.status).toEqual(200);
      expect(result.body.data.id).toEqual(mockUser.id);
      expect(result.body.data.email).toEqual(mockUser.email);
      expect(result.body.data.password).toEqual(mockUser.password);
    });
  });


  // describe('[GET] /users/:id', () => {
  //   it('response findOne user', async () => {
  //     const userId = 1;

  //     const usersRoute = new UserRoute();
  //     const users = usersRoute.usersController.userService.users;

  //     users.findByPk = jest.fn().mockReturnValue({
  //       id: 1,
  //       email: 'a@email.com',
  //       password: await bcrypt.hash('q1w2e3r4!', 10),
  //     });

  //     (Sequelize as any).authenticate = jest.fn();
  //     const app = new App([usersRoute]);
  //     return request(app.getServer()).get(`${usersRoute.path}/${userId}`).expect(200);
  //   });
  // });


  // describe('[PUT] /users/:id', () => {
  //   it('response Update user', async () => {
  //     const userId = 1;
  //     const userData: CreateUserDto = {
  //       email: 'test@email.com',
  //       password: '1q2w3e4r!',
  //     };

  //     const usersRoute = new UserRoute();
  //     const users = usersRoute.usersController.userService.users;

  //     users.findByPk = jest.fn().mockReturnValue({
  //       id: userId,
  //       email: userData.email,
  //       password: await bcrypt.hash(userData.password, 10),
  //     });
  //     users.update = jest.fn().mockReturnValue([1]);
  //     users.findByPk = jest.fn().mockReturnValue({
  //       id: userId,
  //       email: userData.email,
  //       password: await bcrypt.hash(userData.password, 10),
  //     });

  //     (Sequelize as any).authenticate = jest.fn();
  //     const app = new App([usersRoute]);
  //     return request(app.getServer()).put(`${usersRoute.path}/${userId}`).send(userData).expect(200);
  //   });
  // });

  describe('[DELETE] /users/:id', () => {
    it('response Delete user', async () => {
      const userId = 1;

      const mockUser = {
        id: userId,
        email: 'a@email.com',
        password: await bcrypt.hash('q1w2e3r4!', 10),
      }

      // Not sure how to mock the `findByPk` method in the service
      users.deleteUser = jest.fn().mockReturnValue(mockUser);

      (Sequelize as any).authenticate = jest.fn(); 
      
      const result = await request(app.getServer())
        .delete(`${usersRoute.path}/${userId}`)

      expect(result.status).toEqual(200);
      expect(result.body.data.id).toEqual(mockUser.id);
      expect(result.body.data.email).toEqual(mockUser.email);
      expect(result.body.data.password).toEqual(mockUser.password);
    });

    it('response Delete nonexistant user - exception', async () => {
      const userId = 1;

      const mockUser = {
        id: userId,
        email: 'a@email.com',
        password: await bcrypt.hash('q1w2e3r4!', 10),
      }

      // Not sure how to mock the `findByPk` method in the service
      users.deleteUser = jest.fn().mockRejectedValue(new HttpException(409,  "User doesn't exist"));

      (Sequelize as any).authenticate = jest.fn(); 
      
      const result = await request(app.getServer())
        .delete(`${usersRoute.path}/${userId}`)

      expect(result.status).toEqual(409);
      expect(result.body.message).toEqual("User doesn't exist"); 
  
    });

  });

  describe('[PUT] /users/:id', () => {
    it('response Update user password', async () => {
      // Create mock user data
      const userData: UpdateUserDto = {
        password: 'new_password',
      };
  
      const hashedPassword = await bcrypt.hash(userData.password, 10); 
  
      // Mock the `updateUser` method in the service
      users.updateUser = jest.fn().mockReturnValue({
        id: 1,
        password: hashedPassword,
      }); 
  
      (Sequelize as any).authenticate = jest.fn();
      
      const result = await request(app.getServer())
        .put(`${usersRoute.path}/1`)
        .send(userData); 
  
      expect(result.status).toEqual(200);
      expect(result.body.data.password).toEqual(hashedPassword); 
    });
  });

});
