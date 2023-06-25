import { Router } from "express"
import { createContactController, deleteContactController } from "../controllers/contacts.controllers"


const contactRoutes = Router()

contactRoutes.post('', createContactController)
contactRoutes.delete('/:id', deleteContactController)



export default contactRoutes