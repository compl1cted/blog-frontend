import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { IPost } from '../../models/interfaces/IPost';
import { useNavigate } from 'react-router-dom';
import PostIcon from "@mui/icons-material/Newspaper"

interface PostProps {
    post: IPost;
}

export const Post = (props: PostProps) => {
    const { Id, Title, Content, Date, User } = props.post;
    const navigate = useNavigate();

    return (
        <Grid item xs={12} md={6}>
            <CardActionArea component="a" onClick={() => navigate(`/posts/${Id}`)}>
                <Card sx={{ display: 'flex', textAlign: "center" }}>
                    <CardContent sx={{ flex: 1 }}>
                        <PostIcon />
                        <Typography component="h2" variant="h5">
                            {Title}
                        </Typography>
                        <Typography variant="subtitle1" paragraph>
                            {Content}
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary">
                            {Date}
                        </Typography>
                        <Typography variant="h6" color="text.primary">
                            {User.Username}
                        </Typography>
                    </CardContent>
                    {/* <CardMedia
                        component="img"
                        sx={{ width: 160, display: { xs: 'none', sm: 'block' } }}
                        image={post.image}
                        alt={post.imageLabel}
                    /> */}
                </Card>
            </CardActionArea>
        </Grid>
    );
}