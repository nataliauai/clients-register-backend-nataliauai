import {AppDataSource} from "../../data-source"
import  User  from "../../entities/user.entity"

const deleteUserService = async (id: string) => {
    const userRepository = AppDataSource.getRepository(User)
   
    const userToDelete: User | null = await userRepository.findOneBy({id: id})

    await userRepository.remove(userToDelete!)
};

export { deleteUserService };