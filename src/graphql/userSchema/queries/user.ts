import { GraphQLID, GraphQLList, GraphQLNonNull } from 'graphql'
import { User } from '../../../models/user'
import { UserType } from '../typeDefs/user'

export const GET_ALL_USERS = {
  type: new GraphQLList(UserType),
  async resolve() {
    return await User.find()
  }
}

export const GET_USER = {
  type: UserType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLID) }
  },
  async resolve(_: any, args: any) {
    const result = await User.findOneBy({ id: args.id })
    return result
  }
}
