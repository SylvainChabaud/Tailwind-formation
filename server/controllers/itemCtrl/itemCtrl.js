const ItemModel = require('../../services/items/items');

const itemCtrl = (context) => {
  const getItemById = itemId => {
    return ItemModel.getItemById(itemId);
  };

  const getItems = () => {
    return ItemModel.getItems();
  };

  return {
    getItemById,
    getItems
  };
};

module.exports = itemCtrl;
