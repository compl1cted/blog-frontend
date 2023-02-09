import { useState, useEffect, useContext } from 'react';
import { IPost } from '../models/interfaces/IPost';
import { observer } from 'mobx-react-lite';
import { Context } from '..';
import { PostList } from '../components/lists/post.list';

export const Feed = observer(() => {
    const [posts, setPosts] = useState<IPost[]>([]);
    const { postStore } = useContext(Context);

    useEffect(() => {
        (async () => {
            const response = await postStore.GetPosts();
            if (response === undefined) return;
            setPosts(response);
        })().catch(error => console.error(error));
    }, []);

    return (
        <PostList posts={posts}></PostList>
    );
}
);