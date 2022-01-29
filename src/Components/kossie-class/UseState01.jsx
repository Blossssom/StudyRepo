import './kossie.css';
import { useState } from "react";

function UseState01() {

    const [text, setText] = useState('Welcome to useState');

    const upDateText = () => {
        const getText = document.getElementById('getText').value;
        setText(getText);
        console.log(`inner func : ${text}`);
    };
    console.log(`global : ${text}`);

    return(
        <div className='wrap-kossie-in'>
            <h1>{text}</h1>
            <input id="getText" type="text" />
            <button onClick={upDateText}>Update</button>
        </div>
    );
}

export default UseState01;