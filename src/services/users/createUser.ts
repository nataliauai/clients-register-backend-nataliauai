import { AppDataSource } from "../../data-source";
import User from "../../entities/user.entity";
import { IUserRequest, IUserResponse } from "../../interfaces/users";
import { userResponseSchema } from "../../schemas/user";

const createUserService = async (userData: IUserRequest): Promise<IUserResponse> => {
  const userRepository = AppDataSource.getRepository(User);

  const createUser = userRepository.create(userData);

  await userRepository.save(createUser);

  const user = await userResponseSchema.validate(createUser, {
    stripUnknown: true,
  });

  return user;
};

export default createUserService;
