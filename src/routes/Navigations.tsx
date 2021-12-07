import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import { LazyLoad1, LazyLoad2, LazyLoad3 } from '../01.LazyLoad/pages/index'
import NavBar from './NavBar'

const Navigations = () => {
    return (
        <BrowserRouter>
            <div className="main-layout">
                <NavBar />
                <Routes>
                    <Route path="/lazy1" element={<LazyLoad1 />} />
                    <Route path="/lazy2" element={<LazyLoad2 />} />
                    <Route path="/lazy3" element={<LazyLoad3 />} />

                    <Route
                        path="/*"
                        element={<Navigate to="/lazy1" replace />}
                    />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default Navigations
