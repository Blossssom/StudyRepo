import { Link } from 'react-router-dom';
import styles from './Header.module.css';

function Header() {
    return(
        <div className={styles.header}>
            <h1>
                <Link to="/">토익 영단어(고급)</Link>
            </h1>
            <div className={styles.menu}>
                <a href="#x" className={styles.link}>
                    단어추가
                </a>
                <a href="#" className={styles.link}>
                    Day 추가
                </a>
            </div>
        </div>
    );
}

export default Header;