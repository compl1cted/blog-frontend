export interface ICreatePost {
    title: string;
    content: string;
    userId: number;
}

export class PostDto {
    id: number;
    title: string;
    content: string;
    date: Date;
    userId: number;

    constructor(id: number, title: string, content: string, date: Date, userId: number) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.date = date;
        this.userId = userId;
    }
}