var { describe, it, before, after, beforeEach, afterEach } = require('mocha');
var expect = require('chai').expect;

var { ItemsResolver } = require('../server/graphql/resolver');
var { dbMongo } = require('../server/lib/options/dbMongo');

const currentDate = new Date();
const mockItemsToCreate = {
  name: 'Joe Dassin',
  category: 'B',
  group: 'Admin'
};
const mockItemsToFind = [
  {
    _id: '62b1d766d17eae3c700030dd',
    name: 'John',
    category: 'A',
    group: 'Admin',
    createdAt: currentDate,
    updatedAt: currentDate
  },
  {
    _id: '62b1d766d17eae3c700030de',
    name: 'Mary',
    category: 'B',
    group: 'User',
    createdAt: currentDate,
    updatedAt: currentDate
  }
];
const mockItemToUpdate = {
  name: 'john Updated',
  category: 'A',
  group: 'Admin'
};
const mockCategoryInvalidSchema = {
  name: 'James',
  category: 'Z',
  group: ''
};
const mockNameInvalidSchema = {
  name: '^',
  category: 'A',
  group: ''
};

describe.only('itemResolver', function () {
  let handler;
  beforeEach(async () => {
    await handler.insertMany(mockItemsToFind);
  });

  before(async () => {
    dbMongo.init('mongodb://localhost:27017/com_tailwind_test');
    await dbMongo.isReady();
    handler = await dbMongo.useCollection('items');
  });

  after(() => {
    dbMongo.disconnect();
  });

  afterEach(async () => {
    await handler.deleteMany();
  });

  describe('#getItemById()', function () {
    it('should return ITEM when his ID is found', async () => {
      const response = await ItemsResolver().getItemById('62b1d766d17eae3c700030dd');
      expect(response.ok).to.equal(true);
      expect(response.item.id).to.equal('62b1d766d17eae3c700030dd');
      expect(response.item.name).to.equal('John');
      expect(response.item.group).to.equal('Admin');
      expect(response.item.category).to.equal('A');
      expect((response.item.createdAt).getTime()).to.equal(currentDate.getTime());
      expect((response.item.updatedAt).getTime()).to.equal(currentDate.getTime());
    });

    it('should return ERROR when ID is NOT found', async () => {
      const response = await ItemsResolver().getItemById('62b1d766d17eae3c700030df');
      expect(response.ok).to.equal(true);
      expect(response.item).to.equal(null);
    });

    it('should return FALSE when no ID input argument is given', async () => {
      const response = await ItemsResolver().getItemById();
      expect(response.ok).to.equal(false);
      expect(response.error).to.equal('Aucun id renseigné');
    });
  });

  describe('#createItem()', function () {
    it('should return ITEM created', async () => {
      const response = await ItemsResolver().createItem(mockItemsToCreate);
      expect(response.ok).to.equal(true);
      expect(response.item.name).to.equal('Joe Dassin');
      expect(response.item.group).to.equal('Admin');
      expect(response.item.category).to.equal('B');
    });

    it('should return FALSE when no item parameter is given', async () => {
      const item = await ItemsResolver().createItem();
      expect(item.ok).to.equal(false);
      expect(item.error).to.equal('Les données ne respectent pas les règles de validation');
    });

    it('should return ERROR when CATEGORY AJV schema validator is INVALID', async () => {
      const item = await ItemsResolver().createItem(mockCategoryInvalidSchema);
      expect(item.ok).to.equal(false);
      expect(item.error).to.equal('Les données ne respectent pas les règles de validation');
    });

    it('should return ERROR when NAME AJV schema validator is INVALID', async () => {
      const item = await ItemsResolver().createItem(mockNameInvalidSchema);
      expect(item.ok).to.equal(false);
      expect(item.error).to.equal('Les données ne respectent pas les règles de validation');
    });
  });

  describe('#getItems()', function () {
    it('should return ALL ITEMS', async () => {
      const response = await ItemsResolver().getItems();
      expect(response.ok).to.equal(true);
      expect(response.items[0].id).to.equal('62b1d766d17eae3c700030dd');
      expect(response.items[0].name).to.equal('John');
      expect(response.items[0].group).to.equal('Admin');
      expect(response.items[0].category).to.equal('A');
      expect((response.items[0].createdAt).getTime()).to.equal(currentDate.getTime());
      expect((response.items[0].updatedAt).getTime()).to.equal(currentDate.getTime());

      expect(response.items[1].id).to.equal('62b1d766d17eae3c700030de');
      expect(response.items[1].name).to.equal('Mary');
      expect(response.items[1].group).to.equal('User');
      expect(response.items[1].category).to.equal('B');
      expect((response.items[1].createdAt).getTime()).to.equal(currentDate.getTime());
      expect((response.items[1].updatedAt).getTime()).to.equal(currentDate.getTime());
    });
  });

  describe('#deleteItem()', function () {
    it('should return OK when item is deleted', async () => {
      const response = await ItemsResolver().deleteItem('62b1d766d17eae3c700030de');
      expect(response.ok).to.equal(true);
    });

    it('should return ERROR when ID is NOT found', async () => {
      const response = await ItemsResolver().deleteItem('62b1d766d17eae3c700030df');
      expect(response.ok).to.equal(false);
      expect(response.error).to.equal('Aucun élément supprimé');
    });

    it('should return FALSE when no ID input argument is given', async () => {
      const response = await ItemsResolver().deleteItem();
      expect(response.ok).to.equal(false);
      expect(response.error).to.equal('Aucun élément supprimé');
    });
  });

  describe('#updateItem()', function () {
    it('should return OK when ITEM is updated', async () => {
      const response = await ItemsResolver().updateItem('62b1d766d17eae3c700030de', mockItemToUpdate);
      expect(response.ok).to.equal(true);
    });

    it('should return ERROR when ID is NOT found', async () => {
      const response = await ItemsResolver().updateItem('62b1d766d17eae3c700030df', mockItemToUpdate);
      expect(response.ok).to.equal(false);
      expect(response.error).to.equal('Aucun élément mise à jour');
    });

    it('should return ERROR when NO ID input argument is given', async () => {
      const response = await ItemsResolver().updateItem(undefined, mockItemToUpdate);
      expect(response.ok).to.equal(false);
      expect(response.error).to.equal('Aucun élément mise à jour');
    });

    it('should return ERROR when Category AJV schema validator is INVALID', async () => {
      const response = await ItemsResolver().updateItem('62b1d766d17eae3c700030de', mockCategoryInvalidSchema);
      expect(response.ok).to.equal(false);
      expect(response.error).to.equal('Les données ne respectent pas les règles de validation');
    });

    it('should return ERROR when NAME AJV schema validator is INVALID', async () => {
      const item = await ItemsResolver().updateItem('62b1d766d17eae3c700030de', mockNameInvalidSchema);
      expect(item.ok).to.equal(false);
      expect(item.error).to.equal('Les données ne respectent pas les règles de validation');
    });
  });
});
