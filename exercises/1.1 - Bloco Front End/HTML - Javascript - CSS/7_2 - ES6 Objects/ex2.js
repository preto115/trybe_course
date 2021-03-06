/*  Crie uma função para listar as keys de um objeto.
 Essa função deve receber um objeto como parâmetro. */

const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

function listaKeys(objeto) {
  let arrayAux = Object.keys(objeto);
  for (i of arrayAux) {
    console.log(i);
  }
}

listaKeys(lesson2);

// outra forma de se fazer:

const listaKeys2 = objeto => {
  return Object.keys(objeto);
}

console.log(listaKeys2(lesson2));