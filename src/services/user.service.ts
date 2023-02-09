import { $api } from "../interceptors/interceptors";
import { AxiosResponse } from "axios"
import { IUser } from "../models/interfaces/IUser";

export class UserService {
    static async GetUser(id: number): Promise<AxiosResponse<IUser>> {
        return $api.get<IUser>(`/api/users/${id}`);
    }
    static async GetUsers(): Promise<AxiosResponse<IUser[]>> {
        return $api.get<IUser[]>("/api/users/");
    }
}