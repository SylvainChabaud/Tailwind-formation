import { useEffect, useState } from 'react';
import { QGroupsQuery as getGroupsQuery } from '../_graphql/queries/QGroups';
import { fetchQuery, useRelayEnvironment } from 'react-relay';

const useGroupQueries = () => {
  const [groups, setGroups] = useState([]);
  const [error, setError] = useState(null);
  const environment = useRelayEnvironment();

  useEffect(() => {
    let hasBeenCancelled = false;
    const fetch = async () => {
      try {
        const { getGroups: result } = await fetchQuery(environment, getGroupsQuery, {}).toPromise();
        if (!(result.ok)) setError(result.error);
        else if (!hasBeenCancelled) setGroups(result.groups);
      } catch (err) {
        console.error('error ', err);
        setError('Une erreur est survenue');
      }
    };
    fetch();
    return () => (hasBeenCancelled = true);
  }, []);

  return {
    groups,
    error
  };
};

export default useGroupQueries;
