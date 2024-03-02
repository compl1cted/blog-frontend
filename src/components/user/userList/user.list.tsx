import { UserDto } from "../../../models/user";
import { UserListProps } from "./user.list.props";
import { User } from "../userCard/user.card"
import { Container } from "@mui/material";


export const UserList = (props: UserListProps) => {
    const users = props.users;

    return (
        <Container maxWidth="xs">
            {users?.map((user: UserDto) => {
                return <User key={user.id} user={user}></User>;
            })}
        </Container>
    );
}