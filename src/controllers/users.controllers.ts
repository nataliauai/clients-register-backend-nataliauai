import { Request, Response } from "express";
import { IUserRequest, IUserUpdate } from "../interfaces/users";
import createUserService from "../services/users/createUser";
import updateUsersService from "../services/users/updateUser";
import listUsersService from "../services/users/listUser";
import { deleteUserService } from "../services/users/deleteUser";


const createUserController = async (req: Request, res: Response) => {
    
    const userData: IUserRequest = req.body
    const newUser = await createUserService(userData)
    return res.status(201).json(newUser)
}

const listUsersController = async (req: Request, res: Response) => {
    const users = await listUsersService()
    return res.json(users)
}


    const deleteUsersController = async (req: Request, res: Response) => {
    const id: string = req.params.id
    const users = await deleteUserService(id)
    return res.status(204).send()
}

    const updateUserController = async (req: Request, res: Response) => {
    const update: IUserUpdate = req.body;
    const id: string = req.params.id;
    const data = await updateUsersService(id, update);
    return res.status(200).json(data);
  };

export {createUserController, deleteUsersController, listUsersController, updateUserController}
    