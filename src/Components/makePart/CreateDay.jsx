import { useNavigate } from "react-router-dom";
import useFetch from "./hooks/useFetch";

function CreateDay() {
    const days = useFetch(`http://localhost:3001/days`);
    const navigate = useNavigate();

    function addDays() {
        // fetch('')
    }

    return(
        <>
            <h3>
                Current Day : {days[days.length - 1]}
                {/*  에러 수정하기 */}
            </h3>
            <button onClick={addDays}>Add Day</button>
        </>
    );
}

export default CreateDay;