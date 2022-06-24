import React from 'react';

export const ThComponent = ({ label }) => <th scope='col' className='text-sm font-medium text-gray-900 px-6 py-4 text-left'>{label}</th>;
const TdComponent = ({ value }) => <td className='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>{value}</td>;

export const TbodyComponent = ({ items }) => {
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
