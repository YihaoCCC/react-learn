import { makeAutoObservable } from "mobx";


class Todo {
    todoList = [
        {
            id: 0,
            content: '这-是系统内置的一个代办',
            time: '2022-08-06 20:02:00',
            name: 'Mr.Chen',
            isFinish: true
        }
    ]
    
    constructor () {
        makeAutoObservable(this)
    }

    addTodo = (item) =>  {
        this.todoList.push(item)
        console.log(this.todoList)
    }

    changeStatus (id) {
        this.todoList.forEach(item => {
            if(item.id === id) {
                item.isFinish = !item.isFinish
            }
        })
        console.log(this.todoList[0].isFinish)
    }

    getFinishedTodo (type)  { 
        console.log(type)
        return type === 'finish' ?  this.todoList.filter(item => item.isFinish) : this.todoList.filter(item => !item.isFinish)    
        // return newList
        // this.todoList = this.todoList.filter(item => !item.isFinish)
    }

    deleteStoreTodo (id) {
        this.todoList = this.todoList.filter(item => item.id !== id)
    }


    
}

export default Todo