class Pelicula {
  constructor(titulo, descripcion) {
    this.titulo = titulo;
    this.descripcion = descripcion;
  }
}

let peliculas = [new Pelicula("Silent Hill", "Pelicula de Terror"),
				new Pelicula("Avengers", "Pelicula de Venganza"),
				new Pelicula("Your Name", "Pelicula Japonesa"),
				new Pelicula("Atrapame si puedes", "Pelicula de Suspenso"),
				new Pelicula("Que paso ayer","Pelicula de Comedia")];

const tabla = document.getElementById('insertar');
const fragment = document.createDocumentFragment()

const showPeliculas = () => {
	console.log(peliculas);
}

showPeliculas();

for(const peli of peliculas){
	const fila = document.createElement('tr');
	const ti = document.createElement('td').textContent = peli.titulo;
	const des= document.createElement('td').textContent = peli.descripcion;
	const act = document.createElement('td').textContent = '!';
	const el = document.createElement('td').textContent = '-';
	
	fila.appendChild(ti);
	fila.appendChild(des);
	fila.appendChild(act);
	fila.appendChild(el);

	fragment.appendChild(fila);
}
console.log(fragment);
