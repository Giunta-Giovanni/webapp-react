import { Link } from "react-router-dom"
export default function NotFoundPage() {
    return (
        <>
            <h1>Pagina non trovata</h1>
            <Link to='/'>
                <button className="btn btn-primary">Ritorna alla home</button>
            </Link>

        </>

    )
}