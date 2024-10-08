const globalRouter = require('express').Router();
const { apiPath } = require('../tools/api-path');

const employeeRoute = require('../features/employee/route');
globalRouter.use(
    apiPath(employeeRoute.name), 
    employeeRoute.router
);

module.exports = globalRouter;