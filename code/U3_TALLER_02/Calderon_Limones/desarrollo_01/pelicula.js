class Pelicula {
    constructor(titulo, descripcion, genero) {
        this.titulo = titulo
        this.descripcion = descripcion
        this.genero = genero
    }
}

const PELICULAS = [
    new Pelicula('El cadáver de la novia.', 'Se trata de una novia muerta.', 'Animados'),
    new Pelicula('Paw Patrol', 'Sobre unos divertidos perritos fantásticos', 'Animados'),
    new Pelicula('El Rey Mono', 'El Gran Sabio, tan grande como el cielo. ', 'Ciencia Ficción'),
    new Pelicula('Lilo y Stitch', 'Un ser extraterrestre que quiere mucho a una niña malcriadita', 'Animados'),
]

function inicializarContainer( elemento ) {
    while (elemento.firstChild) { 
        elemento.removeChild( elemento.firstChild ) 
    }
}

function cargarDatosInicial() {
    cargarDatos( false )
}

function cargarDatos( tipo, titulo ) {
    datos = document.getElementById('peliculas')
    inicializarContainer( datos )

    datos_tabla = '<table>'
    datos_tabla += '<tr><th>Título</th><th>Descripción</th><th>Actualización</th><th>Eliminación</th></tr>'
    for (pelicula of PELICULAS) {
        if (tipo) { 
            if (pelicula.titulo.includes(titulo) )
                datos_tabla += '<tr><td>'+pelicula.titulo+'</td><td>'+pelicula.descripcion+'</td><td class="btn"><button>Act.</button></td><td class="btn"><button>-</button></td></tr>'
        } else {
            datos_tabla += '<tr><td>'+pelicula.titulo+'</td><td>'+pelicula.descripcion+'</td><td class="btn"><button>Act.</button></td><td class="btn"><button>-</button></td></tr>'
        }
    }
    datos_tabla += '</table>'
    datos.innerHTML = datos_tabla
}

function buscarPelicula() {
    cargarDatos( true, document.getElementById('titulo').value )
}