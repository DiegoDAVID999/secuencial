import  Router  from 'express'
const  routesVehicle = Router()

import { getVehicle, postVehicle, putVehicle, deleteVehicle } from '../controllers/vehicleControllers.js'

routesVehicle.get('/', getVehicle)
routesVehicle.post('/', postVehicle)
routesVehicle.put('/', putVehicle)
routesVehicle.delete('/:id', deleteVehicle)


export default routesVehicle