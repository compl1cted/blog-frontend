import { ICreatePost, PostDto } from "../models/post";
import { HttpMethods, request } from "../utils/request";

export class PostService {
    static async addPost(newPost: ICreatePost): Promise<PostDto> {
        return await request("posts/", HttpMethods.POST, newPost);
    }
    
    static async getPosts(): Promise<PostDto[]> {
        return await request("posts/", HttpMethods.GET);
    }

    static async getPost(id: number): Promise<PostDto> {
        return await request(`posts/${id}`, HttpMethods.GET);
    }

    static async getPostByTitle(title: string): Promise<PostDto[]> {
        return await request(`posts/search?title=${title}`, HttpMethods.GET);
    }

    static async getPostsByUserId(id: number): Promise<PostDto[]> {
        return await request(`posts/user/${id}`, HttpMethods.GET);
    }

    static async deletePost(id: number): Promise<boolean> {
        return await request(`posts/${id}`, HttpMethods.DELETE);
    }
}