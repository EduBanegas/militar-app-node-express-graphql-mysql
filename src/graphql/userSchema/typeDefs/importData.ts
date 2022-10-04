import { GraphQLObjectType, GraphQLString } from 'graphql'

export const ImportData = new GraphQLObjectType({
  name: 'ImportData',
  description: 'ImportData Type Definition',
  fields: () => ({
    countryCode: { type: GraphQLString },
    countryName: { type: GraphQLString },
    nameTypeDocument: { type: GraphQLString }
  })
})
