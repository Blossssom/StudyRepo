import { useState } from 'react/cjs/react.development';
import styles from './DayList.module.css';

function Word({word : w}) {
    const [word, setWord] = useState(w);
    const [isShow, setIsShow] = useState(false);
    const [isDone, setIsDone] = useState(word.isDone);
    

    function showMean() {
        setIsShow(!isShow);
    }

    function actionDone() {
        // setIsDone(!isDone);
        fetch(`http://localhost:3001/words/${word.id}`, {
            method: "PUT",
            headers: {
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify({
                ...word,
                isDone: !isDone
            })
        })
        .then(res => {
            if(res.ok) {
                setIsDone(!isDone);
            }else {
                console.log('fail to isDone')
            }
        })
    }

    function restDel() {
        if(window.confirm('Delete this Word???')) {
            fetch(`http://localhost:3001/words/${word.id}`, {
                method: 'DELETE',
            })
            .then(res => {
                if(res.ok) {
                    console.log(word.id);
                    setWord({id : 0});
                }
            })
        }
        
    }

    if(word.id === 0) {
        return null;
    }

    return(
        <tr className={isDone ? styles.off : ''}>
            <td>
                <input type="checkbox" checked={isDone} onChange={actionDone} />
            </td>
            <td>
                {word.eng}
            </td>
            <td>
                {isShow && word.kor}
            </td>
            <td>
                <button onClick={showMean}>뜻 {isShow ? '숨기기' : '보기'}</button>
                <button onClick={restDel} className={styles.btn_del}>삭제</button>
            </td>
        </tr>
    );
}

export default Word;