import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class User extends Document {
  @Prop()
  name: string;

  @Prop()
  age: number;

  @Prop()
  group: string;

  @Prop([Number])
  grades: number[];
}

export const UserSchema = SchemaFactory.createForClass(User);
