import { IUser } from "../models/IUser";
import { UserService } from "../services/user.service";

export default class UserStore {
    async GetUsers(): Promise<IUser[] | undefined> {
        try {
            const response = await UserService.GetUsers();
            return response.data;
        }
        catch (error) {
            console.error(error);
        }
    }
}