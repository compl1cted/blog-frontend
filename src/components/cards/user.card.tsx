import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { IUser } from '../../models/interfaces/IUser';
import PersonIcon from '@mui/icons-material/Person';
import { useNavigate } from 'react-router-dom';

interface UserProps {
    user: IUser;
}

export const User = (props: UserProps) => {
    const { Id, Username } = props.user;
    const navigate = useNavigate();

    return (
        <Grid item xs={12} md={6}>
            <CardActionArea component="a" onClick={() => navigate(`/users/${Id}`)}>
                <Card sx={{ display: 'flex', flexDirection: 'row', textAlign: "center" }}>
                    <CardContent sx={{ flex: 1 }}>
                        <PersonIcon />
                        <Typography component="h2" variant="h5">
                            {Username}
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