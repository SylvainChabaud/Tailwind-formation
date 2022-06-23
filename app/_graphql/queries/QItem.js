import { graphql } from 'react-relay';

const QItemQuery = graphql`
  query QItemQuery($itemId: ID!) {
    getItemById(itemId: $itemId) {
      ok
      error
      item {
        name
        category
        group
        createdAt
        updatedAt
      }
    }
  }
`;

export { QItemQuery };
