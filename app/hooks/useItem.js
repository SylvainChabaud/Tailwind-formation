import onCreateItemMutation from '../_graphql/mutations/item/createItemMutation';
import onDeleteItemMutation from '../_graphql/mutations/item/deleteItemMutation';

const useItem = (fctOnItem, setIsError, hasBeenCancelled) => {
  const onCreateItem = itemToCreate => {
    onCreateItemMutation({ itemToCreate }, (ok, error, item) => {
      if (!ok) setIsError(error);
      else if (!hasBeenCancelled) fctOnItem(item);
    });
  };

  const onDeleteItem = itemIdToDelete => {
    onDeleteItemMutation({ itemIdToDelete }, (ok, error) => {
      if (!ok) setIsError(error);
      else if (!hasBeenCancelled) fctOnItem(itemIdToDelete);
    });
  };

  return {
    onCreateItem,
    onDeleteItem
  };
};

export default useItem;
