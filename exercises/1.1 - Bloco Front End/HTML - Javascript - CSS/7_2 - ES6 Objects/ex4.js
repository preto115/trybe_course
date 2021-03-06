/* Crie uma função para listar os valores de um objeto.
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



 function listaValores(objeto) {
  let aux = Object.values(objeto);
  for (i of aux){
    console.log(i);
  }
}

listaValores(lesson2);

//outra forma de se fazer:
const listaValores2 = objeto => { return Object.values(objeto); }

console.log(listaValores2(lesson2));