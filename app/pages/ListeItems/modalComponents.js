import React, { useState } from 'react';

const SvgcloseIcon = (props) => {
  const { setIsModal } = props;
  return (
    <svg
      onClick={() => setIsModal(false)}
      style={{ cursor: 'pointer' }}
      className="h-6 w-6 text-yellow-500"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
};

const ModalContent = (props) => {
  const { onCreateItem } = props;
  const [inputs, setInputs] = useState({ category: 'A' });

  const onFormChange = e => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  return (
    <div className="m-10">
      <div className="flex justify-between items-center mb-10">
        <h3 className="text-lg font-medium text-gray-600 border-b-8 pb-3">Créer un nouvel Item</h3>
        <SvgcloseIcon {...props} />
      </div>

      <div>
        <div >
          <div className="mb-5">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Nom
            </label>
            <input
              onChange={onFormChange}
              type="text"
              name="name"
              id="name"
              autoComplete="name"
              className="p-4 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md bg-slate-100"
            />
          </div>

          <div className="mb-5">
            <label htmlFor="category" className="block text-sm font-medium text-gray-700">
              Catégorie
            </label>
            <select
              onChange={onFormChange}
              id="category"
              name="category"
              autoComplete="category"
              className="p-4 mt-1 block w-full border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-slate-100"
            >
              <option>A</option>
              <option>B</option>
              <option>C</option>
            </select>
          </div>

          <div className="mb-5">
            <label htmlFor="group" className="block text-sm font-medium text-gray-700">
              Groupe
            </label>
            <input
              onChange={onFormChange}
              type="text"
              name="group"
              id="group"
              autoComplete="group"
              className="p-4 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md bg-slate-100"
            />
          </div>
        </div>
        <div className="flex justify-center pt-5">
          <input
            onClick={() => onCreateItem(inputs)}
            type='button'
            className="cursor-pointer inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            value="Créer"
          />
        </div>
      </div>
    </div>
  );
};

export const ModalComponent = (props) => {
  return (
    <div style={{
      display: 'flex',
      height: '100%',
      width: '100%',
      position: 'fixed',
      top: 0,
      left: 0,
      backgroundColor: 'rgba(200,200,200,.5)',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <div style={{
        border: '1px solid grey',
        padding: '20px',
        backgroundColor: 'white',
        width: '500px'
      }}>
        <ModalContent {...props} />
      </div>
    </div>
  );
};
