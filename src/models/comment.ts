export interface ICreateComment {
    text: string;
    userId: number;
    postId: number;
}

export interface IComment {
    id: number;
    text: string;
    created_at: Date;
    userId: number;
    postId: number;
}