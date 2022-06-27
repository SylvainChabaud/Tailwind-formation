const { ItemCtrl } = require('../../controllers/itemCtrl');
const { OK, KO } = require('./helpers');

const ItemsResolver = () => (() => {
  const createItem = async itemToCreate => {
    if (!itemToCreate) return KO('Aucun item renseigné');
    try {
      const item = await ItemCtrl().createItem(itemToCreate);
      return OK({ item });
    } catch (err) {
      console.info('ERROR', err);
      return KO('Une erreur est survenue');
    }
  };

  const getItemById = async itemId => {
    if (!itemId) return KO('Aucun id renseigné');
    try {
      const item = await ItemCtrl().getItemById(itemId);
      return OK({ item });
    } catch (err) {
      console.info('ERROR', err);
      return KO('Une erreur est survenue');
    }
  };

  const getItems = async () => {
    try {
      const items = await ItemCtrl().getItems();
      return OK({ items });
    } catch (err) {
      console.info('ERROR', err);
      return KO('Une erreur est survenue');
    }
  };

  const deleteItems = async itemId => {
    try {
      const isDeletedItem = await ItemCtrl().deleteItem(itemId);
      return OK({ isDeletedItem });
    } catch (err) {
      console.info('ERROR', err);
      return KO('Une erreur est survenue');
    }
  };

  return {
    createItem,
    getItemById,
    getItems,
    deleteItems
  };
})();

module.exports = ItemsResolver;
