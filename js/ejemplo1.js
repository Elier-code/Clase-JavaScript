numeroUno = 4
numeroDos = 4
numeroTres = 4
if(numeroUno == numeroDos && numeroDos == numeroTres){
    console.log("Los numeros son iguales")
}else{

    if (numeroUno > numeroDos) {
        if (numeroUno > numeroTres) {
            console.log("El mayor es el numero " + numeroUno)
        } else {
            console.log("El numero mayor es " + numeroTres)        
        }
    } else {
        if (numeroDos > numeroTres) {
            console.log("El numero mayor es " + numeroDos)
        } else {
            console.log("El numero mayor es " + numeroTres)
        }
    }
}
