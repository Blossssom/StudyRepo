function Movie(props) {

    function deleteAction() {
        props.deleteMovie(props.movieData.id);
    }
    
    return(
        <div className="movie-list">
            <div className="movie-title">{props.movieData.title}</div>
            <div className="movie-years">{props.movieData.years}</div>
            <div className="movie-list-delete">
                <button onClick={deleteAction}>Delete</button>
            </div>
        </div>
    );
}

export default Movie;