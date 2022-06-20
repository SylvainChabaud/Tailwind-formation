import ItemModel from '../../services/items/items';

const itemCtrl = (context) => {
  const getItemById = (itemId) => {
    return ItemModel.getItemById(itemId);
  };

  return {
    getItemById
  };
};

module.exports = itemCtrl;
