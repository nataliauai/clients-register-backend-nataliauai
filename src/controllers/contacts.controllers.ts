import { Request, Response } from "express";
import { createContactService } from "../services/contatos/createContact";
import { deleteContactService } from "../services/contatos/deleteContact";

const createContactController = async (req: Request, res: Response): Promise<Response> => {
    const { body } = req;
    const data = await createContactService(body);
    return res.status(201).send(data);
  };

  const deleteContactController = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;
    const data = await deleteContactService(id);
    return res.status(200).send();
  };
// const listContactsController = async (req: Request, res: Response) => {
//     const Contacts = await listContactsService()
//     return res.json(Contacts)
// }


//     const deleteContactsController = async (req: Request, res: Response) => {
//     const id: string = req.params.id
//     const Contacts = await deleteContactService(id)
//     return res.status(204).send()
// }

//     const updateContactController = async (req: Request, res: Response) => {
//     const update: IContactUpdate = req.body;
//     const id: string = req.params.id;
//     const data = await updateContactsService(id, update);
//     return res.status(200).json(data);
//   };

export {createContactController, deleteContactController}
    