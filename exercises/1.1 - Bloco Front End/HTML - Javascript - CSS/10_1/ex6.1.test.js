
// Use como base para os exercícios a seguir:
// 1. Adicione uma funcionalidade para buscar pelo nome do animal -
// crie uma função que deverá passar no teste abaixo.

// Dica: use o código do exemplo dado para criar uma nova função, analise os testes antes de iniciar.

const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalByName = (name) => {
  // Adicione o código aqui.
  return new Promise((resolve, reject) => {
    const procuraAnimal = Animals.find(animal => animal.name === name);
    if (procuraAnimal) return resolve(procuraAnimal);
    return reject('Nenhum animal com esse nome!');
  });

}

const getAnimal = (name) => {
  // Adicione o código aqui.
  return findAnimalByName(name).then(animal => animal);
}
// ---------------------

describe('Testando promise - findAnimalByName', () => {
  describe('Quando existe o animal com o nome procurado', () => {
    test('Retorne o objeto do animal', () => {
      expect.assertions(1);
      return getAnimal('Dorminhoco').then(animal => {
        expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
      });
    });
  });

  describe('Quando não existe o animal com o nome procurado', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return getAnimal('Bob').catch(error =>
        expect(error).toEqual('Nenhum animal com esse nome!')
      );
    });
  });
});
