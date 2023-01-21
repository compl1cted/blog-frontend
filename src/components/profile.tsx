import { Button } from "@mui/material";
import { useContext } from "react";
import { Context } from "..";

const Profile = () => {
    const { store } = useContext(Context);
    return (
        <Button
            onClick={store.Logout}
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, background: "red" }}
        >
            Sign Out
        </Button>
    );
}

export default Profile;