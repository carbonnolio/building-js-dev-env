// Isn't transpiled Must use CommonJS & ES5

// Register Babel to transpile before tests run.
require('babel-register');

// Disable webpack feature that Mocha doesn't understand.
require.extensions['css'] = function() {};
