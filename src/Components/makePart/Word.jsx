import { useState } from 'react/cjs/react.development';
import styles from './DayList.module.css';

function Word({word}) {
    const [isShow, setIsShow] = useState(false);
    const [isDone, setIsDone] = useState(word.isDone);

    function showMean() {
        setIsShow(!isShow);
    }

    function actionDone() {
        setIsDone(!isDone);
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
                <button className={styles.btn_del}>삭제</button>
            </td>
        </tr>
    );
}

export default Word;