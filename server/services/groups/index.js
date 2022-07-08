const service = require('@fasstech/service');

const groupsService = (command, args) => {
  return service(
    'itemsGroups',
    // `${process.env.ROOT_API_GROUPS}`,
    'http://localhost:4010/api',
    {
      '/groups': {
        route: '/groups',
        method: 'GET'
      }
    }
  )(command, args);
};

module.exports = groupsService;
