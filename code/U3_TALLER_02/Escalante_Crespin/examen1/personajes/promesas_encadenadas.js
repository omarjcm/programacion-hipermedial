const API_URL ='https://swapi.dev/api/'
const PEOPLE_URL ='people/:id'
const OPTS_CONFIG = {crossdomain:true }


function obtenerPersonaje (id_personaje,callback){
    const url = API_URL + PEOPLE_URL.replace(`:id`, id_personaje)
return new Promise((resolve,reject)=>{
    
    $.get(url,OPTS_CONFIG,function(data){
        resolve(data)
    } )
    .fail(()=> reject(id_personaje) )
})  
}

function onerror( id_personaje){
    console.log( `Sucedio un error al obtener un personaje ${id_personaje}`)
}
obtenerPersonaje(1)
     .then(personaje=>{
         console.log( `El personaje 1 es ${personaje.name}`)
         return obtenerPersonaje(2)
     })
     .then(personaje=>{
        console.log( `El personaje 2 es ${personaje.name}`)
        return obtenerPersonaje(3)
     })
     .then(personaje=>{
        console.log( `El personaje 3 es ${personaje.name}`)
        return obtenerPersonaje(4)
     })
     .then(personaje=>{
        console.log( `El personaje 4 es ${personaje.name}`)
        return obtenerPersonaje(5)
     })
        .then(personaje=>{
            console.log( `El personaje 5 es ${personaje.name}`)
            return obtenerPersonaje(6)
        })
     .catch(onerror)