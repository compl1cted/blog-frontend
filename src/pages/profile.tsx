import { useContext, useEffect, useState } from "react";
import { Context } from "../main";
import { observer } from "mobx-react-lite";
import { UserDto } from "../models/user";
import { Avatar, Box, Button, Typography, Container } from "@mui/material";
import { Person } from '@mui/icons-material';

export const Profile = observer(() => {
    const { authStore } = useContext(Context);
    const [user, setUser] = useState<UserDto>({} as UserDto);

    useEffect(() => {
        setUser(authStore.GetUser());
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
                <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
                    <Person />
                </Avatar>
                <Box component="form" noValidate sx={{ mt: 1 }} textAlign="center">
                    <Typography component="h3" variant="h3">
                        {user.username}
                    </Typography>
                    <Typography variant="h6" align="left">
                        Email: {user.email}
                    </Typography>
                    <Typography variant="h6" align="left">
                        Account status: {user.isActivated ? "Account activated!" : "Activate your account!"}
                    </Typography>
                    <Button
                        onClick={async () => {}}
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        color="primary"
                    >
                        Change password
                    </Button>

                    <Button
                        onClick={async () => await authStore.Logout()}
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        color="error"
                    >
                        Sign out
                    </Button>
                </Box>
            </Box>
        </Container>
    );
});