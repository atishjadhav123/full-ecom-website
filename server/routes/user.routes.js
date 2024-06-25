const router = require("express").Router()
const userController = require("./../controllers/user.controller")

router
    .get("/order/:id", userController.userGetAllOrders)
    .get("/orders-details/:id", userController.userGetOrderDetails)
    .post("/place-order", userController.userPlacedOrder)
    .put("/order-cancel/:id", userController.userCancelOrder)
    .post("/update-password", userController.userUpdatePassword)

module.exports = router