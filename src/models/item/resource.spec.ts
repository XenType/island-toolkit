import * as Faker from 'faker';
import { ItemType } from '.';
import { ResourceType, Resource, DEFAULT_RESOURCE_STACKSIZE } from './resource';

describe('When using the Resource class', () => {
    const name = Faker.random.word();
    const itemType = ItemType.RESOURCE;
    const resourceType = ResourceType.WOOD;
    const testResource = new Resource(name, resourceType);
    test('it initializes with the expected name property', () => {
        expect(testResource.name).toEqual(name);
    });
    test('it initializes with the expected itemType property', () => {
        expect(testResource.itemType).toEqual(itemType);
    });
    test('it initializes with the expected stackSize property', () => {
        expect(testResource.stackSize).toEqual(DEFAULT_RESOURCE_STACKSIZE);
    });
    test('it initializes with the expected stackSize property', () => {
        expect(testResource.resourceType).toEqual(resourceType);
    });
});
