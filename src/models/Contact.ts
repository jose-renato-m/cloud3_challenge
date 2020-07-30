import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('contato')
class Contact {
  @PrimaryGeneratedColumn('uuid')
  Id: string;

  @Column()
  Nome: string;

  @Column()
  Email: string;

  @Column()
  Telefone: number;
}

export default Contact;
