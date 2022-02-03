import { useEffect, useState } from "react";
import InputField from "./InputField";

function MovieForm(props) {

    const [movieTitle, setMovieTitle] = useState('');
    const [movieYears, setMovieYears] = useState('');
    const [titleError, setTitleError] = useState('');
    const [yearError, setYearError] = useState('');
    // console.log(titleError);
    
    const resetForm = () => {
        setMovieTitle('');
        setMovieYears('');
    };

    const resetError = () => {
        setTitleError('');
        setYearError('');
    };

    const validateForm = () => {
        resetError();
        let validated = true;
        
        if(!movieTitle) {
            setTitleError('Please input title');
            validated = false;
        }

        if(!movieYears) {
            setYearError('Please input year');
            validated = false;
        }
        return validated;
    };

    const submitAction = (event) => {
        event.preventDefault();

        if(validateForm()) {
            props.addMovie(
                {
                    title: movieTitle,
                    years: movieYears,
                    id: props.movies[0] ? props.movies[props.movies.length - 1].id + 1 : 0
                }
            );
            resetError();
            resetForm();
        }
    };

    return(
        <form onSubmit={submitAction}>
            <InputField type="text" placeholder="Movie title" value={movieTitle} errorMessage={titleError} onChange={(e) => {setMovieTitle(e.target.value)}} />
            <InputField type="number" placeholder="Movie Year" value={movieYears} errorMessage={yearError} onChange={(e) => {setMovieYears(e.target.value)}} />
            <button type="submit">Add Movie</button>
        </form>
    );
}

export default MovieForm;