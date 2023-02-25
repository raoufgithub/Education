const employeeModel = require("../Models/employee");


const getEmployee = async (req, res) => {
    try{
        const employees = await employeeModel.find();
        console.log("getEmployee Executed");
        res.status(200).json(employees);
    }
    catch (error){
        res.status(404).json({message : error.message});
    }
}

const createEmployee = async (req, res) => {

    const newEmployee = new employeeModel(req.body);
    try{
        console.log(req.body);
        await newEmployee.save();
        res.status(201).json(newEmployee);
    }
    catch (error){
        res.status(409).json({message : error.message});
    }
}

module.exports = {
    getEmployee,
    createEmployee,
}