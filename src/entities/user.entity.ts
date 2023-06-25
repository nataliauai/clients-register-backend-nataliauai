import { Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn } from "typeorm";
import Contact from "./contacts.entity";

@Entity('users')
class User {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ length: 50 })
    name: string;

    @Column({ length: 50, unique: true })
    email: string;

    @Column()
    phoneNumber: string;

    @CreateDateColumn()
    createdAt: Date;

    @OneToMany(() => Contact, (contact) => contact.user)
    contacts: Contact[];
  }

  

export default User