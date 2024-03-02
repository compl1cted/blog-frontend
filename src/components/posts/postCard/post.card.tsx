import { useState, useEffect, useContext, useCallback } from "react";
import { Context } from "../../../main";
import { PostProps } from './post.card.props';
import { useNavigate } from 'react-router-dom';
import { UserDto } from "../../../models/user";
import { Typography, Card, CardActionArea, CardContent, CardHeader, IconButton } from '@mui/material';
import { Person } from "@mui/icons-material"
import { FormatDate } from "../../../utils/time";

export const PostCard = (props: PostProps) => {
    const { id, content, date, userId } = props.post;
    const [author, setAuthor] = useState<UserDto>({} as UserDto);
    const { userStore } = useContext(Context);
    const navigate = useNavigate();

    const loadPost = useCallback(async () => {
        const user = await userStore.GetUser(userId);
        if (!user) return;
        setAuthor(user);
    }, []);

    useEffect(() => {
        loadPost().catch(console.error);
    }, []);

    return (
        <CardActionArea component="a">
            <Card sx={{ display: 'flex', flexDirection: "column", textAlign: "left" }}>
                <CardContent sx={{ flex: 1 }} onClick={() => navigate(`/posts/${id}`)}>
                    <Typography component="p" variant="h3" color="InfoText">
                        {content}
                    </Typography>
                </CardContent>
                <CardHeader
                    avatar={<Person></Person>}
                    action={<IconButton></IconButton>}
                    title={author.username}
                    subheader={FormatDate(date)}
                />
            </Card>
        </CardActionArea>
    );
}