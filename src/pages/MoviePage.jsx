import ReviewCard from "../components/ReviewCard"
export default function MoviePage() {
    return (
        <>
            {/* sezione del film */}
            <section id="movie-details">
                <div className="row">
                    <div className="col-4 movie-cover">
                        <img src="http://localhost:3000/img/movies_cover/inception.jpg" alt="" />
                    </div>
                    <div className="col-8">
                        <h1>Titolo del Film</h1>
                        <address><i>nome director</i></address>
                        <span>genere </span>
                        <span>anno di uscita</span>
                        <p>abstract del film con continuazione...</p>
                    </div>
                </div>
            </section >
            {/* sezione delle recensioni */}
            <section id="reviews">

                {/* parte superiore */}
                <div className="d-flex justify-content-between align-items my-3">
                    {/* parte sinistra */}
                    <h5>Le nostre recensioni</h5>
                    {/* parte destra */}
                    <p>Average: star</p>
                </div>

                {/* parte inferiore */}
                <ReviewCard />
                <ReviewCard />
                <ReviewCard />
                <ReviewCard />
                <ReviewCard />
            </section>

            <section className="card" id="new-review" >
                <div class="card-header">
                    Inserisci la tua recensione
                </div>
                <div class="card-body">
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