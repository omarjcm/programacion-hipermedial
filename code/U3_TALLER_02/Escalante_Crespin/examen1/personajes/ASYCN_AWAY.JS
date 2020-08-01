const API_URL ='https://swapi.dev/api/'
const PEOPLE_URL ='people/:id'
const OPTS_CONFIG = {crossdomain:true }


function obtenerPersonaje (id_personaje){
    const url = API_URL + PEOPLE_URL.replace(`:id`, id_personaje)

    return new Promise((resolve,reject)=>{
    
    $.get(url,OPTS_CONFIG,data =>{
        resolve(data)
    } )
    .fail(()=> reject(id_personaje) )
})  
}
function onMostrarPersonaje(id,personaje){
    console.log(`ID:${id} , Personaje: ${personaje.name}`)
}
function onerror( id_personaje){
    console.log( `Sucedio un error al obtener un personaje ${id_personaje}`)
}
async function obtenerPersonajes(){
    var ids=[1,2,3,4,5,6,7,8,9,10]
    var promesas=ids.map(id=> obtenerPersonaje( id))

    try{
var personajes = await Promise.all(promesas)
//console.log(personajes)
 for (let i =0; i<personajes.length; i++){
     console.log(`${i+1}: ${personajes[i].name}`)
 }
    }
    catch(id_personaje){
        onerror( id_personaje )
    }
}
obtenerPersonajes()