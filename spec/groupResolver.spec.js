var { describe, it } = require('mocha');
var expect = require('chai').expect;
var { GroupsResolver } = require('../server/graphql/resolver');
const nock = require('nock');

const MOCKED_GROUPS = ['groupA', 'groupB', 'groupC', 'groupD'];

describe.only('groupResolver', function () {
  describe('#getGroups()', function () {
    it('should return ALL GROUPS', async () => {
      nock('http://localhost:4010').get('/api/groups').reply(200, MOCKED_GROUPS);

      const response = await GroupsResolver().getGroups();
      expect(response.ok).to.equal(true);
      expect(response.groups[0]).to.equal('groupA');
      expect(response.groups[1]).to.equal('groupB');
      expect(response.groups[2]).to.equal('groupC');
      expect(response.groups[3]).to.equal('groupD');
    });
  });
});
