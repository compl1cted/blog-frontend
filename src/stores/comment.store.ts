import { IComment } from "../models/interfaces/IComment";
import { CommentService } from "../services/comment.service";

export class CommentStore {
    async AddComment(comment: IComment) {
        const response = await CommentService.AddComment(comment);
        return response.data;
    }
    async GetComments() {
        const response = await CommentService.GetComments();
        return response.data;
    }

    async GetCommentsByPostId(id: number) {
        const response = await CommentService.GetCommentsByPostId(id);
        return response.data;
    }
}