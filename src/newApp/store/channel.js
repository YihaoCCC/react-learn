import { makeAutoObservable, runInAction } from "mobx";
import { http } from "../request";

class ChannelStore {
    ChannelList = []
    constructor() {
        makeAutoObservable(this)
    }
    getChannelList = () => {
        return http.get('/channels').then(res => {
            runInAction(() => {
                this.ChannelList = res.data.channels
            })
        })
    }

}

export default ChannelStore