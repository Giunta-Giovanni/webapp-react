import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";


export default function Star({ vote }) {
    // inizializziamo l'array inizialmente vuoto
    let boxtar = [];

    // Costruisco l'array di stelle usando il ciclo for
    for (let index = 0; index < 5; index++) {
        // inserire all'interno del boxtar le stelle 
        boxtar.push(
            // mettile in riga con uno span e salvati per ognuna la chiave con valore indice ciclo
            <span key={index}>
                {/* se l'indici è minore del voto */}
                {index < vote ?
                    <FontAwesomeIcon icon={faStar} />
                    : // se l'indice è maggiore del voto
                    <FontAwesomeIcon icon={faStarRegular} />
                }
            </span>
        );
    }

    // Ritorno il box con le stelle già costruite
    return <div>{boxtar}</div>;
}