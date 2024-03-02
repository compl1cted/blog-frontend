import { IComment, ICreateComment } from "../models/comment";
import { CommentService } from "../services/comment.service";

export class CommentStore {
    async AddComment(comment: ICreateComment) {
        return await CommentService.AddComment(comment);
    }
    async GetComments(): Promise<IComment[]> {
        return await CommentService.GetComments();
    }

    async GetCommentsByPostId(id: number): Promise<IComment[]> {
        return await CommentService.GetCommentsByPostId(id);
    }
}