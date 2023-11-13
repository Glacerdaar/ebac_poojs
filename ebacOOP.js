
function Veiculo (marca, modelo) {
    this.marca = marca;
    this.modelo = modelo;

    this.acelerar = function() {
        console.log (`${this.modelo} está acelerando`);
    }

    this.frear = function() {
        console.log(`${this.modelo} está freando`);
    }
}

function Carro (marca, modelo, numPortas) {
    Veiculo.call (this, marca, modelo);
    this.numPortas = numPortas;

    this.abrirPorta = function () {
        console.log(`${this.modelo} tem ${this.numPortas} portas abertas.`);
    }
}
    

function Moto (marca, modelo, tipo) {
    Veiculo.call (this, marca, modelo);
    this.tipo = tipo;

    this.empinar = function () {
        console.log(`${this.modelo} está empinando! Cuidado!`);
    }
}

    const carro1 = new Carro('Ford', 'Fusion', 4);
    const moto1 = new Moto('Honda', 'CBR1000RR', 'Esportiva');
    const carro2 = new Carro('Chevrolet', 'Camaro', 2);

    carro1.acelerar();
    carro1.abrirPorta();

    moto1.frear();
    moto1.empinar();

    carro2.acelerar();
    carro2.frear();
    carro2.abrirPorta();