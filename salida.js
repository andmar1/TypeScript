var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
console.log("Hola mundo");
//Types 
var myStrign = "Hola Antonio";
myStrign = 122 + "";
console.log(myStrign.length);
//Asignacion de tipo de datos 
//Numericos
var n1 = 12;
console.log(n1);
//Strings
var saludo = "Hola TypeScript";
console.log(saludo);
//Booleanos
var miBool = true;
var myVar = "Hello"; //Con "any" acepta cualquier tipo de dato durante el transcurso del programa.
myVar = 10;
myVar = "diez";
console.log(myVar);
//String´s
var stringPrueba = "Prueba HTML";
document.write(stringPrueba);
//Cambiar tipo de variable
var numString = 202;
//Conversion numerico a String
document.write(numString.toString());
//Arreglos en TP
var stringArray = ["Diego", "pepe", "Juan", "frey"];
stringArray.forEach(function (element) {
    console.log(element);
});
console.log();
console.log();
//Funciones con TypeScript
function promedio(name) {
    var calificaciones = [10, 8, 7, 5, 8, 7, 7, 9];
    var suma = 0;
    calificaciones.forEach(function (element) {
        suma += element;
    });
    suma = suma / calificaciones.length;
    console.log("El promedio de " + name + " es de: " + suma);
}
promedio("Carlos");
//Arreglo de Strings
var cadenaNombres = ["Victor", "Antonio", "Juan", "Gonzalo"];
for (var i = 0; i < cadenaNombres.length; i++) {
    console.log(cadenaNombres[i]);
}
var numeros = [1, 2, 3, 4, 5, 6];
numeros.forEach(function (element) {
    console.log(element);
});
//Tipear Arreglos 
console.log("Tipado de arreglos");
var stringArray = ["Felipe", "Actor", "Jaime", "Alfredo", "Antonio"];
var numberArray = [1, 2, 32, 23, 4, 12, 23];
var booleanrray = [false, true, true];
//Array de cualquier tipo de datos
var anyArray = ["Hola", 34, false, 323, "Andres"];
var suma = 0;
for (var _i = 0, anyArray_1 = anyArray; _i < anyArray_1.length; _i++) {
    var iterator = anyArray_1[_i];
    suma += iterator;
    console.log(iterator);
}
//Si los indices del arreglo son del mismo tipo, podemos hacer operaciones con ellos.
console.log(anyArray[1] + anyArray[3]);
console.log("Tuplas ");
//tuple
var strNumTuple;
//Podemos meter valores siempre y cuando tengo el tipo de dato
strNumTuple = ["Jose", 13];
console.log(strNumTuple);
//Forma incorrecta, nos marco error por que no coinciden los tipos
//strNumTuple = [12,"350"];
//Para evitar errores podemos convertirlos de string a number o viseversa
strNumTuple = [12 + "", Number("350")];
console.log(strNumTuple);
console.log();
var stringNumTuple;
stringNumTuple = ["Hello", 22];
stringNumTuple = ["World", 24334];
//Tipos de Datos 
//void, undefined, null
var myVoid = undefined;
var myNull = null;
var myUndefined = undefined;
//Todos son indefinidos
// document.write(typeof(myUndefined));
// document.write(typeof(myVoid));
// document.write(typeof(myUndefined));
//Funciones
function getSum(num1, num2) {
    return num1 + num2;
}
console.log(getSum(3, 4));
//Funcion que suma o concatena, dependiendo del parametro que le pases
var mySum = function (num, num2) {
    if (typeof (num) === 'string') {
        num = parseInt(num);
    }
    if (typeof (num2) === 'string') {
        num2 = parseInt(num2);
    }
    return num + num2;
};
console.log(mySum("9", 3));
console.log(mySum("maiz", 3));
//Funcion con parametros opcionales, ? parametro opcional
function getName(firsName, lastName) {
    if (lastName == undefined) {
        return firsName;
    }
    return firsName + " + " + lastName;
}
document.write(getName("tony", "Tolver"));
//funcion vacia
function myVoidFunction() {
    return;
}
function showTodo(todo) {
    console.log(todo.title + " - " + todo.text);
}
showTodo({
    title: 'Eat Dinner',
    text: 'lorem'
});
//Podemos asignar una variable con las caracteristicas de la interface
var myTodo = { title: "Eat Dinner Antonio", text: "Sopa Azteca" };
//Si no cumple con la estructura del ITodo marca error
//let myTodo2:ITodo = {title: "Eat Dinner Antonio",text: "Carnitas", name:"cast "};
showTodo(myTodo);
//Clases 
var User = /** @class */ (function () {
    function User(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
    }
    User.prototype.register = function () {
        console.log(this.name + " is registered!");
    };
    User.prototype.showMeAge = function () {
        return this.age;
    };
    User.prototype.ageInYears = function () {
        return this.age + " Years";
    };
    User.prototype.payInvoice = function () {
        console.log(this.name + " paide invoice");
    };
    return User;
}());
var john = new User('John', 'johnGamerX@gmail.com', 34);
//Acceder al atributo por medio del objeto
document.write(john.name);
console.log(john.register());
console.log(john.ageInYears());
//Herencia de clases y metodos
var Members = /** @class */ (function (_super) {
    __extends(Members, _super);
    function Members(id, name, email, age) {
        var _this = _super.call(this, name, email, age) || this;
        _this, id = id;
        return _this;
    }
    Members.prototype.payInvoice = function () {
        _super.prototype.payInvoice.call(this);
    };
    return Members;
}(User));
var gordon = new Members("1", "Gordon", "gordon@gmail.com", 35);
console.log(gordon);
console.log(gordon.payInvoice());
