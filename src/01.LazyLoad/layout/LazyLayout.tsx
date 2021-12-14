import { Navigate, NavLink, Route, Routes } from 'react-router-dom'
import { LazyLoad1, LazyLoad2, LazyLoad3 } from '../pages'

export const LazyLayout = () => {
  return (
    <div>
      <h2> LazyLayout </h2>

      <ul>
        <li>
          <NavLink to="Lazy1">Lazy1</NavLink>
        </li>
        <li>
          <NavLink to="Lazy2">Lazy2</NavLink>
        </li>
        <li>
          <NavLink to="Lazy3">Lazy3</NavLink>
        </li>
      </ul>
      <Routes>
        <Route path="lazy1" element={<LazyLoad1 />} />
        <Route path="lazy2" element={<LazyLoad2 />} />
        <Route path="lazy3" element={<LazyLoad3 />} />

        {/* <Route path="*" element={<div>Not Fount</div>} /> */}
        <Route path="/*" element={<Navigate to="lazy1" />} />
      </Routes>
    </div>
  )
}

export default LazyLayout
