import { IUser } from "../IUser";

export interface AuthResponse {
    userData: {
        AccessToken: string;
        RefreshToken: string;
        User: IUser;
    }
}