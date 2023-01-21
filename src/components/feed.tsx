import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { IPost } from '../models/IPosts';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import AvatarIcon from "@mui/icons-material/Person2"
import Typography from '@mui/material/Typography';
import { Context } from '..';

export default function Feed() {
    const [posts, setPosts] = React.useState<IPost[]>([]);
    const { store } = React.useContext(Context);
    const RefreshPosts = async () => {
        const data = await store.GetPosts();
        if (data === undefined) {
            return setPosts([]);
        }
        setPosts(data);
    };
    RefreshPosts();
    return (
        <List>
            {posts.map(({ title, content, user }, index) => (
                <ListItem alignItems="center">
                    <ListItemAvatar>
                        <AvatarIcon />
                    </ListItemAvatar>
                    <ListItemText
                        primary={title}
                        secondary={
                            <React.Fragment>
                                <Typography
                                    sx={{ display: 'inline' }}
                                    component="span"
                                    variant="body2"
                                    color="text.primary"
                                >
                                    {content}
                                </Typography>
                                {/* {user.Username} */}
                            </React.Fragment>
                        }
                    />
                </ListItem>
            ))}
        </List>
    );
}