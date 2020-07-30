import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('contato')
class Contact {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  telephone: number;
}

export default Contact;
