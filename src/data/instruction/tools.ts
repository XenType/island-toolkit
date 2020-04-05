import { DiyCreatedCollection } from '../item/diy-created';
import { ResourceCollection } from '../item/resource';
import { DiyInstruction } from '../../models/diy-instruction';

export const DIY_FLIMSY_AXE = new DiyInstruction('Flimsy Axe', DiyCreatedCollection.tools.FLIMSY_AXE, [
    { reagent: ResourceCollection.wood.TREE_BRANCH, quantity: 5 },
    { reagent: ResourceCollection.minerals.STONE, quantity: 1 },
]);
export const DIY_STONE_AXE = new DiyInstruction('Stone Axe', DiyCreatedCollection.tools.STONE_AXE, [
    { reagent: ResourceCollection.wood.WOOD, quantity: 3 },
    { reagent: DIY_FLIMSY_AXE, quantity: 1 },
]);
export const DIY_AXE = new DiyInstruction('Axe', DiyCreatedCollection.tools.AXE, [
    { reagent: ResourceCollection.wood.WOOD, quantity: 3 },
    { reagent: ResourceCollection.minerals.IRON, quantity: 1 },
    { reagent: DIY_FLIMSY_AXE, quantity: 1 },
]);
export const DIY_FLIMSY_SHOVEL = new DiyInstruction('Flimsy Shovel', DiyCreatedCollection.tools.FLIMSY_SHOVEL, [
    { reagent: ResourceCollection.wood.HARDWOOD, quantity: 5 },
]);
export const DIY_SHOVEL = new DiyInstruction('Shovel', DiyCreatedCollection.tools.SHOVEL, [
    { reagent: ResourceCollection.minerals.IRON, quantity: 1 },
    { reagent: DIY_FLIMSY_SHOVEL, quantity: 1 },
]);
export const DIY_FLIMSY_FISHING_ROD = new DiyInstruction('Flimsy Fishing Rod', DiyCreatedCollection.tools.FLIMSY_FISHING_ROD, [
    { reagent: ResourceCollection.wood.TREE_BRANCH, quantity: 5 },
]);
export const DIY_FISHING_ROD = new DiyInstruction('Fishing Rod', DiyCreatedCollection.tools.FISHING_ROD, [
    { reagent: ResourceCollection.minerals.IRON, quantity: 1 },
    { reagent: DIY_FLIMSY_FISHING_ROD, quantity: 1 },
]);
export const DIY_FLIMSY_NET = new DiyInstruction('Flimsy Net', DiyCreatedCollection.tools.FLIMSY_NET, [
    { reagent: ResourceCollection.wood.TREE_BRANCH, quantity: 5 },
]);
export const DIY_NET = new DiyInstruction('Net', DiyCreatedCollection.tools.NET, [
    { reagent: ResourceCollection.minerals.IRON, quantity: 1 },
    { reagent: DIY_FLIMSY_NET, quantity: 1 },
]);
export const DIY_FLIMSY_WATERING_CAN = new DiyInstruction('Flimsy Watering Can', DiyCreatedCollection.tools.FLIMSY_WATERING_CAN, [
    { reagent: ResourceCollection.wood.SOFTWOOD, quantity: 5 },
]);
export const DIY_WATERING_CAN = new DiyInstruction('Watering Can', DiyCreatedCollection.tools.WATERING_CAN, [
    { reagent: ResourceCollection.minerals.IRON, quantity: 1 },
    { reagent: DIY_FLIMSY_WATERING_CAN, quantity: 1 },
]);
export const DIY_SLINGSHOT = new DiyInstruction('Slingshot', DiyCreatedCollection.tools.SLINGSHOT, [
    { reagent: ResourceCollection.wood.HARDWOOD, quantity: 5 },
]);
export const DIY_VAULTING_POLE = new DiyInstruction('Vaulting Pole', DiyCreatedCollection.tools.VAULTING_POLE, [
    { reagent: ResourceCollection.wood.SOFTWOOD, quantity: 5 },
]);
export const DIY_LADDER = new DiyInstruction('Ladder', DiyCreatedCollection.tools.LADDER, [
    { reagent: ResourceCollection.wood.SOFTWOOD, quantity: 4 },
    { reagent: ResourceCollection.wood.WOOD, quantity: 4 },
    { reagent: ResourceCollection.wood.HARDWOOD, quantity: 4 },
]);
export const DIY_LEAF_UMBRELLA = new DiyInstruction('Leaf Umbrella', DiyCreatedCollection.tools.LEAF_UMBRELLA, [
    { reagent: ResourceCollection.misc.CLUMP_OF_WEEDS, quantity: 15 },
]);
