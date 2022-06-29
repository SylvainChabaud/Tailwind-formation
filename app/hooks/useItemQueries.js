import { QItemsQuery as getItemsQuery } from '../_graphql/queries/QItems';
import { fetchQuery } from 'react-relay';

const fetchQueryData = async (setItems, setIsError, hasBeenCancelled, environment) => {
  try {
    const { getItems: result } = await fetchQuery(environment, getItemsQuery, {}).toPromise();
    if (!(result.ok)) setIsError(result.error);
    else if (!hasBeenCancelled) setItems(result.items);
  } catch (err) {
    console.error('error ', err);
    setIsError('Une erreur est survenue');
  }
};

export default fetchQueryData;
