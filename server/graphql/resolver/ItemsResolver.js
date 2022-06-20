const {
  getByIdCtrl
} = require('../../controllers/itemCtrl');

const ItemsResolver = () => (() => {
  const getItemById = async (itemId) => {
    const { data } = await getByIdCtrl(itemId);
    console.log(JSON.stringify(data, null, 1));
    if (data) return data;
  };

  return {
    getItemById
  };
})();

module.exports = ItemsResolver;
