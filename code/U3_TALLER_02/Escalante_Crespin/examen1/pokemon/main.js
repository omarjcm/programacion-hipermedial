const URL = 'https://pokeapi.co/api/v2/pokemon/20/'


fetch(URL)
.then(response=>response.json())
.then(data=>{

    let element=document.getElementById('elem')
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
