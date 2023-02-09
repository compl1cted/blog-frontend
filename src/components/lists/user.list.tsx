import { IUser } from "../../models/interfaces/IUser";
import { User } from "../cards/user.card"

interface UserListProps {
    users: IUser[];
}


export const UserList = (props: UserListProps) => {
    const users = props.users;

    return (
        <div>
            {users.map((user: IUser) => {
                return <User key={user.Id} user={user}></User>
            })}
        </div>
    );
}