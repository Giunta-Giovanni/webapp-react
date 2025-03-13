export default function ReviewCard({ reviewProp }) {
    const { created_at, id, movie_id, name, text, vote } = reviewProp
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
                            Vote:{vote}
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