import { PostDto } from "../models/post";
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { Context } from "../main";
import { UserDto } from "../models/user";
import { PostList } from "../components/posts/postList/post.list";
import { Typography, Container, Avatar, Box } from "@mui/material";
import { Person } from '@mui/icons-material';

export const UserPage = () => {
    const { id } = useParams();
    const [user, setUser] = useState<UserDto>({} as UserDto);
    const [posts, setPosts] = useState<PostDto[]>([] as PostDto[]);
    const { postStore, userStore } = useContext(Context);

    useEffect(() => {
        (async () => {
            const currentUser = await userStore.GetUser(Number(id));
            if (!currentUser) return;
            setUser(currentUser);

            if (!currentUser.id) return;
            const userPosts = await postStore.GetPostsByUserId(currentUser.id);
            if (!userPosts) return;
            setPosts(userPosts);
        })().catch(console.error);
    }, []);

    return (
        <Container component="main" maxWidth="xs">
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <Person />
                </Avatar>
                <Box component="form" noValidate sx={{ mt: 1 }}>
                    <Typography component="h1" variant="h4" align="center">
                        {user.username}
                    </Typography>
                </Box>
            </Box>
            <Typography variant="h4" align="center" mt={5}>Posts</Typography>
            {posts.length === 0 ?
                <Typography component="h1" variant="h4" align="center" marginTop={"25px"}>
                    {"This user doesn't have any posts!"}
                </Typography> :
                <PostList posts={posts}></PostList>}
        </Container>
    );
}