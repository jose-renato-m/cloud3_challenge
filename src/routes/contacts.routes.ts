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
  const { Nome, Email, Telefone } = request.body;

  const contactsRepository = getCustomRepository(ContactsRepository);
  const contact = contactsRepository.create({
    Nome,
    Email,
    Telefone,
  });

  contactsRepository.save(contact);

  return response.json(contact);
});

export default contactsRouter;
