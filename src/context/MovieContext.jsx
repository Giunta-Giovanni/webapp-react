// Importiamo la funzione createContext da React, che ci permette di creare un contesto globale
import { createContext } from "react";

// Creiamo un nuovo contesto chiamato MediaContext
// Questo contesto servirà a condividere dati tra componenti senza dover passare le props manualmente
const MovieContext = createContext();

// Esportiamo il contesto 
export default MovieContext;

