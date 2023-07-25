import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom"
import { NavbarItems } from "./navbar.items";

export const Navbar = () => {
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
                    {NavbarItems.map((item) => {
                        return <BottomNavigationAction
                            value={item.value}
                            label={item.label}
                            icon={item.icon}
                            onClick={() => navigate(`/${item.value}`)}>
                        </BottomNavigationAction>
                    })}
                </BottomNavigation>
            </Paper>
        </Box>
    );
}