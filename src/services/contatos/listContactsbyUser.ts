import { AppDataSource } from "../../data-source";
import Contact from "../../entities/contacts.entity";


const listContactsbyUserService = async (userId: string) => {
  const contactRepository = AppDataSource.getRepository(Contact);
  const contacts = await contactRepository.find({
    where: {
      user: {
        id: userId,
      },
    },
  });

  return contacts;
};
export { listContactsbyUserService };