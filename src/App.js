import OldApp from "./view/oldDashbord";
import Home from "./view/home";
import About from './view/about'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export default function App() {
    return (
      <BrowserRouter>
        <Link to='/'>旧版首页</Link>
        <Link to='/home'>新版首页</Link>
        <Link to='/about'>关于</Link>
        <Routes>
          <Route path="/" element={<OldApp/>}></Route>
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
        </Routes>
      </BrowserRouter>
    )
}