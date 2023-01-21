import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import { Grid } from "@mui/material"
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
import { IPost } from '../models/IPosts';
import { toJS } from 'mobx';

const theme = createTheme();

const AddPost = () => {
    const [title, setTitle] = useState<string>();
    const [content, setContent] = useState<string>();
    const [output, setOutput] = useState<string>();
    const { store } = React.useContext(Context);

    const Submit = async () => {
        const user = toJS(store.user);
        console.log(user);
        if (!title || !content) {
            return setOutput("Title and content can't be empty!");
        }
        const dateObj = new Date();
        const date = dateObj.getDate() + "/"
            + (dateObj.getMonth() + 1) + "/"
            + dateObj.getFullYear() + " @ "
            + dateObj.getHours() + ":"
            + dateObj.getMinutes() + ":"
            + dateObj.getSeconds();
        const post: IPost = { title, content, date, user };
        const response = await store.AddPost(post);
        setOutput(response);
        console.log(response);
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
                            onChange={e => setTitle(e.target.value)}
                            value={title || ''}
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Title"
                            name="title"
                            autoFocus
                        />
                        <TextField
                            multiline={true}
                            rows={3}
                            onChange={e => setContent(e.target.value)}
                            value={content || ''}
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

export default observer(AddPost);