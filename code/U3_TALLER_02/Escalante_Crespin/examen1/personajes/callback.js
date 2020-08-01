const API_URL ='https://swapi.dev/api/'
const PEOPLE_URL ='people/:id'
const OPTS_CONFIG = {crossdomain:true }

const onPersonajeRespuesta = function(personaje){
    console.log(`${personaje.name}`)
}
function obtenerPersonaje (id_personaje){
    const url = API_URL + PEOPLE_URL.replace(`:id`, id_personaje)
    $.get(url,OPTS_CONFIG,onPersonajeRespuesta)
    .fail( function(){
        console.log('sucedio un error. No se pudo obtener el personaje.')
    })
}
for(let i=1; i<=100; i++){
    obtenerPersonaje(i)
}