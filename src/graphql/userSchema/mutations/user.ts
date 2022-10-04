import { sendEmail } from './../../../services/mail'
import { getToken } from './../../../services/jwt'
import { userValidationSchema } from './../validations/user'
import { GraphQLBoolean, GraphQLID, GraphQLString } from 'graphql'
import { v4 as uuidV4 } from 'uuid'

import {
  User,
  TypeDocument,
  UserDocument,
  Country,
  ContactInfo
} from '../../../models'
import { hashPassword } from '../../../services/bcrypt'
import { UserType } from './../typeDefs/user'
import { ScalarTypeDateTime } from './../typeDefs/dateTime'
import { getTemplate } from '../../../services/mail'

export const CREATE_USER = {
  type: UserType,
  args: {
    lastName: { type: GraphQLString },
    name: { type: GraphQLString },
    isMilitar: { type: GraphQLBoolean },
    isTemporal: { type: GraphQLBoolean },
    username: { type: GraphQLString },
    password: { type: GraphQLString },
    email: { type: GraphQLString },
    address: { type: GraphQLString },
    countryId: { type: GraphQLID },
    city: { type: GraphQLString },
    phone: { type: GraphQLString },
    celPhone: { type: GraphQLString },
    emergencyName: { type: GraphQLString },
    emergencyPhone: { type: GraphQLString },
    typeDocumentId: { type: GraphQLID },
    document: { type: GraphQLString },
    placeExpedition: { type: GraphQLString },
    dateExpedition: { type: ScalarTypeDateTime }
  },
  async resolve(parent: any, args: any) {
    const {
      lastName,
      name,
      isMilitar,
      isTemporal,
      username,
      password,
      email,
      address,
      countryId,
      city,
      phone,
      celPhone,
      emergencyName,
      emergencyPhone,
      typeDocumentId,
      document,
      placeExpedition,
      dateExpedition
    } = args

    // Validatioin Args
    await userValidationSchema.validate(args)

    // Verify Username Duplicate
    const usernameFound = await User.findOneBy({
      username
    })
    if (usernameFound != null) throw new Error('Username already exist')

    // Verify Email Duplicate
    const emailFound = await User.findOneBy({
      email
    })
    if (emailFound != null) throw new Error('Email already exist')

    // Verify Document Duplicate
    const documentFound = await UserDocument.findOneBy({
      document
    })
    if (documentFound != null) throw new Error('Document already exist')

    // Verify Country Id
    const countryFound = await Country.findOneBy({ id: countryId })
    if (!countryFound?.id) throw new Error('Country Code not found')

    // Verify Type Document
    const typeDocumentFound = await TypeDocument.findOneBy({
      id: typeDocumentId
    })
    if (!typeDocumentFound?.id) throw new Error('Type Document not found')

    // Create User
    const encryptPassword = await hashPassword(password)
    const timeCreate = new Date()

    // Code To Confirm Email
    const code = uuidV4()

    // Create User
    const newUser = new User()
    newUser.lastName = lastName
    newUser.name = name
    newUser.isMilitar = isMilitar
    newUser.timeCreate = timeCreate
    newUser.isTemporal = isTemporal
    newUser.username = username
    newUser.password = encryptPassword
    newUser.email = email
    newUser.verificationToken = code
    await newUser.save()

    const newContactInfo = new ContactInfo()
    newContactInfo.user = newUser.id
    newContactInfo.address = address
    newContactInfo.country = countryId
    newContactInfo.city = city
    newContactInfo.phone = phone
    newContactInfo.celPhone = celPhone
    newContactInfo.emergencyName = emergencyName
    newContactInfo.emergencyPhone = emergencyPhone
    await newContactInfo.save()

    const newUserDocument = new UserDocument()
    newUserDocument.user = newUser.id
    newUserDocument.typeDocument = typeDocumentId
    newUserDocument.document = document
    newUserDocument.placeExpedition = placeExpedition
    newUserDocument.dateExpedition = dateExpedition
    await newUserDocument.save()

    // Send Email To Confirm Email
    const token = getToken({ email, code })
    const templateToEmail = getTemplate(name, token)
    await sendEmail(email, 'Confirmar email para Militar App', templateToEmail)

    return {
      id: newUser.id,
      lastName,
      name,
      username,
      email
    }
  }
}
