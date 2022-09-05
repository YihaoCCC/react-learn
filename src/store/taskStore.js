import { makeAutoObservable } from "mobx";

class TaskStore {
    taskList = []
    constructor () {
        makeAutoObservable(this)
    }
    addTask(task) {
        this.taskList.push(task)
    }
}

const task = new TaskStore()

export default task