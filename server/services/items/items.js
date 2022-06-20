const memoize = require('memoizee');
const { dbMongo } = require('../../lib/options/dbMongo');

const getHandler = memoize(dbMongo.useCollection, { promise: true });

const getCollectionHandler = (collection = 'items') => {
  return getHandler(collection);
};

const ItemModel = (() => {
  const createItem = () => {};

  const getItemById = async id => {
    const handler = await getCollectionHandler();
    return handler.findOne({ _id: id });
  };

  const updateItem = () => {};

  const deleteItem = () => {};

  return {
    createItem,
    getItemById,
    updateItem,
    deleteItem
  };
})();

module.exports = ItemModel;
