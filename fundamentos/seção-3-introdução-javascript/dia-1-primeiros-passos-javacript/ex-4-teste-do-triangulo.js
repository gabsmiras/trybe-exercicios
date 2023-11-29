const angulo1 = 60;
const angulo2 = 0;
const angulo3 = 60;
let resultado;
let mensagem = ''

if (angulo1 + angulo2 + angulo3 === 180) {
  resultado = true;
} else if (angulo1 === 0 || angulo2 === 0 || angulo3 === 0) {
  mensagem = 'Algum dos valores está incorreto!'
  resultado = false;
  console.log(mensagem);
} else {
  resultado = false;
} 

console.log(resultado);