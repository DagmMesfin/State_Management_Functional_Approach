// index.js
const { initialAppState, appHistory } = require('./state');
const { createLogger } = require('./logger');
const { dispatchAction } = require('./dispatcher');
const { undoAction, redoAction } = require('./undoRedo');

// Setup state
let history = { ...appHistory };
let appState = { ...initialAppState };

// Create a logger instance
const logger = createLogger('App');

// Dispatch events
const event1 = { type: 'ADD_ITEM', payload: { id: 1, name: 'Apple' } };
let result = dispatchAction(event1, history, appState, logger);
history = result.history;
appState = result.appState;

const event2 = { type: 'ADD_ITEM', payload: { id: 2, name: 'Banana' } };
result = dispatchAction(event2, history, appState, logger);
history = result.history;
appState = result.appState;

const event3 = { type: 'REMOVE_ITEM', payload: { id: 1, name: 'Apple' } };
result = dispatchAction(event3, history, appState, logger);
history = result.history;
appState = result.appState;

console.log('After actions:', appState);

// Undo
const undo = undoAction(history, appState);
history = undo.history;
appState = undo.appState;
console.log('After undo:', appState);

// Redo
const redo = redoAction(history, appState);
history = redo.history;
appState = redo.appState;
console.log('After redo:', appState);
