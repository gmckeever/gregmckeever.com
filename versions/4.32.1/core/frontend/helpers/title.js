// # Title Helper
// Usage: `{{title}}`
//
// Overrides the standard behaviour of `{[title}}` to ensure the content is correctly escaped

const {SafeString, escapeExpression} = require('../services/rendering');

module.exports = function title() {
    return new SafeString(escapeExpression(this.title || ''));
};