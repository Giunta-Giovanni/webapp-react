// importiamo parte di link del modulo react-router
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faPlus } from "@fortawesome/free-solid-svg-icons";
import logo from '../assets/logo_moontrip.png';

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
                <nav className="col d-flex">
                    <NavLink to='/'><FontAwesomeIcon icon={faHouse} /></NavLink>
                    <NavLink to='/movie/add_movie'><FontAwesomeIcon icon={faPlus} /></NavLink>
                </nav>
            </div>
        </header>
    )
}