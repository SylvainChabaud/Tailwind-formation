const GroupModel = require('../../services/groups/groups');

const groupCtrl = () => {
  const getGroups = () => {
    return GroupModel.getGroups();
  };

  return {
    getGroups
  };
};

module.exports = groupCtrl;
