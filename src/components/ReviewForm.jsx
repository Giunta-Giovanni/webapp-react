import { useEffect, useState } from "react"
import axios from "axios";
export default function ReviewForm({ movie_id, reloadReview }) {

    const endpoint = `http://localhost:3000/api/movies/${movie_id}/reviews`
    // salvare in variabile il form inizialmente vuoto
    const initialForm = {
        name: "",
        text: "",
        vote: 1
    }

    // variabile di stato per capsulare le info del form
    const [formData, setFormData] = useState(initialForm);

    // funzione di creazione oggetto valori form
    function setFieldValue(e) {
        const { value, name } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    function submitReview(e) {
        e.preventDefault();

        axios.post(endpoint, formData, {
            headers: { 'Content-Type': 'application/json' }
        })
            // prima operazione per inviare i dati
            .then(response => {
                setFormData(response.data);
            })
            // se la prima operazione è stata eseguita con successo effettua questa
            // seconda operazione per refresh componenti
            .then(() => {
                // resetta il form una volta inviato i valori
                setFormData(initialForm)
                // aggiorna la pagina
                reloadReview()

            })
            .catch(err => console.error("Error submitting review:", err));
    }



    return (
        <form onSubmit={submitReview} action="..">
            <div className="mb-3">
                <label htmlFor="input-name" className="form-label">Name</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    className="form-control"
                    id="Name"
                    placeholder="inserisci il tuo nome"
                    onChange={setFieldValue}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="input-review" className="form-label">Recensione</label>
                <textarea
                    name="text"
                    value={formData.text}
                    className="form-control"
                    id="Review"
                    rows="3"
                    placeholder="inserisci la tua recensione"
                    onChange={setFieldValue}
                >

                </textarea>
            </div>
            <div className="mb-3">
                <label htmlFor="input-vote" className="form-label">Voto</label>
                <input
                    type="number"
                    name="vote"
                    value={formData.vote}
                    min='1'
                    max='5'
                    className="form-control"
                    id="input-vote"
                    placeholder="inserisci il tuo voto"
                    onChange={setFieldValue}
                />
            </div>

            <div className="d-flex justify-content-end">
                <button
                    type="submit"
                    className="btn btn-primary"
                >invia
                </button>
            </div>
        </form>
    )
}