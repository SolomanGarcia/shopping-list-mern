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

export default function(state = initalState, action) {
    switch(action.type) {
        case GET_ITEMS:
            return {
                ...state
            }
        case DELETE_ITEM:
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload)
            };
        default:
            return state;
    }
}