import { GraphQLBoolean, GraphQLObjectType, GraphQLString } from 'graphql'

export const EmailVerification = new GraphQLObjectType({
  name: 'EmailVerification',
  description: 'Email Verification Type Definition',
  fields: () => ({
    token: { type: GraphQLString }
  })
})
