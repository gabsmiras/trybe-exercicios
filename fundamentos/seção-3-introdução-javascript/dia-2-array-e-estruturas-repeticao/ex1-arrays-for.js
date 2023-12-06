const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
let media = 0;
let maiorValor = 0;
let impares = 0;

for (let index = 0; index < numbers.length; index += 1){

    console.log(`${index+1}º número é ${numbers[index]}.`)
    soma += numbers[index];

    if (numbers[index] > maiorValor) {
        maiorValor = numbers[index];
    }

    if ((numbers[index] % 2) > 0) {
        impares += 1;
    }

}

media = soma / numbers.length;
console.log(`A soma dos números da lista é ${soma}.
Sendo o maior valor ${maiorValor}.`)

if (media > 20){
    console.log('O valor da média aritmética é maior que 20');    
} else if (media < 20){
    console.log('O valor da média aritmética é menor ou igual a 20');
} else {
    console.log('O valor da média aritmética é igual à 20');
}

if (impares < 0) {
    console.log('Nenhum valor impar encontrado.');
}