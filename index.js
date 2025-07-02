// index.js
const { initialAppState, appHistory } = require('./state');
const { createLogger } = require('./logger');
const { dispatchAction } = require('./dispatcher');
const { undoAction, redoAction } = require('./undoRedo');

// Setup state
let history = { ...appHistory };
const logger = createLogger('App');

// Dispatch ADD_ITEM events
const event1 = { type: 'ADD_ITEM', payload: { id: 1, name: 'Apple' } };
let result = dispatchAction(event1, history, logger);
history = result.history;

const event2 = { type: 'ADD_ITEM', payload: { id: 2, name: 'Banana' } };
result = dispatchAction(event2, history, logger);
history = result.history;

const event3 = { type: 'REMOVE_ITEM', payload: { id: 1, name: 'Apple' } };
result = dispatchAction(event3, history, logger);
history = result.history;

console.log('After actions:', history.present);

// Undo
const undo = undoAction(history)();
history = undo.history;
console.log('After undo:', history.present);

// Redo
const redo = redoAction(history)();
history = redo.history;
console.log('After redo:', history.present);
