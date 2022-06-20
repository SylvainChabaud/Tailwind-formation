import { ItemCtrl } from '../../controllers/itemCtrl';
import { OK, KO } from './helpers';

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

  return {
    getItemById
  };
})();

module.exports = ItemsResolver;
