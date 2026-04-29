import '../styles/movieCard.css'

function MovieCard({movie}) {

    return (

        <div className="movie-card">

            <img src={movie.image} alt={movie.title} />

            <div className="movie-info">

                <h3>{movie.title}</h3>

                <p>
                    {movie.year}
                </p>

                <div className="card-stars">
                    {"⭐".repeat(movie.rating)}
                </div>

            </div>

        </div>

    )
}

export default MovieCard