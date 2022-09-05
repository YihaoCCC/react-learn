import { useState } from "react"
import { useSearchParams } from "react-router-dom"
// 1：引入stroe中的类
import counterStore from "../store/counter"
// 3:引入 mobx-react-lite使两者联系起来
import { observer } from 'mobx-react-lite'
function Home () {
    let [counte,setCounte] = useState(0)
    const  [ params ] = useSearchParams()
    
    return (
        <div>
            {counte}
            <p>传递过来的参数是：{params.get('userId')}</p>
            <button onClick={() => setCounte(counte+1)}>+1</button>
            <h2>mobx修改counter</h2>
            {/* 2: 引用 */}
            mobx中的counter：{counterStore.counte}
            <button onClick={() => counterStore.addCounter(3)}>mobx+1</button>
            {/* 3：使用mobx中的计算属性 */}
            <h4>使用mobx中的计算属性 :{counterStore.filterList2.join('-')}</h4>
            <p>给mobx中的数组添加值</p>
            <button onClick={counterStore.changeList}> 修改mobx中list</button>
        </div>
    )
}
// 4:对使用的组件进行包裹
export default observer(Home)