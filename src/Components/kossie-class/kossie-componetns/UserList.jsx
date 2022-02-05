function UserList(props) {
    console.log('In UserList Component', props.users);
    return(
        <div>
            {props.users.map((user) => {
                return(
                    <div key={user.id}>
                        {user.name}
                    </div>
                );
            })}
        </div>
    );
}

export default UserList;