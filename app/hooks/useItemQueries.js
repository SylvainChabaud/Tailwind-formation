import { useEffect } from 'react';

import { QItemsQuery as getItemsQuery } from '../_graphql/queries/QItems';

const { fetchQuery } = require('react-relay');
const { useRelayEnvironment } = require('react-relay');

const useItemQueries = (setItems, setIsError, setHasBeenCancelled, hasBeenCancelled) => {
  const environment = useRelayEnvironment();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { getItems: result } = await fetchQuery(environment, getItemsQuery, {}).toPromise();
        if (!(result.ok)) setIsError(result.error);
        else if (!hasBeenCancelled) setItems(result.items);
      } catch (err) {
        console.error('error ', err);
        setIsError('Une erreur est survenue');
      }
    };

    fetchData();
    return () => setHasBeenCancelled(true);
  }, [hasBeenCancelled]);
};

export default useItemQueries;
