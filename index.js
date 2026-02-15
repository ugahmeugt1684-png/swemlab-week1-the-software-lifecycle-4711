/**
 * 🔥 SWEMLAB Starter
 */

function greet(name) {
    return '🔥 Welcome to SWEMLAB, ' + name + '!';
}

function main() {
    console.log(greet("SWEMLAB"));
    console.log("Start coding your solution here.")
}

module.exports = { greet };

if (require.main === module) {
    main();
}
