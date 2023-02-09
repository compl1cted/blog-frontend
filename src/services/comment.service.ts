import { $api } from "../interceptors/interceptors";
import { AxiosResponse } from "axios";
import { IComment } from "../models/interfaces/IComment";

export class CommentService {
    static async AddComment(newPost: IComment): Promise<AxiosResponse<IComment>> {
        return $api.post<IComment>('/api/posts/', { post: newPost });
    }
    static async GetComment(id: number): Promise<AxiosResponse<IComment>> {
        return $api.get<IComment>(`/api/posts/${id}`);
    }
    static async GetCommentss(): Promise<AxiosResponse<IComment[]>> {
        return $api.get<IComment[]>("/api/posts/");
    }
}