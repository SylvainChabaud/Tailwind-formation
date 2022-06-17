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
const newItemSofia = {
  name: 'Sophia',
  category: {
    label: 'CAT2',
    value: 'B'
  },
  group: 'user'
};

var globalFirstItem;

describe('itemMockCtrl', function () {
  describe('#createItem()', function () {
    it('should return UNDEFINED when no ITEM in input parameter', function () {
      const itemResult = mockCtrl.createItem(undefined);
      expect(itemResult).to.equal(undefined);
    });

    it('should return the first added ITEM id to the list', function () {
      const itemResult = mockCtrl.createItem(newItemMarc);
      globalFirstItem = itemResult;
      expect(itemResult).to.have.property('_id', 1);
      expect(itemResult).to.have.property('name', newItemMarc.name);
      expect(itemResult).to.have.property('group', newItemMarc.group);
      expect(itemResult.category).to.have.property('label', newItemMarc.category.label);
      expect(itemResult.category).to.have.property('value', newItemMarc.category.value);
    });

    it('should return the second added ITEM id to the list', function () {
      const itemResult = mockCtrl.createItem(newItemJohn);
      expect(itemResult).to.have.property('_id', 2);
      expect(itemResult).to.have.property('name', newItemJohn.name);
      expect(itemResult).to.have.property('group', newItemJohn.group);
      expect(itemResult.category).to.have.property('label', newItemJohn.category.label);
      expect(itemResult.category).to.have.property('value', newItemJohn.category.value);
    });
  });

  describe('#getItemById()', function () {
    it('should return undefined when ID is not found)', function () {
      const itemResult = mockCtrl.getItemById(10);
      expect(itemResult).to.equal(undefined);
    });

    it('should return UNDEFINED when no ID in input parameter', function () {
      const itemResult = mockCtrl.getItemById('');
      expect(itemResult).to.equal(undefined);
    });

    it('should return the ITEM (from his ID)', function () {
      const itemResult = mockCtrl.getItemById(2);
      expect(itemResult).to.have.property('_id', 2);
      expect(itemResult).to.have.property('name', newItemJohn.name);
      expect(itemResult).to.have.property('group', newItemJohn.group);
      expect(itemResult.category).to.have.property('label', newItemJohn.category.label);
      expect(itemResult.category).to.have.property('value', newItemJohn.category.value);
    });
  });

  describe('#updateItem()', function () {
    it('should return UNDEFINED when list is NOT updated (ID is not found)', function () {
      const itemResult = mockCtrl.updateItem(10, newItemSofia);
      expect(itemResult).to.equal(undefined);
    });

    it('should return UNDEFINED when list is NOT updated (no ID in input parameter)', function () {
      const itemResult = mockCtrl.updateItem(undefined, newItemSofia);
      expect(itemResult).to.equal(undefined);
    });

    it('should return original ITEM when list is NOT updated (no ITEM in input parameter)', function () {
      const itemResult = mockCtrl.updateItem(1, undefined);
      expect(itemResult).to.equal(globalFirstItem);
    });

    it('should return the ITEM updated with the new ITEM (from his ID)', function () {
      const itemResult = mockCtrl.updateItem(2, newItemSofia);
      expect(itemResult).to.have.property('_id', 2);
      expect(itemResult).to.have.property('name', newItemSofia.name);
      expect(itemResult).to.have.property('group', newItemSofia.group);
      expect(itemResult.category).to.have.property('label', newItemSofia.category.label);
      expect(itemResult.category).to.have.property('value', newItemSofia.category.value);
    });
  });

  describe('#deleteItem()', function () {
    it('should return FALSE when ITEM is NOT deleted (ID not found)', function () {
      const itemResult = mockCtrl.deleteItem(10);
      expect(itemResult).to.equal(false);
    });

    it('should return UNDEFINED when ITEM is NOT deleted (no ID in input parameter)', function () {
      const itemResult = mockCtrl.deleteItem(undefined);
      expect(itemResult).to.equal(false);
    });

    it('should return TRUE when ITEM is deleted (from his ID)', function () {
      const itemResult = mockCtrl.deleteItem(2);
      expect(itemResult).to.equal(true);
    });
  });
});
