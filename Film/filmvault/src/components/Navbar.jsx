import '../styles/navbar.css'

function Navbar() {
    return (
        <nav className="navbar">

            <div className="logo">
                FilmVault
            </div>

            <div className="nav-actions">

                <select>
                    <option>Genre</option>
                    <option>Action</option>
                    <option>Drama</option>
                    <option>Fantasy</option>
                </select>

                <button>
                    + Ajouter Film
                </button>

            </div>

        </nav>
    )
}

export default Navbar