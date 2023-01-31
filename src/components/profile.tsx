import { Button, FormLabel } from "@mui/material";
import { toJS } from "mobx";
import { useContext } from "react";
import { Context } from "..";

const Profile = () => {
    const { authStore } = useContext(Context);
    const currentUser = toJS(authStore.user.Username);

    return (
        <>
            <FormLabel>{currentUser}</FormLabel>
            <Button
                onClick={authStore.Logout}
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, background: "red" }}
            >
                Sign Out
            </Button>
        </>
    );
}

export default Profile;