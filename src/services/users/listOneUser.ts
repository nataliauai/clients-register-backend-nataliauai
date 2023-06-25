import { AppDataSource } from "../../data-source";
import User from "../../entities/user.entity";
import AppError from "../../errors/AppError";
import { IUserResponse } from "../../interfaces/users";

const listOneUserService = async (id: string): Promise<IUserResponse> => {
  try {
    const userRepository = AppDataSource.getRepository(User);
    const user = await userRepository.findOneByOrFail({ id: id });

    return user;
  } catch (error: any) {
    throw new AppError(error.message);
  }
};

export { listOneUserService };