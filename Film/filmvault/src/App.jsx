import './styles/app.css'
import { useState } from 'react'

import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import TopMovies from './components/TopMovies'
import MovieGrid from './components/MovieGrid'
import MovieDetailsModal from './components/MovieDetailsModal'
import MovieFormModal from './components/MovieFormModal'

import moviesData from './data/movies'

function App() {

  const [movies, setMovies] = useState(moviesData)
  const [selectedMovie, setSelectedMovie] = useState(null)
  const [showForm, setShowForm] = useState(false)

  const addMovie = (movie) => {
    setMovies([...movies, movie])
  }

  const topMovie = movies[0]

  const topThree = [...movies]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3)

  return (
    <>
      <Navbar onAdd={() => setShowForm(true)} />

      {topMovie && (
        <HeroSection movie={topMovie} />
      )}

      <TopMovies
        movies={topThree}
        onSelect={setSelectedMovie}
      />

      <MovieGrid
        movies={movies}
        onSelect={setSelectedMovie}
      />

      <MovieDetailsModal
        movie={selectedMovie}
        onClose={() => setSelectedMovie(null)}
      />

      {showForm && (
        <MovieFormModal
          onClose={() => setShowForm(false)}
          onAdd={addMovie}
        />
      )}
    </>
  )
}

export default App