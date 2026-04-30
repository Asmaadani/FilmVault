import { useState } from 'react'
import '../styles/modal.css'

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

        <div className="modal-overlay" onClick={onClose}>

            <div
                className="modal-content"
                onClick={(e)=> e.stopPropagation()}
                style={{flexDirection:"column"}}
            >

                <h2 style={{color:"black", margin:"15px"}}>Add Movie</h2>

                <form onSubmit={handleSubmit} className="form">

                    <input name="title" placeholder="Title" value={form.title} onChange={handleChange}/>
                    <input name="description" placeholder="Description" value={form.description} onChange={handleChange}/>
                    <input name="year" placeholder="Year" value={form.year} onChange={handleChange}/>
                    <input name="genre" placeholder="Genre" value={form.genre} onChange={handleChange}/>
                    <input name="director" placeholder="Director" value={form.director} onChange={handleChange}/>
                    <input name="actors" placeholder="Actors (comma separated)" value={form.actors} onChange={handleChange}/>
                    <input name="image" placeholder="Image URL" onChange={handleChange}/>
                    <input name="trailer" placeholder="Trailer URL" onChange={handleChange}/>

                    <input
                        name="rating"
                        type="number"
                        min="1"
                        max="5"
                        value={form.rating}
                        onChange={handleChange}
                    />

                    <button type="submit">Add</button>

                </form>

            </div>

        </div>

    )
}

export default MovieFormModal