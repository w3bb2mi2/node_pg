const Router = require("express")
const userController = require("../controllers/user.controller")
const router = new Router()

router.post('/user', userController.createUser)
router.get('/user', userController.getAllUsers)
router.get('/user/:id', userController.getOneUser)
router.put("/user", userController.updateUser)
router.delete('/user/:id', userController.deleteOne)

module.exports = router