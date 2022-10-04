import { GraphQLObjectType, GraphQLSchema } from 'graphql'
import { GET_ALL_USERS, GET_USER } from './queries/user'
import { CREATE_USER } from './mutations/user'
import { IMPORT_DATA } from './mutations/importData'

const RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  fields: {
    getAllUsers: GET_ALL_USERS,
    getUser: GET_USER
  }
})

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    createUser: CREATE_USER,
    importData: IMPORT_DATA
  }
})

export const UserSchema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
})
