import React, {FC, ChangeEvent, useState,useEffect} from 'react';
import './App.css';
import {ITask} from "./interface";
import TodoTask from './components/TodoTask';
import axios from "axios";



const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [deadLine, setDeadLine] = useState<number>(0)
  const [todoList, setTodoList] = useState<ITask[]>([])

  const handleChange = (event:ChangeEvent<HTMLInputElement>): void => {
    if(event.target.name === "task"){
      setTask(event.target.value)
    } else {
      setDeadLine(Number(event.target.value))
    }
  }

  type CreateTaskResponse = {
    taskName: string;
    deadLine: number;
  };

  type User = {
    taskName:string;
    deadLine:number;
  }
  // type GetTaskResponse = {
  //   data: User[];
  // }

  const fetchTask = async() => {
    try {
      const { data, status } = await axios.get<any>(
        'http://localhost:4011/task',
        {
          headers: {
            Accept: 'application/json'
          },
        },
      );
        setTodoList(data.myData.reverse())
        console.log(data.myData)

    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log('error message: ', error.message);
        // return error.message;
      } else {
        console.log('unexpected error: ', error);
        // return 'An unexpected error occurred';
      }
    }
  }

  useEffect(()=>{
    fetchTask()
  },[])
  

  const addTask = async() => {
    const newTask = {taskName:task, deadLine: deadLine}
    // setTodoList([...todoList, newTask])
    setTask("");
    setDeadLine(0);

    try {
      const { data, status } = await axios.post<any>(
        'http://localhost:4011/task',
        { taskName: newTask.taskName, deadLine: newTask.deadLine },
        {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
        },
      );
      // todoList(data)
  
      console.log(JSON.stringify(data, null, 4));

  
      console.log(status);

    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log('error message: ', error.message);
        // return error.message;
      } else {
        console.log('unexpected error: ', error);
        // return 'An unexpected error occurred';
      }
    }
  }
const completeTask =  async  (taskNameToDelete:string) => {
  // console.log(taskNameToDelete)
// const {data, status} = await axios.post(`http://localhost:4011/task`,
// {taskNameToDelete}
// {
  // headers: {
  //   'Content-Type': 'application/json',
  //   Accept: 'application/json',
  // },
// },
// )
// setTodoList(data)


setTodoList(todoList.filter((task) => {
  return task._id != taskNameToDelete
}))
  }




  return (
    <div className="App">
      <div className="header">
        <div className="inputContainer">
        <input type="text" onChange={handleChange} value={task} name='task' placeholder='Task...' />
        <input type="number" name='deadLine' value={deadLine} onChange={handleChange}  placeholder='DeadLine (in Days)' />
        </div>
        <button onClick={addTask}>Add task</button>
      </div>
      <div className="todoList">
        {
          todoList.map((task:ITask, key:number) => {
            return <TodoTask key={key} task={task} completeTask={completeTask}   />
          })
        }
      </div>
    </div>
  );
}

export default App;
