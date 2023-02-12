import SearchIcon from "@mui/icons-material/Search"
import PostIcon from "@mui/icons-material/PostAdd"
import FeedIcon from "@mui/icons-material/Newspaper"
import PersonIcon from "@mui/icons-material/Person"
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom"

export default function Navbar() {
    const [value, setValue] = useState("feed");
    const navigate = useNavigate();
    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ pb: 7 }}>
            <CssBaseline />
            <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
                <BottomNavigation value={value} onChange={handleChange}>
                    <BottomNavigationAction
                        value="feed"
                        label="Feed"
                        icon={<FeedIcon />}
                        onClick={() => navigate("/feed")}
                    />
                    <BottomNavigationAction
                        value="add_post"
                        label="Add Post"
                        icon={< PostIcon />}
                        onClick={() => navigate("/")}
                    />
                    <BottomNavigationAction
                        value="users"
                        label="Users"
                        icon={<SearchIcon />}
                        onClick={() => navigate("/people")}
                    />
                    <BottomNavigationAction
                        value="profile"
                        label="Profile"
                        icon={<PersonIcon />}
                        onClick={() => navigate("/profile")}
                    />
                </BottomNavigation>
            </Paper>
        </Box>
    );
}