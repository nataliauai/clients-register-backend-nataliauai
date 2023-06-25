import { Router } from "express"
import { createUserController, deleteUsersController, listUsersController, updateUserController } from "../controllers/users.controllers"


const userRoutes = Router()

userRoutes.post('', createUserController)
userRoutes.get('', listUsersController)
userRoutes.delete('/:id', deleteUsersController)
userRoutes.patch('/:id', updateUserController)

export default userRoutes