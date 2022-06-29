import {
  commitMutation,
  graphql
} from 'react-relay';

import environment from '../..';
const mutation = graphql`
  mutation createItemMutation($itemToCreate: ItemToCreate) {
    createItem(itemToCreate: $itemToCreate) {
      ok
      error
      item {
        _id
        name
        category
        group
        createdAt
        updatedAt
      }
    }
  }
`;
export default ({ itemToCreate }, done) => {
  const variables = {
    itemToCreate
  };
  commitMutation(
    environment(),
    {
      mutation,
      variables,
      onCompleted: ({ createItem: result }) => {
        const { ok, error, item } = result;
        done(ok, error, item);
      },
      onError: error => {
        console.error(error);
        done(true, error, null);
      }
    }
  );
};
