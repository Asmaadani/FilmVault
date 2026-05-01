import '../styles/navbar.css'
function Navbar({onAdd, onFilterGenre, onFilterRating}) {

    return (
        <nav className="navbar">

            <div className="logo">
                <img width="40" height="40" src="https://img.icons8.com/ios-filled/50/e2b751/clapperboard.png" alt="clapperboard"/>
                FilmVault
            </div>

            <div className="nav-actions">
                <select onChange={(e)=> onFilterGenre(e.target.value)}>
                    <option value="">All Genres</option>
                    <option value="Action">Action</option>
                    <option value="Drama">Drama</option>
                    <option value="Fantasy">Fantasy</option>
                </select>

                <select onChange={(e)=> onFilterRating(Number(e.target.value))}>
                    <option value="0">All Ratings</option>
                    <option value="1">1+</option>
                    <option value="2">2+</option>
                    <option value="3">3+</option>
                    <option value="4">4+</option>
                    <option value="5">5</option>
                </select>
                <button onClick={onAdd}>
                    + Ajouter Film
                </button>

            </div>

        </nav>
    )
}
export default Navbar ;