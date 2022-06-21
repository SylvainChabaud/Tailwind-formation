var { describe, it, before, after, beforeEach, afterEach } = require('mocha');
var expect = require('chai').expect;

var { ItemsResolver } = require('../server/graphql/resolver');
var { dbMongo } = require('../server/lib/options/dbMongo');

const currentDate = new Date();
const mockItems = [
  {
    _id: '62b1d766d17eae3c700030dd',
    name: 'john',
    category: 'A',
    group: 'Admin',
    createdAt: currentDate,
    updatedAt: currentDate
  },
  {
    _id: '62b1d766d17eae3c700030de',
    name: 'marie',
    category: 'B',
    group: 'user',
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
    it('should return an ITEM when ID is found', async () => {
      const response = await ItemsResolver().getItemById('62b1d766d17eae3c700030dd');
      expect(response.item.name).to.equal('john');
      expect(response.ok).to.equal(true);
    });
  });
});
