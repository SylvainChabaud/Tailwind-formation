import {
  commitMutation,
  graphql
} from 'react-relay';

import environment from '../..';

const mutation = graphql`
  mutation updateItemMutation($itemIdToUpdate: ID!, $itemToUpdate: ItemToCreate) {
    updateItem(itemIdToUpdate: $itemIdToUpdate, itemToUpdate: $itemToUpdate) {
      ok
      error
    }
  }
`;

export default ({ itemIdToUpdate, itemToUpdate }, done) => {
  const variables = {
    itemIdToUpdate,
    itemToUpdate
  };
  commitMutation(
    environment(),
    {
      mutation,
      variables,
      onCompleted: ({ updateItem: result }) => {
        const { ok, error } = result;
        done(ok, error);
      },
      onError: error => {
        console.error(error);
        done(true, error);
      }
    }
  );
};
