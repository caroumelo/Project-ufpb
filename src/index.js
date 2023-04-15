// let url = "https://rickandmortyapi.com/api/character"

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
const response = fetch('https://rickandmortyapi.com/api/character')
    .then(function(responseData){
        return responseData.json();
    })
    .then(function(jsonData){
        console.log(jsonData);
    })
    .catch(function(e){
        console.log('DEU ERRO');
    })

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