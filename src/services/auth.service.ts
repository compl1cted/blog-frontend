import { request, HttpMethods } from "../utils/request";
import { AuthResponse } from "../models/auth";
import { CreateUserDto, SignInDto } from "../models/user";

export class AuthService {
    static async signIn(signIn: SignInDto): Promise<AuthResponse> {
        return await request("auth/sign_in", HttpMethods.POST, signIn);
    }

    static async signUp(createUser: CreateUserDto): Promise<AuthResponse> {
        return await request("auth/sign_up", HttpMethods.POST, createUser);
    }

    static async logout(): Promise<void> {
        return await request("auth/logout", HttpMethods.GET)
    }

    static async refresh(): Promise<AuthResponse> {
        return await request("auth/refresh", HttpMethods.GET);
    }
}