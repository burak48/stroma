import React from 'react' // eslint-disable-line
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'
import BlogDetail from './components/BlogDetail'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/home" element={<Home />} />
                <Route path="/blog/:id" element={<BlogDetail />} />
                <Route path="/" element={<Navigate to="/login" />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
