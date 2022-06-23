import { graphql } from 'react-relay';

const QItemsQuery = graphql`
  query QItemsQuery($itemId: ID!) {
    getItems(itemId: $itemId) {
      ok
      error
      items {
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
