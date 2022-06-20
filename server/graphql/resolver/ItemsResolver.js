const {
  getByIdCtrl
} = require('../../controllers/itemCtrl');
const { OK, KO } = require('./helpers');

const ItemsResolver = () => (() => {
  const getItemById = async (itemId) => {
    try {
      const item = await getByIdCtrl(itemId);
      return OK({ item });
    } catch (err) {
      console.info('ERROR', err);
      return KO('Une erreur est survenue');
    }
  };

  return {
    getItemById
  };
})();

module.exports = ItemsResolver;
