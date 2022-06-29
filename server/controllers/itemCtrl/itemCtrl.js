const ItemModel = require('../../services/items/items');

const itemCtrl = () => {
  const createItem = itemToCreate => {
    return ItemModel.createItem(itemToCreate);
  };

  const getItemById = itemId => {
    return ItemModel.getItemById(itemId);
  };

  const getItems = () => {
    return ItemModel.getItems();
  };

  const deleteItem = itemId => {
    return ItemModel.deleteItem(itemId);
  };

  return {
    createItem,
    getItemById,
    getItems,
    deleteItem
  };
};

module.exports = itemCtrl;
