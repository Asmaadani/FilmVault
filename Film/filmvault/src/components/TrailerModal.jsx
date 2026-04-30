import '../styles/modal.css'

function TrailerModal({url, onClose}) {

    if(!url) return null

    return (

        <div className="modal-overlay" onClick={onClose}>

            <div
                className="modal-content"
                onClick={(e)=> e.stopPropagation()}
                style={{flexDirection:"column"}}
            >

                <iframe
                    width="100%"
                    height="400"
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