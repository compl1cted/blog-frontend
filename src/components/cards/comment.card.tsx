import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { IComment } from '../../models/interfaces/IComment';
import { useNavigate } from 'react-router-dom';

interface CommentProps {
    comment: IComment;
}

export const Comment = (props: CommentProps) => {
    const { Id, Text, Date, User } = props.comment;
    const navigate = useNavigate();

    return (
        <Grid item xs={12} md={6}>
            <CardActionArea component="a" onClick={() => navigate(`/posts/${Id}`)}>
                <Card sx={{ display: 'flex', textAlign: "center" }}>
                    <CardContent sx={{ flex: 1 }}>
                        <Typography component="h2" variant="h5">
                            {Text}
                        </Typography>
                        <Typography variant="subtitle1" paragraph>
                            {User.Username}
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