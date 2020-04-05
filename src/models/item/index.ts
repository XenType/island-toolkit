import * as uuid from 'uuid';

export class Item {
    public readonly id: string;
    public stackSize: number;
    constructor(public name: string, public itemType: ItemType) {
        this.id = uuid.v4();
        this.stackSize = DEFAULT_ITEM_STACKSIZE;
    }
}

export const DEFAULT_ITEM_STACKSIZE = 1;

export enum ItemType {
    RESOURCE,
    DIY_CREATED,
} // ...
