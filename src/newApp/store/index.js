import LoginStore from "./login";
import UserStore from "./user";
import ChannelStore from "./channel";
import React from "react";
class Store  {
    constructor() {
        this.LoginStore = new LoginStore()
        this.UserStore = new UserStore()
        this.ChannelStore = new ChannelStore()
    }
}


const rootStore = new Store()
// 5：introduce React.createContext to make rooteStore 
const context = React.createContext(rootStore)

const useStore = () => React.useContext(context)

export default useStore
