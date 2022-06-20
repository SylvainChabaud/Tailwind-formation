const { gql } = require('apollo-server-express');

module.exports = {
  typeDefs: gql`
  type Category {
      label: String
      value: String
    }
    type Item {
      name: String
      category: Category
      group: String
    }
  `
};
