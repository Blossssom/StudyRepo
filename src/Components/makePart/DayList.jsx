import dummy from './db/data.json';
import styles from './DayList.module.css';
import{Link, Outlet} from 'react-router-dom';

function DayList() {
    return(
        <>
            <ul className={styles.list_day}>
                <li>
                    {dummy.days.map(day => (
                        <Link to={`/day/${day.day}`} key={day.id}>Day {day.day}</Link>
                    ))}
                </li>
            </ul>
            <Outlet />
        </>
    );
}

export default DayList;