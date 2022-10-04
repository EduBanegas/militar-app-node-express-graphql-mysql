import {
  DB_HOST,
  DB_NAME,
  DB_PASSWORD,
  DB_PORT,
  DB_USERNAME
} from './env.config'

import { DataSource } from 'typeorm'
import {
  User,
  UserDocument,
  TypeDocument,
  ContactInfo,
  Country
} from '../models'

export const AppDataSource = new DataSource({
  type: 'mysql',
  database: DB_NAME,
  username: DB_USERNAME,
  password: DB_PASSWORD,
  host: DB_HOST,
  port: Number(DB_PORT),
  // logging: true,
  synchronize: true,
  entities: [User, UserDocument, TypeDocument, ContactInfo, Country],
  ssl: false
})
