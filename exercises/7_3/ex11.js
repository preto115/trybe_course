const assert = require('assert');

function isAbove(num1, num2) {
  return num1 > num2;
}

// implemente seus testes aqui
assert.equal(isAbove(5,4), true, 'a função não está retornando true or false corretamente');