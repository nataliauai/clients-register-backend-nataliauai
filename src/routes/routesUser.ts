import { Router } from "express"
import { createUserController, deleteUsersController, listOneUserController, listUsersController, updateUserController } from "../controllers/users.controllers"


const userRoutes = Router()

userRoutes.post('', createUserController)
userRoutes.get('', listUsersController)
userRoutes.delete('/:id', deleteUsersController)
userRoutes.patch('/:id', updateUserController)
userRoutes.get('/:id', listOneUserController)

export default userRoutes