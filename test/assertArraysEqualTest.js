const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true