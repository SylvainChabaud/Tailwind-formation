import onCreateItemMutation from '../../_graphql/mutations/item/createItemMutation';
import onDeleteItemMutation from '../../_graphql/mutations/item/deleteItemMutation';
import onUpdateItemMutation from '../../_graphql/mutations/item/updateItemMutation';
import { pick } from 'ramda';

const useItems = (onResultChangeItem) => {
  // Create item
  const onCreateItem = itemToCreate => {
    onCreateItemMutation({ itemToCreate }, onResultChangeItem);
  };

  // Delete item
  const onDeleteItem = itemIdToDelete => {
    onDeleteItemMutation({ itemIdToDelete }, onResultChangeItem);
  };

  // Update item
  const onUpdateItem = (itemId, itemToUpdate) => {
    onUpdateItemMutation({ itemIdToUpdate: itemId, itemToUpdate: pick(['name', 'group', 'category'], itemToUpdate) }, onResultChangeItem);
  };

  return { onCreateItem, onDeleteItem, onUpdateItem };
};

export default useItems;
