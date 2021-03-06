import React, { useState } from 'react';
import { mergeLeft, compose, not, isNil, prop } from 'ramda';

const categoryValidValues = require('../../../server/graphql/resolver/constants');

const SvgcloseIcon = ({ onClick }) => {
  return (
    <svg
      role='button'
      onClick={onClick}
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

const defaultValue = {
  name: '',
  category: 'A',
  group: 'group1'
};

const ModalEditItem = ({ onSubmit, onClose, item, groups }) => {
  const [inputs, setInputs] = useState(mergeLeft(item, defaultValue));

  const onFormChange = e => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleSubmitItem = (e) => {
    e.preventDefault();
    onSubmit(inputs);
  };

  const isEdit = compose(not, isNil, prop('_id'))(item);

  return (
    <div className='flex w-full h-full fixed top-0 left-0 justify-center items-center bg-neutral-300 bg-opacity-50'>
      <div className='border border-current p-5 bg-white w-96'>
        <div className="m-10">
          <div className="flex justify-between items-center mb-10">
            <h3 className="text-lg font-medium text-gray-600 border-b-8 pb-3">{isEdit ? 'Editer un item' : 'Créer un nouvel Item'}</h3>
            <SvgcloseIcon onClick={onClose} />
          </div>

          <form onSubmit={handleSubmitItem}>
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
                  {categoryValidValues.map(option => <option key={'key-' + option}>{option}</option>)}
                </select>
              </div>

              <div className="mb-5">
                <label htmlFor="group" className="block text-sm font-medium text-gray-700">
                  Groupe
                </label>
                <select
                  value={inputs.group}
                  onChange={onFormChange}
                  id="group"
                  name="group"
                  autoComplete="on"
                  className="p-4 mt-1 block w-full border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-slate-100"
                >
                  {groups.map(option => <option key={'key-' + option}>{option}</option>)}
                </select>
              </div>
            </div>
            <div className="flex justify-center pt-5">
              <input
                type='submit'
                className="cursor-pointer inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                value="Sauvegarder"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

ModalEditItem.defaultProps = {
  item: {}
};

export default ModalEditItem;
