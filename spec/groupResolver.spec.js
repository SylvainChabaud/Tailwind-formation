var { describe, it } = require('mocha');
var expect = require('chai').expect;
var { GroupsResolver } = require('../server/graphql/resolver');

describe.only('groupResolver', function () {
  describe('#getGroups()', function () {
    it('should return ALL GROUPS', async () => {
      const response = await GroupsResolver().getGroups();
      expect(response.ok).to.equal(true);
      expect(response.groups[0]).to.equal('group1');
      expect(response.groups[1]).to.equal('group2');
      expect(response.groups[2]).to.equal('group3');
      expect(response.groups[3]).to.equal('group4');
    });
  });
});
