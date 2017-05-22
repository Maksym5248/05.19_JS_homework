/*1. Переписати програму зі створення обєктів машин (5 машин, model, brand, engineDisplacement)
на використання класів (функцій-конструкторів)
 */

function Car (firm_name, model_name, engine_displacement ){
    this.firm_name = a;
    this.model_name = b;
    this.engine_displacement = c;
}

var cars = [];

for (var i=0; i < 5; i++) {
    var a = prompt("enter firm name");
    var b = prompt("enter model name");
    var c = prompt("enter engine displacement");

    cars.push(new Car(a,b,c));

}

var cars2 = [];

for (var j = 0; j < 5; j++){

    if (cars[j]["engine_displacement"] > 2.0) {
        cars2.push(cars [j]);
    }
}

console.log (cars2);


