import axios from "axios";
import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard"
export default function HomePage() {

    // salviamo le variabili di stato
    const [movies, setMovies] = useState([])

    // funzione di chiamata all'api per tutti i film
    function fetchMovies() {
        axios.get('http://localhost:3000/api/movies')
            .then(res => {
                setMovies(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    };

    // all'avvio della pagina richiama tutti i movies
    useEffect(fetchMovies, []);

    // manda un console log ogni volta che i film vengono aggiornati
    useEffect(() => {
        if (movies.length > 0) {
            console.log("Film aggiornati:", movies);
        }
    }, [movies]);


    const rendermovies = () => {
        return movies.map(
            movie => {
                return (
                    <MovieCard key={movie.id} movieProp={movie} />
                )
            }

        )
    }

    return (
        <>
            <h1>BEST MOVIES</h1>
            <section className="card-section">
                {rendermovies()}
            </section>
        </>


    )
}