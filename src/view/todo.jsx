import { observer } from 'mobx-react-lite'
import { useState } from 'react'
import todoStyle from '../scss/todo.scss'
import store from '../store'

function Todo () {
    const { todoStore } = store()
    const [newTodo, setNewTodo] = useState({
        id: 2,
        content: 'testtesttesttesttesttestetst',
        time: '2022-08-06 20:02:00',
        name: 'Mr.Chen',
        isFinish: false
    })
    return(
        <div style={{width:"100%", background: '#333', height:'100vh'}}>
            <div className='content'>
                <h1>My-Todo</h1>
                <div className='todo'>
                    <div className='leftContent'>
                        <button> 全部 </button>
                        <button> 已完成 </button>
                        <button> 未完成 </button>
                    </div>
                    <div className='rightContent'>
                        {  
                            todoStore.todoList.length !== 0 ?  todoStore.todoList.map((item,index) => {
                                return (
                                    <div className='todoItem' key={index}>
                                        <input type="checkbox" defaultChecked={item.isFinish} onClick={() => todoStore.changeStatus(item.id)}/>
                                        <div className='itemBox'>
                                            <p>{item.content}</p>
                                            <div className="sub">
                                                {item.name}
                                                <span>
                                                    {item.time}
                                                </span>                    
                                            </div>
                                        </div>
                                    </div>
                                )
                            }) 
                            :
                            <div>
                                暂无信息
                            </div> 
                        }
                    </div>
                </div>
                <div className='addTodo'>
                    <input type="textarea" />
                    <button onClick={() => todoStore.addTodo(newTodo)}>添加代办</button>
                </div>
            </div>
        </div>
    )
}

export default  observer(Todo)