import { Resource } from '../item/resource';
import { DiyCreated } from '../item/diy-created';

export class DiyInstruction {
    public componentArray: DiyInstructionComponent[] = [];
    public componentTree: DiyInstructionComponentTree = {};
    constructor(public name: string, public creates: DiyCreated, components: DiyInstructionComponent[]) {
        this.processComponents(components);
    }
    private processComponents(components: DiyInstructionComponent[], times: number = 1): void {
        for (const component of components) {
            if ((component.reagent as Resource).id) {
                this.addToArray(component, times);
                this.addToTree(component, times);
            } else {
                const subInstruction = component.reagent as DiyInstruction;
                this.processComponents(subInstruction.componentArray, component.quantity);
            }
        }
    }
    private addToArray(component: DiyInstructionComponent, times: number): void {
        const resource = component.reagent as Resource;
        for (const existing of this.componentArray) {
            const existingResource = existing.reagent as Resource;
            if (existingResource.id === resource.id) {
                existing.quantity += component.quantity * times;
                return;
            }
        }
        this.componentArray.push({
            reagent: resource,
            quantity: component.quantity * times,
        });
    }
    private addToTree(component: DiyInstructionComponent, times: number): void {
        const resource = component.reagent as Resource;
        if (this.componentTree[resource.id]) {
            this.componentTree[resource.id].quantity += component.quantity * times;
            return;
        }
        this.componentTree[resource.id] = {
            reagent: resource,
            quantity: component.quantity * times,
        };
    }
}

export interface DiyInstructionComponentTree {
    [key: string]: DiyInstructionComponent;
}

export interface DiyInstructionComponent {
    reagent: Resource | DiyInstruction; // ...
    quantity: number;
}
