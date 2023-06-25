import { AppDataSource } from "../../data-source";
import Contact from "../../entities/contacts.entity";
import { IContactResponse } from "../../interfaces/contacts";

const listAllContactsService = async (): Promise<IContactResponse[]> => {
  const contactRepository = AppDataSource.getRepository(Contact);
  const contacts = await contactRepository.find({
    relations: {
      user: true,
    },
  });

  return contacts;
};

export { listAllContactsService };