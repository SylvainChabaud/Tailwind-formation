var R = require('ramda');

var itemsList = [];

const ItemMockCtrl = (() => {
  const createItem = item => {
    item = R.compose(
      R.assoc('_id', itemsList.length + 1),
      R.assoc('createdAt', new Date()),
      R.assoc('updatedAt', new Date())
    )(item);
    itemsList = R.concat(itemsList, [item]);
    return itemsList.length;
  };

  const getItemById = id => {
    return R.find(R.propEq('_id', id), itemsList);
  };

  const updateItem = (id, itemToUpdate) => {
    itemsList.forEach((item, index) => (item._id === id) && (itemsList[index] = R.assoc('updatedAt', new Date(), itemToUpdate)));
    return itemsList;
  };

  const deleteItem = id => {
    var listClone = R.clone(itemsList);
    var newItems = itemsList.filter(item => item._id !== id);
    itemsList = newItems;
    return listClone.length !== newItems;
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
