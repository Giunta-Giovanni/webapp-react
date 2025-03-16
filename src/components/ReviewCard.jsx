// importiamo le stelle
import Star from "../data/function/Star"
export default function ReviewCard({ reviewProp }) {
    const { name, text, vote } = reviewProp


    return (
        <div className="card mb-4">
            <div className="card-body">
                <div className="row">
                    <div className="col-6">
                        <address>
                            <i>{name}</i>
                        </address>
                    </div>
                    <div className="col-6 rank">
                        <strong>
                            {/* trasformiamo il voto in stelle */}
                            {<Star vote={vote} />}
                        </strong>
                    </div>
                    <div className="col-12">
                        <p className="card-text ">
                            {text}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}