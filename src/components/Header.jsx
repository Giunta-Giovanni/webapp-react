// importiamo parte di link del modulo react-router
import { Link } from "react-router-dom"
import logo from '../assets/logo_moontrip.png'

export default function Header() {
    return (
        <header>
            <div className="row">
                {/* parte logo */}
                <nav className="logo-film">
                    <Link to='/'>
                        <img id="logo" src={logo} alt="" />
                    </Link>
                </nav>
            </div>
        </header>
    )
}