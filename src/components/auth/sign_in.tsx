import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from "react";
import { FormLabel } from '@mui/material';
import { Context } from '../../index';
import { observer } from 'mobx-react-lite';

function Copyright(props: any) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                OOP Practice:)
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const theme = createTheme();

const SignIn = () => {
    const [username_or_email, setUsernameOrEmail] = useState<string>();
    const [password, setPassword] = useState<string>();
    const [output, setOutput] = useState<string>();
    const { store } = React.useContext(Context);

    const Submit = async () => {
        if (!username_or_email || !password) return;
        const response = await store.SignIn(username_or_email, password);
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
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <FormLabel>{output || ''}</FormLabel>
                    <Box component="form" onSubmit={Submit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            onChange={e => setUsernameOrEmail(e.target.value)}
                            value={username_or_email || ''}
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Username Or Email Address"
                            name="username_or_email"
                            autoFocus
                        />
                        <TextField
                            onChange={e => setPassword(e.target.value)}
                            value={password || ''}
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                        />
                        <Button
                            onClick={Submit}
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item>
                                <Link href="/sign_up" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
        </ThemeProvider>
    );
}

export default observer(SignIn);