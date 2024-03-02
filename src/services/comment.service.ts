import { IComment, ICreateComment } from "../models/comment";
import { HttpMethods, request } from "../utils/request";

export class CommentService {
    static async AddComment(newComment: ICreateComment): Promise<IComment> {
        return await request("comments/", HttpMethods.POST, newComment);
    }

    static async GetComment(id: number): Promise<IComment> {
        return await request(`comments/${id}`, HttpMethods.GET);
    }

    static async GetComments(): Promise<IComment[]> {
        return await request(`comments/`, HttpMethods.GET);
    }

    static async GetCommentsByPostId(id: number): Promise<IComment[]> {
        return await request(`comments/post/${id}`, HttpMethods.GET);
    }
}