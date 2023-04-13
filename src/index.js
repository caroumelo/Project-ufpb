// let url = "https://rickandmortyapi.com/api/character"

// function fetchApi(url){
//     fetch(url)
//     .then(response => response.json())
//     .then(data => {
//         const listPerson = document.querySelector("#list-p")
//     })
// }  
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
