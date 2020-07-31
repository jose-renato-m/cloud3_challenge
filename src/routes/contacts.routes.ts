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

contactsRouter.put('/', async (request, response) => {
  const { Id, Nome, Email, Telefone } = request.body;

  const contactsRepository = getCustomRepository(ContactsRepository);
  const contacts = await contactsRepository.findOne(Id);

  if (!contacts) {
    return response.json({ message: 'Contato não encontrado.' });
  }

  contacts.Nome = Nome;
  contacts.Email = Email;
  contacts.Telefone = Telefone;
  await contactsRepository.save(contacts);
  return response.json(contacts);
});

contactsRouter.delete('/:Id', async (request, response) => {
  const { Id } = request.params;

  const contactsRepository = getCustomRepository(ContactsRepository);
  const contacts = await contactsRepository.findOne(Id);

  if (!contacts) {
    return response.json({ message: 'Contato inexistente ou já deletado.' });
  }

  await contactsRepository.remove(contacts);
  contactsRepository.save;
  return response.json({ message: 'Contato deletado.' });
});

export default contactsRouter;
