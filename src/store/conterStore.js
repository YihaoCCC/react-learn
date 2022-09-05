import { makeAutoObservable } from "mobx";

class CounterStroe  {
    constructor() {
        makeAutoObservable(this)
    }
    counte = 0
    addCounte(num) {
        this.counte += num 
    }
}

const counte = new CounterStroe()

export default counte