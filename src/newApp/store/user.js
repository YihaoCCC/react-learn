import { makeAutoObservable, runInAction } from "mobx";
import { http } from "../request";

export default class UserStore {
    userInfo = {}
    
    constructor() {
        makeAutoObservable(this)
    }

    getUserInfo = () => {
        return http.get('/user/profile').then((res) => {
            runInAction(() => {
                this.userInfo = res.data
            })
           
        })
    }
}