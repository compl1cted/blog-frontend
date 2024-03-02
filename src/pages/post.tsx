import { useContext, useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../main";
import { PostDto } from "../models/post";
import { Container, Avatar, Box } from "@mui/material";
import { Newspaper } from '@mui/icons-material';
import { CommentSection } from "../components/comment/commentSection/comment.section";
import { PostCard } from "../components/posts/postCard/post.card.tsx"

export const PostPage = () => {
    const { id } = useParams();
    const { postStore } = useContext(Context);
    const [post, setPost] = useState<PostDto>({} as PostDto);

    const loadPostData = useCallback(async () => {
        const currentPost = await postStore.GetPost(Number(id));
        if (!currentPost) {
            return;
        }
        setPost(currentPost);
    }, []);

    useEffect(() => {
        loadPostData().catch(console.error);
    }, []);

    return (
        <Container component="main" maxWidth="md">
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
                    <Newspaper />
                </Avatar>

                <PostCard post={post}></PostCard>
                <CommentSection postId={Number(id)}></CommentSection>
            </Box>
        </Container>
    );
}