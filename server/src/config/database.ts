import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const DATABASE_URL = process.env.DATABASE_URL as string;
const money = '\u{1F4B8} \u{1F4B8} \u{1F4B8}';
const fail = '\u{1F625} \u{1F625} \u{1F625}';

export const connectDB = async () => {
  try {
    mongoose.connect(DATABASE_URL);
    console.log(`${money} Connected with Database Successfully!`);
  } catch {
    console.log(`${fail} Connect with Database Failed!`);
  }
};
