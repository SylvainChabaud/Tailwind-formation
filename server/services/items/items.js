const memoize = require('memoizee');
const { dbMongo } = require('../../lib/options/dbMongo');

const getHandler = memoize(dbMongo.useCollection, { promise: true });

const getCollectionHandler = (collection = 'items') => {
  return getHandler(collection);
};

const ItemModel = (() => {
  const createItem = () => {};

  const getItemById = async itemId => {
    const handler = await getCollectionHandler();
    return handler.findOne({ _id: itemId });
  };

  const getItems = async () => {
    const handler = await getCollectionHandler();
    return handler.find();
  };

  const updateItem = () => {};

  const deleteItem = () => {};

  return {
    createItem,
    getItemById,
    getItems,
    updateItem,
    deleteItem
  };
})();

module.exports = ItemModel;
