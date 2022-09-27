import LoginStore from "./login";
import React from "react";
class Store  {
    constructor() {
        this.LoginStore = new LoginStore()
    }
}


const rootStore = new Store()
// 5：introduce React.createContext to make rooteStore 
const context = React.createContext(rootStore)

const useStore = () => React.useContext(context)

export default useStore
