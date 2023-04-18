// async function fetchApi(){
//     const response = fetch('https://rickandmortyapi.com/api/character')
//     .then(response => response.json())
//     .then(jsonData =>{
//         console.log('entrei');
//         const list = document.querySelector('#list-person');
//         jsonData.map((item )=>{
//             const li = document.createElement('li');
//             li.setAttribute('id',item.id);
//             li.innerHTML = item.name;
//             list.appendChild(li);
//         })

//         })
//     .catch(function(e){
//             console.log('DEU ERRO',e);
//         })}
const fetchApi = async () => {
  const response = await fetch("https://rickandmortyapi.com/api/character");
  const dados = await response.json();
  console.log(dados.results);
  const listUL = document.getElementById("list-person");
  dados.results.map(item => {

    const listCharacter = document.createElement("li");
    const namePerson = document.createElement('p');
    const avatar = document.createElement("img");
    const speciesTitle = document.createElement('p');
    

    listCharacter.setAttribute("id", item.id);
    listCharacter.classList.add("card");
    namePerson.classList.add("text");
    speciesTitle.classList.add("text");
    speciesTitle.setAttribute("id", item.species);
    avatar.setAttribute("src",item.image);
    
    namePerson.innerHTML = item.name;
    speciesTitle.innerHTML = "Espécie: "+ item.species;
    listCharacter.appendChild(namePerson);
    listCharacter.appendChild(avatar);
    listCharacter.appendChild(speciesTitle);
    
    
    listUL.appendChild(listCharacter);
  });

};

window.onload = () => {
  fetchApi();
};

// function fetchApi(url){
//     fetch(url)
//     .then(response => response.json())
//     .then(data => {
//         const listPerson = document.querySelector("#list-p")
//     })
// }
/*
opção 1:
const doGet = (url) => {
    const promiseCallback = (resolve, reject) => {
        fetch(url)
        .then((response) => {
            if(!response.ok) throw new Error('Erro ao executar requisição, status' + response.status);
            return response.json();
        })
        .then(resolve)
        .catch(reject);     
    }
    return new Promise(promiseCallback); 
}
doGet('https://rickandmortyapi.com/api/character').then(console.log).catch(console.error);
*/

//opção 2: 
// const response = fetch('https://rickandmortyapi.com/api/character')
//     .then(function(responseData){
//         return responseData.json();
//     })
//     .then(function(jsonData){
//         console.log(jsonData);
//     })
//     .catch(function(e){
//         console.log('DEU ERRO');
//     })

/* opção 3:

(async function(){
    try{
        
        const headers = {
             'Content-Type': 'application/json',
            'authoriization': 'Bearer asdlfo; akjfkajf',
        };
        const init = {
            method: 'POST',//eu poderia mundar para PUT (atualizar). Se fosse o patch, só alteraria o campo. 
            //se for Delete, apago meu id criado e não precisaria mais do body.
            headers: headers,
            body: JSON.stringify({
                title: 'Testando',
            }),
        };
        const response = await fetch('https://rickandmortyapi.com/api/character', 
        init);

        const jsonData = await response.json();
    console.log(jsonData);

     
    } catch(e){
        console.log('DEU ERRO!');
    }
    
})();
*/
