import User from "../models/user.js";
//Dependencia que me permita encriptar códigos en javascript: npm i bcryptjs
import bcrypt from 'bcryptjs'

export async function createUser(req, res){
    const body = req.body 
    try {
         const user = new User(body)
         user.password = await bcrypt.hash(body.password, 10)//Manipulando el objeto 
         await user.save()
         res.status(201).json(user)
    } catch (error) {
        res.status(500).json(error)
        
    }
} 

//create the method to login use Post
export async function Login(req, res){
    const {email, password} = req.body
    try {
        const user = new User(body)
        await user.
        res.status(201).json('Usuario registrado con exito')
    } catch (error) {
        res.status(500).json('Error no se creo el usuario')
    }
}