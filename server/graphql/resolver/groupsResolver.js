const { GroupCtrl } = require('../../controllers/groupsCtrl');
const { OK, KO } = require('./helpers');

const GroupsResolver = () => (() => {
  const getGroups = async () => {
    try {
      const groups = await GroupCtrl().getGroups();
      return OK({ groups });
    } catch (err) {
      console.info('ERROR', err);
      return KO('Une erreur est survenue');
    }
  };
  return {
    getGroups
  };
})();

module.exports = GroupsResolver;
