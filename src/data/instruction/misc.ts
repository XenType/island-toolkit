import { DiyCreatedCollection } from '../item/diy-created';
import { ResourceCollection } from '../item/resource';
import { DiyInstruction } from '../../models/diy-instruction';

export const DIY_ACOUSTIC_GUITAR = new DiyInstruction('Acoustic Guitar', DiyCreatedCollection.misc.ACOUSTIC_GUITAR, [
    { reagent: ResourceCollection.wood.SOFTWOOD, quantity: 8 },
    { reagent: ResourceCollection.minerals.IRON, quantity: 1 },
]);
export const DIY_BAMBOO_DOLL = new DiyInstruction('Bamboo Doll', DiyCreatedCollection.misc.BAMBOO_DOLL, [
    { reagent: ResourceCollection.wood.YOUNG_SPRING_BAMBOO, quantity: 6 },
]);
export const DIY_COCONUT_JUICE = new DiyInstruction('Coconut Juice', DiyCreatedCollection.misc.COCONUT_JUICE, [
    { reagent: ResourceCollection.fruit.COCONUT, quantity: 1 },
]);
export const DIY_MEDICINE = new DiyInstruction('Medicine', DiyCreatedCollection.misc.MEDICINE, [
    { reagent: ResourceCollection.misc.CLUMP_OF_WEEDS, quantity: 3 },
    { reagent: ResourceCollection.misc.WASP_NEST, quantity: 1 },
]);
export const DIY_OCARINA = new DiyInstruction('Ocarina', DiyCreatedCollection.misc.OCARINA, [
    { reagent: ResourceCollection.minerals.CLAY, quantity: 5 },
]);
