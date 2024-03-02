import { useContext, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '../main';
import { ICreatePost } from '../models/post';
import { toJS } from 'mobx';
import { Typography, Container, TextField, Avatar, Button, Box } from "@mui/material";
import { PostAdd } from '@mui/icons-material';

export const AddPost = observer(() => {
    const [post, setPost] = useState<ICreatePost>({} as ICreatePost);
    const [output, setOutput] = useState<string>();
    const { postStore, authStore } = useContext(Context);

    const Submit = async () => {
        const { id } = toJS(authStore.user);
        const newPost = { ...post, userId: id};
        const response = await postStore.AddPost(newPost);
        setOutput(response);
    };

    return (
        <Container component="main" maxWidth="xs">
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
                    <PostAdd />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Add a post
                </Typography>
                <Typography>{output || ''}</Typography>
                <Box component="form" onSubmit={Submit} noValidate sx={{ mt: 1 }}>
                <TextField
                        onChange={e => setPost({ ...post, title: e.target.value })}
                        value={post.title || ''}
                        margin="normal"
                        required
                        fullWidth
                        label="Title"
                    />
                    <TextField
                        multiline={true}
                        rows={3}
                        onChange={e => setPost({ ...post, content: e.target.value })}
                        value={post.content || ''}
                        margin="normal"
                        required
                        fullWidth
                        label="Content"
                    />
                    <Button
                        onClick={Submit}
                        fullWidth
                        variant="contained"
                        sx={{ mt: 6, mb: 2 }}
                    >
                        Post
                    </Button>
                </Box>
            </Box>
        </Container>
    );
});