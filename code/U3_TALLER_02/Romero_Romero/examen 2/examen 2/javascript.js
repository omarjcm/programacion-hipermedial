(function() {
    
    var lista = document.getElementById("list"),
        titulo = document.getElementById("title"),
        descripcion = document.getElementById("description"),
        genero = document.getElementById("gender"),
        btnPelicula = document.getElementById("btn-add");

    
    var agregarTarea = function() {
        var tarea = title.value,
            nuevaTarea = document.createElement("list"),
            enlace = document.createElement("a"),
            contenido = document.createTextNode(tarea);

        if (tarea === "") {
            title.setAttribute("placeholder", "");
            title.className = "error";
            return false;
        }

        
        enlace.appendChild(contenido);
        enlace.setAttribute("href", "#");
        nuevaTarea.appendChild(enlace);
        lista.appendChild(nuevaTarea);

        title.value = "";

        for (var i = 0; i <= lista.children.length - 1; i++) {
            lista.children[i].addEventListener("click", function() {
                this.parentNode.removeChild(this);
            });
        }

    };
    var comprobarInput = function() {
        title.className = "";
        title.setAttribute("placeholder", "Agrega tu peli");
    };

    var eleminarTarea = function() {
        this.parentNode.removeChild(this);
    };

    btnPeli.addEventListener("click", agregarTarea);

    titulo.addEventListener("click", comprobarInput);

    for (var i = 0; i <= lista.children.length - 1; i++) {
        lista.children[i].addEventListener("click", eleminarTarea);
    }
}());