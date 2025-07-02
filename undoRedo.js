// undoRedo.js

const undoAction = history => () => {
    const { past, present, future } = history;
    if (past.length === 0) return { appState: present, history };

    const previous = past[past.length - 1];
    const newPast = past.slice(0, -1);
    const newFuture = [present, ...future];

    return {
        appState: previous,
        history: {
            past: newPast,
            present: previous,
            future: newFuture,
        },
    };
};

const redoAction = history => () => {
    const { past, present, future } = history;
    if (future.length === 0) return { appState: present, history };

    const next = future[0];
    const newFuture = future.slice(1);
    const newPast = [...past, present];

    return {
        appState: next,
        history: {
            past: newPast,
            present: next,
            future: newFuture,
        },
    };
};

module.exports = { undoAction, redoAction };
