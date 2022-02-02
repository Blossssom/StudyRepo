import Movie from "./kossie-componetns/Movie";

function ReactLoop() {

    const movies = [
        {title: 'movie01', years: 2020, id: 0},
        {title: 'movie02', years: 2021, id: 1},
        {title: 'movie03', years: 2022, id: 2},
    ];

    const renderMovies = movies.map((movie) => {
        return (
            <Movie movieData={movie} key={movie.id} />
        );
    });

    return(
        <div className="kossie-in">
            {renderMovies}
        </div>
    );
}

export default ReactLoop;