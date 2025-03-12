import { Link } from "react-router-dom"
export default function MovieCard(props) {

    // destrutturiamo la prop
    const { id, title, director, abstract, image } = props.movieProp

    return (

        <div className="card">
            <img
                src={image}
                alt={title}
                className="card-img-top"

            />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <address><i>{director}</i></address>
                <p className="card-text">{abstract}</p>
                <Link
                    className="btn btn-primary"
                    to={`movie/${id}`}
                >Vai al dettaglio
                </Link>
            </div>
        </div>
    )

}