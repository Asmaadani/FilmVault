import '../styles/trailerModal.css'

function TrailerModal({url, onClose}) {

    if(!url) return null

    return (

        <div
            className="trailer-overlay"
            onClick={onClose}
        >

            <div
                className="trailer-content"
                onClick={(e)=> e.stopPropagation()}
            >

                <iframe
                    width="100%"
                    height="100%"
                    src={url}
                    title="Trailer"
                    frameBorder="0"
                    allowFullScreen
                ></iframe>

            </div>

        </div>

    )
}

export default TrailerModal