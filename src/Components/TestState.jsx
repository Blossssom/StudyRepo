import { useState } from "react/cjs/react.development";

function TestState(props) {
    const defaultArr = ['x', 'x', 'x', 'x'];
    const [color, setColor] = useState(defaultArr);

    return(
        <div>
            <p>{color[0]}</p>
            <p>{color[1]}</p>
            <p>{color[2]}</p>
            <p>{color[3]}</p>
            <button onClick={
                () => {
                    setColor(color === props.colors ? defaultArr : props.colors);
                }
            }>Get Colors!!</button>
        </div>
    ); 
}

export default TestState;