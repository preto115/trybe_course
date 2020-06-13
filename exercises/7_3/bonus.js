function getChange(payable, paid) {
  //  payable é o valor a ser pago, ou o valor total.
  //  paid é o valor que a pessoa pagou.

  if (paid < payable) throw new Error('paid value is not enough');

  const coins = [200, 100, 50, 20, 10, 5, 2, 1];
  const change = [];
  const { length } = coins;
  let remaining = paid - payable;

  while (remaining > 0) {
    for (let i=0; i < length; i += 1) {
      if (remaining >= coins[i]) {
        if (remaining % coins[i] >= 0 ) {
          change.push(coins[i]);
          remaining -= coins[i];
          break;
        }
      }
    }
}
  return change;
}

const assert = require('assert');

let result = getChange(1, 1); // no change/coins just an empty array
let expected = [];
assert.deepEqual(result, expected);

result = getChange(215, 300); // expect an array containing [50, 20, 10, 5]
expected = [50, 20, 10, 5];
assert.deepEqual(result, expected);

result = getChange(486, 600); // expect an array containing [100, 10, 2, 2]
expected = [100, 10, 2, 2];
assert.deepEqual(result, expected);

result = getChange(12, 400); // expect an array containing [200, 100, 50, 20, 10, 5, 2, 1]
expected = [200, 100, 50, 20, 10, 5, 2, 1];
assert.deepEqual(result, expected);

assert.throws(() => { getChange(100, 10); }, /^Error: paid value is not enough$/);
