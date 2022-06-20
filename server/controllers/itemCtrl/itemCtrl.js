const ItemModel = require('../../services/items/items');

const getByIdCtrl = async ({ itemId }) => {
  try {
    return await ItemModel.getItemById(itemId);
  } catch (err) {
    console.log(`COM_TAILWIND_ERROR_GET_ITEM_ID ${itemId}`);
    throw new Error('COM_TAILWIND_ERROR_GET_ITEM_ID');
  }
};

module.exports = getByIdCtrl;
