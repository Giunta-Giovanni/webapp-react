// importiamo la parte di gestione delle rotte da modulo react-router
import { BrowserRouter, Routes, Route } from "react-router-dom";

// importiamo il layout
import DefaultLayout from './layout/DefaultLayout';

// importiamo le pagine
import HomePage from "./pages/HomePage";
import MoviePage from "./pages/MoviePage";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route index path="/" element={<HomePage />} />
          <Route path="/Movie/:id" element={<MoviePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}