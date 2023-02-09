import { IPost } from "../../models/interfaces/IPost";
import { Post } from "../cards/post.card";

interface PostListProps {
    posts: IPost[];
}


export const PostList = (props: PostListProps) => {
    const posts = props.posts;

    return (
        <div>
            {posts.map((post: IPost) => {
                return <Post key={post.Id} post={post}></Post>
            })}
        </div>
    );
}