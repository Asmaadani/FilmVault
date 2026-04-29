import MovieCard from './MovieCard'
import '../styles/topMovies.css'

function TopMovies({movies}) {

    return (

        <section className="top-movies">

            <h2>TOP 3</h2>

            <div className="top-container">

                {
                    movies.map(movie => (
                        <MovieCard
                            key={movie.id}
                            movie={movie}
                        />

                    ))
                }

            </div>

        </section>

    )
}

export default TopMovies