import { Link } from "react-router-dom"
import undefinedCover from '../assets/undefined_cover.png';
export default function MovieCard(props) {

    // destrutturiamo la prop
    const { index } = props
    const { id, title, director, image, } = props.movieProp
    return (
        <div className="card">
            <Link to={`movie/${id}`}>
                <div className="card-image">
                    <img
                        src={!image ? undefinedCover : image}
                        alt={title}
                        className="card-img-top"
                    />
                </div>

                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <address><i>{director}</i></address>
                    {/* <p className="card-text">{abstract}</p> */}
                </div>
                {/* square superiore con numero*/}
                <div className="card-ranking">
                    <span>{index}</span>
                </div>
            </Link >

        </div>

    )

}