
const faturamentoEstado = {
    "SP": 67836.43,
    "RJ": 36678.66,
    "MG": 29229.88,
    "ES": 27165.48,
    "Outros": 19849.53
};


let valorTotal = 0;
for (let estado in faturamentoEstado) {
    valorTotal += faturamentoEstado[estado];
}


for (let estado in faturamentoEstado) {
    let faturamento = faturamentoEstado[estado];
    let percentual = (faturamento / valorTotal) * 100;
    console.log(`Percentual de ${estado}: ${percentual.toFixed(2)}%`);
}

