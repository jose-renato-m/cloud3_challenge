import { Router } from 'express';
import { getCustomRepository } from 'typeorm';

import ContactsRepository from '../repositories/ContactsRepository';

const contactsRouter = Router();

contactsRouter.get('/', async (request, response) => {
  const contactsRepository = getCustomRepository(ContactsRepository);
  const contacts = await contactsRepository.find();

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

// contactsRouter.put('/:Id', (request, response) => {
//   const { Id } = request.params;

//   const contactsRepository = getCustomRepository(ContactsRepository);
//   const contacts = contactsRepository.findOne();
// });

// contactsRouter.delete('/:Id', (request, response) => {
//   const { Id } = request.params;

//   const contactsRepository = getCustomRepository(ContactsRepository);
//   const contacts = contactsRepository.findOne();
// });

export default contactsRouter;
