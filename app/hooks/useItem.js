import onCreateItemMutation from '../_graphql/mutations/item/createItemMutation';

const useItem = (addItem, setIsError, hasBeenCancelled) => {
  const onCreateItem = itemToCreate => {
    onCreateItemMutation({ itemToCreate }, (ok, error, item) => {
      if (ok && !hasBeenCancelled) {
        addItem(item);
        setIsError(null);
      } else if (!ok && !hasBeenCancelled) {
        addItem();
        setIsError(error);
      }
    });
  };

  return {
    onCreateItem
  };
};

export default useItem;
