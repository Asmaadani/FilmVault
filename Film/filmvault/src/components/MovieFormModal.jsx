import { useState } from 'react'
import '../styles/modal.css'

function MovieFormModal({onClose, onAdd}) {

    const [form, setForm] = useState({
        title:"",
        description:"",
        year:"",
        genre:"",
        director:"",
        actors:"",
        image:"",
        trailer:"",
        rating:1
    })

    const handleChange = (e)=>{
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e)=>{
        e.preventDefault()

        const newMovie = {
            ...form,
            id: Date.now(),
            actors: form.actors.split(","),
            rating: Number(form.rating)
        }

        onAdd(newMovie)
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

                    <input name="title" placeholder="Title" onChange={handleChange}/>
                    <input name="description" placeholder="Description" onChange={handleChange}/>
                    <input name="year" placeholder="Year" onChange={handleChange}/>
                    <input name="genre" placeholder="Genre" onChange={handleChange}/>
                    <input name="director" placeholder="Director" onChange={handleChange}/>
                    <input name="actors" placeholder="Actors (comma separated)" onChange={handleChange}/>
                    <input name="image" placeholder="Image URL" onChange={handleChange}/>
                    <input name="trailer" placeholder="Trailer URL" onChange={handleChange}/>

                    <input
                        name="rating"
                        type="number"
                        min="1"
                        max="5"
                        onChange={handleChange}
                    />

                    <button type="submit">Add</button>

                </form>

            </div>

        </div>

    )
}

export default MovieFormModal