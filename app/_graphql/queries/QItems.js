import { graphql } from 'react-relay';

const QItemsQuery = graphql`
  query QItemsQuery($itemId: ID!) {
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

export { QItemsQuery };
