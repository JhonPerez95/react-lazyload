import logo from '../logo.svg'
import { NavLink } from 'react-router-dom'
import { routes } from './routes'
const NavBar = () => {
  const isActived = (isActive: boolean) => {
    return isActive ? 'nav-active' : ''
  }

  return (
    <nav>
      <img src={logo} alt="React Logo" />
      <ul>
        {routes.map(({ to, name }) => (
          <li key={to}>
            <NavLink to={to} className={({ isActive }) => isActived(isActive)}>
              {name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default NavBar
