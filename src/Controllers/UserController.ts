import {Request, Response }from "express";
import User from "../models/User";
class UserController{
    public async user(red:Request, res:Response){
        const users = await User.find({});
        res.send(users);
    }
    public async newuser(req:Request,res:Response){
        const {fullname,username,password,email}=req.body;
        const nUser=new User(req.body);
        await nUser.save();
    }
    
}
export const userC=new UserController();