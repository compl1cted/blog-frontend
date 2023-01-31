import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search"
import PostIcon from "@mui/icons-material/PostAdd"
import ListIcon from "@mui/icons-material/List"
import PersonIcon from "@mui/icons-material/Person"
import React from "react";
import { Link } from "react-router-dom"

export default function Navbar() {
    const [value, setValue] = React.useState(window.location.pathname);

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        <BottomNavigation value={value} onChange={handleChange}>
            <BottomNavigationAction
                value="add_post"
                label="Add Post"
                icon={<Link to="/"><PostIcon /></Link>}
            />
            <BottomNavigationAction
                value="users"
                label="Users"
                icon={<Link to="/users"><SearchIcon /></Link>}
            />
            <BottomNavigationAction
                value="feed"
                label="Feed"
                icon={<Link to="/feed"><ListIcon /></Link>}
            />
            <BottomNavigationAction
                value="profile"
                label="Profile"
                icon={<Link to="/profile"><PersonIcon /> </Link>}
            />
        </BottomNavigation>
    );
}