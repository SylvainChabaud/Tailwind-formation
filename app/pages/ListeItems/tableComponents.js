import React from 'react';

const SvgcloseIcon = ({ itemIdToDelete, onDeleteItem }) => {
  return (
    <svg
      role='button'
      onClick={() => onDeleteItem(itemIdToDelete)}
      className="cursor-pointer h-5 w-5 text-red-500 my-5 mx-5"
      width="24" height="24"
      viewBox="0 0 24 24"
      strokeWidth="1"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z"/>
      <line x1="4" y1="7" x2="20" y2="7" />
      <line x1="10" y1="11" x2="10" y2="17" />
      <line x1="14" y1="11" x2="14" y2="17" />
      <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
      <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
    </svg>
  );
};

export const ThComponent = ({ label }) => <th scope='col' className='text-sm font-medium text-gray-900 px-6 py-4 text-left'>{label}</th>;
const TdComponent = ({ value }) => <td className='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>{value}</td>;

export const TbodyComponent = ({ items, onDeleteItem }) => {
  return items.map((item, index) => {
    return (
      <tr key={`key-${index}`} className='bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100'>
        <TdComponent value={item.name}/>
        <TdComponent value={item.category}/>
        <TdComponent value={item.group}/>
        <TdComponent value={item.createdAt}/>
        <TdComponent value={item.updatedAt}/>
        <SvgcloseIcon itemIdToDelete={item._id} onDeleteItem={onDeleteItem}/>
      </tr>
    );
  });
};
