import { useNavigate } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import useFetch from "./hooks/useFetch";

function CreateDay() {
    const days = useFetch(`http://localhost:3001/days`);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();


    function addDays() {
        if(!isLoading) {
            setIsLoading(true);
            fetch('http://localhost:3001/days' ,{
                method: "POST",
                headers: {
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify({
                    "day" : days.length + 1
                })
            })
            .then(res => {
                if(res.ok) {
                    alert("Success add Day!!!");
                    navigate('/');
                    setIsLoading(false);
                }
            })
        }
    }

    return(
        <>
            <h3>
                Current Day : {days.length}
            </h3>
            <button 
                style={{opacity: isLoading ? 0.3 : 1}} 
                onClick={addDays}
                disabled={days.length === 0 ? true : false}>
                    {isLoading ? "Saving ..." : "Save!!!"}
            </button>
        </>
    );
}

export default CreateDay;
