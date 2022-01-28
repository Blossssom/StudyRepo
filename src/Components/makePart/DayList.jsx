import styles from './DayList.module.css';
import{Link} from 'react-router-dom';

import useFetch from './hooks/useFetch';

function DayList() {
    // const [days, setDays] = useState([]);
    const days = useFetch('http://localhost:3001/days');


    return(
        <>
            <ul className={styles.list_day}>
                <li>
                    {days.map(day => (
                        <Link to={`/day/${day.day}`} key={day.id}>Day {day.day}</Link>
                    ))}
                </li>
            </ul>
        </>
    );
}

export default DayList;