import React, { useEffect, useState } from 'react';
import { QItemsQuery as query } from '../../_graphql/queries/QItems';

import { fetchQuery, useRelayEnvironment } from 'react-relay';

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

  const ThComponent = ({ label }) => <th scope='col' className='text-sm font-medium text-gray-900 px-6 py-4 text-left'>{label}</th>;
  const TdComponent = ({ value }) => <td className='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>{value}</td>;

  const TbodyComponent = () => {
    return items.map((item, index) => {
      return (
        <tr key={`key-${index}`} className='bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100'>
          <TdComponent value={item.name}/>
          <TdComponent value={item.category}/>
          <TdComponent value={item.group}/>
          <TdComponent value={item.createdAt}/>
          <TdComponent value={item.updatedAt}/>
        </tr>
      );
    });
  };

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
            <TbodyComponent />
          </tbody>
        </table>
      }
    </>
  );
};

export default ListeItems;
