import { AppDataSource } from "../../data-source";
import Contact from "../../entities/contacts.entity";
import AppError from "../../errors/AppError";
import { IContactResponse, IContactUpdate } from "../../interfaces/contacts";


const updateContactService = async (
  data: IContactUpdate,
  id: string
): Promise<IContactResponse> => {
  try {
    const contactRepository = AppDataSource.getRepository(Contact);
    const contact = await contactRepository.findOneByOrFail({ id: id });

    return contact;
  } catch (error: any) {
    throw new AppError(error.message);
  }
};

export { updateContactService };