import { useContext, useEffect, useState, useCallback } from "react";
import { CommentSectionProps } from "./comment.section.props";
import { Context } from "../../../main";
import { Box, Button, TextField } from "@mui/material";
import { CommentList } from "../commentList/comment.list";
import { ICreateComment } from "../../../models/comment";

export const CommentSection = (props: CommentSectionProps) => {
    const { postId } = props;
    const { commentStore } = useContext(Context);
    const [newComment, setNewComment] = useState<ICreateComment>({} as ICreateComment);

    const Submit = useCallback(async () => {
        if (!newComment.text) return;
        commentStore.AddComment(newComment);
    }, []);

    useEffect(() => {
        
    }, [Submit]);

    return (
        <Box marginTop={"25px"}>

                    <TextField
                        onChange={e => setNewComment({ ...newComment, text: e.target.value })}
                        value={newComment.text || ''}
                        margin="normal"
                        required
                        fullWidth
                        label="Comment"
                        autoFocus
                    />
                    <Button
                        onClick={Submit}
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Comment
                    </Button>
                    <CommentList postId={postId}></CommentList>
            </Box>
    );
}