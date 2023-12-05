"use strict";
(() => {
    class Auto {
        constructor(color, marca, modelo) {
            this.color = color;
            this.marca = marca;
            this.modelo = modelo;
            this.autoencendido = "apagado";
        }
        Encender() {
            if (this.autoencendido === "apagado") {
                this.autoencendido = "encendido";
                console.log("Auto encendido");
            }
            else {
                console.log("Auto ya encendido");
            }
        }
        Apagar() {
            if (this.autoencendido === "encendido") {
                this.autoencendido = "apagado";
                console.log("Auto apagado");
            }
            else {
                console.log("Auto ya apagado");
            }
        }
    }
    const auto1 = new Auto("rojo", "Toyota", "Panda Trueno");
    auto1.Encender();
    auto1.Apagar();
})();
