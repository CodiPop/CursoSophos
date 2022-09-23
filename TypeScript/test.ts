class Person {
nombre : string;
apellido: string;
fechaNacimiento: number;


constructor(nombre ?: string, apellido ?:string, fechaNacimiento ?:number){

    this.nombre = nombre || "";
    this.apellido = apellido || "";
    this.fechaNacimiento = fechaNacimiento || 0;
}

}


const person1 : Person = new Person("Santiago","Guerrero Martinez", 15);
//console.log(person1);


class Animal{
    private nombre !: string;

    public setNombre(nombre:string):void{
        this.nombre = nombre;
    }

    public getNombre():string{
        return this.nombre;
    }

    constructor(nombre?:string){
        this.nombre = nombre || "";
    }

}


let animal: Animal = new Animal("Perro");

console.log(animal.getNombre());
animal.setNombre("Gato")
console.log(animal.getNombre());

class Figura{
    private perimetro!:number;
    private area!:number;
    protected volumen!:number;

    public getPerimetro(){
        return this.perimetro;
    }

    public getArea(){
        return this.area;
    }
}

class Cuadrado extends Figura{
    private lado !: number;
    constructor(lado:number){
        super();
        this.lado = lado;
        this.volumen = 8;
    }
}


let cuadrado : Cuadrado = new Cuadrado(4);

console.log(cuadrado.getArea());
