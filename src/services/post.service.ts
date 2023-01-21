import $api from "../interceptors/interceptors";
import { AxiosResponse } from "axios"
import { IPost } from "../models/IPosts";

export class PostService {
    static async AddPost(newPost: IPost): Promise<AxiosResponse<IPost>> {
        return $api.post<IPost>('/api/posts/', { post: newPost });
    }
    static async GetPost(id: number): Promise<AxiosResponse<IPost>> {
        return $api.get<IPost>(`/api/posts/${id}`);
    }
    static async GetPosts(): Promise<AxiosResponse<IPost[]>> {
        return $api.get<IPost[]>("/api/posts/");
    }
}