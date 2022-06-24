import { graphql } from 'react-relay';

const QCreateItemMutation = graphql`
  mutation QCreateItemMutation($itemToCreate: ItemToCreate) {
    createItem(itemToCreate: $itemToCreate) {
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

export { QCreateItemMutation };
