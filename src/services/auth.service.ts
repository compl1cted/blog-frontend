import { $api } from "../interceptors/interceptors";
import { AxiosResponse } from "axios"
import { AuthResponse } from "../models/response/auth.response";

export class AuthService {
    static async SignIn(username_or_email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
        return await $api.post<AuthResponse>("/api/auth/sign_in", { username_or_email, password });
    }

    static async SignUp(username: string, email: string, password: string) {
        return await $api.post<AuthResponse>("/api/auth/sign_up", { username, email, password });
    }

    static async Logout(): Promise<void> {
        await $api.get<AuthResponse>("/api/auth/logout");
    }

    static async Refresh(): Promise<AxiosResponse<AuthResponse>> {
        return await $api.get<AuthResponse>("/api/auth/refresh");
    }
}