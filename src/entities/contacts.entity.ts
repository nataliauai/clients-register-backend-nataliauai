import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn} from 'typeorm';
import User from './user.entity';
  
  @Entity('contacts')
  class Contact {
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @Column()
    fullName: string;
  
    @Column({ length: 50 })
    email: string;
  
    @Column()
    phoneNumber: string;
  
    @CreateDateColumn()
    createdAt: Date;

    @DeleteDateColumn()
    deletedAt: Date;
  
    @ManyToOne(() => User, (user) => user.contacts)
    user: User;
  }
  
  export default Contact;