import * as yup from 'yup'

const createContactSchema = yup.object().shape({
    userId:yup.string(),
    fullName: yup.string().required('Nome é obrigatório'),
    email: yup
      .string()
      .email('Formato de email invalido')
      .required('Email é obrigatório'),
    phoneNumber: yup.number().required('Telefone é obrigatório'),
})

const contactReturnSchema = yup.object().shape({
    id: yup.string().uuid(),
    fullName: yup.string(),
    phoneNumber: yup.number(),
    email: yup.string().email(),
    createdAt: yup.date(),
})

const listContactSchema = yup.array(contactReturnSchema)

export {createContactSchema, contactReturnSchema, listContactSchema}