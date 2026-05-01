import '../styles/hero.css'

function HeroSection({movie, onTrailer}) {

    return (

        <section
            className="hero"
            style={{
                backgroundImage: `url(${movie.image})`
            }}
        >

            <div className="hero-overlay">

                <div className="hero-content">

                    <h1>{movie.title}</h1>

                    <p className="writer">
                        Scénariste {movie.director}
                    </p>

                    <div className="hero-stars">
                        {"⭐".repeat(movie.rating)}
                    </div>

                    <div className="hero-genres">

                        <span>{movie.genre}</span>

                        <span>Thriller</span>

                    </div>

                    <button className="watch-btn"
                        onClick={() => onTrailer(movie.trailer)}
                    >
                        + Watch Trailer
                    </button>

                </div>

            </div>

        </section>

    )
}

export default HeroSection