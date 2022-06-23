import { graphql } from 'react-relay';

const QItemsQuery = graphql`
  query QItemsQuery {
    getItems {
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
