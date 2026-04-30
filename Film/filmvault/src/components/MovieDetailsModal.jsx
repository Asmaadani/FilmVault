import '../styles/modal.css'

function MovieDetailsModal({movie, onClose, onDelete, onEdit, onTrailer }) {

    if(!movie) return null

    return (

        <div className="modal-overlay" onClick={onClose}>

            <div
                className="modal-content"
                onClick={(e)=> e.stopPropagation()}
            >

                <img src={movie.image} alt={movie.title} />

                <div className="modal-info">

                    <h2>{movie.title}</h2>

                    <p>{movie.description}</p>

                    <p><strong>Year:</strong> {movie.year}</p>
                    <p><strong>Genre:</strong> {movie.genre}</p>
                    <p><strong>Director:</strong> {movie.director}</p>

                    <p>
                        <strong>Actors:</strong>
                        {movie.actors.join(", ")}
                    </p>

                    <div className="stars">
                        {"⭐".repeat(movie.rating)}
                    </div>

                    <div className="modal-buttons">

                        <button className="trailer" onClick={() => onTrailer(movie.trailer)}>
                            Watch Trailer
                        </button>
                        
                        <button className="edit" onClick={() => onEdit(movie)}>
                            Edit
                        </button>
                        
                        <button  className="delete"  onClick={() => onDelete(movie.id)}>
                            Delete
                        </button>

                    </div>

                </div>

            </div>

        </div>

    )
}

export default MovieDetailsModal