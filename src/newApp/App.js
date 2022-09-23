import { BrowserRouter, Routes, Route}  from 'react-router-dom'

import Login from './Login/index.js'
import Layout from './Layout/index.js'
export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/login' element={<Login/>}></Route>
                <Route path='/' element={<Layout/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}