import { IPost } from "../models/interfaces/IPost";
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { Context } from "..";
import { ThemeProvider } from "styled-components";
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import PersonIcon from '@mui/icons-material/Person';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme } from "@mui/material";
import { toJS } from "mobx";
import { GetCurrentTime } from "../utils/time";
import { IUser } from "../models/interfaces/IUser";
import { PostList } from "../components/lists/post.list";

const theme = createTheme();

export const UserPage = () => {
    const { id } = useParams();
    const [user, setUser] = useState<IUser>({} as IUser);
    const [posts, setPosts] = useState<IPost[]>([] as IPost[]);
    const { postStore, userStore } = useContext(Context);

    useEffect(() => {
        (async () => {
            const currentUser = await userStore.GetUser(Number(id));
            if (!currentUser) return;
            setUser(currentUser);

            if (!currentUser.Id) return;
            const userPosts = await postStore.GetPostsByUserId(currentUser.Id);
            console.log(userPosts);
            if (!userPosts) return;
            setPosts(userPosts);
        })();
    }, []);

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
                        <PersonIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Post
                    </Typography>
                    <Box component="form" noValidate sx={{ mt: 1 }}>
                        <Typography component="h1" variant="h4" align="center">
                            {user.Username}
                        </Typography>
                    </Box>
                </Box>
            </Container>
            <PostList posts={posts}></PostList>
        </ThemeProvider>
    );
}