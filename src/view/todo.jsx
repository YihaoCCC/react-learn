import { observer } from 'mobx-react-lite'
import { useState } from 'react'
import '../scss/todo.scss'
import store from '../store'

function Todo () {
    const { todoStore } = store()
    const [id, setId] = useState(1)
    const [todo, setTodo] = useState('')
    const [TodoList, setTodoList] = useState(todoStore.todoList)
    const getFinish = () => {  
        setTodoList(todoStore.getFinishedTodo('finish'))
    }
    const getUnFinish = () => {
        setTodoList(todoStore.getFinishedTodo('unfinfish'))
    }
    const getAll = () => {
        setTodoList(todoStore.todoList)
    }
    const inputTodo = (e) => {
        setTodo(e.target.value)
    }
    const getTime = () => {
        let now = new Date();
        let year = now.getFullYear(); //得到年份
        let month = now.getMonth()+1;//得到月份
        let date = now.getDate();//得到日期
        // let day = now.getDay();//得到周几
        let hour= now.getHours();//得到小时数
        let minute= now.getMinutes();//得到分钟数
        let second= now.getSeconds();//得到秒数
        return `${year}-${month}-${date} ${hour}:${minute}:${second}`
    }
    const addNewTodo = () => {
        let newTodo = {
            id: id,
            content: todo,
            time: getTime(),
            name: 'Mr.Chen',
            isFinish: false
        }
        todoStore.addTodo(newTodo)
        setId(id+1)
        getAll()
    }
    return(
        <div style={{width:"100%", background: '#333', height:'100vh'}}>
            <div className='content'>
                <h1>My-Todo</h1>
                <div className='todo'>
                    <div className='leftContent'>
                        <button onClick={getAll}> 全部 </button>
                        <button onClick={getFinish}> 已完成 </button>
                        <button onClick={getUnFinish}> 未完成 </button>
                    </div>
                    <div className='rightContent'>
                        {  
                            TodoList.length !== 0 ?  TodoList.map((item,index) => {
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
                    <input type="textarea" onInput={inputTodo}/>
                    <button onClick={addNewTodo}>添加代办</button>
                </div>
            </div>
        </div>
    )
}

export default  observer(Todo)