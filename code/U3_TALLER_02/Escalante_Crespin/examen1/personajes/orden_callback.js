const API_URL ='https://swapi.dev/api/'
const PEOPLE_URL ='people/:id'
const OPTS_CONFIG = {crossdomain:true }


function obtenerPersonaje (id_personaje,callback){
    const url = API_URL + PEOPLE_URL.replace(`:id`, id_personaje)
    $.get(url,OPTS_CONFIG,function(personaje){
        console.log(`${personaje.name}`)
        if(callback){
            callback()
        }
    } )
    .fail( function(){
        console.log('sucedio un error. No se pudo obtener el personaje.')
    })
}

obtenerPersonaje(1 ,function(){
    obtenerPersonaje(2 ,function(){
        obtenerPersonaje(3 ,function(){
            obtenerPersonaje(4 ,function(){
                obtenerPersonaje(5 ,function(){
                    obtenerPersonaje(6)
                })
            })
        })
    })
})