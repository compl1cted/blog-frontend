import { useContext, useState } from 'react';
import { Context } from '../main';
import { Link } from "react-router-dom";
import { observer } from 'mobx-react-lite';
import { Typography, Container, TextField, Avatar, Button, Box } from "@mui/material";
import { LockOutlined } from '@mui/icons-material';
import { Copyright } from '../components/copyright';
import { SignInDto } from '../models/user';

export const SignIn = observer(() => {
    const [signIn, setSignIn] = useState<SignInDto>({} as SignInDto);
    const [output, setOutput] = useState<string>();
    const { authStore } = useContext(Context);

    const Submit = async () => {
        if (!signIn.username_or_email || !signIn.password) return;
        const result = await authStore.SignIn(signIn);
        const response = result ? "Signed In" : "Invalid credentials!";
        setOutput(response);
    };

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
                <Avatar sx={{ m: 1, bgcolor: "primary.main"}}>
                    <LockOutlined />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <Typography color='error'>{output || ''}</Typography>
                <Box component="form" onSubmit={Submit} noValidate sx={{ mt: 1 }}>
                    <TextField
                        onChange={e => setSignIn({ ...signIn, username_or_email: e.target.value})}
                        value={signIn.username_or_email || ''}
                        margin="normal"
                        required
                        fullWidth
                        label="Username Or Email Address"
                        autoFocus
                        autoComplete="on"
                    />
                    <TextField
                        onChange={e => setSignIn({ ...signIn, password: e.target.value})}
                        value={signIn.password || ''}
                        margin="normal"
                        required
                        fullWidth
                        label="Password"
                        type="password"
                        autoComplete="on"
                    />
                    <Button
                        onClick={Submit}
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Sign In
                    </Button>
                    <Link to="/sign_up">
                        <Button variant='outlined' fullWidth  sx={{ mt: 2, mb: 2 }}>
                            Don't have an account? Sign Up
                        </Button>
                    </Link>
                </Box>
            </Box>
            <Copyright sx={{ mt: 2 }} />
        </Container>
    );
}
)