import { useEffect, useState } from 'react';
import { QItemsQuery as getItemsQuery } from '../_graphql/queries/QItems';
import { fetchQuery, useRelayEnvironment } from 'react-relay';
import { inc } from 'ramda';

const useItemQueries = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);
  const [count, setCount] = useState(0);
  const environment = useRelayEnvironment();

  useEffect(() => {
    let hasBeenCancelled = false;
    const fetch = async () => {
      try {
        const { getItems: result } = await fetchQuery(environment, getItemsQuery, {}).toPromise();
        if (!(result.ok)) setError(result.error);
        else if (!hasBeenCancelled) setItems(result.items);
      } catch (err) {
        console.error('error ', err);
        setError('Une erreur est survenue');
      }
    };
    fetch();
    return () => (hasBeenCancelled = true);
  }, [count]);

  const refetch = () => setCount(inc);

  return {
    refetch,
    items,
    error
  };
};

export default useItemQueries;
