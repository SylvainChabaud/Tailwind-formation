const ItemModel = require('../../services/items/items');

const getByIdCtrl = async itemId => {
  return ItemModel.getItemById(itemId);
};

module.exports = getByIdCtrl;
