function crearNodo(nodo){
    var nodo = document.createElement(nodo)
    nodo.style.color = "red"
    return nodo
}

function crearNodoConTexto(nodo,texto){
    var nodo = crearNodo(nodo)
    var nodoTexto = document.createTextNode(texto)
    nodo.appendChild(nodoTexto)
    return nodo
}
function crearImgen(rutaImagen,textoAlt){
    var nodoImgen = crearNodo("img")
    nodoImgen.src = rutaImagen
    nodoImgen.alt = textoAlt
    adicionarNodoBody(nodoImgen)
}
function adicionarNodoBody(nodo){
    document.body.appendChild(nodo)
}
function adicionarNodoContenedor(nodo , contenedor){
    contenedor.appendChild(nodo)
}