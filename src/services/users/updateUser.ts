import {AppDataSource} from "../../data-source";
import  User from "../../entities/user.entity";
import AppError from "../../errors/AppError";
import { IUserUpdate } from "../../interfaces/users";
import { userUpdateSchema } from "../../schemas/user";

const updateUsersService = async (id: string, update: IUserUpdate) => {
  const userRepository = AppDataSource.getRepository(User);

  const findUser = await userRepository.findOneBy({id: id})
  if (!findUser) {
    throw new AppError("User not found", 404);
  }
  if(!update.email && !update.name && !update.phoneNumber){
    throw new AppError ("These fields cannot be updated", 401)
  }

  const updated = userRepository.create({
    ...findUser,
    ...update,
  });
  await userRepository.save(updated);

  const validatedBody = await userUpdateSchema.validate(updated,{ 
        stripUnknown: true 
  });

  return validatedBody;
};

export default updateUsersService