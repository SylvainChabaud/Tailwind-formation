import React, { useState } from 'react';
import { ThComponent, TbodyComponent } from './tableComponents';
import ModalEditItem from './ModalEditItem';
import { useItemQueries, useGroupsQueries } from '../../hooks';
import { compose, not, isNil, prop } from 'ramda';
import useItems from './useItems';

const ListeItems = () => {
  const [currentItem, setCurrentItem] = useState(null);
  const [isOpenModal, setOpenModal] = useState(false);
  const [error, setError] = useState(null);
  const { items, refetch: refetchItems } = useItemQueries();
  const { groups } = useGroupsQueries();

  const onResultChangeItem = (ok, error) => {
    if (!ok) return setError(error);

    refetchItems();
    setOpenModal(false);
    setCurrentItem(null);
    setError(null);
  };

  const { onCreateItem, onDeleteItem, onUpdateItem } = useItems(onResultChangeItem);

  const onUpdateModal = item => {
    setCurrentItem(item);
    setOpenModal(true);
  };

  const handleSubmit = (inputs) => {
    if (compose(not, isNil, prop('_id'))(currentItem)) {
      onUpdateItem(currentItem._id, inputs);
    } else {
      onCreateItem(inputs);
    }
  };

  const handleCloseModal = () => setOpenModal(false);

  return (
    <div>
      {error && <p className='text-red-600 border p-5 mt-5'>{error}</p>}
      <button
        name='itemCreationModal'
        onClick={ () => setOpenModal(true) }
        className="my-10 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        type="button"
        data-modal-toggle="itemCreationModal"
      >
        AJOUTER UN ITEM
      </button>

      {isOpenModal && <ModalEditItem onClose={handleCloseModal} onSubmit={handleSubmit} item={currentItem} groups={groups} />}

      <table className='min-w-full'>
        <thead className='bg-white border-b'>
          <tr>
            <ThComponent label='Nom'/>
            <ThComponent label='Catégorie'/>
            <ThComponent label="Groupe"/>
            <ThComponent label='Date de création'/>
            <ThComponent label='Date de mise à jour'/>
            <ThComponent label='Outils'/>
          </tr>
        </thead>
        <tbody>
          <TbodyComponent items={items} onDeleteItem={onDeleteItem} onUpdateModal={onUpdateModal}/>
        </tbody>
      </table>
    </div>
  );
};

export default ListeItems;
