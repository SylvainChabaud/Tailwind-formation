import React, { useState, useEffect } from 'react';
import { ThComponent, TbodyComponent } from './tableComponents';
import { ModalToCreateComponent } from './ModalToCreateComponent';
import { ModalToUpdateComponent } from './ModalToUpdateComponent';
import { useItemMutations, useItemQueries } from '../../hooks';

const { useRelayEnvironment } = require('react-relay');

const ListeItems = () => {
  const [hasBeenCancelled, setHasBeenCancelled] = useState(false);
  const [items, setItems] = useState(null);
  const [currentItem, setCurrentItem] = useState(null);
  const [isModalToCreate, setIsModalToCreate] = useState(false);
  const [isModalToUpdate, setIsModalToUpdate] = useState(false);
  const [isError, setIsError] = useState(null);
  const environment = useRelayEnvironment();

  const getItems = () => useItemQueries(setItems, setIsError, hasBeenCancelled, environment);

  // Get items at start
  useEffect(() => {
    getItems();
    return () => setHasBeenCancelled(true);
  }, [hasBeenCancelled]);

  // Create item
  const onCreateItem = itemToCreate => {
    useItemMutations(getItems, setIsError, hasBeenCancelled).onCreateItem(itemToCreate);
    setIsModalToCreate(false);
  };

  // Delete item
  const onDeleteItem = itemIdToDelete => useItemMutations(getItems, setIsError, hasBeenCancelled).onDeleteItem(itemIdToDelete);

  // Update item
  const onUpdateItem = itemToUpdate => {
    useItemMutations(getItems, setIsError, hasBeenCancelled).onUpdateItem(currentItem._id, itemToUpdate);
    setIsModalToUpdate(false);
  };

  // ON MODAL FOR UPDATE
  const onUpdateModal = currentItem => {
    setCurrentItem(currentItem);
    setIsModalToUpdate(true);
  };

  return (
    <>
      { isError ? <>{isError}</>
        : items &&
        <>
          <button
            name='itemCreationModal'
            onClick={ () => setIsModalToCreate(true) }
            className="my-10 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            type="button"
            data-modal-toggle="itemCreationModal"
          >
            AJOUTER UN ITEM
          </button>

          { isModalToCreate && <ModalToCreateComponent setIsModalToCreate={setIsModalToCreate} onCreateItem={onCreateItem} /> }
          { isModalToUpdate && <ModalToUpdateComponent setIsModalToUpdate={setIsModalToUpdate} onUpdateItem={onUpdateItem} currentItem={currentItem} /> }

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
              <TbodyComponent items={items} onDeleteItem={onDeleteItem} onUpdateModal={onUpdateModal}/>
            </tbody>
          </table>
        </>
      }
    </>
  );
};

export default ListeItems;
