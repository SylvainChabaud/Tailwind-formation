var R = require('ramda');
var itemsList = require('./itemsList');

const ItemMockCtrl = (() => {
  const createItem = item => {
    return R.ifElse(R.isNil,
      R.always(undefined),
      () => {
        item = R.compose(
          R.assoc('_id', itemsList.length + 1),
          R.assoc('createdAt', new Date()),
          R.assoc('updatedAt', new Date())
        )(item);
        itemsList = R.concat(itemsList, [item]);
        return item;
      }
    )(item);
  };

  const updateItem = (id, itemToUpdate) => {
    R.ifElse(R.isNil,
      R.always(undefined),
      () => {
        itemsList = R.map(
          R.when(
            R.propEq('_id', id),
            R.compose(
              R.assoc('updatedAt', new Date()),
              R.mergeLeft(itemToUpdate)
            )
          ),
          itemsList
        );
      }
    )(itemToUpdate);

    return R.find(R.propEq('_id', id))(itemsList);
  };

  const getItemById = id => {
    return R.find(R.propEq('_id', id), itemsList);
  };

  const deleteItem = id => {
    const listLength = itemsList.length;
    itemsList = R.filter(item => item._id !== id, itemsList);
    return listLength !== itemsList.length;
  };

  return {
    createItem,
    getItemById,
    updateItem,
    deleteItem
  };
})();

module.exports = ItemMockCtrl;
