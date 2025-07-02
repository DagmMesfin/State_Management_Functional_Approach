// reducer.js
const { produce } = require('immer');

const StateReducer = (state, event) => {
    return produce(state, draft => {
        switch (event.type) {
            case 'ADD_ITEM':
                draft.items.push(event.payload);
                break;
            case 'REMOVE_ITEM':
                draft.items = draft.items.filter(item => item.id !== event.payload.id);
                break;
            default:
                break; // no state change
        }
    });
};

module.exports = { StateReducer };
