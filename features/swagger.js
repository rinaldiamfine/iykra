const swaggerRoute = require('express').Router();
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const { apiPath } = require("../tools/api-path");

const options = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'IYKRA API',
        version: '1.0.0'
      }
    },
    apis: [
      'features/employee/route.js'
    ]
};

const swaggerSpec = swaggerJsdoc(options);
swaggerRoute.use(
    apiPath('docs'), 
    swaggerUi.serve, 
    swaggerUi.setup(swaggerSpec)
);

module.exports = swaggerRoute;