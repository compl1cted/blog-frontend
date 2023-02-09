import { useContext, useState, useEffect } from "react";
import { Context } from "..";
import { observer } from 'mobx-react-lite';
import { UserList } from '../components/lists/user.list';
import { IUser } from "../models/interfaces/IUser";

export const People = observer(() => {
    const { userStore } = useContext(Context);
    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        const GetPosts = async () => {
            const response = await userStore.GetUsers();
            if (response === undefined) {
                return;
            }
            setUsers(response);
        }
        GetPosts()
            .catch(error => console.error(error));
    }, []);
    return (
        <UserList users={users}></UserList>
    );
}
);