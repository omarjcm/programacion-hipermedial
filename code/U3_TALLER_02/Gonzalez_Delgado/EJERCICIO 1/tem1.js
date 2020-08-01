function mostrar(){
    var titulo = document.getElementById('titulo')
    var descripcion = document.getElementById('descripcion')
}

function mostrar_div(){
    var titulo = document.getElementById('titulo')
    var descripcion = document.getElementById('descripcion')
    var datos = document.getElementById('datos')

    var lbl_titulo = document.createElement('label')
    var txt_titulo = document.createTextNode(`Titulo: ${titulo.value}`)
    lbl_titulo.appendChild(txt_titulo)

    var lbl_descripcion = document.createElement('label')
    var txt_descripcion = document.createTextNode(`Descripcion: ${descripcion.value}`)
    lbl_descripcion.appendChild(txt_descripcion)

    datos.appendChild(lbl_titulo)
    datos.appendChild(lbl_descripcion)

    datos.style.visibility='visible'
    datos.style.display='block'
}