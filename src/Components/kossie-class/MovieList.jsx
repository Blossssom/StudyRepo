import { useState } from "react";
import Movie from "./kossie-componetns/Movie";
import MovieForm from "./kossie-componetns/MovieForm";

function MovieList() {
    const [movies, setMovies] = useState([
        {title: 'movie01', years: 2020, id: 0},
        {title: 'movie02', years: 2021, id: 1},
        {title: 'movie03', years: 2022, id: 2},
    ]);

    const renderMovies = movies.map((movie) => {
        return(
            <Movie movieData={movie} key={movie.id} />
        );
    });

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