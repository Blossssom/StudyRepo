import styles from './DayList.module.css';
import {Outlet, useParams} from 'react-router-dom';
import Word from './Word';
import useFetch from './hooks/useFetch';

function Day() {
    console.log('reRender!!!')

    const {day} = useParams();
    const wordList = useFetch(`http://localhost:3001/words?day=${day}`)
    
    return(
        <>
            <h2>Day {day}</h2>
            <table>
                <tbody>
                    {wordList.map(word => (
                        <Word word={word} key={word.id} />
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default Day;