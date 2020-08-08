const API_URL ='https://swapi.dev/api/'
const PEOPLE_URL ='people/:id'
const OPTS_CONFIG = {crossdomain:true }


function obtenerPersonaje (id_personaje,callback){
    const url = API_URL + PEOPLE_URL.replace(`:id`, id_personaje)

    return new Promise((resolve,reject)=>{
    
    $.get(url,OPTS_CONFIG,function(data){
        resolve(data)
    } )
    .fail( () => reject( id_personaje) )
})  
}

function onerror( id_personaje){
    console.log( `Sucedio un error al obtener un personaje ${id_personaje}`)
}
obtenerPersonaje(1)
     .then(function(personaje){
         console.log( `El personaje 1 es ${personaje.name}`)
     })
     .catch(onerror)