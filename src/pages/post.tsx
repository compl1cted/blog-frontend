import { IPost } from "../models/interfaces/IPost";
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { Context } from "..";
import { ThemeProvider } from "styled-components";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme } from "@mui/material";
import { CommentList } from "../components/lists/comment.list";
import { IComment } from "../models/interfaces/IComment";
import { toJS } from "mobx";
import { GetCurrentTime } from "../utils/time";
import { IUser } from "../models/interfaces/IUser";

const theme = createTheme();

export const PostPage = () => {
    const { id } = useParams();
    const { postStore, commentStore, authStore } = useContext(Context);
    const [post, setPost] = useState<IPost>({} as IPost);
    const [author, setAuthor] = useState<IUser>({} as IUser);
    const [comments, setComments] = useState<IComment[]>([] as IComment[]);
    const [newComment, setNewComment] = useState<IComment>({ User: toJS(authStore.user) } as IComment);
    const [updateComments, setUpdateComments] = useState<boolean>(false);

    const LoadComments = async () => {
        const currentComments = await commentStore.GetCommentsByPostId(Number(id));
        setComments(currentComments);
    }

    const Submit = async () => {
        if (newComment.Text === "") return;
        newComment.Date = GetCurrentTime();
        commentStore.AddComment(newComment);
        setUpdateComments(true)
    }

    useEffect(() => {
        (async () => {
            const currentPost = await postStore.GetPost(Number(id));
            if (!currentPost) return;
            setPost(currentPost);
            setAuthor(currentPost.User)
            setNewComment({ ...newComment, Post: currentPost })
            await LoadComments();
            setUpdateComments(false)
        })();
    }, [updateComments]);

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="md">
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
                    <Box component="form" noValidate sx={{ mt: 1 }}>
                        <Typography component="h1" variant="h3" align="center">
                            {post.Title}
                        </Typography>
                        <Typography component="h1" variant="h5" align="center" marginTop={"25px"}>
                            {post.Content}
                        </Typography>
                        <Typography component="h1" variant="h6" align="center" marginTop={"25px"}>
                            Author: {author.Username}
                        </Typography>
                    </Box>
                    <Box marginTop={"25px"}>
                        <Typography component="h1" variant="h4" align="center">
                            Comments
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
        </ThemeProvider >
    );
}