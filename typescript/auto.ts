(()=>{
    class Auto{
        color: string;
        marca: string;
        modelo: string;
        autoencendido:string;
        constructor(color:string,marca:string,modelo:string){
            this.color= color;
            this.marca = marca;
            this.modelo = modelo;
            this.autoencendido = "apagado";
        }

        Encender():void{
            if(this.autoencendido ==="apagado"){
                this.autoencendido = "encendido";
                console.log("Auto encendido");
            }
            else{
                console.log("Auto ya encendido");
            }
        }
        Apagar():void{
            if(this.autoencendido ==="encendido"){
                this.autoencendido = "apagado";
                console.log("Auto apagado");
            }
            else{
                console.log("Auto ya apagado");
            }
        }
    }

    const auto1:Auto = new Auto("rojo","Toyota","Panda Trueno");
    auto1.Encender();
    auto1.Apagar();
})()