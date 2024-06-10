const express = require('express');
const userRouter = express.Router();
const userController = require('../Controller/UserController');



userRouter.post('/create', userController.createuser);
userRouter.post('/update/:id', userController.updateuser);
userRouter.delete("/deleted/:id", userController.deleteuser);
userRouter.get('/getdata', userController.getAllData);


module.exports = userRouter;