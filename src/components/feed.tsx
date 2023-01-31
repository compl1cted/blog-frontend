import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { IPost } from '../models/IPosts';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import AvatarIcon from "@mui/icons-material/Person2"
import Typography from '@mui/material/Typography';
import { PostService } from '../services/post.service';

export default function Feed() {
    const [posts, setPosts] = React.useState<IPost[]>([]);

    // React.useEffect(() => {
    //     const GetUsers = async () => {
    //         const response = await PostService.GetPosts();
    //         if (response.data === undefined) {
    //             return;
    //         }
    //         setPosts(response.data);
    //     }
    //     GetUsers()
    //         .catch(console.error);
    //     console.log(posts);
    // });

    return (
        <List>
            {posts.map(({ title, content, user }, index) => (
                <ListItem alignItems="center">
                    <ListItemAvatar>
                        <AvatarIcon />
                    </ListItemAvatar>
                    <ListItemText
                        primary={index + title}
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