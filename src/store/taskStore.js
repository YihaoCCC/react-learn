import { makeAutoObservable } from 'mobx'

class TaskStore {
  taskList = [1,2,3]
  constructor() {
    makeAutoObservable(this)
  }
  addTask = () => {
    this.taskList.push('vue', 'react')
  }
}

const task = new TaskStore()


export default task