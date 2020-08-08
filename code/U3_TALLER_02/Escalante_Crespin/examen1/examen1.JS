
const URL='https://rickandmortyapi.com'
const character_URL='character/:id'
function obtenerPersonaje(){
    const URL = URL+character_URL.replace(':id',id_personaje)
}
fetch(URL)
.then( response=>response.json())
.then(data=>{

    let element=document.getElementById('elemen')
    element.innerHTML=`
    <p>${data.name}</p>
    <p>${data.order}</p>
    <img src='${data.sprites.front_default}'/>
    `;
    console.log(data)
})
.catch(err=>console.log(err))
{
  
}
