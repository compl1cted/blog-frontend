import { NavbarItem } from "../../types/navbar.item";
import SearchIcon from "@mui/icons-material/Search";
import PostIcon from "@mui/icons-material/PostAdd";
import FeedIcon from "@mui/icons-material/Newspaper";
import PersonIcon from "@mui/icons-material/Person";

export const NavbarItems: NavbarItem[] = [
    { value: "feed", label: "Feed", icon: typeof FeedIcon},
    { value: "", label: "Add Post", icon: typeof PostIcon },
    { value: "people", label: "Users", icon: typeof SearchIcon},
    { value: "profile", label: "Profile", icon: typeof PersonIcon}
]; 