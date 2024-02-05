const express = require('express')

const { getAllUsers, getSingleUser, createUser, updateUser, removeUser } = require('../../Controller/UserController/userController')


const router = express.Router()

router.get('/user',getAllUsers)
router.get('/user/:id',getSingleUser)
router.post('/user',createUser)
router.patch('/user/:id',updateUser)
router.delete('/user/:id',removeUser)

module.exports=router
