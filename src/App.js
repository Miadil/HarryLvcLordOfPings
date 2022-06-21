import { Route, Routes } from "react-router-dom"

import Header from "./components/Header"

import Characters from "./screens/Characters"
import CharactersDetails from "./screens/CharactersDetails"
import Home from "./screens/Home"

import "./App.css"

function App() {
	return (
		<div className="App">
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/characters" element={<Characters />} />
				<Route path="/characters/:id" element={<CharactersDetails />} />
			</Routes>
		</div>
	)
}

export default App
