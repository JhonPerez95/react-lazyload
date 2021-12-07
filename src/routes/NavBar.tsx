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
                        to="/lazy1"
                        className={({ isActive }) => isActived(isActive)}
                    >
                        lazy1
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/lazy2"
                        className={({ isActive }) => isActived(isActive)}
                    >
                        lazy2
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/lazy3"
                        className={({ isActive }) => isActived(isActive)}
                    >
                        lazy3
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar
