import Vehicle from "../models/vehicle.js";

//consultar en la base de datos - trae la informacion y la devuelve en una respuesta
export async function getVehicle(req, res) {
    try {
        const vehicles = await Vehicle.find()
        res.json(vehicles)
    } catch (error) {
        res.status(500).json({error})
        
    }
}

//Hacer la insersion:post
export async function postVehicle(req, res){
    const body = req.body //obtiene la informacion desde postman o del formulario
    try {
        const vehicle = new Vehicle(body)//crear el objeto
        //operaciones aqui
        await vehicle.save()//crear vehiculo en mongo 
        res.status(201).json('Vehicle created successfully')
    } catch (error) {
        res.status(500).json(error)
    }
}

//actualizar: put
export async function putVehicle(req, res) {
    const {plate, color, model} = req.body //destructuring data from body
    try {
        //busca donde quiere cambiar primerament(plate) y luego los campos a cambiar {color, model}
        await Vehicle.findOneAndUpdate({plate:plate}, {color:color , model:model})
        res.status(200).json('Vehicle update succesfully')
    } catch (error) {                            
        res.status(500).json(error)
    }
}

export async function deleteVehicle(req, res){
    const _id = req. params.id // obtener el id desde postman o desde algun formulario
    try {
        await Vehicle.findByIdAndDelete({_id:_id})
        res.json('Vehicle delete succesfully')
    } catch (error) {
        res.status(404).json('Vehicle don´t found')
    }
}