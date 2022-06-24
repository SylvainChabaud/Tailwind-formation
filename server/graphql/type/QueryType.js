const { ContractResolver, ItemsResolver } = require('../resolver');
const { gql } = require('apollo-server-express');

module.exports = {
  typeDefs: gql`
    type Query {
      contract(subscriberId: ID!): Contract
      getBeneficiaries(subscriberId: ID!): Beneficiaries
      getItemById(itemId: ID!): ItemResponse
      getItems: ItemsResponse
    }
    type Mutation {
      createItem(itemToCreate: ItemToCreate): ItemResponse
    }
  `,
  resolvers: {
    Query: {
      contract: (parent, { subscriberId: contractId }, context) => ContractResolver(context).get(contractId),
      getBeneficiaries: (parent, { subscriberId }, context) => Promise.resolve(),
      getItemById: (parent, { itemId }, context) => ItemsResolver(context).getItemById(itemId),
      getItems: (parent, arg, context) => ItemsResolver(context).getItems()
    },
    Mutation: {
      createItem: (parent, { itemToCreate }, context) => ItemsResolver(context).createItem(itemToCreate)
    }
  }
};
