export class CreateUserDto {
    username: string;
    email: string;
    password: string;

    constructor(username: string, email: string, password: string) {
        this.username = username;
        this.email = email;
        this.password = password;
    }
}

export class SignInDto {
    username_or_email: string;
    password: string;

    constructor(username_or_email: string, password: string) {
        this.username_or_email = username_or_email;
        this.password = password;
    }
}

export class UserDto {
    id: number;
    username: string;
    email: string;
    isActivated: boolean;

    constructor(id: number, username: string, email: string, isActivated: boolean) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.isActivated = isActivated;
    }
}