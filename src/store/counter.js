// 2：引入mobx
import { makeAutoObservable } from 'mobx'

class CounterStroe {
    // 1:定义数据
    counte =  0
    constructor() {
        // 3: 将此类变成mobx的监控对象（类里面的数据也变成了响应式）
        makeAutoObservable(this)
    }
    // 4：定义action函数用来修改数据 (注意一定是箭头函数，不然在react中使用时，this会变成undefined 所以要么在这里写，要么在事件中写箭头函数)
    addCounter = () => {
        this.counte++
    }
}


// 5：实例化并导出供外部使用

const counterStroe = new CounterStroe()
export default counterStroe