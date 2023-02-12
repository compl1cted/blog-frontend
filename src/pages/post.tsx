import { IPost } from "../models/interfaces/IPost";
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { Context } from "..";
import { ThemeProvider } from "styled-components";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme } from "@mui/material";
import { CommentList } from "../components/lists/comment.list";
import { IComment } from "../models/interfaces/IComment";
import { toJS } from "mobx";
import { GetCurrentTime } from "../utils/time";

const theme = createTheme();

export const PostPage = () => {
    const { id } = useParams();
    const { postStore, commentStore, authStore } = useContext(Context);
    const [post, setPost] = useState<IPost>({} as IPost);
    const [comments, setComments] = useState<IComment[]>([] as IComment[]);
    const [newComment, setNewComment] = useState<IComment>({ User: toJS(authStore.user) } as IComment);

    useEffect(() => {
        (async () => {
            const currentPost = await postStore.GetPost(Number(id));
            if (!currentPost) return;
            setPost(currentPost);
            setNewComment({ ...newComment, Post: currentPost })

            if (!currentPost.Id) return;
            const currentComments = await commentStore.GetCommentsByPostId(currentPost.Id);
            console.log(currentComments);
            // if (!currentComments) return;
            setComments(currentComments);
        })();
    }, []);

    const Submit = async () => {
        if (newComment.Text === "") return;
        newComment.Date = GetCurrentTime();
        commentStore.AddComment(newComment);
    }

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <NewspaperIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Post
                    </Typography>
                    <Box component="form" noValidate sx={{ mt: 1 }}>
                        <Typography component="h1" variant="h4" align="center">
                            {post.Title}
                        </Typography>
                        <Typography component="h1" variant="h5" align="center">
                            {post.Content}
                        </Typography>

                        <TextField
                            onChange={e => setNewComment({ ...newComment, Text: e.target.value })}
                            value={newComment.Text || ''}
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Comment"
                            name="comment"
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
                    </Box>
                </Box>
            </Container>
            <CommentList comments={comments}></CommentList>
        </ThemeProvider>
    );
}