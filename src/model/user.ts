import mongoose , {Schema , Document } from "mongoose";

export interface Message extends Document{
    content: string,
    createdAt : Date;
}

const messageSchema : Schema<Message> = new Schema({
    content : {
        type: String,
        required : true,
    },
    
    createdAt : {
        type : Date,
        required : true,
        default : Date.now
    }
})

export interface User extends Document{
    username : string,
    email : string,
    password : string,
    verifycode : string,
    verifycodeExp : Date,
    isAcceptingMessage : boolean,
    isVarify : boolean,
    message : Message[],
}

const userSchema : Schema<User> = new Schema({
    username : {
        type: String,
        required : [true , "username is required"],
        trim : true,
        unique : true
    },
    
    email : {
        type : String,
        required : [true , "email is required"],
        match : [/.+\@.+\..+/ , 'please provide correct email formate'],
        unique : true
    }, 

    password : {
        type : String,
        required : [true , "password is required"],
    }, 

    verifycode : {
        type : String,
        required : [true , "give me the correct code"],
    },

    verifycodeExp :{
        type : Date,
        required : true
    },

    isVarify:{
        type : Boolean,
        default: false,
    },

    isAcceptingMessage:{
        type : Boolean,
        default: true,
    },

    message :[messageSchema]
})

const UserModel = (mongoose.models.User as mongoose.Model<User>) || mongoose.model<User>("User" , userSchema)

export default UserModel;