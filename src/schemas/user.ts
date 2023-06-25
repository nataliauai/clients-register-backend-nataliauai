import * as yup from 'yup';
import {SchemaOf} from 'yup';
import {IUserRequest, IUserResponse, IUserUpdate } from '../interfaces/users';

const userSchema: SchemaOf<IUserRequest> = yup.object().shape({
    name: yup.string().required('Nome é obrigatório'),
    email: yup
      .string()
      .email('Formato de email invalido')
      .required('Email é obrigatório'),
    phoneNumber: yup.string().required('Telefone é obrigatório'),
  });
 
   
const userResponseSchema: SchemaOf<IUserResponse | any> = yup.object().shape({
    id: yup.string().uuid(),
    name: yup.string(),
    phoneNumber: yup.string(),
    email: yup.string().email(),
    createdAt: yup.date(),
    
})


const userUpdateSchema: SchemaOf<IUserUpdate> = yup.object().shape({
    name: yup.string(),
    email: yup.string().email('Formato de email invalido'),
    phoneNumber: yup.string(),
  });

const listUsersSchema = yup.array(userResponseSchema)

export {userSchema, userResponseSchema, userUpdateSchema}