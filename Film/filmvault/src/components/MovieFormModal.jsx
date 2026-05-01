import { useState } from 'react'
import '../styles/formModal.css'
function MovieFormModal({onClose, onAdd, onUpdate, movieToEdit}) {

    const [form, setForm] = useState(
        movieToEdit || {
            title:"",
            description:"",
            year:"",
            genre:"",
            director:"",
            actors:"",
            image:"",
            trailer:"",
            rating:1
        }
    )

    const handleChange = (e)=>{
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e)=>{
        e.preventDefault()

        const movieData = {
            ...form,
            id: movieToEdit ? movieToEdit.id : Date.now(),
            actors: typeof form.actors === "string"
            ? form.actors.split(",")
            : form.actors,
            rating: Number(form.rating)
        }

        if(movieToEdit){
            onUpdate(movieData)
        }else{
            onAdd(movieData)
        }

        onClose()
    }

    return (

        <div className="form-overlay" onClick={onClose}>

            <div
                className="form-modal"
                onClick={(e)=> e.stopPropagation()}
            >

                <h2>
                    {movieToEdit ? "Edit Movie" : "Add Movie"}
                </h2>

                <form onSubmit={handleSubmit}>

                    <input
                        type="text"
                        name="title"
                        placeholder="Movie Title"
                        value={form.title}
                        onChange={handleChange}
                    />

                    <textarea
                        name="description"
                        placeholder="Description"
                        value={form.description}
                        onChange={handleChange}
                    ></textarea>

                    <input
                        type="number"
                        name="year"
                        placeholder="Year"
                        value={form.year}
                        onChange={handleChange}
                    />

                    <input
                        type="text"
                        name="genre"
                        placeholder="Genre"
                        value={form.genre}
                        onChange={handleChange}
                    />

                    <input
                        type="text"
                        name="director"
                        placeholder="Director"
                        value={form.director}
                        onChange={handleChange}
                    />

                    <input
                        type="text"
                        name="actors"
                        placeholder="Actors separated by comma"
                        value={form.actors}
                        onChange={handleChange}
                    />

                    <input
                        type="text"
                        name="image"
                        placeholder="Image URL"
                        value={form.image}
                        onChange={handleChange}
                    />

                    <input
                        type="text"
                        name="trailer"
                        placeholder="Trailer URL"
                        value={form.trailer}
                        onChange={handleChange}
                    />

                    <input
                        type="number"
                        name="rating"
                        min="1"
                        max="5"
                        placeholder="Rating"
                        value={form.rating}
                        onChange={handleChange}
                    />

                    <div className="form-buttons">

                        <button type="submit">
                            {movieToEdit ? "Update" : "Add"}
                        </button>

                        <button
                            type="button"
                            className="cancel-btn"
                            onClick={onClose}
                        >
                            Cancel
                        </button>

                    </div>

                </form>

            </div>

        </div>

    )
}

export default MovieFormModal