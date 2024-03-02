import { useContext, useState, useEffect } from "react";
import { Context } from "../main";
import { observer } from 'mobx-react-lite';
import { UserList } from '../components/user/userList/user.list';
import { UserDto } from "../models/user";
import { Box, Container, TextField } from "@mui/material";

export const People = observer(() => {
    const { userStore } = useContext(Context);
    const [users, setUsers] = useState<UserDto[]>([]);

    useEffect(() => {
        const GetPosts = async () => {
            const response = await userStore.GetUsers();
            if (response === undefined) {
                return;
            }
            setUsers(response);
        }
        GetPosts().catch(console.error);
    }, [userStore]);
    return (
        <Container component="main" maxWidth="xs">
            <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
            }}>
                <TextField 
                    placeholder="Find a person"
                    margin="normal"
                    fullWidth
                />
                <UserList users={users}></UserList>
            </Box>
        </Container>
    );
}
);