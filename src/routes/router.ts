import { IRoute } from "../types/route.interface";
import { SignIn } from "../pages/sign_in";
import { SignUp } from "../pages/sign_up";
import { AddPost } from "../pages/add_post";
import { People } from "../pages/people";
import { Feed } from "../pages/feed";
import { Profile } from "../pages/profile";
import { PostPage } from "../pages/post";
import { UserPage } from "../pages/user";

export const PublicRoutes: IRoute[] = [
    { path: "/sign_in", page: SignIn },
    { path: "/sign_up", page: SignUp },
];

export const PrivateRoutes: IRoute[] = [
    { path: "/", page: AddPost },
    { path: "/people", page: People },
    { path: "/feed", page: Feed },
    { path: "/users/:id", page: UserPage },
    { path: "/posts/:id", page: PostPage },
    { path: "/profile", page: Profile },
];