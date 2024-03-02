import { useEffect, useState, useContext, useCallback } from "react";
import { useNavigate } from 'react-router-dom';
import { Typography, Grid, Card, CardActionArea, CardContent } from "@mui/material";
import { CommentCardProps } from './comment.card.props';
import { UserDto } from "../../../models/user";
import { Context } from "../../../main";
import { FormatDate } from "../../../utils/time";

export const Comment = (props: CommentCardProps) => {
    const { text, created_at, userId } = props.comment;
    const { userStore } = useContext(Context);
    const [user, setUser] = useState<UserDto>({} as UserDto);
    const navigate = useNavigate();

    const loadUser = useCallback(async () => {
        const author = await userStore.GetUser(userId);
        if (!author) return;
        setUser(author);
    }, []);

    useEffect(() => {
        loadUser().catch(console.error);
    }, []);

    return (
        <Grid item xs={12} md={6}>
            <CardActionArea component="a" onClick={() => navigate(`/user/${userId}`)}>
                <Card sx={{ display: 'flex', textAlign: "center" }}>
                    <CardContent sx={{ flex: 1 }}>
                        <Typography component="h2" variant="h5">
                            {text}
                        </Typography>
                        <Typography variant="subtitle1" paragraph>
                            {user.username}
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary">
                            {FormatDate(created_at)}
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