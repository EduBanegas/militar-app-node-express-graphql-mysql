import { config } from 'dotenv'
config()

export const PORT = process.env.PORT || 3000

export const DB_NAME = process.env.DB_NAME
export const DB_USERNAME = process.env.DB_USERNAME
export const DB_PASSWORD = process.env.DB_PASSWORD
export const DB_HOST = process.env.DB_HOST
export const DB_PORT = process.env.DB_PORT

export const NODE_MAILER_EMAIL = process.env.NODE_MAILER_EMAIL
export const NODE_MAILER_PASSWORD = process.env.NODE_MAILER_PASSWORD

export const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY
