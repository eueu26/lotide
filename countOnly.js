const assertEqual = require('./assertEqual');
const countLetters = require('./countLetters');

const countOnly = function(allItems, itemToCount) {
  const results = {};

  for (const item of allItems) {
    if (itemToCount[item]) {
      if (results[item]) {
        results[item] += 1;
      }
      else {
        results[item] = 1;
      }
    }
  }
return results;
}


const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];
const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

module.exports = countOnly;

// (assertEqual(result1["Jason"], 1));
// assertEqual(result1["Karima"], undefined);
// assertEqual(result1["Fang"], 2);
// assertEqual(result1["Agouhanna"], undefined);