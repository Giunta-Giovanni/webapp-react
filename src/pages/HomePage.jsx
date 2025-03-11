import axios from "axios";
import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard"
export default function HomePage() {
    function fetchMovies() {
        axios.get('http://localhost:3000/api/movies')
            .then(res => {
                console.log(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    useEffect(() => {
        fetchMovies();
    }, []);

    return (

        <section className="card-section">
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
        </section>

    )
}