import { UserCardProps } from './user.card.props';
import { useNavigate } from 'react-router-dom';
import { Typography, Grid, Card, CardActionArea, CardContent} from '@mui/material';
import { Person } from '@mui/icons-material';

export const User = (props: UserCardProps) => {
    const { id, username } = props.user;
    const navigate = useNavigate();
    return (
        <Grid item xs={12} md={6}>
            <CardActionArea component="a" onClick={() => navigate(`/users/${id}`)}>
                <Card sx={{ display: 'flex', flexDirection: 'row', textAlign: "center" }}>
                    <CardContent sx={{ flex: 1 }}>
                        <Person />
                        <Typography component="h2" variant="h5">
                            {username}
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