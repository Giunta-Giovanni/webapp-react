import { Link } from "react-router-dom"
export default function MovieCard(props) {

    // destrutturiamo la prop
    const { id, title, director, abstract, image } = props.movieProp

    return (
        <div className="card">
            <Link to={`movie/${id}`}>
                <div className="card-image">
                    <img
                        src={image}
                        alt={title}
                        className="card-img-top"
                    />
                </div>

                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <address><i>{director}</i></address>
                    <p className="card-text">{abstract}</p>
                </div>
                {/* square superiore con numero*/}
                <div className="card-ranking">
                    <span>{id}</span>
                </div>
            </Link >

        </div>

    )

}