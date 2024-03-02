import { makeAutoObservable } from "mobx";
import { UserService } from "../services/user.service";

export class UserStore {
    constructor() {
        makeAutoObservable(this);
    }

    async GetUser(id: number) {
        try {
            return await UserService.GetUser(id);
        }
        catch (error) {
            console.error(error);
        }
    }

    async GetUsers() {
        try {
            return await UserService.GetUsers();
        }
        catch (error) {
            console.error(error);
        }
    }
}