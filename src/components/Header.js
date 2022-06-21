import { NavLink } from "react-router-dom"
import "./Header.css"

const Header = () => {
	return (
		<div className="navbar">
			<NavLink to="/" className="navbar-logo">
				Harry Potter
			</NavLink>
			<ul className="navbar-list">
				<NavLink
					to="/"
					className={(navData) => (navData.isActive ? "chosen" : "")}
				>
					<li className="itemNavMenu">Home</li>
				</NavLink>
				<NavLink
					to="/characters"
					className={(navData) => (navData.isActive ? "chosen" : "")}
				>
					<li className="itemNavMenu">Characters</li>
				</NavLink>
			</ul>
		</div>
	)
}
export default Header
