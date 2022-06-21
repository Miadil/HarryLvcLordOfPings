import { useEffect, useState } from "react"
import Card from "../components/Card"

import "./Characters.css"
const Characters = () => {
	const [characters, setCharacters] = useState([])

	useEffect(() => {
		const getData = () => {
			fetch("https://harrypotterapi20.herokuapp.com/characters")
				.then((res) => res.json())
				.then((res) => console.log(res) || setCharacters(res))
		}
		getData()
	}, [])

	return (
		<div>
			Characters ! poulet
			<div className="GaleryCharacters">
				{characters.map((character) => (
					<Card
						key={character.id}
						name={character.name}
						image={character.image}
						id={character.id}
					/>
				))}
			</div>
		</div>
	)
}
export default Characters
