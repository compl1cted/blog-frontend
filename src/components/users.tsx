import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import AvatarIcon from "@mui/icons-material/Person2"
import Typography from '@mui/material/Typography';
import { useContext, useState } from "react";
import { Context } from "..";
import React from 'react';

export default function Users() {
    const { store } = useContext(Context);
    const [users, setUsers] = useState([]);
    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            <ListItem alignItems="center">
                <ListItemAvatar>
                    <AvatarIcon />
                </ListItemAvatar>
                <ListItemText
                    primary="Ali Connors"
                    secondary={
                        <React.Fragment>
                            <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >

                            </Typography>
                        </React.Fragment>
                    }
                />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <AvatarIcon />
                </ListItemAvatar>
                <ListItemText
                    primary="James L"
                    secondary={
                        <React.Fragment>
                            <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                            </Typography>
                        </React.Fragment>
                    }
                />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <AvatarIcon />
                </ListItemAvatar>
                <ListItemText
                    primary="Sandra Adams"
                    secondary={
                        <React.Fragment>
                            <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                            </Typography>
                        </React.Fragment>
                    }
                />
            </ListItem>
        </List>
    );
}