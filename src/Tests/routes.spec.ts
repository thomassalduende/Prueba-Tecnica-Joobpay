import request from 'supertest'
import app from '../app'
import { sign } from 'jsonwebtoken'; // Importa la función sign de jsonwebtoken
import { Users } from '../Entities/Users';

describe('UserController', () => {
    it('should return status 200', async () => {
        const response = await request(app).get('/users');
        expect(response.status).toBe(200);
    });
});

// jest.mock('jsonwebtoken', () => ({
//     sign: jest.fn(),
// }));

// describe('UserController', () => {
//     afterEach(() => {
//         jest.clearAllMocks();
//     });

//     describe('getUsers', () => {
//         it('should return status 200', async () => {
//             const response = await request(app).get('/users');
//             expect(response.status).toBe(200);
//         });
//     });

//     describe('getUserId', () => {
//         it('should return status 200', async () => {
//             const userId = 1; // Suponiendo que 1 es un ID válido
//             const response = await request(app).get(`/user/${userId}`);
//             expect(response.status).toBe(200);
//         });
//     });

//     describe('getUserEmail', () => {
//         it('should return status 200', async () => {
//             const userEmail = 'test@example.com'; // Suponiendo que test@example.com es un correo válido
//             const response = await request(app).get(`/user/email/${userEmail}`);
//             expect(response.status).toBe(200);
//         });
//     });

//     describe('createUser', () => {
//         it('should return status 201', async () => {
//             const newUser = {
//                 email: 'test@example.com',
//                 name: 'Test User',
//                 phone: '123456789',
//                 address: 'Test Address',
//                 password: 'password'
//             };

//             const response = await request(app)
//                 .post('/user')
//                 .send(newUser);

//             expect(response.status).toBe(201);
//         });
//     });

//     describe('loginUser', () => {
//         it('should return status 200 and access token', async () => {
//             const user = {
//                 id: 1,
//                 email: 'test@example.com',
//                 password: 'password'
//             };

//             (Users.findOne as jest.Mock).mockResolvedValue(user);
//             (sign as jest.Mock).mockReturnValue('fakeAccessToken');

//             const response = await request(app)
//                 .post('/login')
//                 .send({
//                     email: 'test@example.com',
//                     password: 'password'
//                 });

//             expect(response.status).toBe(200);
//             expect(response.body.accessToken).toBe('fakeAccessToken');
//         });

//         it('should return status 401 if user is not found', async () => {
//             (Users.findOne as jest.Mock).mockResolvedValue(null);

//             const response = await request(app)
//                 .post('/login')
//                 .send({
//                     email: 'test@example.com',
//                     password: 'password'
//                 });

//             expect(response.status).toBe(401);
//         });
//     });

//     describe('updateUser', () => {
//         it('should return status 200', async () => {
//             const updatedUser = {
//                 id: 1,
//                 email: 'updated@example.com',
//                 name: 'Updated User',
//                 phone: '987654321',
//                 address: 'Updated Address',
//                 password: 'updated_password'
//             };

//             const response = await request(app)
//                 .patch('/user')
//                 .send(updatedUser);

//             expect(response.status).toBe(200);
//         });
//     });

//     describe('deleteUser', () => {
//         it('should return status 200', async () => {
//             const userId = 1; // Suponiendo que 1 es un ID válido
//             const response = await request(app)
//                 .delete('/user')
//                 .send({ id: userId });

//             expect(response.status).toBe(200);
//         });
//     });
// });
