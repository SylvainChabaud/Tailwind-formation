import React, { useEffect, useState } from 'react';
import { QItemsQuery as query } from '../../_graphql/queries/QItems';

import { fetchQuery, useRelayEnvironment } from 'react-relay';

const ListeItems = () => {
  const environment = useRelayEnvironment();
  const [items, setItems] = useState(null);

  const itemId = '62b07902164736a0acd82487';

  useEffect(() => {
    const fetchData = async () => {
      console.log('getItemById using item id ', { itemId });
      try {
        const { getItemById: result } = await fetchQuery(environment, query, { itemId }).toPromise();
        if (result.ok) {
          setItems(result.item);
        }
      } catch (e) {
        console.error('GET ITEM ERROR : ', e);
        throw e;
      }
    };
    fetchData();
  }, []);

  return (
    <>
      { items &&
        <table className='min-w-full'>
          <thead className='bg-white border-b'>
            <tr>
              <th scope='col' className='text-sm font-medium text-gray-900 px-6 py-4 text-left'>Name</th>
              <th scope='col' className='text-sm font-medium text-gray-900 px-6 py-4 text-left'>Category</th>
              <th scope='col' className='text-sm font-medium text-gray-900 px-6 py-4 text-left'>Group</th>
              <th scope='col' className='text-sm font-medium text-gray-900 px-6 py-4 text-left'>CreatedAt</th>
              <th scope='col' className='text-sm font-medium text-gray-900 px-6 py-4 text-left'>UpdatedAt</th>
            </tr>
          </thead>
          <tbody>
            <tr className='bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100'>
              <td className='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>{items.name}</td>
              <td className='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>{items.category}</td>
              <td className='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>{items.group}</td>
              <td className='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>{items.createdAt}</td>
              <td className='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>{items.updatedAt}</td>
            </tr>
          </tbody>
        </table>
      }
    </>
  );
};

export default ListeItems;
