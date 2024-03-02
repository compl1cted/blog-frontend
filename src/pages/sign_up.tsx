import { useState, useContext } from "react";
import { Context } from '../main';
import { Link } from "react-router-dom"
import { observer } from 'mobx-react-lite';
import { CreateUserDto } from "../models/user";
import { LockOutlined } from '@mui/icons-material';
import { Typography, Container, TextField, Avatar, Button, Box, Grid } from "@mui/material";
import { Copyright } from "../components/copyright";

export const SignUp = observer(() => {
    const [user, setUser] = useState<CreateUserDto>({} as CreateUserDto);
    const [output, setOutput] = useState<string>();
    const { authStore } = useContext(Context);

    const Submit = async () => {
        if (!user.username || !user.email || !user.password) return;
        const response = await authStore.SignUp(user);
        setOutput(`${response}`);
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
                <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
                    <LockOutlined />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>
                <Typography>{output || ''}</Typography>
                <Box component="form" sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                onChange={e => setUser({...user, username: e.target.value})}
                                value={user.username || ''}
                                required
                                fullWidth
                                label="Username"
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                onChange={e => setUser({...user, email: e.target.value})}
                                value={user.email || ''}
                                required
                                fullWidth
                                label="Email Address"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                onChange={e => setUser({...user, password: e.target.value})}
                                value={user.password || ''}
                                required
                                fullWidth
                                label="Password"
                                type="password"
                            />
                        </Grid>
                    </Grid>
                    <Button
                        onClick={Submit}
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Sign Up
                    </Button>
                    <Link to="/sign_in">
                        <Button variant='outlined' fullWidth  sx={{ mt: 2, mb: 2 }}>
                        Already have an account? Sign in
                        </Button>
                    </Link>
                </Box>
            </Box>
            <Copyright sx={{ mt: 2 }} />
        </Container>
    );
}
);