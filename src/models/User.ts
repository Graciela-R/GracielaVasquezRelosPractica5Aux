import {Schema, model, Document }from "mongoose";

interface IUser extends Document{
    fullname:String;
    username:String;
    password:String;
    email:String;
}

const userSchema = new Schema({
    fullname:{type: String, required:true},
    username: {type: String, required:true},
    password:{type: String, required:true},
    email:{type:String, required:true}

});

export default model<IUser>("user", userSchema);