import { Link } from "react-router-dom"
export default function MovieCard() {
    return (
        <div className="card">
            <img src="http://localhost:3000/img/movies_cover/inception.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">Nome del film</h5>
                <address><i>nome director</i></address>
                <p className="card-text">abstract del film con continuazione....</p>
                <Link className="btn btn-primary" to='movie/2'>Vai al dettaglio</Link>
            </div>
        </div>
    )

}