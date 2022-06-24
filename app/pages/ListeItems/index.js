import React, { useEffect, useState } from 'react';
import { QItemsQuery as getItemsQuery } from '../../_graphql/queries/QItems';
import { QCreateItemMutation as createItemQuery } from '../../_graphql/queries/QCreateItem';
import { fetchQuery, useMutation, useRelayEnvironment } from 'react-relay';
import { ThComponent, TbodyComponent } from './tableComponents';
import { ModalComponent } from './modalComponents';

const ListeItems = () => {
  const environment = useRelayEnvironment();
  const [items, setItems] = useState(null);
  const [isModal, setIsModal] = useState(false);
  const [commitMutation] = useMutation(createItemQuery);

  useEffect(() => {
    let hasBeenCancelled = false;
    const fetchData = async () => {
      try {
        const { getItems: result } = await fetchQuery(environment, getItemsQuery, {}).toPromise();
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

  const onCreateItem = (itemToCreate) => {
    console.info('SAVE', itemToCreate);

    const fetchData = () => {
      commitMutation({
        variables: {
          itemToCreate
        },
        onCompleted (data) {
          console.info('result', data);
        }
      });

      // try {
      //   const { createItem: result } = await fetchQuery(environment, createItemQuery, itemToCreate).toPromise();
      //   if (result.ok) {
      //     // setItems({...items, result.item});
      //     console.info('CREATE ITEM RESPONSE', result);
      //   }
      // } catch (e) {
      //   console.error('CREATE ITEM ERROR : ', e);
      //   return null;
      // }
    };
    fetchData();
  };

  return (
    <>
      { items &&
        <>
          <button
            name='itemCreationModal'
            onClick={ () => setIsModal(true) }
            className="my-10 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            type="button"
            data-modal-toggle="itemCreationModal"
          >
            AJOUTER UN ITEM
          </button>

          { isModal && <ModalComponent setIsModal={setIsModal} onCreateItem={onCreateItem} /> }

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
              <TbodyComponent items={items} />
            </tbody>
          </table>
        </>
      }
    </>
  );
};

export default ListeItems;
