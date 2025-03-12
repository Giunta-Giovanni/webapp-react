import axios from "axios"
import { useState, useEffect } from "react"
import { useParams, useNavigate, Link } from "react-router-dom"
import ReviewCard from "../components/ReviewCard"
export default function MoviePage() {

    // requperiamo l'id
    const { id } = useParams();

    // utilizzo per il redirect di pagina (useNavigate)
    const redirect = useNavigate();

    // salviamo la variabile di stato del dettaglio
    const [movie, setMovie] = useState({});

    // funzione di chiamata all'api per il singolo film
    function fetchMovie() {
        axios.get(axios.get(`http://localhost:3000/api/movies/${id}`)
            .then(res => {
                setMovie(res.data)
            })
            .catch(err => {
                console.log(err);
                if (err.status === 404) redirect("/PageNotFound")
            }))
    }

    // all'avvio della pagina richiama il movie
    useEffect(fetchMovie, []);

    useEffect(() => {
        if (movie.length !== 0) {
            console.log(movie)
        }
    }, [movie]);



    function renderReviews() {
        return movie.reviews?.map(
            review =>
                <ReviewCard
                    key={review.id}
                    reviewProp={review}
                />
        )
    }


    return (
        <>
            {/* sezione del film */}
            <section id="movie-details">
                <div className="movie-cover">
                    <img
                        src={movie.bg_image}
                        alt={movie.title}
                    />
                </div>

                <div className="movie-link">
                    <Link>CONSIGLIATI</Link>
                    <Link>EXTRA</Link>
                    <Link className="active">DETTAGLI</Link>
                </div>

                {/* row contenete tutte le informazioni*/}
                <div className="row mt-4">

                    {/* col 1: titolo & abstract */}
                    <div className="col-6">
                        <h2>{movie.title}</h2>
                        <p>{movie.abstract}</p>
                    </div>

                    {/* col 2: genere, data di rilascio */}
                    <div className="col-3">
                        <h6>Genere:</h6>
                        <p>{movie.genre} </p>
                        <h6>Data di uscita:</h6>
                        <p>{movie.release_year}</p>
                    </div>

                    {/* col 3: director */}
                    <div className="col-3">
                        <h6>Cast:</h6>
                        <address><i>{movie.director}</i></address>
                    </div>
                </div>
            </section >

            {/* sezione delle recensioni */}
            < section id="reviews" >
                {/* parte superiore */}
                < div className="d-flex justify-content-between align-items my-3" >
                    {/* parte sinistra */}
                    < h5 > Le nostre recensioni</h5 >
                    {/* parte destra */}
                    < p > Average: star</p >
                </div >
                {/* parte inferiore */}
                {renderReviews()}
            </section >

            {/* sezione nuova recensione */}
            < section className="card bg-black" id="new-review" >
                <div className="card-header">
                    Inserisci la tua recensione
                </div>
                <div className="card-body">
                    <form action="..">
                        <div className="mb-3">
                            <label htmlFor="input-name" className="form-label">Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="Name"
                                placeholder="inserisci il tuo nome"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="input-review" className="form-label">Recensione</label>
                            <textarea
                                className="form-control"
                                id="Review"
                                rows="3"
                                placeholder="inserisci la tua recensione"
                            >

                            </textarea>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="input-vote" className="form-label">Voto</label>
                            <input
                                type="text"
                                className="form-control"
                                id="input-vote"
                                placeholder="inserisci il tuo voto"
                            />
                        </div>

                        <div className="d-flex justify-content-end">
                            <button className="btn btn-primary">invia</button>
                        </div>
                    </form>
                </div>











            </section >
        </>

    )
}