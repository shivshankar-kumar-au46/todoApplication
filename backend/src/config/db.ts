import mongoose,{connect} from "mongoose";

function connects(){
    return connect('mongodb+srv://shivaverma:12345@cluster0.gxgezv9.mongodb.net/todoList')
    .then(() => {
        console.log('db connected')
    }).catch((error:any)=>{
        console.log(error)
    })
}


export default connects;