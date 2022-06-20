const ItemModel = require('../../services/items/items');

const getByIdCtrl = itemId => {
  return ItemModel.getItemById(itemId);
};

module.exports = getByIdCtrl;
