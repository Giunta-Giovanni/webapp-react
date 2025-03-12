export default function ReviewCard({ reviewProp }) {
    const { created_at, id, movie_id, name, text, vote } = reviewProp
    return (
        <div className="card mb-4 bg-black">
            <div className="card-body">
                <p className="card-text">
                    {text}
                </p>
                <strong>
                    Vote:{vote}
                </strong>
                <address>
                    <i>By {name}</i>
                </address>
            </div>
        </div>
    )
}