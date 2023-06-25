import { AppDataSource } from "../../data-source";
import Contact from "../../entities/contacts.entity";
import User from "../../entities/user.entity";
import AppError from "../../errors/AppError";
import { IContactRequest, IContactResponse } from "../../interfaces/contacts";

const createContactService = async (data: IContactRequest): Promise<IContactResponse>=> {
    const { fullName, email, phoneNumber, userId } = data;
    const userRepository = AppDataSource.getRepository(User);
    const contactRepository = AppDataSource.getRepository(Contact);

    const user = (await userRepository.findOne({
        where: {
          id: userId,
        },
    })) as User;
    
     
    const verifyEmailExists = await contactRepository.findOneBy({
        email: email,
        user: {
          id: userId,
        },
    });
      if (verifyEmailExists) {
        throw new AppError('Contact alredy exists.', 409);
      }
    
    const createdContact = contactRepository.create({
        fullName: fullName,
        email: email,
        phoneNumber: phoneNumber,
        user: user
    });

    const returned = await contactRepository.save(createdContact);
    
        return returned;
};

export { createContactService };