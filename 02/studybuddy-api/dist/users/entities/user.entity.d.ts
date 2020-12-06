import { Document } from 'mongoose';
export declare class User extends Document {
    name: string;
    age: number;
    group: string;
    grades: number[];
}
export declare const UserSchema: import("mongoose").Schema<any>;
