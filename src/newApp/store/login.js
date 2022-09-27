import { makeAutoObservable } from 'mobx'
import { http } from '../request/index'

class LoginStore {
    token = window.localStorage.getItem('react-token') || ''
    
    
    constructor() {
        makeAutoObservable(this)
    }


    setToken = ({mobile,code}) => {
        return http.post('http://geek.itheima.net/v1_0/authorizations', {
            mobile,
            code
        }).then((res) => {
            this.token = res.data.token
            window.localStorage.setItem('react-token', this.token)
            console.log(`output->`,this.token)
            return 1
        })
    }
    
}


export default LoginStore