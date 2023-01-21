import { IUser } from "./IUser";

export interface IPost {
    id?: number;
    title: string;
    content: string;
    date: string;
    user: IUser;
}