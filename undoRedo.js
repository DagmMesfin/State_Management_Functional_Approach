// undoRedo.js

const undoAction = (history, appstate) => {
    const { past, future } = history;
    if (past.length === 0) return { appState: appstate, history };

    const previous = past[past.length - 1];
    const newPast = past.slice(0, -1);
    const newFuture = [appstate, ...future];

    return {
        appState: previous,
        history: {
            past: newPast,
            future: newFuture,
        },
    };
};

const redoAction = (history, appstate) => {
    const { past, future } = history;
    if (future.length === 0) return { appState: appstate, history };

    const next = future[0];
    const newFuture = future.slice(1);
    const newPast = [...past, appstate];

    return {
        appState: next,
        history: {
            past: newPast,
            future: newFuture,
        },
    };
};

module.exports = { undoAction, redoAction };
