import { Item, ItemType } from '.';

export class Resource extends Item {
    constructor(name: string, public resourceType: ResourceType) {
        super(name, ItemType.RESOURCE);
        this.stackSize = DEFAULT_RESOURCE_STACKSIZE;
    }
}

export const DEFAULT_RESOURCE_STACKSIZE = 30;

export enum ResourceType {
    WOOD,
    MINERAL,
    FRUIT,
    FLOWER,
    PURCHASED,
    TRASH,
    MISC,
}
