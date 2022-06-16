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

describe('itemMockCtrl', function () {
  describe('#createItem()', function () {
    it('should return UNDEFINED when no item in input parameter', function () {
      const itemResult = mockCtrl.createItem('');
      expect(itemResult).to.equal(undefined);
    });

    it('should return the first added item id to the list', function () {
      const itemResult = mockCtrl.createItem(newItemMarc);
      expect(itemResult).to.have.property('_id', 1);
      expect(itemResult).to.have.property('name', newItemMarc.name);
      expect(itemResult).to.have.property('group', newItemMarc.group);
      expect(itemResult.category).to.have.property('label', newItemMarc.category.label);
      expect(itemResult.category).to.have.property('value', newItemMarc.category.value);
    });

    it('should return the second added item id to the list', function () {
      const itemResult = mockCtrl.createItem(newItemJohn);
      expect(itemResult).to.have.property('_id', 2);
      expect(itemResult).to.have.property('name', newItemJohn.name);
      expect(itemResult).to.have.property('group', newItemJohn.group);
      expect(itemResult.category).to.have.property('label', newItemJohn.category.label);
      expect(itemResult.category).to.have.property('value', newItemJohn.category.value);
    });

    // it('should return the global list with the new item', function () {
    //   mockCtrl.createItem(newItemMarc);
    //   mockCtrl.createItem(newItemJohn);
    //   console.info('itemsList', mockCtrl.itemsList);
    //   expect(mockCtrl.itemsList).to.have.property('_id', 1);
    //   expect(mockCtrl.itemsList).to.have.property('name', newItemMarc.name);
    //   expect(mockCtrl.itemsList).to.have.property('group', newItemMarc.group);
    //   expect(mockCtrl.itemsList.category).to.have.property('label', newItemMarc.category.label);
    //   expect(mockCtrl.itemsList.category).to.have.property('value', newItemMarc.category.value);
    // });
  });

  describe('#getItemById()', function () {
    it('should return UNDEFINED when no id in input parameter', function () {
      const itemResult = mockCtrl.getItemById('');
      expect(itemResult).to.equal(undefined);
    });

    it('should return the item (from his id)', function () {
      const itemResult = mockCtrl.getItemById(2);
      expect(itemResult).to.have.property('_id', 2);
      expect(itemResult).to.have.property('name', newItemJohn.name);
      expect(itemResult).to.have.property('group', newItemJohn.group);
      expect(itemResult.category).to.have.property('label', newItemJohn.category.label);
      expect(itemResult.category).to.have.property('value', newItemJohn.category.value);
    });

    it('should return undefined when id is not found)', function () {
      const itemResult = mockCtrl.getItemById(10);
      expect(itemResult).to.equal(undefined);
    });
  });

  describe('#updateItem()', function () {
    it('should return UNDEFINED when no id in input parameter', function () {
      const itemResult = mockCtrl.updateItem('', newItemSofia);
      expect(itemResult).to.equal(undefined);
    });

    it('should return UNDEFINED when no item in input parameter', function () {
      const itemResult = mockCtrl.updateItem(1, '');
      expect(itemResult).to.equal(undefined);
    });

    it('should return the item updated with the new item (from his id)', function () {
      const itemResult = mockCtrl.updateItem(2, newItemSofia);
      expect(itemResult).to.have.property('_id', 2);
      expect(itemResult).to.have.property('name', newItemSofia.name);
      expect(itemResult).to.have.property('group', newItemSofia.group);
      expect(itemResult.category).to.have.property('label', newItemSofia.category.label);
      expect(itemResult.category).to.have.property('value', newItemSofia.category.value);
    });
  });

  describe('#deleteItem()', function () {
    it('should return UNDEFINED when no id in input parameter', function () {
      const itemResult = mockCtrl.deleteItem('');
      expect(itemResult).to.equal(undefined);
    });

    it('should return TRUE when item is deleted (from his id)', function () {
      const itemResult = mockCtrl.deleteItem(2);
      expect(itemResult).to.equal(true);
    });

    it('should return FALSE when item is NOT deleted (id not found)', function () {
      const itemResult = mockCtrl.deleteItem(10);
      expect(itemResult).to.equal(false);
    });
  });
});
