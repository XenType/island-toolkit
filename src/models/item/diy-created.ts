import { Item, ItemType } from '.';

export class DiyCreated extends Item {
    constructor(name: string, public value: number, public diyCreatedType: DiyCreatedType) {
        super(name, ItemType.DIY_CREATED);
    }
}

export enum DiyCreatedType {
    TOOL,
    FURNISHING,
    ACCESSORY,
    MISC,
} //...
