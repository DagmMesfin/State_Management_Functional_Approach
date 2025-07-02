// state.js
const initialAppState = {
    items: [],
};

const appHistory = {
    past: [],
    present: initialAppState,
    future: [],
};

module.exports = { initialAppState, appHistory };
