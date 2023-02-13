import { Avatar, Box, Button, createTheme, CssBaseline, FormLabel } from "@mui/material";
import { toJS } from "mobx";
import { observer } from "mobx-react-lite";
import { useContext, useEffect, useState } from "react";
import { Context } from "..";
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { ThemeProvider } from "styled-components";
import PersonIcon from '@mui/icons-material/Person';
import { IUser } from "../models/interfaces/IUser";

const theme = createTheme();

export const Profile = observer(() => {
    const { authStore } = useContext(Context);
    const [user, setUser] = useState<IUser>({} as IUser);

    useEffect(() => {
        setUser(authStore.GetUser());
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
                        Profile
                    </Typography>
                    <Box component="form" noValidate sx={{ mt: 1 }} textAlign="center">
                        <Typography component="h1" variant="h3">
                            {user.Username}
                        </Typography>
                        <Typography component="h1" variant="h5" align="center">
                            {user.Email}
                        </Typography>
                        <Typography component="h1" variant="h5" align="center">
                            Status: {user.IsActivated ? "Account activated!" : "Activate your account!"}
                        </Typography>


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
        </ThemeProvider>
    );
}
);