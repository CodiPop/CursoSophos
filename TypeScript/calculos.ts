function volCubo(a : number){
    return a *a *a;
}

function volPrisma(a:number, b:number,c:number){
    return a*b*c;
}

function volCilindro(r : number , h : number) : number{
    return 3.1415926 * (r*r)*h;
}

function volEsfera(r:number){
    return 3.1415926 * (r*r*r)* 3/4;
}

function test(){
    console.log("Funciona");
}

export {volCubo, volCilindro,volEsfera,volPrisma,test}