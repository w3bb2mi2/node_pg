const Router = require("express")
const userController = require("../controllers/user.controller")
const router = new Router()

router.post('/user', userController.createUser)
router.get('/user', userController.getAllUsers)
router.put('/user/:id', userController.getOneUser)
router.delete('/user/:id', userController.deleteOne)

module.exports = router