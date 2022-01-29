import { Link } from 'react-router-dom';
import styles from './Header.module.css';

function Header() {
    return(
        <div className={styles.header}>
            <h1>
                <Link to="/">토익 영단어(고급)</Link>
            </h1>
            <div className={styles.menu}>
                <Link to={'/create_word'} className={styles.link}>
                    단어추가
                </Link>
                <Link to={'/create_day'} className={styles.link}>
                    Day 추가
                </Link>
                <Link to={'/kossie_class'} className={styles.link}>
                    Kossie Class
                </Link>
            </div>
        </div>
    );
}

export default Header;