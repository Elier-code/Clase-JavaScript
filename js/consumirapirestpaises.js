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
        var ul = document.createElement("ul")
        if (Array.isArray(pais.capital)) {
            for (const capital of pais.capital) {
                var elementoLista = document.createElement("li")
                var capitales = document.createTextNode(capital)
                elementoLista.appendChild(capitales)
                ul.appendChild(elementoLista)
            }

        } else {
            var elementoLista = document.createElement("li");
            elementoLista.appendChild(document.createTextNode("No Tiene"));
            ul.appendChild(elementoLista);
        }


        columnaComun.innerHTML = pais.name.common
        columnaOficial.innerHTML = pais.name.official
        columnaEstatus.innerHTML = pais.status
        columnaCapital.appendChild(ul)
    }
}
//capital