import { observer } from "mobx-react-lite";
import { useState } from "react"
import useStore from "../store"
function  HomeChild () {
    const store = useStore()
    console.log(store);
    const [number, setNumber] = useState(1)
    const addNumber = () => {
        store.counterStroe.addCount(number)
        setNumber(number+1)
    }
    return(
        <div>
            这里是home的子路由
            <p>模块化的counter---store</p>
            {store.counterStroe.count}
            <br />
            <p>本组件自己的number：{number}</p>
            <button onClick={addNumber}>counter++</button>
            <p>-----------------------------------------------</p>

            <p>模块化的task----store</p>
            {store.taskStore.taskList.map((item,index)=> {
                return (
                    <span key={index}>{item}</span>
                )
            })}
            <button onClick={store.taskStore.addTask}>添加task</button>
            
        </div>
    )
}
export default observer(HomeChild)