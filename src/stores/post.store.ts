import { makeAutoObservable } from "mobx";
import { IPost } from "../models/interfaces/IPost";
import { PostService } from "../services/post.service";

export class PostStore {

    constructor() {
        makeAutoObservable(this);
    }

    async AddPost(post: IPost) {
        try {
            await PostService.AddPost(post);
            return "Post added!";
        } catch (error) {
            console.error(error);
            return "Error occured!";
        }
    }
    async GetPosts() {
        try {
            const response = await PostService.GetPosts();
            return response.data;
        }
        catch (error) {
            console.error(error);
        }
    }
}