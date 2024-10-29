function consumirAPIPaises(){
    var url = "https://restcountries.com/v3.1/all"
    fetch(url) 
    .then(respuesta => respuesta.json())
    .then(paises => {
        agregarDatosPaisesTabla(paises)
        
    })
}
function agregarDatosPaisesTabla(paises){
    var tabla = document.getElementById("table")
    for (pais of paises) {
        var fila = tabla.insertRow(-1)
        var columnaComun = fila.insertCell(0)
        var columnaOficial = fila.insertCell(1)
        var columnaEstatus = fila.insertCell(2)
        var columnaCapital = fila.insertCell(3)
        for (capital in pais.capital) {
            var ul = document.createElement("ul")
            var elementoLista = document.createElement("li")
            //elementoLista.appendChild(paises.capital[capital])
            ul.appendChild(elementoLista)
            console.log(paises.capital[capital])
        }
        
        
        columnaComun.innerHTML = pais.name.common
        columnaOficial.innerHTML = pais.name.official
        columnaEstatus.innerHTML = pais.status
        columnaCapital.innerHTML = ul
        
    }
}
//capital