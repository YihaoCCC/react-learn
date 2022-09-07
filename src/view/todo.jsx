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
        setTodo('')
    }
    const deleteTodo = (id) => {
        todoStore.deleteStoreTodo(id)
        getAll()
    }
    return(
        <div style={{width:"100%", background: '#333', height:'100vh'}}>
            <div className='content'>
                <h1>My-Todo</h1>
                <div className='todo'>
                    <div className='leftContent'>
                        <button onClick={getAll}><span>全部</span><i></i></button>
                        <button onClick={getFinish}> <span>已完成</span><i></i> </button>
                        <button onClick={getUnFinish}> <span>未完成</span><i></i> </button>
                    </div>
                    <div className='rightContent'>
                        {  
                            TodoList.length !== 0 ?  TodoList.map((item,index) => {
                                return (
                                    <div className='todoItem' key={index}>
                                        <div className='itemLeft'>
                                            <input type="checkbox" checked={item.isFinish} onChange={() => todoStore.changeStatus(item.id)}/>
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
                                        <div className="delete">
                                            <button  onClick={() => deleteTodo(item.id)}>
                                               
                                                <span>  删除</span>
                                            </button>
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
                    <div>
                        <input placeholder='请输入待办' type="textarea" onInput={inputTodo} value={todo}/>
                    </div>
                    <button onClick={addNewTodo}>
                        <span>添加代办</span><i></i>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default  observer(Todo)