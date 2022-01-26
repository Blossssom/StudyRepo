import React, {useState} from "react";

function StudyProps({age}) {
    const [name, setName] = useState('bloxxom');
    const msg = age > 29 ? "늙었습니다" : "아직 창창하구만";

    return(
        <div>
            <h1>State</h1>
            <h2 id="name">{name}{age} : {msg}</h2>
            <button onClick={
                () => {
                    setName(name === 'bloxxom' ? 'Flower' : 'bloxxom');
                }
            }>Change!</button>
        </div>
    );
}

export default StudyProps;