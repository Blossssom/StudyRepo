import { useState } from "react";
import Counter from "./kossie-componetns/Counter";

function Component01() {

    const [cntNum, setCntNum] = useState(3);

    return(
        <div className="kossie-in">
            <h1>useEffect01</h1>
            <Counter />
            <Counter count={2}/>
            <Counter count={cntNum}/>
        </div>
    );
}

export default Component01;