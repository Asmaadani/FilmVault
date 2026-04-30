import './styles/app.css'
import { useState , useEffect  } from 'react'

import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import TopMovies from './components/TopMovies'
import MovieGrid from './components/MovieGrid'
import MovieDetailsModal from './components/MovieDetailsModal'
import MovieFormModal from './components/MovieFormModal'
import TrailerModal from './components/TrailerModal'

import moviesData from './data/movies'

function App() {

  const [movies, setMovies] = useState(() => {
    const saved = localStorage.getItem("movies")
    return saved ? JSON.parse(saved) : moviesData
  })
  const [selectedMovie, setSelectedMovie] = useState(null)
  const [showForm, setShowForm] = useState(false)

  const [genreFilter, setGenreFilter] = useState("")
  const [ratingFilter, setRatingFilter] = useState(0)

  const [movieToEdit, setMovieToEdit] = useState(null)

  const [showTrailer, setShowTrailer] = useState(false)
  const [trailerUrl, setTrailerUrl] = useState("")

  const addMovie = (movie) => {
    setMovies([...movies, movie])
  }

  const topMovie = [...movies].sort((a, b) => b.rating - a.rating)[0]

  const topThree = [...movies]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3)

  const filteredMovies = movies.filter(movie => 
    (genreFilter === "" || movie.genre === genreFilter) &&
    movie.rating >= ratingFilter
  )

  const deleteMovie = (id) => {
    setMovies(movies.filter(movie => movie.id !== id))
    setSelectedMovie(null)
  }
  const updateMovie = (updatedMovie) => {
    setMovies(prev =>
      prev.map(movie =>
        movie.id === updatedMovie.id ? updatedMovie : movie
      )
    )
  }
  // une fois katbdel data kanhtafd biha
  // moviesData kitcharja flwl après ki3wdo b localstorage
  useEffect(() => { 
    localStorage.setItem("movies", JSON.stringify(movies))
  }, [movies])

  return (
    <>
      <Navbar
        onAdd={() => setShowForm(true)}
        onFilterGenre={setGenreFilter}
        onFilterRating={setRatingFilter}
      />

      {topMovie && (
        <HeroSection movie={topMovie} />
      )}

      <TopMovies
        movies={topThree}
        onSelect={setSelectedMovie}
      />

      <MovieGrid
        movies={filteredMovies}
        onSelect={setSelectedMovie}
      />
      <MovieDetailsModal
        movie={selectedMovie}
        onClose={() => setSelectedMovie(null)}
        onDelete={deleteMovie}
        onEdit={(movie) => {
          setMovieToEdit(movie)
          setShowForm(true)
          setSelectedMovie(null)
        }}
        onTrailer={(url) => {
          setTrailerUrl(url)
          setShowTrailer(true)
        }}
      />

      {showForm && (
        <MovieFormModal
          onClose={() => {
            setShowForm(false)
            setMovieToEdit(null)
          }}
          onAdd={addMovie}
          onUpdate={updateMovie}
          movieToEdit={movieToEdit}
        />
      )}

      {showTrailer && (
        <TrailerModal
          url={trailerUrl}
          onClose={() => setShowTrailer(false)}
        />
      )}
    </>
  )
}

export default App