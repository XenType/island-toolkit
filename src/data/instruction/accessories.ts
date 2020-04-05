import { DiyCreatedCollection } from '../item/diy-created';
import { ResourceCollection } from '../item/resource';
import { DiyInstruction } from '../../models/diy-instruction';



export const DIY_STRAW_UMBRELLA_HAT = new DiyInstruction('Straw Umbrella Hat', DiyCreatedCollection.accessories.STRAW_UMBRELLA_HAT, [
    {
        reagent: ResourceCollection.misc.CLUMP_OF_WEEDS,
        quantity: 10,
    },
]);
