import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import NavBar from './NavBar'
const Navigations = () => {
    return (
        <BrowserRouter>
            <div className="main-layout">
                <NavBar />
                <Routes>
                    <Route path="/about" element={<h1>About Pages</h1>} />
                    <Route path="/users" element={<h1>Users Pages</h1>} />
                    <Route path="/" element={<h1>Home Pages</h1>} />

                    <Route path="/*" element={<Navigate to="/" replace />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default Navigations
