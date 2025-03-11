// importiamo parte di link del modulo react-router
import { Link } from "react-router-dom"

export default function Header() {
    return (
        <header>
            <div className="row">
                {/* parte logo */}
                <nav className="logo-film">
                    <Link to='/'>L/BRARY FILM</Link>
                </nav>
            </div>
        </header>
    )
}