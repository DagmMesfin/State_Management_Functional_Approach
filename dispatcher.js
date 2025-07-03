// dispatcher.js
const { StateReducer } = require('./reducer');

const dispatchAction = (event, history, currentState, logger) => {
    const { present, past } = history;

    const newState = StateReducer(currentState, event);

    logger(event); // log externally (pure logger)

    const newHistory = {
        past: [...past, currentState],
        future: [],
    };

    return {
        appState: newState,
        history: newHistory,
    };
};

module.exports = { dispatchAction };
