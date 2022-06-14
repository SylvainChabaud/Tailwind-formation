var R = require('ramda');

const ItemMockCtrl = (() => {
  const createItem = (items, item) => {
    const result = R.concat(items, [item]);
    return result;
  };

  const getItemById = (items, id) => {
    var result = `item ${id} non trouvé !`;
    for (var ind = 0; ind < items.length; ++ind) {
      if (R.equals(id, items[ind]._id)) {
        result = items[ind];
        break;
      }
    }
    return result;
  };

  const updateItem = (items, id, item) => {
    var result = `item ${id} non trouvé !`;
    for (var ind = 0; ind < items.length; ++ind) {
      if (R.equals(id, items[ind]._id)) {
        result = R.insert(ind, item, R.remove(ind, 1, items));
        break;
      }
    }
    return result;
  };

  const deleteItem = (items, id) => {
    var result = `item ${id} non trouvé !`;
    for (var ind = 0; ind < items.length; ++ind) {
      if (R.equals(id, items[ind]._id)) {
        result = R.remove(ind, ind + 1, items);
        break;
      }
    }
    return result;
  };

  return {
    createItem,
    getItemById,
    updateItem,
    deleteItem
  };
})();

module.exports = ItemMockCtrl;
