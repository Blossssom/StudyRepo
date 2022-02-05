import axios from "axios";
import { useEffect, useState } from "react";
import UserList from "./kossie-componetns/UserList";


function GetUserData() {

    const [users, setUsers] = useState([]);

    // Fetch 방식

    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //         .then((res) => {
    //             return(res.json());
    //         })
    //         .then((data) => {
    //             console.log(data);
    //         });
    // }, []);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((res) => {
                setUsers(res.data);
            });
    }, []);

    return(
        <>
            <UserList users={users} />
        </>
    );
}

export default GetUserData;