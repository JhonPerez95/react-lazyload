import logo from '../logo.svg'
import { NavLink } from 'react-router-dom'
const NavBar = () => {
    const isActived = (isActive: boolean) => {
        return isActive ? 'nav-active' : ''
    }

    return (
        <nav>
            <img src={logo} alt="React Logo" />
            <ul>
                <li>
                    <NavLink
                        to="/"
                        className={({ isActive }) => isActived(isActive)}
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/about"
                        className={({ isActive }) => isActived(isActive)}
                    >
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/users"
                        className={({ isActive }) => isActived(isActive)}
                    >
                        Users
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar
