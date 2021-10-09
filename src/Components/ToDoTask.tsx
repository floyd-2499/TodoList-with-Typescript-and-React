import React from 'react'
import { ITask } from '../Interface'

//interface
interface Prpos {
    task: ITask;
    completeTask(taskName: string):void;
}


const ToDoTask = ({task, completeTask}: Prpos) => {
    return (
        <div className="task">
            <div className="content">
                <span>{task.taskName}</span>
                <span>{task.deadline}</span>
            </div>
            <button onClick={() => completeTask(task.taskName)}>X</button>
        </div>
    )
}

export default ToDoTask
