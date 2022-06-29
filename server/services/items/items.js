const memoize = require('memoizee');
const { dbMongo } = require('../../lib/options/dbMongo');

const getHandler = memoize(dbMongo.useCollection, { promise: true });

const getCollectionHandler = (collection = 'items') => {
  return getHandler(collection);
};

const ItemModel = (() => {
  const createItem = async itemToCreate => {
    const handler = await getCollectionHandler();
    return handler.create(itemToCreate);
  };

  const getItemById = async itemIdToGet => {
    const handler = await getCollectionHandler();
    return handler.findOne({ _id: itemIdToGet });
  };

  const getItems = async () => {
    const handler = await getCollectionHandler();
    return handler.find();
  };

  const updateItem = async (itemIdToUpdate, itemToUpdate) => {
    const handler = await getCollectionHandler();
    return handler.updateOne({ _id: itemIdToUpdate }, { $set: itemToUpdate });
  };

  const deleteItem = async itemIdToDelete => {
    const handler = await getCollectionHandler();
    return handler.deleteOne({ _id: itemIdToDelete });
  };

  return {
    createItem,
    getItemById,
    getItems,
    updateItem,
    deleteItem
  };
})();

module.exports = ItemModel;
