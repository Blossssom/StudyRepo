import { useEffect, useState } from "react";

function ConditionalRender() {

    const [condition, setCondition] = useState(false);

    const toggle = () => {
        setCondition(!condition);
    }

    const renderCondition = condition ? true : false;

    return(
        <div className="kossie-in">
            <h1>ConditionalRender</h1>
            <div>{renderCondition.toString()}</div>
            <button onClick={toggle}>{condition.toString()}</button>
        </div>
    );
}

export default ConditionalRender;