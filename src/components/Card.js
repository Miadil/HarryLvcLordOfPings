import { Link } from "react-router-dom"
import "./Card.css"

const Card = ({ name, image, id }) => {
	const linkIdCharacter = `/characters/${id}`
	return (
		<div>
			<Link to={linkIdCharacter}>
				<p>{name}</p>
				<img src={image} alt={name} className="CardImg" />
			</Link>
		</div>
	)
}
export default Card
