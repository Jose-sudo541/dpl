

let Bicicleta = function (id, color, modelo, ubicacion) {

    this.id = id;

    this.color = color;

    this.modelo = modelo;

    this.ubicacion = ubicacion;

}






Bicicleta.allBicis = [];



Bicicleta.add = function (bici) {

    this.allBicis.push(bici);

}



Bicicleta.removeById = function(aBiciId) {//metodo para borar una bici

    for (let i=0; i< Bicicleta.allBicis.length; i++) {

        if (Bicicleta.allBicis[i].id == aBiciId) {

            Bicicleta.allBicis.splice(i,1);

            break;

        }

    }

}


Bicicleta.findById = function(aBiciId) {//metodo para actualizar una bici

    let aBici = Bicicleta.allBicis.find(x => x.id == aBiciId);

    if (aBici){

        return aBici;

    }else{

        throw new Error(`No existe una bicicleta con el id ${aBiciId}`);
    }
}



let a = new Bicicleta(1, "Rojo", "Trek", [28.503789, -13.853296]);

let b = new Bicicleta(2, "Azul", "Orbea", [28.501367, -13.853476]);

Bicicleta.add(a);
Bicicleta.add(b);


module.exports = Bicicleta;