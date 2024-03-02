import { useState, useEffect, useContext, useCallback } from 'react';
import { PostDto } from '../models/post';
import { observer } from 'mobx-react-lite';
import { Context } from '../main';
import { PostGrid } from '../components/posts/postGrid/post.grid';

export const Feed = observer(() => {
    const [posts, setPosts] = useState<PostDto[]>([]);
    const { postStore } = useContext(Context);

    const loadPosts = useCallback(async () => {
        const response = await postStore.GetPosts();
        if (response === undefined) return;
        setPosts(response);
    }, []);

    useEffect(() => {
        loadPosts().catch(console.error);
    }, []);

    return (
        // <Container component="main">
                <PostGrid posts={posts}></PostGrid>
        // </Container>
    );
}
);