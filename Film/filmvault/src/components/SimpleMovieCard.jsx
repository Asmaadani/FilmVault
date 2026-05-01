import '../styles/simpleMovieCard.css'

function SimpleMovieCard({movie, onClick}) {

    return (

        <div
            className="simple-card"
            onClick={() => onClick(movie)}
        >

            <img
                src={movie.image}
                alt={movie.title}
            />

            <div className="simple-overlay">

                <h3>{movie.title}</h3>

            </div>

        </div>

    )
}

export default SimpleMovieCard