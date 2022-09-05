// 1:import correlation component

import React from "react"
import counterStroe from "./conterStore"
import taskStore from './taskStore'

// 2:create store class

class RootStroe {
    // 3: drive this two componment into class's constuctor function
    // this step purpose is bind componment with RootStore's this
    constructor() {
        this.counterStroe = counterStroe
        this.taskStore = taskStore
    }
}

// 4：new instance of RootStore
const rootStore = new RootStroe()
// 5：introduce React.createContext to make rooteStore 
const context = React.createContext(rootStore)