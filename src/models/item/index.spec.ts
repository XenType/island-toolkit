import * as Faker from 'faker';
import { Item, ItemType, DEFAULT_ITEM_STACKSIZE } from '.';

describe('When using the Item class', () => {
    const name = Faker.random.word();
    const type = ItemType.RESOURCE;
    const testItem = new Item(name, type);
    test('it initializes with the expected id property', () => {
        expect(testItem.id).not.toBeUndefined();
    });
    test('it initializes with the expected name property', () => {
        expect(testItem.name).toEqual(name);
    });
    test('it initializes with the expected itemType property', () => {
        expect(testItem.itemType).toEqual(type);
    });
    test('it initializes with the expected stackSize property', () => {
        expect(testItem.stackSize).toEqual(DEFAULT_ITEM_STACKSIZE);
    });
});
