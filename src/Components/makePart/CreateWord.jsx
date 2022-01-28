import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './DayList.module.css';
import useFetch from './hooks/useFetch';

function CreateWord() {
    const day = useFetch('http://localhost:3001/days');
    const navigate = useNavigate();

    function onSubmit(e) {
        e.preventDefault();
        // from 내부의 버튼은 action을 취해 페이지를 리렌더링 시키므로 기본 기능을 해제해준다.

        console.log(engRef.current.value);
        console.log(korRef.current.value);
        console.log(dayRef.current.value);
        // useRef로 연결한 Dom 요소의 현재 값을 출력한다.
    }
    
    const engRef = useRef(null);
    const korRef = useRef(null);
    const dayRef = useRef(null);
    // useRef는 Dom에 접근할 수 있게해주는 hook이다. 스크롤의 위치, focus 등 Dom에 접근할 수 있다. 

    function restPost() {
        fetch(`http://localhost:3001/words`, {
            method: "POST",
            headers: {
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify({
                day: dayRef.current.value,
                eng: engRef.current.value,
                kor: korRef.current.value,
                isDone: false
            })
            // id의 경우 마지막 순서로 자동 지정된다.
        })
        .then(res => {
            if(res.ok){
                alert('Success Create word!!!');
                navigate(`/day/${dayRef.current.value}`);
                // useNavigate(url)를 사용해 post를 마친 후 해당 url로 이동한다.
                // useNavigate(number)을 사용하면 해당 페이지에서 앞, 뒤 혹은 리렌더링을 구현할 수 있다. 
            }
        })
    }

    return(
        <form onSubmit={onSubmit}>
            <div className={styles.input_area}>
                <label> Eng </label>
                <input type="text" placeholder="input word for Eng" ref={engRef} />
            </div>
            <div className={styles.input_area}>
                <label> Kor </label>
                <input type="text" placeholder="input word for Kor" ref={korRef} />
            </div>
            <div className={styles.input_area}>
                <label> Day </label>
                <select ref={dayRef} >
                    {day.map(days => (
                            <option key={days.id} value={days.day}>{days.day}</option>
                        ))}
                </select>
            </div>
            <button onClick={restPost}>Save</button>
        </form>
    );
}

export default CreateWord;