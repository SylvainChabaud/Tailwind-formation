var R = require('ramda');
var itemsList = require('./itemsList');

const ItemMockCtrl = (() => {
  const createItem = item => {
    item = R.compose(
      R.assoc('_id', itemsList.length + 1),
      R.assoc('createdAt', new Date()),
      R.assoc('updatedAt', new Date())
    )(item);
    itemsList = R.concat(itemsList, [item]);
    return item;
  };

  const getItemById = id => {
    return R.find(R.propEq('_id', id), itemsList);
  };

  const updateItem = (id, itemToUpdate) => {
    itemsList = R.map(item => {
      if (item._id === id) {
        const itemToAdd = R.compose(
          R.assoc('_id', item._id),
          R.assoc('createdAt', item.createdAt),
          R.assoc('updatedAt', new Date())
        )(itemToUpdate);
        return itemToAdd;
      } else return item;
    }, itemsList);
    return itemToUpdate;
  };

  const deleteItem = id => {
    const listLength = itemsList.length;
    itemsList = R.filter(item => item._id !== id, itemsList);
    return listLength !== itemsList.lenth;
  };

  return {
    createItem,
    getItemById,
    updateItem,
    deleteItem,
    itemsList
  };
})();

module.exports = ItemMockCtrl;
