import '../styles/modal.css'

function MovieDetailsModal({
    movie,
    onClose,
    onDelete,
    onEdit,
    onTrailer
}) {

    if(!movie) return null

    return (

        <div
            className="modal-overlay"
            onClick={onClose}
        >

            <div
                className="modal-content"
                onClick={(e)=> e.stopPropagation()}
            >

                <img
                    src={movie.image}
                    alt={movie.title}
                    className="modal-image"
                />

                <div className="modal-info">

                    <div className="modal-top">

                        <div>

                            <h2>{movie.title}</h2>

                            <p className="creator">
                                Création originale
                                <span> {movie.director}</span>
                            </p>

                        </div>

                        <button
                            className="trailer-btn"
                            onClick={() => onTrailer(movie.trailer)}
                        >
                            + Watch Trailer
                        </button>

                    </div>

                    <div className="modal-stars">
                        {"⭐".repeat(movie.rating)}
                    </div>

                    <div className="modal-genres">

                        <span>{movie.genre}</span>

                        <span>Drama</span>

                    </div>

                    <p className="description">
                        {movie.description}
                    </p>

                    <p className="movie-year">
                        sortie en : {movie.year}
                    </p>

                    <p className="actors">
                        <strong>Acteur:</strong>{" "}
                        {movie.actors.join(" - ")}
                    </p>

                    <div className="modal-actions">

                        <button
                            className="delete-btn"
                            onClick={() => onDelete(movie.id)}
                        >
                            <img width="40" height="40" src="https://img.icons8.com/material/24/FFFFFF/filled-trash.png" alt="filled-trash"/>

                        </button>

                        <button
                            className="edit-btn"
                            onClick={() => onEdit(movie)}
                        >          
                            <img width="40" height="40" src="https://img.icons8.com/parakeet-filled/48/FFFFFF/edit-file.png" alt="edit-file"/>
                        </button>

                    </div>

                </div>

            </div>

        </div>

    )
}

export default MovieDetailsModal