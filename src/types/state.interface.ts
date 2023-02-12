import { AuthStore } from "../stores/auth.store";
import { CommentStore } from "../stores/comment.store";
import { PostStore } from "../stores/post.store";
import { UserStore } from "../stores/user.store";

export interface State {
    authStore: AuthStore;
    userStore: UserStore;
    postStore: PostStore;
    commentStore: CommentStore;
}