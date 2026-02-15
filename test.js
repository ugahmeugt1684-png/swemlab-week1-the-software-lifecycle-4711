const assert = require('assert');
const { greet } = require('./index');

try {
    assert.strictEqual(greet("Tester"), "🔥 Welcome to SWEMLAB, Tester!");
    console.log("✅ Tests Passed!");
} catch (e) {
    console.error("❌ Test Failed:", e.message);
    process.exit(1);
}
