import React from 'react'
import "./TodoTask.css";
import { ITask } from '../interface'

interface Props  {
    task : ITask;
    completeTask(taskNameToDelet:string):void;
  
}

const TodoTask = ({task, completeTask}:Props ) => {
  // console.log(task._id)

 
    
  return (
    <div className='task-container'>
      <div className="content">
        <span className='taskName'>{task.taskName}</span>
        <span className='taskDeadLine'>{task.deadLine} days</span>
      </div>
      <button onClick={() => {completeTask(task._id)}}>X</button>
    </div>
  )
}

export default TodoTask
