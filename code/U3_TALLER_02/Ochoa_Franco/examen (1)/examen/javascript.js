function Pelicula (nombre, descipcion) {
    this.nombre = nombre;
    this.descipcion = descipcion;
}

window.peliculas = [];
function generarPeliculas() {
    peliculas.push(new Pelicula("Iron Man", "Película de un hombre y su armadura de metal."));
    peliculas.push(new Pelicula("Spiderman", "Película de un joven con poderes arácnidos."));
    peliculas.push(new Pelicula("Ant Man", "Película de un hombre y su un traje que le permite hacerse pequeño."));
    peliculas.push(new Pelicula("Thor", "Película de un hombre y su poderoso martillo."));
    peliculas.push(new Pelicula("Avengers", "Todos los héroes se reunen para enfrentar una amenaza extraterrestre."));
}

function dibujarPeliculas (peliculas) {
    var tableBody = document.getElementsByTagName('tbody');
    var peliculasText = "";
    for (var i = 0; i < peliculas.length; i++) {
        peliculasText += "<tr>"
        peliculasText += "<td>" + peliculas[i].nombre + "</td>"
        peliculasText += "<td>" + peliculas[i].descipcion + "</td>"
        peliculasText += "<td><button>Act.</button></td>"
        peliculasText += "<td><button>Edi.</button></td>"
        peliculasText += "</tr>"
    }
    tableBody[0].innerHTML = peliculasText;
}

function iniciar() {
    generarPeliculas();
    dibujarPeliculas(peliculas);
}

function buscarPeliculas(evento) {
    evento.preventDefault();
    var input = document.getElementById('filtro');

    if (input.value === "") {
        dibujarPeliculas(peliculas);
    } else {
        var _peliculas = [];
        for (var i = 0; i < peliculas.length; i++) {
            if (peliculas[i].nombre.toString().toLowerCase().indexOf(input.value.toLowerCase()) != -1) {
                _peliculas.push(peliculas[i]);
            }
        }

        dibujarPeliculas(_peliculas);
    }
}