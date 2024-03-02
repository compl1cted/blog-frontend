import { UserDto } from "../models/user";
import { HttpMethods, request } from "../utils/request";

export class UserService {
    static async GetUser(id: number): Promise<UserDto> {
        return request(`users/${id}`, HttpMethods.GET);
    }
    static async GetUsers(): Promise<UserDto[]> {
        return request("users/", HttpMethods.GET);
    }
}