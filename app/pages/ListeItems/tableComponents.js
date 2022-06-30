import React from 'react';

const SvgDeleteIcon = ({ onClick }) => {
  return (
    <svg
      role='button'
      onClick={onClick}
      className="cursor-pointer h-5 w-5 text-blue-500 my-5 mx-1"
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

const SvgEditIcon = ({ onClick }) => {
  return (
    <svg
      role='button'
      onClick={onClick}
      className="cursor-pointer h-5 w-5 text-blue-500 my-5 mx-1"
      width="24" height="24"
      viewBox="0 0 24 24"
      strokeWidth="1"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1"
        d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
      ></path>
    </svg>
  );
};

export const ThComponent = ({ label }) => <th scope='col' className='text-sm font-medium text-gray-900 px-6 py-4 text-left'>{label}</th>;
const TdComponent = ({ children }) => <td className={'text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'}>{children}</td>;

export const TbodyComponent = ({ items, onDeleteItem, onUpdateModal }) => {
  return items.map((item, index) => {
    return (
      <tr key={`key-${index}`} className='bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100'>
        <TdComponent>{item.name}</TdComponent>
        <TdComponent>{item.category}</TdComponent>
        <TdComponent>{item.group}</TdComponent>
        <TdComponent>{item.createdAt}</TdComponent>
        <TdComponent>{item.updatedAt}</TdComponent>
        <TdComponent>
          <div className='flex'>
            <SvgDeleteIcon onClick={() => onDeleteItem(item._id)}/>
            <SvgEditIcon onClick={() => onUpdateModal(item)}/>
          </div>
        </TdComponent>
      </tr>
    );
  });
};
