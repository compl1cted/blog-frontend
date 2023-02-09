import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { IPost } from '../../models/interfaces/IPost';

interface PostProps {
    post: IPost;
}

export const Post = (props: PostProps) => {
    const { Title, Content, Date, User } = props.post;

    return (
        <Grid item xs={12} md={6}>
            <CardActionArea component="a" href="#">
                <Card sx={{ display: 'flex', textAlign: "center" }}>
                    <CardContent sx={{ flex: 1 }}>
                        <Typography component="h2" variant="h5">
                            {Title}
                        </Typography>
                        <Typography variant="subtitle1" paragraph>
                            {Content}
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary">
                            {Date}
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