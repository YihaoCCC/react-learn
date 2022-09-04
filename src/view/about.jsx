import { useState } from "react"
import { useSearchParams } from "react-router-dom"
// 1：引入stroe中的类
import counterStroe from "../store/counter"
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
            mobx中的counter：{counterStroe.counte}
            <button onClick={counterStroe.addCounter}>mobx+1</button>
        </div>
    )
}
// 4:对使用的组件进行包裹
export default observer(Home)