import { useContext } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import PostAdd from '@mui/icons-material/PostAdd';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from "react";
import { FormLabel } from '@mui/material';
import { observer } from 'mobx-react-lite';
import { Context } from '..';
import { IPost } from '../models/interfaces/IPost';
import { toJS } from 'mobx';
import { GetCurrentTime } from '../utils/time';

const theme = createTheme();

export const AddPost = observer(() => {
    const [post, setPost] = useState<IPost>({} as IPost);
    const [output, setOutput] = useState<string>();
    const { postStore, authStore } = useContext(Context);

    const Submit = async () => {
        const user = toJS(authStore.user);
        const date = GetCurrentTime();
        setPost({ ...post, User: user, Date: date } as IPost);
        const response = await postStore.AddPost(post);
        setOutput(response);
    };

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
                        <PostAdd />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Add a post
                    </Typography>
                    <FormLabel>{output || ''}</FormLabel>
                    <Box component="form" onSubmit={Submit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            onChange={e => setPost({ ...post, Title: e.target.value } as IPost)}
                            value={post.Title || ''}
                            margin="normal"
                            required
                            fullWidth
                            id="title"
                            label="Title"
                            name="title"
                            autoFocus
                        />
                        <TextField
                            multiline={true}
                            rows={3}
                            onChange={e => setPost({ ...post, Content: e.target.value } as IPost)}
                            value={post.Content || ''}
                            margin="normal"
                            required
                            fullWidth
                            name="content"
                            label="Content"
                            id="content"
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
        </ThemeProvider>
    );
}
);