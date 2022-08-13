import express from 'express';
import { userController } from '../controllers/users.controller';

export const usersRouter = express.Router();

usersRouter.get('/search-user', userController.getUser);
usersRouter.post('/signup', userController.createUser);
