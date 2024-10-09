const router = require('express').Router();
const employeeController = require('./controller');

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
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          name:
 *                              type: string
 *                              description: Employee's name
 *                              example: Rinaldi
 *                          position:
 *                              type: string
 *                              description: Employee's position
 *                              example: Fullstack Developer
 *                          salary:
 *                              type: integer
 *                              description: Employee's salary
 *                              example: 50000
 *                      required:
 *                          - name
 *                          - position
 *                          - salary
 *      responses:
 *          200:
 *              description: Returns a JSON object with message success create employee.
 *          400:
 *              description: Returns a JSON object with message failed create employee.
 */
router.post('/', (req, res) => employeeController.createEmployee(req, res));

/**
 * @swagger
 * /employees/{id}:
 *  put:
 *      tags:
 *          - Employees
 *      description: update specific employee data by id
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          name:
 *                              type: string
 *                              description: Employee's name
 *                              example: Rinaldi
 *                          position:
 *                              type: string
 *                              description: Employee's position
 *                              example: Fullstack Developer
 *                          salary:
 *                              type: integer
 *                              description: Employee's salary
 *                              example: 50000
 *                      required:
 *                          - name
 *                          - position
 *                          - salary
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
router.put('/:id', (req, res) => employeeController.updateEmployee(req, res));

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