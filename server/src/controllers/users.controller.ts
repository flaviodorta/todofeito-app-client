import bcrypt from 'bcrypt';
import { randomUUID as uuid } from 'crypto';
import { Request, Response } from 'express';
import { userModel } from '../models/user.model';

class UserController {
  private static instance: UserController | null;

  public static getInstance(): UserController {
    if (!UserController.instance) {
      UserController.instance = new UserController();
    }
    return UserController.instance;
  }

  async getUser(req: Request, res: Response) {
    const { userId } = req.body;

    if (!userId) {
      return res.json({ error: 'Empty user id' });
    }

    try {
      const user = await userModel.findById({ userId });
      if (!user) {
        return res.json({ user });
      } else {
        return res.json({ error: 'User not found' });
      }
    } catch (err) {
      console.log(err);
    }
  }

  async createUser(req: Request, res: Response) {
    const { email, password } = req.body;
    console.log(req.body);
    if (!email || !password) {
      return res.json({ error: 'All fields must be filled' });
    }
    console.log(password);

    const searchUserByEmail = await userModel.findOne({ email });

    if (searchUserByEmail) {
      return res.json({ error: 'User already exist' });
    }

    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);
    const newUser = new userModel({
      userId: uuid(),
      email: email,
      password: hashedPassword,
    });

    try {
      const saveUser = await newUser.save();
      if (saveUser) {
        return res.json({ success: 'User created successfully' });
      }
    } catch (err) {
      return res.json({ error: err });
    }
  }
}

export const userController = UserController.getInstance();
