console.log("Hola mundo");

//Types 
var myStrign = "Hola Antonio";
myStrign = 122 + "";
console.log(myStrign.length)

//Asignacion de tipo de datos 
//Numericos
var n1:number = 12
console.log(n1);
//Strings
var saludo:string = "Hola TypeScript";
console.log(saludo);
//Booleanos
var miBool:boolean = true;

var myVar:any = "Hello"  //Con "any" acepta cualquier tipo de dato durante el transcurso del programa.
myVar = 10;
myVar = "diez";

console.log(myVar);

//String´s
var stringPrueba:string = "Prueba HTML";

document.write(stringPrueba);

//Cambiar tipo de variable

var numString:number = 202;
//Conversion numerico a String
document.write(numString.toString());

//Arreglos en TP
var stringArray = ["Diego","pepe","Juan","frey"];

stringArray.forEach(element => {
    console.log( element );
});

console.log()
console.log()

//Funciones con TypeScript
function promedio(name:string){
    var calificaciones = [10,8,7,5,8,7,7,9];
    var suma:number = 0;
    calificaciones.forEach(element => {
        suma += element;
    });
    suma = suma / calificaciones.length;
    console.log(`El promedio de ${name} es de: ${suma}`);
}
promedio("Carlos");

//Arreglo de Strings
var cadenaNombres = ["Victor", "Antonio", "Juan", "Gonzalo"];
for (let i = 0; i < cadenaNombres.length; i++) {
    console.log(cadenaNombres[i]);
}

var numeros = [1,2,3,4,5,6];

numeros.forEach(element => {
    console.log( element )
});

//Tipear Arreglos 
console.log("Tipado de arreglos");

var stringArray : string[] = ["Felipe","Actor","Jaime","Alfredo","Antonio"];
var numberArray : number[] = [1,2,32,23,4,12,23];
var booleanrray : boolean[] = [false, true, true];

//Array de cualquier tipo de datos

var anyArray : any[] = ["Hola",34,false,323,"Andres"];

var suma : number = 0;
for (const iterator of anyArray) {
    suma += iterator;
    console.log( iterator );
}

//Si los indices del arreglo son del mismo tipo, podemos hacer operaciones con ellos.
console.log( anyArray [1] + anyArray[3]);


console.log( "Tuplas ");
//tuple
var strNumTuple : [string, number];
//Podemos meter valores siempre y cuando tengo el tipo de dato
strNumTuple = ["Jose", 13];
console.log( strNumTuple)

//Forma incorrecta, nos marco error por que no coinciden los tipos
//strNumTuple = [12,"350"];

//Para evitar errores podemos convertirlos de string a number o viseversa
strNumTuple = [12 + "" ,Number("350")];
console.log( strNumTuple );

console.log();

var stringNumTuple : [string, number];
stringNumTuple = ["Hello",22];
stringNumTuple = ["World",24334];

//Tipos de Datos 
//void, undefined, null

let myVoid : void = undefined;
let myNull : null = null;
let myUndefined : undefined = undefined;

//Todos son indefinidos
// document.write(typeof(myUndefined));
// document.write(typeof(myVoid));
// document.write(typeof(myUndefined));

//Funciones

function getSum(num1:number,num2:number):number {
    return num1 + num2;
}
console.log( getSum(3,4));

//Funcion que suma o concatena, dependiendo del parametro que le pases
let mySum = function(
    num:number | string, 
    num2:number | string):number{
        if (typeof(num) === 'string') {
            num = parseInt(num);
        }
        if (typeof(num2)=== 'string') {
            num2 = parseInt(num2);
        }
        return num + num2;
}

console.log( mySum ("9",3))
console.log( mySum ("maiz",3)) 

//Funcion con parametros opcionales, ? parametro opcional

function getName(
    firsName:string, 
    lastName?:string):string{
    
    if (lastName == undefined) {
        return firsName;
    }
    return `${firsName} + ${lastName}`;
}

document.write( getName("tony","Tolver") );

//funcion vacia
function myVoidFunction():void{
    return;
}

//Interfaces

interface ITodo {
    title: string;
    text:string;
}

function showTodo(todo: ITodo){
    console.log(`${todo.title} - ${todo.text}`)
}

showTodo({
    title: 'Eat Dinner',
    text: 'lorem'
})

//Podemos asignar una variable con las caracteristicas de la interface
let myTodo : ITodo = {title: "Eat Dinner Antonio", text : "Sopa Azteca"};

//Si no cumple con la estructura del ITodo marca error
//let myTodo2:ITodo = {title: "Eat Dinner Antonio",text: "Carnitas", name:"cast "};

showTodo(myTodo);


//Clases 

class User{
    public name:string;
    public email:string; //Para el alcance de las variable
    protected age:number;

    constructor(
        name:string,
        email:string,
        age:number)
        {
        this.name = name;
        this.email = email;
        this.age = age;
    }

    register(){
        console.log(`${this.name} is registered!`);
    }
    showMeAge(){
        return this.age;
    }
    public ageInYears(){
        return this.age + " Years";    
    }
    payInvoice (){
        console.log(`${this.name} paide invoice`);
    }
}

var john = new User('John','johnGamerX@gmail.com', 34);

//Acceder al atributo por medio del objeto
document.write(john.name);

console.log( john.register() );

console.log(john.ageInYears());

//Herencia de clases y metodos

class Members extends User{
    id:number;
    constructor(id, name, email, age){
        super(name, email, age);
        this,id = id;
    }
    payInvoice(){
        super.payInvoice();
    }
}

var gordon = new Members("1","Gordon","gordon@gmail.com",35);

console.log( gordon );

console.log(gordon.payInvoice());
