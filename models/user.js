import { Schema, model } from "mongoose";

const userSchema = new Schema({
    email: {
        type: String,
        unique: [true, 'Already exist a email  '],
        required: [true,'Email is required'],
        minlenght:[10, 'Email is required minimun 10 characters']   }
    ,
    password:{
        type:String,
        required:[true, 'Password is required']
}
}
)


export default model ('User', userSchema)