import mongoose,{Schema, model, Document} from "mongoose";

export interface UserDocument extends Document{
    taskName:string;
    deadLine:number
}

interface Task{
    taskName:string;
    deadLine:number
}

const taskSchema = new Schema<Task>({
    taskName:{
        type:String,
        required:true
    },
    deadLine:{
        type:Number,
        required:true
    }
})

const TaskModel = model<Task>("Task", taskSchema)

export default TaskModel;

