import express from 'express'
import 'dotenv/config'
import dbConection from '../dataBase/config.js'
import { createUser } from '../controllers/userControllers.js'
import { Login } from '../controllers/userControllers.js'
import routesVehicle from '../routes/vehicleRouter.js'

export default class Server{
    constructor(){
        this.app = express()
        this.listen()
        this.dbConnect()
        this.pathVehicle = '/api/vehicle' //link publico de la api
        this.route()
    }

    //escuchar el servidor y especificar el puerto
    listen(){ 
        this.app.listen(process.env.PORT, ()=> {
            console.log(`Server is running in PORT ${process.env.PORT}`)
        })
    }

    async dbConnect(){
        await dbConection()
    }

    route(){
        this.app.use(express.json()) //convertir data a json
        this.app.use(this.pathVehicle, routesVehicle)
        this.app.post('/user', createUser)
        this.app.post('/login', Login)
    }
}