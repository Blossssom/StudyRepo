import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Spinner from './Spinner';

function UserInfo() {
    
    const [isLoading, setIsLoading] = useState(true);
    const location = useLocation();
    const userInfo = location.state;

    useEffect(() => {
        if(isLoading) {
            setIsLoading(!isLoading);
        }
    }, []);

    return(
        <>
            {isLoading ? <Spinner /> :
                <div className="detail-info-card">
                    <h3>{userInfo.name} Info</h3>
                    <div className="detail-card-body">
                        <p>UserName : {userInfo.username}</p>
                        <p>email : {userInfo.email}</p>
                        <p>phone : {userInfo.phone}</p>
                        <p>webSite : {userInfo.website}</p>
                    </div>
                </div>
            }
        </>
    );
};

export default UserInfo;