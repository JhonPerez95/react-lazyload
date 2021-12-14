import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import { Suspense } from 'react'

import { routes } from './routes'
import NavBar from './NavBar'

const Navigations = () => {
  return (
    <Suspense fallback={<span>Cargando.....</span>}>
      <BrowserRouter>
        <div className="main-layout">
          <NavBar />
          <Routes>
            {routes.map(({ path, Component }) => (
              <Route key={path} path={path} element={<Component />} />
            ))}
            <Route path="/*" element={<Navigate to={routes[0].to} replace />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  )
}

export default Navigations
