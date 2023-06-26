import { Request, Response } from "express";
import { createContactService } from "../services/contatos/createContact";
import { deleteContactService } from "../services/contatos/deleteContact";
import { updateContactService } from "../services/contatos/updateContact";
import { listAllContactsService } from "../services/contatos/listAllContacts";
import { listContactsbyUserService } from "../services/contatos/listContactsbyUser";

const createContactController = async (req: Request, res: Response): Promise<Response> => {
    const body = req.body;
    const data = await createContactService(body);
    return res.status(201).send(data);
};

const deleteContactController = async (req: Request, res: Response): Promise<Response> => {
    const id = req.params.id;
    const data = await deleteContactService(id);
    return res.status(200).send();
};

const updateContactController = async (req: Request, res: Response): Promise<Response> => {
    const { body, params } = req;
    const data = await updateContactService(body, params.id);
    return res.status(200).send(data);
};

const listAllContactsController = async (req: Request, res: Response): Promise<Response> => {
    const data = await listAllContactsService();
    return res.status(200).send(data);
};

const listContactsbyUserController = async (req: Request, res: Response): Promise<Response> => {
    const {id} = req.params
    const data = await listContactsbyUserService(id);
    return res.status(200).send(data);
};
  

export {createContactController, deleteContactController, updateContactController, listAllContactsController, listContactsbyUserController}
    