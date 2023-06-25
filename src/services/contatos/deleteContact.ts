import { AppDataSource } from "../../data-source";
import Contact from "../../entities/contacts.entity";
import AppError from "../../errors/AppError";

const deleteContactService = async (id: string) => {
  const contactRepository = AppDataSource.getRepository(Contact);
  const contact = await contactRepository.findOne({
    where: { id: id },
  }) as Contact;

  if (contact.deletedAt) {
    throw new AppError('Contact already delete', 400);
  }

  return await contactRepository.softRemove({ id: id });
};

export { deleteContactService };