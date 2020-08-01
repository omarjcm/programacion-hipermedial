class Pelicula {
    constructor(titulo, descripcion, genero) {
        this.titulo = titulo
        this.descripcion = descripcion
        this.genero = genero
    }
}

var peliculas = []

function inicializarContainer( elemento ) {
    while (elemento.firstChild) { 
        elemento.removeChild( elemento.firstChild ) 
    }
}

function cargarDatosInicial() {
    cargarDatos( peliculas )
}

function cargarDatos( objetos ) {
    datos = document.getElementById('peliculas')
    inicializarContainer( datos )

    datos_tabla = '<table>'
    datos_tabla += '<tr><th>Título</th><th>Descripción</th><th>Género</th></tr>'
    for (pelicula of objetos) {
        datos_tabla += '<tr><td>'+pelicula.titulo+'</td><td>'+pelicula.descripcion+'</td><td>'+pelicula.genero+'</td></tr>'
    }
    datos_tabla += '</table>'
    datos.innerHTML = datos_tabla
}

function agregarPelicula() {
    let titulo = document.getElementById('titulo').value
    let descripcion = document.getElementById('descripcion').value
    let genero = document.getElementById('genero').value

    peliculas.push( new Pelicula( titulo, descripcion, genero ) )
    cargarDatos( peliculas )
}