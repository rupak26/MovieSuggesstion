import "../css/MovieCard.css"
function MovieCard({movie}) {
    function onLike() {
     alert("clicked")
    }
    return (
        <div className="Movie-card">
            <div className="Movie-poster">
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>
            </div>
            <div className="Movie-overlay">
                <button className="favorite-btn" onClick={onLike}>❤</button>
            </div>
            <div className="movie-info">
                <h1>{movie.title}</h1>
                <p>{movie.releaseData}</p>
            </div>
        </div>
    );
}

export default MovieCard;
