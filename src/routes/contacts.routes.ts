import { Router } from 'express';
import { getCustomRepository } from 'typeorm';

import ContactsRepository from '../repositories/ContactsRepository';

const contactsRouter = Router();

contactsRouter.get('/', (request, response) => {
  const contactsRepository = getCustomRepository(ContactsRepository);
  const contacts = contactsRepository.find();

  return response.json(contacts);
});

contactsRouter.post('/', (request, response) => {
  const { name, email, telephone } = request.body;

  const contactsRepository = getCustomRepository(ContactsRepository);
  const contact = contactsRepository.create({
    name,
    email,
    telephone,
  });

  contactsRepository.save(contact);

  return response.json(contact);
});

export default contactsRouter;
