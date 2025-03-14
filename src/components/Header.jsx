// importiamo parte di link del modulo react-router
import { Link } from "react-router-dom"
import logo from '../assets/logo_moontrip.png'

export default function Header() {
    return (
        <header>
            <div className="row">
                {/* parte logo */}
                <div className="col logo-film">
                    <Link to='/'>
                        <img id="logo" src={logo} alt="" />
                    </Link>
                </div>
                <nav className="col">
                    <Link to='/add_movie'>Add Movie</Link>

                </nav>
            </div>
        </header>
    )
}