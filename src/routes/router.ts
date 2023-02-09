import { IRoute } from "../types/route.interface";
import { SignIn } from "../pages/sign_in";
import { SignUp } from "../pages/sign_up";
import { AddPost } from "../pages/add_post";
import { People } from "../pages/people";
import { Feed } from "../pages/feed";
import { Profile } from "../pages/profile";

export const PublicRoutes: IRoute[] = [
    { path: "/sign_in", component: SignIn, exact: true },
    { path: "/sign_up", component: SignUp, exact: true },
];

export const PrivateRoutes: IRoute[] = [
    { path: "/", component: AddPost, exact: true },
    { path: "/people", component: People, exact: true },
    { path: "/feed", component: Feed, exact: true },
    { path: "/profile", component: Profile, exact: true },
];