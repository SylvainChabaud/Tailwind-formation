import React, { useEffect, useState } from 'react';
import { QItemsQuery as query } from '../../_graphql/queries/QItems';
import { fetchQuery, useRelayEnvironment } from 'react-relay';
import { ThComponent, TbodyComponent } from './tableComponents';

const ListeItems = () => {
  const environment = useRelayEnvironment();
  const [items, setItems] = useState(null);

  useEffect(() => {
    let hasBeenCancelled = false;
    const fetchData = async () => {
      try {
        const { getItems: result } = await fetchQuery(environment, query, {}).toPromise();
        if (result.ok && !hasBeenCancelled) {
          setItems(result.items);
        }
      } catch (e) {
        console.error('GET ITEMS ERROR : ', e);
        return null;
      }
    };
    fetchData();

    return () => (hasBeenCancelled = true);
  }, []);

  return (
    <>
      { items &&
        <table className='min-w-full'>
          <thead className='bg-white border-b'>
            <tr>
              <ThComponent label='Nom'/>
              <ThComponent label='Catégorie'/>
              <ThComponent label="Groupe"/>
              <ThComponent label='Date de création'/>
              <ThComponent label='Date de mise à jour'/>
            </tr>
          </thead>
          <tbody>
            <TbodyComponent items={items}/>
          </tbody>
        </table>
      }
    </>
  );
};

export default ListeItems;
