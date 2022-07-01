import onCreateItemMutation from '../_graphql/mutations/item/createItemMutation';
import onDeleteItemMutation from '../_graphql/mutations/item/deleteItemMutation';
import onUpdateItemMutation from '../_graphql/mutations/item/updateItemMutation';

const useItemMutations = (fctOnItem, setIsError, hasBeenCancelled) => {
  const onCreateItem = itemToCreate => {
    onCreateItemMutation({ itemToCreate }, (ok, error, item) => {
      if (!ok) setIsError(error);
      else if (!hasBeenCancelled) fctOnItem();
    });
  };

  const onDeleteItem = itemIdToDelete => {
    onDeleteItemMutation({ itemIdToDelete }, (ok, error) => {
      if (!ok) setIsError(error);
      else if (!hasBeenCancelled) fctOnItem();
    });
  };

  const onUpdateItem = (itemIdToUpdate, itemToUpdate) => {
    onUpdateItemMutation({ itemIdToUpdate, itemToUpdate }, (ok, error) => {
      if (!ok) setIsError(error);
      else if (!hasBeenCancelled) fctOnItem();
    });
  };

  return {
    onCreateItem,
    onDeleteItem,
    onUpdateItem
  };
};

export default useItemMutations;
