const { Router } = require("express");
const customerRouter = Router();
// const createCustomerHandler = require('../handlers/customerHandlers/createCustomerHandler')
const putCustomerHandler = require("../handlers/customerHandlers/updateCustomerHandler.js");
const deleteCustomerHandler = require("../handlers/customerHandlers/deleteCustomerHandler.js");
const getCustomersHandler = require("../handlers/customerHandlers/getCustomersHandler.js");
const getCustomerByIdHandler = require("../handlers/customerHandlers/getCustomerByIdHandler.js");

customerRouter.get("/", getCustomersHandler);
customerRouter.get("/:id", getCustomerByIdHandler);
// customerRouter.post('/', createCustomerHandler)
customerRouter.put("/:id", putCustomerHandler);
customerRouter.delete("/:id", deleteCustomerHandler); //

module.exports = customerRouter;
