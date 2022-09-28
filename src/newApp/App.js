import { unstable_HistoryRouter as HistoryRouter, Routes, Route}  from 'react-router-dom'
import { history } from './utils/history.js'
// import { Navigate } from 'react-router-dom'
import Login from './Login/index.js'
import Layout from './Layout/index.js'
import { AuthCom } from './utils/AuthCom.jsx'
import Article from './article/index.jsx'
import Publish from './publish/index.jsx'
import Home from './home/index.jsx'

export default function App() {
    return (
        <HistoryRouter history={history}>
            <Routes>
                <Route path='/login' element={<Login/>}></Route>
                {/* <Route path='/*' 
                    element={ 
                        window.localStorage.getItem('react-token') !== null 
                        ? 
                        <Layout/> 
                        : 
                        <Navigate to='/login' replace></Navigate>
                        }>
                </Route> */}
                <Route path='/*' element={<AuthCom><Layout></Layout></AuthCom>}>
                    <Route index element={<Home></Home>}></Route>
                    <Route path='article' element={<Article></Article>}></Route>
                    <Route path='publish' element={<Publish></Publish>}></Route>
                </Route>
            </Routes>
        </HistoryRouter>
    )
}