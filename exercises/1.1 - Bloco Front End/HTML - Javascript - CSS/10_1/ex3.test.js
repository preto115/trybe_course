// Reescreva o teste do exercício anterior, desta vez utilizando a sintaxe de async/await.

// Dica: Utilize o try/catch para o caso de erro.
const users = {
  4: { name: 'Mark' },
  5: { name: 'Paul' }
};

const findUserById = (id) => {
  return new Promise((resolve, reject) => {
  if (users[id]) {
    return resolve(users[id]);
  }
  return reject({ error: 'User with ' + id + ' not found.' });
  });
}

const getUserName = (userID) => {
  return findUserById(userID).then(user => user.name);
}

// Utilizando a sintaxe de Promise, faça um teste que verifique o resultado da função
// getUserName para o caso em que o usuário é encontrado, e também um teste para o
// caso em que o usuário não é encontrado.

// Dica: Veja os dados falsos utilizados no banco de dados,
// disponíveis na variável users, para saber quais IDs existem.
describe('testes envolvendo getUserName valido e invalido', () => {
  it('verificando se o resultado de getUserName eh encontrado', async () => {
    try {
      const data = await getUserName(4);
      expect(data).toEqual('Mark');
    } catch (error) {
      expect(error).toEqual('User with 4 not found.');
    }
  });

  it('verificando para o caso da id nao ser encontrada', async () => {
    try {
      const data = await getUserName(10);
    } catch (error) {
      expect(error).toEqual({"error": "User with 10 not found."});
    }
  });
});