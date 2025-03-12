export default function BoxLink(props) {
    return (
        <ul className="p-0">
            {props.linkCategory.map(link => (
                <li className="footer-link" key={link.id} >
                    <a className="footer-linka" href={link.url}>{link.text}</a>
                </li>
            ))}
        </ul >
    )
}