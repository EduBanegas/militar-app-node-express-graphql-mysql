import { GraphQLObjectType, GraphQLID, GraphQLString } from 'graphql'

export const UserType = new GraphQLObjectType({
  name: 'User',
  description: 'User Type Definition',
  fields: () => ({
    id: { type: GraphQLID },
    lastName: { type: GraphQLString },
    name: { type: GraphQLString },
    username: { type: GraphQLString },
    email: { type: GraphQLString }
  })
})
