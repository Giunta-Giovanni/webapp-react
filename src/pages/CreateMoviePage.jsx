import { useState } from 'react';
import DatePicker from "react-datepicker";
import axios from 'axios';
import { Link } from "react-router-dom"
import "react-datepicker/dist/react-datepicker.css"; // Importa i CSS di react-datepicker


const endpoint = 'http://localhost:3000/api/movies'
export default function CreateMoviePage() {
    // navigazione
    const emptyForm = {
        title: "",
        director: "",
        genre: "",
        release_year: "",
        abstract: "",
        image: null,
        bg_image: null
    }

    const [startDate, setStartDate] = useState(); // Gestisci la data

    const [formDataObj, setFormDataObj] = useState(emptyForm)

    function handleDateChange(date) {
        // 'date' è un oggetto Date che rappresenta la data selezionata dal DatePicker.
        setStartDate(date);
        setFormDataObj({
            ...formDataObj, release_year: date.getFullYear()
        })
    }

    function setFieldValue(e) {
        const { value, name } = e.target;
        if (name === "image" || name === "bg_image") {
            setFormDataObj({ ...formDataObj, [name]: e.target.files[0] })
        } else {
            setFormDataObj({ ...formDataObj, [name]: value });
        }
    }
    const previewCover = formDataObj.image ? URL.createObjectURL(formDataObj.image) : null;
    const previewBg = formDataObj.bg_image ? URL.createObjectURL(formDataObj.bg_image) : null;

    console.log(previewCover)



    // effettuiamo la chiamata post per salvalvare i dati nel database
    function handleSubmit(e) {
        // disabilitiamo il refresh pagina
        e.preventDefault();

        // effettuiamo la chiamata con post
        axios.post(endpoint, formDataObj, { headers: { "Content-Type": "multipart/form-data" } })
            .then(
                setFormDataObj(emptyForm),
                setStartDate(undefined)
            )
            // .then(
            //     () => { navigate("/") }
            // )
            .catch((err) => {
                console.log(err);
            });
    }

    return (
        <>
            <section className='add-movie-section'>
                <h1>Inserisci un nuovo film</h1>
                {/* form */}
                <form onSubmit={handleSubmit}>
                    <div className='row'>
                        <div className="col-6 mb-3">
                            {/* title */}
                            <label htmlFor="input-title" className="form-label">Titolo</label>
                            <input
                                type="text"
                                name="title"
                                value={formDataObj.title}
                                onChange={setFieldValue}
                                className="form-control"
                                id="input-title"
                                placeholder="inserisci il titolo del film"
                            />
                        </div>
                        <div className="col mb-3">
                            {/* Director */}
                            <label htmlFor="input-director" className="form-label">Director</label>
                            <input
                                type="text"
                                name="director"
                                value={formDataObj.director}
                                onChange={setFieldValue}
                                className="form-control"
                                id="input-director"
                                placeholder="inserisci il nome del regista"
                            />
                        </div>

                        <div className="col mb-3">
                            {/* Year */}
                            <div>
                                <label htmlFor="input-year" className="form-label">Release year</label>
                            </div>
                            <DatePicker
                                // Imposta la data selezionata come quella attuale
                                selected={startDate}
                                // Quando viene selezionata una nuova data, aggiorna lo stato 'startDate' e 'release_year' nel form
                                onSelect={handleDateChange}
                                // Mostra solo l'anno nel picker, nascondendo mese e giorno
                                showYearPicker
                                // Imposta il formato della data per visualizzare solo l'anno
                                dateFormat="yyyy"
                                // Numero di anni visibili nel picker
                                yearItemNumber={9}
                                placeholderText="Inserisci l'anno di rilascio"
                                className="form-control"
                            />
                        </div>
                    </div>
                    <section className='row'>
                        <div className="col-3 mb-3">
                            {/* Genre */}
                            <label htmlFor="input-genre" className="form-label">Genere</label>
                            <input
                                type="text"
                                name="genre"
                                value={formDataObj.genre}
                                onChange={setFieldValue}
                                className="form-control"
                                id="input-genre"
                                placeholder="inserisci il genere del film"
                            />
                        </div>
                        <div className="col mb-3">
                            {/* Abstract */}
                            <label htmlFor="abstract" className="form-label">Abstract</label>
                            <textarea
                                type="text"
                                name="abstract"
                                value={formDataObj.abstract}
                                onChange={setFieldValue}
                                className="form-control"
                                id="abstract"
                                rows='3'
                                placeholder="inserisci l'abstract"
                            />
                        </div>
                    </section>


                    {/* sezione file */}
                    <section className='row'>
                        <div className="mb-3 col">
                            <div>
                                <label htmlFor="image" className="form-label">Carica l'immagine di copertina</label>
                            </div>
                            <input
                                type="file"
                                id="image"
                                name="image"
                                onChange={setFieldValue}
                            />
                            {previewCover && (
                                <img
                                    src={previewCover}
                                    className='preview_cover'
                                    alt='preview'
                                />
                            )}
                        </div>
                        <div className="mb-3 col">
                            <div>
                                <label htmlFor="bg_image" className="form-label">Carica l'immagine di background</label>
                            </div>

                            <input
                                type="file"
                                id="bg_image"
                                name="bg_image"
                                onChange={setFieldValue}

                            />
                            {previewBg && (
                                <img
                                    src={previewBg}
                                    className='preview_bg'
                                    alt='preview'
                                />
                            )}
                        </div>
                    </section>


                    <div className="d-flex justify-content-end">
                        <Link to='/'>
                            <button type="button" className="btn btn-secondary mx-3">Back</button>
                        </Link>
                        <button type="submit" className="btn btn-primary">Invia</button>
                    </div>
                </form>

            </section>

        </>
    );
}