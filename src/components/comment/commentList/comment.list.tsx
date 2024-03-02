import { useContext, useEffect, useState, useCallback } from "react";
import { IComment } from "../../../models/comment";
import { Comment } from "../commentCard/comment.card";
import { CommentListProps } from "./comment.list.props";
import { Context } from "../../../main";
import { Box } from "@mui/material";

export const CommentList = (props: CommentListProps) => {
    const { postId } = props;
    const {commentStore} = useContext(Context);
    const [comments, setComments] = useState<IComment[]>([]);

    const loadComments = useCallback(async () => {
        const result = await commentStore.GetCommentsByPostId(postId);
        if (!result) return;
        setComments(result);
    }, []);

    useEffect(() => {
        loadComments().catch(console.error);
    }, []);

    return (
        <Box>
            {comments.map((comment: IComment) => {
                return <Comment key={comment.id} comment={comment}></Comment>
            })}
        </Box>
    );
}