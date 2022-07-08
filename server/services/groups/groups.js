const itemsGroupsService = require('../../services/groups');

const GroupsModel = (() => {
  const getGroups = async () => {
    return await itemsGroupsService('/groups');
  };

  return {
    getGroups
  };
})();

module.exports = GroupsModel;
