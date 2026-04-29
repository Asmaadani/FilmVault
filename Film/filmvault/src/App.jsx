import './styles/app.css'

import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import TopMovies from './components/TopMovies'
import MovieGrid from './components/MovieGrid'

import moviesData from './data/movies'

function App() {

  const topMovie = moviesData[0]

  const topThree = [...moviesData]
    .sort((a,b)=> b.rating - a.rating)
    .slice(0,3)

  return (
    <>
      <Navbar />

      <HeroSection movie={topMovie}/>

      <TopMovies movies={topThree}/>

      <MovieGrid movies={moviesData}/>
    </>
  )
}

export default App