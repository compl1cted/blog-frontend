import { makeAutoObservable } from "mobx";
import { ICreatePost } from "../models/post";
import { PostService } from "../services/post.service";

export class PostStore {

    constructor() {
        makeAutoObservable(this);
    }

    async AddPost(post: ICreatePost) {
        try {
            await PostService.addPost(post);
            return "Post added!";
        } catch (error) {
            console.error(error);
            return "Error occured!";
        }
    }
    async GetPosts() {
        try {
            return await PostService.getPosts();
        }
        catch (error) {
            console.error(error);
        }
    }

    async GetPost(id: number) {
        try {
            return await PostService.getPost(id);
        }
        catch (error) {
            console.error(error);
        }
    }

    async GetPostsByUserId(id: number) {
        try {
            return await PostService.getPostsByUserId(id);
        }
        catch (error) {
            console.error(error);
        }
    }

    async deletePost(id: number) {
        try {
            return await PostService.deletePost(id);
        } catch (error) {
            console.error(error);
        }
    }
}