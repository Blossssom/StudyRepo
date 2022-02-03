import { useState } from "react";
import Movie from "./kossie-componetns/Movie";
import MovieForm from "./kossie-componetns/MovieForm";

function MovieList() {
    const [movies, setMovies] = useState([]);

    const deleteMovie = (id) => {
        setMovies(movies.filter((item) => {
            return(item.id !== id);
        }));
    };

    const renderMovies = movies.length ? movies.map((movie) => {
        return(
            <Movie movieData={movie} key={movie.id} deleteMovie={deleteMovie} />
        );
    }) : 'Not Found Movie';

    const addMovie = (movie) => {
        setMovies([
            ...movies,
            movie
        ]);
    };

    return(
        <div className="kossie-in">
            <MovieForm addMovie={addMovie} movies={movies} />
            {renderMovies}
        </div>
    );
}

export default MovieList;