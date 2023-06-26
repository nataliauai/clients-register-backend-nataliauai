import { Router } from "express"
import { createContactController, deleteContactController, listAllContactsController, listContactsbyUserController, updateContactController } from "../controllers/contacts.controllers"


const contactRoutes = Router()

contactRoutes.post('', createContactController)
contactRoutes.delete('/:id', deleteContactController)
contactRoutes.patch('/:id', updateContactController)
contactRoutes.get('', listAllContactsController)
contactRoutes.get('/:id', listContactsbyUserController)

export default contactRoutes