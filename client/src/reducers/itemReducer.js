import uuidv1 from 'uuid/v1';
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from '../actions/types';

const initalState = {
    items: [
        { id: uuidv1(), name: 'Eggs' },
        { id: uuidv1(), name: 'Milk' },
        { id: uuidv1(), name: 'Steak' },
        { id: uuidv1(), name: 'Water' }
    ]
}