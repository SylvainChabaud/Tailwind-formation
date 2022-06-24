const { gql } = require('apollo-server-express');

module.exports = {
  typeDefs: gql`
    type Item {
      name: String
      category: String
      group: String
      createdAt: String
      updatedAt: String
    }
    type ItemResponse {
      ok: Boolean
      error: String
      item: Item
    }
    type ItemsResponse {
      ok: Boolean
      error: String
      items: [Item]
    }
  `
};
