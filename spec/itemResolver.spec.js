var { describe, it, before, after, beforeEach, afterEach } = require('mocha');
var expect = require('chai').expect;

var { ItemsResolver } = require('../server/graphql/resolver');
var { dbMongo } = require('../server/lib/options/dbMongo');

const currentDate = new Date();
const mockItems = [
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

describe.only('itemResolver', function () {
  let handler;
  beforeEach(async () => {
    await handler.insertMany(mockItems);
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
    it('should return FIRST ITEM when his ID is found', async () => {
      const response = await ItemsResolver().getItemById('62b1d766d17eae3c700030dd');
      expect(response.ok).to.equal(true);
      expect(response.item.id).to.equal('62b1d766d17eae3c700030dd');
      expect(response.item.name).to.equal('John');
      expect(response.item.group).to.equal('Admin');
      expect(response.item.category).to.equal('A');
      expect((response.item.createdAt).getTime()).to.equal(currentDate.getTime());
      expect((response.item.updatedAt).getTime()).to.equal(currentDate.getTime());
    });

    it('should return SECOND ITEM when his ID is found', async () => {
      const response = await ItemsResolver().getItemById('62b1d766d17eae3c700030de');
      expect(response.ok).to.equal(true);
      expect(response.item.id).to.equal('62b1d766d17eae3c700030de');
      expect(response.item.name).to.equal('Mary');
      expect(response.item.group).to.equal('User');
      expect(response.item.category).to.equal('B');
      expect((response.item.createdAt).getTime()).to.equal(currentDate.getTime());
      expect((response.item.updatedAt).getTime()).to.equal(currentDate.getTime());
    });

    it('should return an ERROR when ID is NOT found', async () => {
      const response = await ItemsResolver().getItemById('x');
      expect(response.ok).to.equal(false);
      expect(response.error).to.equal('Une erreur est survenue');
    });

    it('should return NULL ITEM when no ID input argument', async () => {
      const response = await ItemsResolver().getItemById();
      expect(response.ok).to.equal(true);
      expect(response.item).to.equal(null);
    });
  });
});
