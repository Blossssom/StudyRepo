import { useLocation } from "react-router-dom";


function UserInfo() {
    const location = useLocation();
    const userInfo = location.state;
    console.log(userInfo)
    return(
        <>
        {
            userInfo.email
        }
        </>
    );
};

export default UserInfo;