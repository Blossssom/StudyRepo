import { Link} from "react-router-dom";
import "../kossie.css";

function UserList(props) {
    console.log(props);
    return(
        <div>
            {props.users.map((user) => {
                return(
                    <Link 
                        to={`/kossie_class/get_userData/${user.id}`}
                        state={
                            {
                                name: user.name,
                                username: user.username,
                                email: user.email,
                                phone: user.phone
                            }
                        } 
                        key={user.id} 
                        className="card">
                        <div>
                            {user.name}
                        </div>
                    </Link>
                );
            })}
        </div>
    );
}

export default UserList;