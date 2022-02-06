
import axios from "axios";
import { useEffect, useState } from "react";
import Spinner from "./kossie-componetns/Spinner";
import UserList from "./kossie-componetns/UserList";


function GetUserData() {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

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
                setLoading(false);
            });
    }, []);

    return(
        <div className="wrap-userlist">
            {
                loading ? <Spinner /> :
                <UserList users={users} />
            }
        </div>
    );
}

export default GetUserData;