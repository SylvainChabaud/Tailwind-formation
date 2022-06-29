const ItemModel = require('../../services/items/items');

const itemCtrl = () => {
  const createItem = itemToCreate => {
    return ItemModel.createItem(itemToCreate);
  };

  const getItemById = itemIdToGet => {
    return ItemModel.getItemById(itemIdToGet);
  };

  const getItems = () => {
    return ItemModel.getItems();
  };

  const deleteItem = itemIdToDelete => {
    return ItemModel.deleteItem(itemIdToDelete);
  };

  const updateItem = (itemIdToUpdate, itemToUpdate) => {
    return ItemModel.updateItem(itemIdToUpdate, itemToUpdate);
  };

  return {
    createItem,
    getItemById,
    getItems,
    deleteItem,
    updateItem
  };
};

module.exports = itemCtrl;
