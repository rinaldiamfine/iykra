const employeeModel = require('../employee/model');

class EmployeeController {
    constructor() {
        this.prefix = 'employees';
    }

    async getAllEmployees(req, res) {
        try {
            const employees = await employeeModel.findAll();
            if (employees.length > 0) {
                return res.status(200).json({
                    success: true,
                    message: 'Succesfully get all employee data.', 
                    data: employees
                });
            }
            return res.status(200).json({
                success: true,
                message: 'Employee data is empty.'
            })
        } catch (error) {
            return res.status(400).json({
                success: false, 
                message: error.message
            });
        }
    }

    async getEmployeeById(req, res) {
        try {
            const employee = await employeeModel.findOne({
                where: {
                    id: req.params.id
                }
            });
            if (employee) {
                return res.status(200).json({
                    success: true,
                    message: 'Succesfully get the employee detail.', 
                    data: employee
                });
            }
            return res.status(200).json({
                success: false,
                message: `Failed to get the specific employee data with ID: ${req.params.id}, the data is not found.`
            })
        } catch (error) {
            return res.status(400).json({
                success: false, 
                message: error.message
            });
        }
    }

    async createEmployee(req, res) {
        try {
            let employeeData = {
                name: req.body.name,
                position: req.body.position,
                salary: req.body.salary
            }
            await employeeModel.create(employeeData);
            return res.status(200).json({
                success: true,
                message: 'Employee has been created.', 
            });
        } catch (error) {
            return res.status(400).json({
                success: false, 
                message: error.message
            });
        }
    }

    async updateEmployee(req, res) {
        try {
            const employee = await employeeModel.findOne({
                where: {
                    id: req.params.id
                }
            });
            if (employee) {
                let employeeData = {
                    name: req.body.name,
                    position: req.body.position,
                    salary: req.body.salary
                }
                await employee.update(employeeData);
                return res.status(200).json({
                    success: true,
                    message: `Employee with ID: ${req.params.id}, has been updated.`, 
                    data: employee
                });
            }
            return res.status(200).json({
                success: false,
                message: `Failed to update the employee data with ID: ${req.params.id}, the data is not found.`
            })
        } catch (error) {
            return res.status(400).json({
                success: false, 
                message: error.message
            });
        }
    }

    async deleteEmployee(req, res) {
        try {
            const employee = await employeeModel.findOne({
                where: {
                    id: req.params.id
                }
            });
            if (employee) {
                await employee.destroy();
                return res.status(200).json({
                    success: true,
                    message: `Employee with ID: ${req.params.id}, has been deleted.`
                });
            }
            return res.status(200).json({
                success: false,
                message: `Failed to delete the employee data with ID: ${req.params.id}, the data is not found.`
            })
        } catch (error) {
            return res.status(400).json({
                success: false, 
                message: error.message
            });
        }
    }
}

const employeeController = new EmployeeController();
module.exports = employeeController;