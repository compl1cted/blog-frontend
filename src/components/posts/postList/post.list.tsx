import { Container } from "@mui/material";
import { PostCard } from "../postCard/post.card";
import { PostListProps } from "./post.list.props";

export const PostList = (props: PostListProps) => {
    const { posts } = props;

    return (
        <Container maxWidth="xs">
            {posts.map((post) => {
                return <PostCard key={post.id} post={post}></PostCard>
            })}
        </Container>
    );
}