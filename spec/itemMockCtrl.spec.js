var assert = require('assert');
var describe = require('mocha').describe;
var it = require('mocha').it;
var expect = require('chai').expect;

var mockCtrl = require('../server/controllers/ItemMockCtrl/itemMockCtrl');

const newItemMarc = {
  name: 'Marc',
  category: {
    label: 'CAT1',
    value: 'A'
  },
  group: 'user'
};
const newItemJohn = {
  name: 'John',
  category: {
    label: 'CAT1',
    value: 'A'
  },
  group: 'user'
};

describe('itemMockCtrl', function () {
  describe('#createItem()', function () {
    it('should return the added item id to the list', function () {
      assert.deepEqual(mockCtrl.createItem(newItemMarc), 1);
      assert.deepEqual(mockCtrl.createItem(newItemJohn), 2);
    });
  });

  describe('#getItemById()', function () {
    it('should return the item from his id', function () {
      const itemResult = mockCtrl.getItemById(2);
      expect(itemResult).to.have.property('name', newItemJohn.name);
      expect(itemResult).to.have.property('group', newItemJohn.group);
      expect(itemResult.category).to.have.property('label', newItemJohn.category.label);
      expect(itemResult.category).to.have.property('value', newItemJohn.category.value);
    });
  });
});
