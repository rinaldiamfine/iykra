const router = require('express').Router();
const employeeController = require('../employee/controller');

/**
 * @swagger
 * /employees:
 *  get:
 *      tags:
 *          - Employees
 *      description: get all employees data
 *      responses:
 *          200:
 *              description: Returns a JSON object employee datas.
 *          400:
 *              description: Return a JSON object with message failed to get employee datas.
 */
router.get('/', employeeController.getAllEmployees);

/**
 * @swagger
 * /employees/{id}:
 *  get:
 *      tags:
 *          - Employees
 *      description: get specific employee data by id
 *      parameters:
 *          - in: path
 *            name: id
 *            required: true
 *            schema:
 *              type: string
 *            description: The employee ID
 *      responses:
 *          200:
 *              description: Returns a JSON object containing employee data.
 *          400:
 *              description: Return a JSON object with message employee not found.
 */
router.get('/:id', employeeController.getEmployeeById);

/**
 * @swagger
 * /employees:
 *  post:
 *      tags:
 *          - Employees
 *      description: create a new employee data
 *      responses:
 *          200:
 *              description: Returns a JSON object with message success create employee.
 *          400:
 *              description: Returns a JSON object with message failed create employee.
 */
router.post('/', employeeController.createEmployee);

/**
 * @swagger
 * /employees/{id}:
 *  put:
 *      tags:
 *          - Employees
 *      description: update specific employee data by id
 *      parameters:
 *          - in: path
 *            name: id
 *            required: true
 *            schema:
 *              type: string
 *            description: The employee ID
 *      responses:
 *          200:
 *              description: Returns a JSON object with message success update employee.
 *          400:
 *              description: Returns a JSON object with message failed update employee.
 */
router.put('/:id', employeeController.updateEmployee);

/**
 * @swagger
 * /employees/{id}:
 *  delete:
 *      tags:
 *          - Employees
 *      description: delete specific employee data by id
 *      parameters:
 *          - in: path
 *            name: id
 *            required: true
 *            schema:
 *              type: string
 *            description: The employee ID
 *      responses:
 *          200:
 *              description: Returns a JSON object with message success delete employee.
 *          400:
 *              description: Returns a JSON object with message failed delete employee.
 */
router.delete('/:id', employeeController.deleteEmployee);

module.exports = {
    "name": employeeController.prefix,
    "router": router
};