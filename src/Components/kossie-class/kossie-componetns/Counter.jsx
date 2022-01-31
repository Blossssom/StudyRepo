import { useState } from "react";

function Counter(props) {

    const defaultCount = props.count || 1;

    const [cnt, setCnt] = useState(0);

    const addCnt = () => {
        setCnt(cnt + defaultCount);
    };

    return(
        <button onClick={addCnt}>add {defaultCount}!  count : {cnt}</button>
    );
}

export default Counter;