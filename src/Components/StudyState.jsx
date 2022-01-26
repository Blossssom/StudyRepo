import React, {useState} from "react";

function StudyState() {

    const [name, setName] = useState('bloxxom');

    function changeName() {
        setName(name === "bloxxom" ? "Flower" : "bloxxom");
    }

    return(
        <div>
            <h1>State</h1>
            <h2 id="name">{name}</h2>
            <button onClick={changeName}>Change!</button>
        </div>
    );
}

export default StudyState;

// 이러한 useState가 사용된 컴포넌트는 반복되어 사용되어도 각 컴포넌트 별개의 상태 값으로 동작한다!!