import express, {Request, Response} from "express";
import TaskModel from "../models/users";
import { createTask, findAndUpdate, findTask, deleteTask} from "../services/users.service"

const taskDetail = async (req:Request, res:Response) => {
    const newTask = req.body
    try {
        // Add task 
    const task = await createTask({taskName:newTask.taskName, deadLine:newTask.deadLine})
    res.json({
        message:"task added successfully",
        myData:task
    })
    } catch (error) {
        console.log(error)
    }
    
}

const gettaskDetail = async (req:Request, res:Response) => {
    // const newTask = req.body
    try {
        // Add task 
    const allTask = await findTask({})
    res.json({
        myData:allTask
    })
    } catch (error) {
        console.log(error)
    }
    
}

const deletTtask = async (req:Request, res:Response) => {
    const newTask = req.body
    console.log(newTask)
    try {
        // Add task 
    const deletedTask = await deleteTask(newTask._id)
    res.json({
        message:"Task deleted successfully",
        myData:deletedTask
    })
    } catch (error) {
        console.log(error)
    }
    
}
export {
    taskDetail,
    gettaskDetail,
    deletTtask
}

