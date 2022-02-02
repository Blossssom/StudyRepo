import { useState } from "react";

function MovieForm(props) {

    const [movieTitle, setMovieTitle] = useState('');
    const [movieYears, setMovieYears] = useState('');
    
    const resetForm = () => {
        setMovieTitle('');
        setMovieYears('');
    }

    const submitAction = (event) => {
        event.preventDefault();
        props.addMovie(
            {
                title: movieTitle,
                years: movieYears,
                id: props.movies[props.movies.length - 1].id + 1
            }
        );
        resetForm();
    };

    return(
        <form onSubmit={submitAction}>
            <input type="text" placeholder="Title of movie" value={movieTitle} onChange={(e) => {
                setMovieTitle(e.target.value);
            }} />
            <input type="text" placeholder="Movie years" value={movieYears} onChange={(e) => {
                setMovieYears(e.target.value);
            }} />
            <button type="submit">Add Movie</button>
        </form>
    );
}

export default MovieForm;