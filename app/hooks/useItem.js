import onCreateItemMutation from '../_graphql/mutations/item/createItemMutation';
import onDeleteItemMutation from '../_graphql/mutations/item/deleteItemMutation';

const useItem = (fctOnItem, setIsError, hasBeenCancelled) => {
  const onCreateItem = itemToCreate => {
    onCreateItemMutation({ itemToCreate }, (ok, error, item) => {
      if (ok && !hasBeenCancelled) {
        fctOnItem(item);
        setIsError(null);
      } else if (!ok && !hasBeenCancelled) {
        fctOnItem(null);
        setIsError(error);
      }
    });
  };

  const onDeleteItem = itemIdToDelete => {
    onDeleteItemMutation({ itemIdToDelete }, (ok, error) => {
      if (ok && !hasBeenCancelled) {
        fctOnItem(itemIdToDelete);
        setIsError(null);
      } else if (!ok && !hasBeenCancelled) {
        fctOnItem(null);
        setIsError(error);
      }
    });
  };

  return {
    onCreateItem,
    onDeleteItem
  };
};

export default useItem;
