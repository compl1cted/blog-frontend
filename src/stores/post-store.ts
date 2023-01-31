import { IPost } from "../models/IPosts";
import { PostService } from "../services/post.service";

export default class PostStore {
    async AddPost(post: IPost) {
        try {
            const response = PostService.AddPost(post);
            return "Post added!";
        } catch (error) {
            console.error(error);
            return "Error occured!";
        }
    }
    async GetPosts() {
        try {
            const response = await PostService.GetPosts();
            const data = response.data;
            console.log(data);
            return data;
        }
        catch (error) {
            console.error(error);
        }
    }
}