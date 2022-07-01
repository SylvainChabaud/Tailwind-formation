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

  const deleteItem = async itemId => {
    try {
      const response = await ItemCtrl().deleteItem(itemId);
      if (response.deletedCount) return OK();
      else return KO('Aucun élément supprimé');
    } catch (err) {
      console.info('ERROR', err);
      return KO('Une erreur est survenue');
    }
  };

  const updateItem = async (itemIdToUpdate, itemToUpdate) => {
    try {
      const response = await ItemCtrl().updateItem(itemIdToUpdate, itemToUpdate);
      console.info('BEFORE', response);
      if (response.nModified) return OK();
      else return KO('Aucun élément mise à jour');
    } catch (err) {
      console.info('ERROR', err);
      return KO('Une erreur est survenue');
    }
  };

  return {
    createItem,
    getItemById,
    getItems,
    deleteItem,
    updateItem
  };
})();

module.exports = ItemsResolver;
