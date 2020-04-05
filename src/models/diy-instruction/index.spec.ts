import * as Faker from 'faker';
import { DiyInstruction, DiyInstructionComponent } from '.';
import { DiyCreated, DiyCreatedType } from '../item/diy-created';
import { Resource, ResourceType } from '../item/resource';
describe('When using the Instruction class', () => {
    const name = Faker.random.word();
    const createsName = Faker.random.word();
    const createsValue = Faker.random.number({ min: 10, max: 15000 });
    const creates = new DiyCreated(createsName, createsValue, DiyCreatedType.MISC);
    const resourceName = `resource 1`;
    const resource = new Resource(resourceName, ResourceType.MISC);
    const resourceQuantity = Faker.random.number({ min: 1, max: 5 });
    const simpleComponent: DiyInstructionComponent = {
        reagent: resource,
        quantity: resourceQuantity,
    };
    const testInstruction = new DiyInstruction(name, creates, [simpleComponent]);
    test('it initializes with the expected name property', () => {
        expect(testInstruction.name).toEqual(name);
    });
    test('it initializes with the expected creates property', () => {
        expect(testInstruction.creates).toEqual(creates);
    });
    describe('and handling a specific InstructionComponent configurations', () => {
        const resourceName2 = 'resource 2';
        const resource2 = new Resource(resourceName2, ResourceType.MISC);
        const resourceQuantity2 = Faker.random.number({ min: 1, max: 5 });
        const simpleComponent2: DiyInstructionComponent = {
            reagent: resource2,
            quantity: resourceQuantity2,
        };
        const resourceName3 = 'resource 3';
        const resource3 = new Resource(resourceName3, ResourceType.MISC);
        const resourceQuantity3 = Faker.random.number({ min: 1, max: 5 });
        const simpleComponent3: DiyInstructionComponent = {
            reagent: resource3,
            quantity: resourceQuantity3,
        };
        describe('with three simple resources (a)', () => {
            const components = [simpleComponent, simpleComponent2, simpleComponent3];
            const specificInstruction = new DiyInstruction(name, creates, components);
            test('it initializes with the expected componentArray property (a)', () => {
                expect(specificInstruction.componentArray).toEqual(components);
            });
            test('it adds the first resource to the component tree using its resource.id as the index (a)', () => {
                expect(specificInstruction.componentTree[resource.id]).toEqual(simpleComponent);
            });
            test('it adds the second resource to the component tree using its resource.id as the index (a)', () => {
                expect(specificInstruction.componentTree[resource2.id]).toEqual(simpleComponent2);
            });
            test('it adds the third resource to the component tree using its resource.id as the index (a)', () => {
                expect(specificInstruction.componentTree[resource3.id]).toEqual(simpleComponent3);
            });
        });
        describe('with two simple resources and one instruction component with a single, third simple resource component with quantity 0 (b)', () => {
            const subName = Faker.random.word();
            const subCreatesName = Faker.random.word();
            const subCreatesValue = Faker.random.number({ min: 10, max: 15000 });
            const subCreates = new DiyCreated(subCreatesName, subCreatesValue, DiyCreatedType.MISC);
            const subInstruction = new DiyInstruction(subName, subCreates, [simpleComponent3]);
            const subInstructionQuantity = 1;
            const subInstructionComponent: DiyInstructionComponent = {
                reagent: subInstruction,
                quantity: subInstructionQuantity,
            };
            const components = [simpleComponent, simpleComponent2, subInstructionComponent];
            const specificInstruction = new DiyInstruction(name, creates, components);
            test('it initializes with the expected componentArray property (b)', () => {
                expect(specificInstruction.componentArray).toEqual([simpleComponent, simpleComponent2, simpleComponent3]);
            });
            test('it adds the first resource to the component tree using its resource.id as the index (b)', () => {
                expect(specificInstruction.componentTree[resource.id]).toEqual(simpleComponent);
            });
            test('it adds the second resource to the component tree using its resource.id as the index (b)', () => {
                expect(specificInstruction.componentTree[resource2.id]).toEqual(simpleComponent2);
            });
            test('it adds the third resource to the component tree using its resource.id as the index (b)', () => {
                expect(specificInstruction.componentTree[resource3.id]).toEqual(simpleComponent3);
            });
        });
        describe('with resource and single-quantity instruction components with overlapping resources - tests addition (c)', () => {
            const subName = Faker.random.word();
            const subCreatesName = Faker.random.word();
            const subCreatesValue = Faker.random.number({ min: 10, max: 15000 });
            const subCreates = new DiyCreated(subCreatesName, subCreatesValue, DiyCreatedType.MISC);
            const subInstruction = new DiyInstruction(subName, subCreates, [simpleComponent2]);
            const subInstructionQuantity = 1;
            const subInstructionComponent: DiyInstructionComponent = {
                reagent: subInstruction,
                quantity: subInstructionQuantity,
            };
            const subName2 = Faker.random.word();
            const subCreatesName2 = Faker.random.word();
            const subCreatesValue2 = Faker.random.number({ min: 10, max: 15000 });
            const subCreates2 = new DiyCreated(subCreatesName2, subCreatesValue2, DiyCreatedType.MISC);
            const subInstruction2 = new DiyInstruction(subName2, subCreates2, [simpleComponent, simpleComponent3]);
            const subInstructionQuantity2 = 1;
            const subInstructionComponent2: DiyInstructionComponent = {
                reagent: subInstruction2,
                quantity: subInstructionQuantity2,
            };
            const components = [simpleComponent, subInstructionComponent, subInstructionComponent2, simpleComponent3];
            const specificInstruction = new DiyInstruction(name, creates, components);
            const expectedComponent1: DiyInstructionComponent = {
                reagent: resource,
                quantity: simpleComponent.quantity + simpleComponent.quantity,
            };
            const expectedComponent2: DiyInstructionComponent = {
                reagent: resource2,
                quantity: simpleComponent2.quantity,
            };
            const expectedComponent3: DiyInstructionComponent = {
                reagent: resource3,
                quantity: simpleComponent3.quantity + simpleComponent3.quantity,
            };
            test('it initializes with the expected componentArray property (c)', () => {
                expect(specificInstruction.componentArray).toStrictEqual([expectedComponent1, expectedComponent2, expectedComponent3]);
            });
            test('it adds the first resource to the component tree using its resource.id as the index (c)', () => {
                expect(specificInstruction.componentTree[resource.id]).toEqual(expectedComponent1);
            });
            test('it adds the second resource to the component tree using its resource.id as the index (c)', () => {
                expect(specificInstruction.componentTree[resource2.id]).toEqual(expectedComponent2);
            });
            test('it adds the third resource to the component tree using its resource.id as the index (c)', () => {
                expect(specificInstruction.componentTree[resource3.id]).toEqual(expectedComponent3);
            });
        });
        describe('with resource and multiple-quantity instruction components with overlapping resources - tests multiplication (d)', () => {
            const subName = Faker.random.word();
            const subCreatesName = Faker.random.word();
            const subCreatesValue = Faker.random.number({ min: 10, max: 15000 });
            const subCreates = new DiyCreated(subCreatesName, subCreatesValue, DiyCreatedType.MISC);
            const subInstruction = new DiyInstruction(subName, subCreates, [simpleComponent2]);
            const subInstructionQuantity = 2;
            const subInstructionComponent: DiyInstructionComponent = {
                reagent: subInstruction,
                quantity: subInstructionQuantity,
            };
            const subName2 = Faker.random.word();
            const subCreatesName2 = Faker.random.word();
            const subCreatesValue2 = Faker.random.number({ min: 10, max: 15000 });
            const subCreates2 = new DiyCreated(subCreatesName2, subCreatesValue2, DiyCreatedType.MISC);
            const subInstruction2 = new DiyInstruction(subName2, subCreates2, [simpleComponent, simpleComponent3]);
            const subInstructionQuantity2 = 3;
            const subInstructionComponent2: DiyInstructionComponent = {
                reagent: subInstruction2,
                quantity: subInstructionQuantity2,
            };
            const components = [simpleComponent, subInstructionComponent, subInstructionComponent2, simpleComponent3];
            const specificInstruction = new DiyInstruction(name, creates, components);
            const expectedComponent1: DiyInstructionComponent = {
                reagent: resource,
                quantity: simpleComponent.quantity + simpleComponent.quantity * subInstructionQuantity2,
            };
            const expectedComponent2: DiyInstructionComponent = {
                reagent: resource2,
                quantity: simpleComponent2.quantity * subInstructionQuantity,
            };
            const expectedComponent3: DiyInstructionComponent = {
                reagent: resource3,
                quantity: simpleComponent3.quantity + simpleComponent3.quantity * subInstructionQuantity2,
            };
            test('it initializes with the expected componentArray property (d)', () => {
                expect(specificInstruction.componentArray).toStrictEqual([expectedComponent1, expectedComponent2, expectedComponent3]);
            });
            test('it adds the first resource to the component tree using its resource.id as the index (d)', () => {
                expect(specificInstruction.componentTree[resource.id]).toEqual(expectedComponent1);
            });
            test('it adds the second resource to the component tree using its resource.id as the index (d)', () => {
                expect(specificInstruction.componentTree[resource2.id]).toEqual(expectedComponent2);
            });
            test('it adds the third resource to the component tree using its resource.id as the index (d)', () => {
                expect(specificInstruction.componentTree[resource3.id]).toEqual(expectedComponent3);
            });
        });
    });
});
