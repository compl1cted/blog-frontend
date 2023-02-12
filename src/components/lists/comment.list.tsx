import { IComment } from "../../models/interfaces/IComment";
import { Comment } from "../cards/comment.card";

interface CommentListProps {
    comments: IComment[];
}

export const CommentList = (props: CommentListProps) => {
    const { comments } = props;
    return (
        <div>
            {comments.map((comment: IComment) => {
                return <Comment key={comment.Id} comment={comment}></Comment>
            })}
        </div>
    );
}