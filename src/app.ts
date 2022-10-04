import express from 'express'
import cors from 'cors'
import { graphqlHTTP } from 'express-graphql'
import { UserSchema } from './graphql/index'
import { notFound, errorHandler } from './middlewares/errors'
import router from './routes'

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static('./public'))
app.use(express.urlencoded({ extended: false }))

app.use(
  '/graphql',
  graphqlHTTP({
    schema: UserSchema,
    graphiql: true
  })
)

app.use('/', router)

//  Error handler
app.use(notFound)
app.use(errorHandler)

export default app
