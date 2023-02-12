import { makeAutoObservable, toJS } from "mobx";
import axios from "axios";
import { IUser } from "../models/interfaces/IUser";
import { AuthService } from "../services/auth.service";
import { AuthResponse } from "../models/response/auth.response";

export class AuthStore {
    user = {} as IUser;
    isAuth = false;
    isLoading = false;

    constructor() {
        makeAutoObservable(this, {}, { deep: true });
    }

    SetUser(user: IUser) {
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

    SignIn = async (username_or_email: string, password: string) => {
        try {
            const response = await AuthService.SignIn(username_or_email, password);
            const data = response.data;
            localStorage.setItem("token", data.AccessToken);
            this.SetAuth(true);
            this.SetUser(data.User);
            return "Signed In";
        }
        catch (error) {
            console.error(error);
            return `Invalid user data!`
        }
    }

    async SignUp(username: string, email: string, password: string) {
        try {
            const response = await AuthService.SignUp(username, email, password);
            const data = response.data;
            localStorage.setItem("token", data.AccessToken);
            this.SetAuth(true);
            this.SetUser(data.User);
            return "Signed Up";
        }
        catch (error) {
            console.error(error);
            return `Invalid user data!`
        }
    }

    Logout = async () => {
        try {
            await AuthService.Logout();
            localStorage.removeItem("token");
            this.SetAuth(false);
            this.SetUser({} as IUser);
        }
        catch (error) {
            console.error(error);
        }
    }

    async CheckAuth() {
        this.SetLoading(true);
        try {
            const response = await axios.get<AuthResponse>("http://localhost:9001/api/auth/refresh", { withCredentials: true });
            localStorage.setItem("token", response.data.AccessToken);
            this.SetAuth(true);
            this.SetUser(response.data.User);
        } catch (error) {
            console.error(error);
        } finally {
            this.SetLoading(false);
        }
    }
}