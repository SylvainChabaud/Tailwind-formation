var assert = require('assert');
var describe = require('mocha').describe;
var it = require('mocha').it;

var itemMockCtrl = require('../server/controllers/ItemMockCtrl/itemMockCtrl');

const newItemJohn = {
  _id: 146,
  name: 'John',
  category: {
    label: 'CAT1',
    value: 'A'
  },
  group: 'confirmed',
  createdAt: new Date(),
  updatedAt: new Date()
};

var itemsList = [];

describe('itemMockCtrl', function () {
  describe('#createItem()', function () {
    it('should return a list with the added item', function () {
      assert.deepEqual(itemMockCtrl.createItem(itemsList, newItemJohn), [newItemJohn]);
    });
  });
});
