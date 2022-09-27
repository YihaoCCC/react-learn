import { Navigate } from "react-router-dom"




export function AuthCom(props) {
    console.log(props)
    return (
        <>
            {
                window.localStorage.getItem('react-token') ? 
                props.children : 
                <Navigate to='/login'/>
            }
        </>
    )
}