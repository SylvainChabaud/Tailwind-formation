import React, { useEffect, useState } from 'react';

const SvgcloseIcon = props => {
  const { setIsModalToUpdate } = props;
  return (
    <svg
      role='button'
      onClick={() => setIsModalToUpdate(false)}
      className="cursor-pointer h-6 w-6 text-yellow-500"
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

const optionsTab = ['A', 'B', 'C'];

const ModalContent = props => {
  const { onUpdateItem, currentItem } = props;
  const [inputs, setInputs] = useState({ category: 'A' });

  useEffect(() => {
    setInputs({
      name: currentItem.name,
      category: currentItem.category,
      group: currentItem.group
    });
  }, [currentItem]);

  const onFormChange = e => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleUpdateItem = (e) => {
    e.preventDefault();
    onUpdateItem(inputs);
  };

  return (
    <div className="m-10">
      <div className="flex justify-between items-center mb-10">
        <h3 className="text-lg font-medium text-gray-600 border-b-8 pb-3">Modifier un Item</h3>
        <SvgcloseIcon {...props} />
      </div>

      <form onSubmit={handleUpdateItem}>
        <div>
          <div className="mb-5">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Nom
            </label>
            <input
              value={inputs.name}
              required
              onChange={onFormChange}
              type="text"
              name="name"
              id="name"
              autoComplete="on"
              className="p-4 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md bg-slate-100"
            />
          </div>

          <div className="mb-5">
            <label htmlFor="category" className="block text-sm font-medium text-gray-700">
              Catégorie
            </label>
            <select
              value={inputs.category}
              onChange={onFormChange}
              id="category"
              name="category"
              autoComplete="on"
              className="p-4 mt-1 block w-full border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-slate-100"
            >
              {optionsTab.map(option => <option key={'key-' + option}>{option}</option>)}
            </select>
          </div>

          <div className="mb-5">
            <label htmlFor="group" className="block text-sm font-medium text-gray-700">
              Groupe
            </label>
            <input
              value={inputs.group}
              onChange={onFormChange}
              type="text"
              name="group"
              id="group"
              autoComplete="on"
              className="p-4 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md bg-slate-100"
            />
          </div>
        </div>
        <div className="flex justify-center pt-5">
          <input
            type='submit'
            className="cursor-pointer inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            value="Modifier"
          />
        </div>
      </form>
    </div>
  );
};

export const ModalToUpdateComponent = props => {
  return (
    <div className='flex w-full h-full fixed top-0 left-0 justify-center items-center bg-neutral-300 bg-opacity-50'>
      <div className='border border-current p-5 bg-white w-96'>
        <ModalContent {...props} />
      </div>
    </div>
  );
};
