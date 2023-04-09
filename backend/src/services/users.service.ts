import {DocumentDefinition ,FilterQuery, UpdateQuery, QueryOptions} from 'mongoose'
import TaskModel,{UserDocument} from "../models/users";

export function createTask(input:DocumentDefinition<UserDocument>){
    return TaskModel.create(input)
}

export function findTask(query:FilterQuery<UserDocument>,options:QueryOptions={lean:true}){
    return TaskModel.find(query,{},options);
}

export function findAndUpdate(
    query:FilterQuery<UserDocument>,
    update:UpdateQuery<UserDocument>,
    options:QueryOptions
){
    return TaskModel.findOneAndUpdate(query,update,options)
}

export function deleteTask( query:FilterQuery<UserDocument>){
    return TaskModel.deleteOne(query)
}