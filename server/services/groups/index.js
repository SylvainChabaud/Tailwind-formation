const service = require('@fasstech/service');

const groupsService = (command, args) => {
  return service(
    'itemsGroups',
    `${process.env.ROOT_API_GROUPS}`,
    {
      '/groups': {
        route: '/groups',
        method: 'GET'
      }
    }
  )(command, args);
};

module.exports = groupsService;
