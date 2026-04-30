import MovieCard from './MovieCard'
import '../styles/movieGrid.css'

function MovieGrid({movies, onSelect}) {

    return (

        <section className="movie-grid-section">

            <h2>All Movies</h2>

            <div className="movie-grid">

                {
                    movies.map(movie => (

                        <MovieCard
                            key={movie.id}
                            movie={movie}
                            onClick={onSelect}
                        />

                    ))
                }

            </div>

        </section>

    )
}

export default MovieGrid