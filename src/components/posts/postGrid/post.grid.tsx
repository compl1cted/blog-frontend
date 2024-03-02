import { Grid } from "@mui/material";
import { PostGridProps } from "./post.grid.props";
import { PostCard } from "../postCard/post.card";

export const PostGrid = (props: PostGridProps) => {
    const { posts } = props;
    return (
        <Grid container>
            {
                posts?.map((post) => (
                <Grid item key={post.id} xs={12} sm={6} lg={4}>
                    <PostCard post={post}></PostCard>
                </Grid>
                ))
            }
        </Grid>
    );
}