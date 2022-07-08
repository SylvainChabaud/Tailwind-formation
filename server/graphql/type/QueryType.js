const { ContractResolver, ItemsResolver, GroupsResolver } = require('../resolver');
const { gql } = require('apollo-server-express');

module.exports = {
  typeDefs: gql`
    type Query {
      contract(subscriberId: ID!): Contract
      getBeneficiaries(subscriberId: ID!): Beneficiaries
      getItemById(itemId: ID!): ItemResponse
      getItems: ItemsResponse
      getGroups: GroupsResponse
    }
    type Mutation {
      createItem(itemToCreate: ItemToCreate): ItemResponse
      deleteItem(itemIdToDelete: ID!): ItemResponse
      updateItem(itemIdToUpdate: ID!, itemToUpdate: ItemToCreate): ItemResponse
    }
  `,
  resolvers: {
    Query: {
      contract: (parent, { subscriberId: contractId }, context) => ContractResolver(context).get(contractId),
      getBeneficiaries: (parent, { subscriberId }, context) => Promise.resolve(),
      getItemById: (parent, { itemId }, context) => ItemsResolver(context).getItemById(itemId),
      getItems: (parent, arg, context) => ItemsResolver(context).getItems(),
      getGroups: (parent, arg, context) => GroupsResolver(context).getGroups()
    },
    Mutation: {
      createItem: (parent, { itemToCreate }, context) => ItemsResolver(context).createItem(itemToCreate),
      deleteItem: (parent, { itemIdToDelete }, context) => ItemsResolver(context).deleteItem(itemIdToDelete),
      updateItem: (parent, { itemIdToUpdate, itemToUpdate }, context) => ItemsResolver(context).updateItem(itemIdToUpdate, itemToUpdate)
    }
  }
};
