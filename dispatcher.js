// dispatcher.js
const { StateReducer } = require('./reducer');

const dispatchAction = (event, history, logger) => {
    const { present, past } = history;

    const newState = StateReducer(present, event);

    logger(event); // log externally (pure logger)

    const newHistory = {
        past: [...past, present],
        present: newState,
        future: [],
    };

    return {
        appState: newState,
        history: newHistory,
    };
};

module.exports = { dispatchAction };
