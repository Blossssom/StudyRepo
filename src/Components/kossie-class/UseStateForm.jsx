import { useState } from 'react';
import './kossie.css';

function UseStateForm() {

    const [userName, setUserName] = useState('');
    const [userPass, setUserPass] = useState('');
 
    function onSubmit(event) {
        alert('submit!');
        event.preventDefault();
        console.log(userName, userPass);
    }

    return(
        <form onSubmit={onSubmit} className="wrap-kossie-in">
            <input 
                type="text" 
                placeholder="userName" 
                value={userName}
                onChange={(e) => {
                    setUserName(e.target.value);
                }}
            />
            <input 
                type="text" 
                placeholder="userPass" 
                value={userPass} 
                onChange={(e) => {
                    setUserPass(e.target.value);
                }} 
            />
            <button type="submit">Submit!!!</button>
        </form>
    );
}

export default UseStateForm;