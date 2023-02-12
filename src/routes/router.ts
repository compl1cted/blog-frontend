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
    { path: "/sign_in", component: SignIn },
    { path: "/sign_up", component: SignUp },
];

export const PrivateRoutes: IRoute[] = [
    { path: "/", component: AddPost },
    { path: "/people", component: People },
    { path: "/feed", component: Feed },
    { path: "/users/:id", component: UserPage },
    { path: "/posts/:id", component: PostPage },
    { path: "/profile", component: Profile },
];