class Pelicula {
  constructor(titulo, descripcion, genero) {
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.genero = genero;
  }
}

let peliculas = [];

const pelicula = document.getElementById('btn_ingresar')
pelicula.addEventListener('click', () => {
	const titulo = document.getElementById('titulo').value;
	const descripcion = document.getElementById('descripcion').value;
	const genero = document.getElementById('genero').value;
	peliculas.push(titulo,descripcion,genero);
	console.log(peliculas);
})