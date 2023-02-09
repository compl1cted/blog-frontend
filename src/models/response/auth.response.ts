import { IUser } from "../interfaces/IUser";

export interface AuthResponse {
    AccessToken: string;
    RefreshToken: string;
    User: IUser;
}