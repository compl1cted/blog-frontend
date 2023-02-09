import { makeAutoObservable } from "mobx";
import { IUser } from "../models/interfaces/IUser";
import { UserService } from "../services/user.service";

export class UserStore {
    constructor() {
        makeAutoObservable(this);
    }

    async GetUsers() {
        try {
            const response = await UserService.GetUsers();
            return response.data;
        }
        catch (error) {
            console.error(error);
        }
    }
}