function Veiculo(marca, modelo, ano) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
}

function Carro(marca, modelo, ano, portas) {
    Veiculo.call(this, marca, modelo, ano);
    this.portas = portas;
}

function Caminhao(marca, modelo, ano, rodas) {
    Veiculo.call(this, marca, modelo, ano);
    this.rodas = rodas
}

function Moto(marca, modelo, ano, cilindradas) {
    Veiculo.call(this, marca, modelo, ano);
    this.cilindradas = cilindradas;
}

const carro1 = new Carro("Ford", "Ka", 2020, 2);
const caminhao1 = new Caminhao("Scania", "480r", 2023, 6);
const moto1 = new Moto("Honda", "CBR1000rr", 2014, 1000);

console.log(carro1);
console.log(caminhao1);
console.log(moto1);