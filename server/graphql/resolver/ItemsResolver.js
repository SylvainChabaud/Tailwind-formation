const { ItemCtrl } = require('../../controllers/itemCtrl');
const { OK, KO } = require('./helpers');

const ItemsResolver = (context) => (() => {
  const getItemById = async itemId => {
    try {
      const item = await ItemCtrl(context).getItemById(itemId);
      return OK({ item });
    } catch (err) {
      console.info('ERROR', err);
      return KO('Une erreur est survenue');
    }
  };

  const getItems = async itemId => {
    try {
      const items = await ItemCtrl(context).getItems();
      return OK({ items });
    } catch (err) {
      console.info('ERROR', err);
      return KO('Une erreur est survenue');
    }
  };

  return {
    getItemById,
    getItems
  };
})();

module.exports = ItemsResolver;
