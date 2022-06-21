import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const CharactersDetails = () => {
	const [character, setCharacter] = useState({})
	const params = useParams()
	console.log(params.id)
	useEffect(() => {
		const id = params.id
		fetch(`https://harrypotterapi20.herokuapp.com/characters/${id}`)
			.then((res) => res.json())
			.then(
				(res) =>
					console.log("res[0] :", res[0], "res :", res) || setCharacter(res[0])
			)
	}, [])
	const {
		name,
		ancestry,
		dateOfBirth,
		eyeColour,
		gender,
		hairColour,
		house,
		image,
		species,
	} = character
	return (
		<div>
			<h2>{name}</h2>
			<div>
				<img src={image} alt={name} />
			</div>
			<div>{house}</div>
			<div>Caracteristique :</div>
			<div>Blood : {ancestry}</div>
			<div>date Of Birth : {dateOfBirth}</div>
			<div>hair Colour : {hairColour}</div>
			<div>eye Colour : {eyeColour}</div>
			<div>species : {species}</div>
			<div>gender : {gender}</div>
		</div>
	)
}
export default CharactersDetails
