import { makeAutoObservable, toJS } from "mobx";
import { CreateUserDto, SignInDto, UserDto } from "../models/user";
import { AuthService } from "../services/auth.service";
import { HttpMethods, request } from "../utils/request";

export class AuthStore {
    user = {} as UserDto;
    isAuth = false;
    isLoading = false;

    constructor() {
        makeAutoObservable(this, {}, { deep: true });
    }

    SetUser(user: UserDto) {
        this.user = user;
    }

    GetUser = () => {
        return toJS(this.user);
    }

    SetAuth(isAuth: boolean) {
        this.isAuth = isAuth;
    }

    SetLoading(isLoading: boolean) {
        this.isLoading = isLoading;
    }

    async SignIn(signIn: SignInDto): Promise<boolean> {
        try {
            const data = await AuthService.signIn(signIn);
            if (!data.accessToken) {
                this.SetAuth(false);
                return false;
            }
            localStorage.setItem("token", data.accessToken);
            this.SetAuth(true);
            this.SetUser(data.user);
            return true;
        }
        catch (error) {
            console.error(error);
            return false;
        }
    }

    async SignUp(createUser: CreateUserDto): Promise<unknown> {
        try {
            const data = await AuthService.signUp(createUser);
            localStorage.setItem("token", data.accessToken);
            this.SetAuth(true);
            this.SetUser(data.user);
        }
        catch (error) {
            console.error(error);
            return error;
        }
    }

    async Logout() {
        try {
            await AuthService.logout();
            localStorage.removeItem("token");
            this.SetAuth(false);
            this.SetUser({} as UserDto);
        }
        catch (error) {
            console.error(error);
        }
    }

    async CheckAuth() {
        this.SetLoading(true);
        try {
            const data = await request("auth/refresh", HttpMethods.GET);
            localStorage.setItem("token", data.accessToken);
            this.SetAuth(true);
            this.SetUser(data.user);
        } catch (error) {
            console.error(error);
        } finally {
            this.SetLoading(false);
        }
    }
}