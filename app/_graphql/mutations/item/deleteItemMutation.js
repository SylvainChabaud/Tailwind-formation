import {
  commitMutation,
  graphql
} from 'react-relay';

import environment from '../..';
const mutation = graphql`
  mutation deleteItemMutation($itemIdToDelete: ID!) {
    deleteItem(itemIdToDelete: $itemIdToDelete) {
      ok
      error
    }
  }
`;
export default ({ itemIdToDelete }, done) => {
  const variables = {
    itemIdToDelete
  };
  commitMutation(
    environment(),
    {
      mutation,
      variables,
      onCompleted: ({ deleteItem: result }) => {
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
