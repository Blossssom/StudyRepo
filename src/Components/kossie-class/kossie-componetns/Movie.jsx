function Movie(props) {
    
    return(
        <div className="movie-list">
            <div className="movie-title">{props.movieData.title}</div>
            <div className="movie-years">{props.movieData.years}</div>
        </div>
    );
}

export default Movie;