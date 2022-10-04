import * as yup from 'yup'

export const userValidationSchema = yup.object().shape({
  lastName: yup
    .string()
    .required('Last Name field is empty')
    .max(20, 'Last name can only contain 20 characters'),
  name: yup
    .string()
    .required('Name field is empty.')
    .max(20, 'Name can only contain 20 characters'),
  isMilitar: yup.boolean(),
  isTemporal: yup.boolean(),
  username: yup.string().required('Username field is empty'),
  password: yup.string().required('Password field is empty'),
  email: yup.string().email().required('Email field is empty'),
  address: yup
    .string()
    .required('Address field is empty')
    .max(60, 'Address can only contain 60 characters'),
  countryId: yup.string().required('Country Code field is empty'),
  city: yup
    .string()
    .required('City field is empty')
    .max(50, 'City can only contain 50 characters'),
  phone: yup
    .string()
    .required('Phone field is empty')
    .max(20, 'Phone can only contain 20 characters'),
  celPhone: yup
    .string()
    .required('Cell Phone field is empty')
    .max(20, 'Cell Phone can only contain 20 characters'),
  emergencyName: yup
    .string()
    .required('Emergency Name field is empty')
    .max(100, 'Emergency Name can only contain 100 characters'),
  emergencyPhone: yup
    .string()
    .required('Emergency Phone is empty')
    .max(20, 'Emergency Phone can only contain 20 characters'),
  typeDocumentId: yup.string().required('Type Document field is empty'),
  document: yup
    .string()
    .required('Document field is empty')
    .max(20, 'Document can only contain 20 characters'),
  placeExpedition: yup
    .string()
    .required('Place Expedition field is empty')
    .max(60, 'Place Expedition can only contain 60 characters'),
  dateExpedition: yup.date().required('Date Expedition field is empty')
})
