import React, { useEffect, useState } from 'react';
import { QItemQuery as query } from '../../_graphql/queries/QItem';

import { fetchQuery, useRelayEnvironment } from 'react-relay';

const ListeItems = () => {
  const environment = useRelayEnvironment();
  const [items, setItems] = useState(null);

  const itemId = '62b07902164736a0acd82487';

  useEffect(() => {
    let hasBeenCancelled = false;
    const fetchData = async () => {
      console.log('getItemById using item id ', { itemId });
      try {
        const { getItemById: result } = await fetchQuery(environment, query, { itemId }).toPromise();
        if (result.ok && !hasBeenCancelled) {
          setItems(result.item);
        }
      } catch (e) {
        console.error('GET ITEM ERROR : ', e);
        return null;
      }
    };
    fetchData();

    return () => (hasBeenCancelled = true);
  }, []);

  const ThComponent = ({ label }) => <th scope='col' className='text-sm font-medium text-gray-900 px-6 py-4 text-left'>{label}</th>;
  const TdComponent = ({ value }) => <td className='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>{value}</td>;

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
            <tr className='bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100'>
              <TdComponent value={items.name}/>
              <TdComponent value={items.category}/>
              <TdComponent value={items.group}/>
              <TdComponent value={items.createdAt}/>
              <TdComponent value={items.updatedAt}/>
            </tr>
          </tbody>
        </table>
      }
    </>
  );
};

export default ListeItems;
