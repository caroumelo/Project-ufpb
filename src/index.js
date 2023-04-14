let url = "https://rickandmortyapi.com/api/character"

function fetchApi(url){
    fetch(url)
    .then(response => response.json())
    .then(data => {
        const list = document.querySelector('list-cards')
        data.map((item)=>{

            const li = document.createElement('li');
            li.setAttribute('id',item.id);
            li.innerHTML = item.name;
            list.appendChild(li);
        })
    }).catch(erro=> console.log(erro))
   
}  
fetchApi(url);
// const doGet = (url) => {
//     const promiseCallback = (resolve, reject) => {
//         fetch(url)
//         .then((response) => {
//             if(!response.ok) throw new Error('Erro ao executar requisição, status' + response.status);
//             return response.json();
//         })
//         .then(resolve)
//         .catch(reject);     
//     }
//     return new Promise(promiseCallback); 
// }
// doGet('https://rickandmortyapi.com/api/character').then(
//     data=> {
//         const list = document.querySelector('list-cards')
//         data.map((item)=>{

//             const li = document.createElement('li');
//             li.setAttribute('id',item.id);
//             li.innerHTML = item.name;
//             list.appendChild(li);
//         })
//     }
// ).catch(console.error);
