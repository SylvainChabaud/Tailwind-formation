import { ContractResolver, ItemsResolver } from '../resolver';

const { gql } = require('apollo-server-express');

module.exports = {
  typeDefs: gql`
    type Query {
      contract(subscriberId: ID!): Contract
      getBeneficiaries(subscriberId: ID!): Beneficiaries
      getItemById(itemId: ID!): Item
    }
  `,
  resolvers: {
    Query: {
      contract: (parent, { subscriberId: contractId }, context) => ContractResolver(context).get(contractId),
      getBeneficiaries: (parent, { subscriberId }, context) => Promise.resolve(),
      getItemById: (parent, { itemId }, context) => ItemsResolver.getItemById(itemId)
    }
  }
};
