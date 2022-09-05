import OldApp from "./view/oldDashbord";
import Home from "./view/home";
import About from './view/about'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomeChild from "./view/homeChildren";

export default function App() {
    
    return (
      <>
        

        <BrowserRouter>
          <Link to='/oldHome'>旧版首页</Link>
          
          <Link to='/'>home</Link>

          <Link to='/about'>关于</Link>
          <Routes>
            <Route path="/oldHome" element={<OldApp/>}></Route>
            <Route path="/" element={<Home/>}>
              <Route index  element={<HomeChild></HomeChild>}></Route>
            </Route>
            <Route path="/about" element={<About/>}></Route>
          </Routes>
        </BrowserRouter>
      
      
      </>
      
    )
}