
let faturamentoDiario = [250, 300, 280, 310, 270, 290, 320, 330, 310, 300, 290, 280, 270, 310, 320, 330, 340, 350, 360, 370, 380, 390, 400, 410, 420, 430, 440, 450, 460, 470, 480];


let menorFaturamento = Math.min(...faturamentoDiario);
let maiorFaturamento = Math.max(...faturamentoDiario);


let soma = faturamentoDiario.reduce((acc, valor) => acc + valor, 0);
let mediaMensal = soma / faturamentoDiario.length;

let acimaMedia = faturamentoDiario.filter(valor => valor > mediaMensal).length;


console.log(`Menor valor de faturamento: R$${menorFaturamento.toFixed(2)}`);
console.log(`Maior valor de faturamento: R$${maiorFaturamento.toFixed(2)}`);
console.log(`Número de dias com faturamento acima da média mensal: ${acimaMedia}`);
