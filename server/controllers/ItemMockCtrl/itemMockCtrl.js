var R = require('ramda');
var itemsList = require('./itemsList');

const ItemMockCtrl = (() => {
  const createItem = item => {
    if (item && itemsList) {
      item = R.compose(
        R.assoc('_id', itemsList.length + 1),
        R.assoc('createdAt', new Date()),
        R.assoc('updatedAt', new Date())
      )(item);
      itemsList = R.concat(itemsList, [item]);
      return item;
    } else return undefined;
  };

  const getItemById = id => {
    return R.find(R.propEq('_id', id), itemsList);
  };

  const updateItem = (id, itemToUpdate) => {
    var result;
    if (id && itemToUpdate && itemsList) {
      itemsList = R.map(item => {
        if (item._id === id) {
          result = R.compose(
            R.assoc('_id', item._id),
            R.assoc('createdAt', item.createdAt),
            R.assoc('updatedAt', new Date())
          )(itemToUpdate);
          return result;
        } else return item;
      }, itemsList);
    }
    return result;
  };

  const deleteItem = id => {
    if (id && itemsList) {
      const listLength = itemsList.length;
      itemsList = R.filter(item => item._id !== id, itemsList);
      return listLength !== itemsList.length;
    } else return undefined;
  };

  return {
    createItem,
    getItemById,
    updateItem,
    deleteItem
  };
})();

module.exports = ItemMockCtrl;
