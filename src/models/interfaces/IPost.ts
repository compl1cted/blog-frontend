import { IUser } from "./IUser";

export interface IPost {
    Id?: number;
    Title: string;
    Content: string;
    Date: string;
    User: IUser;
}