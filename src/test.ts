// funcao de saudacoes
function saudacoes(nome: string): string {
    return `Saudações ${nome}`;
}

const nome = "Xuxa";
const saudacoesNome = saudacoes(nome);
console.log(saudacoesNome);

function calculaArea(largura: number, altura: number): number {
    const area = largura * altura;
    return area;
}

const resultado = calculaArea(20, 30);
console.log(resultado);