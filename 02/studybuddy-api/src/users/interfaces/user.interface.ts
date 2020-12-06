import { Document } from 'mongoose';

export interface User extends Document {
  name: string;
  age: number;
  group: string;
  grades: number[];
}
