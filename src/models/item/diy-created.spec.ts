import * as Faker from 'faker';
import { ItemType, DEFAULT_ITEM_STACKSIZE } from '.';
import { DiyCreatedType, DiyCreated } from './diy-created';

describe('When using the DiyCreated class', () => {
    const name = Faker.random.word();
    const itemType = ItemType.DIY_CREATED;
    const diyCreatedType = DiyCreatedType.FURNISHING;
    const value = Faker.random.number({ min: 10, max: 15000 });
    const testDiyCreated = new DiyCreated(name, value, diyCreatedType);
    test('it initializes with the expected name property', () => {
        expect(testDiyCreated.name).toEqual(name);
    });
    test('it initializes with the expected itemType property', () => {
        expect(testDiyCreated.itemType).toEqual(itemType);
    });
    test('it initializes with the expected stackSize property', () => {
        expect(testDiyCreated.stackSize).toEqual(DEFAULT_ITEM_STACKSIZE);
    });
    test('it initializes with the expected stackSize property', () => {
        expect(testDiyCreated.diyCreatedType).toEqual(diyCreatedType);
    });
    test('it initializes with the expected stackSize property', () => {
        expect(testDiyCreated.value).toEqual(value);
    });
});
