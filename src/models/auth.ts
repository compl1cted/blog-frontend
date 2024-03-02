import { UserDto } from "./user";

export interface AuthResponse {
    accessToken: string;
    refreshToken: string;
    user: UserDto;
}