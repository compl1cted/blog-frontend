import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, PostAdd, Newspaper, Person } from "@mui/icons-material"
import { BottomNavigation, BottomNavigationAction, Box, Paper } from "@mui/material";

export const Navbar = () => {
    const [value, setValue] = useState("feed");
    const navigate = useNavigate();
    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ pb: 7 }}>
            <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
                <BottomNavigation value={value} onChange={handleChange}>
                    <BottomNavigationAction
                        value="feed"
                        label="Feed"
                        icon={<Newspaper />}
                        onClick={() => navigate("/feed")}
                    />
                    <BottomNavigationAction
                        value="add_post"
                        label="Add Post"
                        icon={< PostAdd />}
                        onClick={() => navigate("/")}
                    />
                    <BottomNavigationAction
                        value="users"
                        label="Users"
                        icon={<Search />}
                        onClick={() => navigate("/people")}
                    />
                    <BottomNavigationAction
                        value="profile"
                        label="Profile"
                        icon={<Person />}
                        onClick={() => navigate("/profile")}
                    />
                </BottomNavigation>
            </Paper>
        </Box>
    );
}