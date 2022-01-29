import { Link } from "react-router-dom";
import './kossie.css';

function KossieIn() {
    return(
        <div className="wrap-kossie-in">
            <div className="link-in">
                <Link to={'/kossie_class/handle'}>Handle</Link>
            </div>
            <div className="link-in">
                <Link to={'/kossie_class/hook_useState01'}>useState01</Link>
            </div>
        </div>
    );
}

export default KossieIn;