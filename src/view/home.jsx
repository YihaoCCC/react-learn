import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Outlet } from 'react-router-dom'
export default function Home () {
    
    let [counte,setCounte] = useState(0)
    const navigate = useNavigate()
    function goHome() {
      navigate('/home')
    }
    function goAbout() {
      navigate('/about?userId=1235')
    }
    function goindex() {
      navigate('/')
    }
    function add() {
        setCounte(counte+1)
    }   
    return (

        <div>
            <button onClick={goindex}>去首页</button>
            <button onClick={goHome}>去主页</button>
            <button onClick={goAbout}>去关于</button>
            <button onClick={add}>home+1</button>
            home: {counte}
            <p>子路由组件</p>
            <Outlet></Outlet>
        </div>

    )
}
