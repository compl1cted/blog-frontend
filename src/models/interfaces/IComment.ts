import { IPost } from "./IPost";
import { IUser } from "./IUser";

export interface IComment {
    Id?: number;
    Text: string;
    Date: string;
    User: IUser;
    Post: IPost;
}