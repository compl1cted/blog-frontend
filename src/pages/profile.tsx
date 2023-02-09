import { Button, FormLabel } from "@mui/material";
import { toJS } from "mobx";
import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { Context } from "..";

export const Profile = observer(() => {
    const { authStore } = useContext(Context);
    const currentUser = toJS(authStore.user.Username);

    return (
        <>
            <FormLabel>{currentUser}</FormLabel>
            <Button
                onClick={() => authStore.Logout()}
                variant="contained"
                sx={{ mt: 3, mb: 2, background: "red" }}
            >
                Sign Out
            </Button>
        </>
    );
}
);