const { ItemCtrl } = require('../../controllers/itemCtrl');
const { OK, KO } = require('./helpers');

const Ajv = require('ajv');
const ajv = new Ajv({ useDefaults: true });
const categoryValidValues = ['A', 'B', 'C', 'D'];
const SchemaValidator = {
  type: 'object',
  properties: {
    name: { type: 'string', pattern: '[a-zA-Z]' },
    category: { type: 'string', enum: categoryValidValues }
  }
};

const ItemsResolver = () => (() => {
  const createItem = async itemToCreate => {
    const isValidatedCategory = ajv.validate(SchemaValidator, itemToCreate);
    if (!isValidatedCategory) return KO('Les données ne respectent pas les règles de validation');
    try {
      const item = await ItemCtrl().createItem(itemToCreate);
      if (item.error) return KO(item.error);
      else return OK({ item });
    } catch (err) {
      console.info('ERROR', err);
      return KO('Une erreur est survenue');
    }
  };

  const updateItem = async (itemIdToUpdate, itemToUpdate) => {
    const isValidatedCategory = ajv.validate(SchemaValidator, itemToUpdate);
    if (!isValidatedCategory) return KO('Les données ne respectent pas les règles de validation');
    try {
      const response = await ItemCtrl().updateItem(itemIdToUpdate, itemToUpdate);
      if (response.nModified) return OK();
      else return KO('Aucun élément mise à jour');
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

  return {
    createItem,
    getItemById,
    getItems,
    deleteItem,
    updateItem
  };
})();

module.exports = ItemsResolver;
