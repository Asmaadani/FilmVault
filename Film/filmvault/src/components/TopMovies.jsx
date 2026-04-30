import MovieCard from './MovieCard'
import '../styles/topMovies.css'

function TopMovies({movies, onSelect}) {

    return (

        <section className="top-movies">

            <h2>TOP 3</h2>

            <div className="top-container">

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
export default TopMovies