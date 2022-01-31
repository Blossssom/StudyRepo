import { useEffect, useState } from "react";

function UseEffect01() {

    const [cnt, setCnt] = useState(0);
    const [anCnt, setAnCnt] = useState(0);

    useEffect(() => {
        console.log('effect!!');
    }, [cnt, anCnt]);

    useEffect(() => {
        console.log('Rerender cause useEffect!!');
    }, []);

    const addCnt = () => {
        setCnt(cnt + 1);
    };

    const addAnotherCnt = () => {
        setAnCnt(anCnt + 1);
    }

    return(
        <div className="kossie-in">
            <h1>useEffect01 count : {cnt}</h1>
            <button onClick={addCnt}>add Count!</button>
            <button onClick={addAnotherCnt}>add Another</button>
        </div>
    );
}

export default UseEffect01;