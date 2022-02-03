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
            <div className="link-in">
                <Link to={'/kossie_class/hook_useStateForm'}>useStateForm</Link>
            </div>
            <div className="link-in">
                <Link to={"/kossie_class/hook_useEffect01"}>useEffect01</Link>
            </div>
            <div className="link-in">
                <Link to={"/kossie_class/component01"}>Component01</Link>
            </div>
            <div className="link-in">
                <Link to={"/kossie_class/conditionalRender"}>ConditionalRender</Link>
            </div>
            <div className="link-in">
                <Link to={"/kossie_class/react_loop"}>ReactLoop</Link>
            </div>
            <div className="link-in">
                <Link to={"/kossie_class/movie_list"}>MovieList</Link>
            </div>
        </div>
    );
}

export default KossieIn;