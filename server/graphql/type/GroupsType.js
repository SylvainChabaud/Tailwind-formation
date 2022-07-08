const { gql } = require('apollo-server-express');

module.exports = {
  typeDefs: gql`
    type GroupsResponse {
        ok: Boolean
        error: String
        groups: [String]
    }
  `
};
