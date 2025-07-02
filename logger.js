// logger.js
const createLogger = prefix => event => {
    console.log(`[${prefix}] Event dispatched:`, event);
};

module.exports = { createLogger };
