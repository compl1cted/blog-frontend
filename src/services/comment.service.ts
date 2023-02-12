import { $api } from "../interceptors/interceptors";
import { AxiosResponse } from "axios";
import { IComment } from "../models/interfaces/IComment";

export class CommentService {
    static async AddComment(newComment: IComment): Promise<AxiosResponse<IComment>> {
        return $api.post<IComment>('/api/comments/', { comment: newComment });
    }

    static async GetComment(id: number): Promise<AxiosResponse<IComment>> {
        return $api.get<IComment>(`/api/comments/${id}`);
    }

    static async GetComments(): Promise<AxiosResponse<IComment[]>> {
        return $api.get<IComment[]>("/api/comments/");
    }

    static async GetCommentsByPostId(id: number): Promise<AxiosResponse<IComment[]>> {
        return $api.get<IComment[]>(`/api/comments/post/${id}`);
    }
}