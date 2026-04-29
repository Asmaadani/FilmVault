import '../styles/hero.css'

function HeroSection({movie}) {

    return (

        <section className="hero"
            style={{
                backgroundImage:`url(${movie.image})`
            }}
        >

            <div className="overlay">

                <h1>{movie.title}</h1>

                <p className="director">
                    Scénariste {movie.director}
                </p>

                <div className="stars">
                    {"⭐".repeat(movie.rating)}
                </div>

                <div className="genres">
                    <span>{movie.genre}</span>
                </div>

                <button>
                    + Watch Trailer
                </button>

            </div>

        </section>

    )
}

export default HeroSection