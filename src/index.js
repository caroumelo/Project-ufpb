let url = "https://rickandmortyapi.com/api/character"

function fetchApi(url){
    fetch(url)
    .then(response => response.json())
    .then(data => {
        const listPerson = document.querySelector("#list-p")
    })
}  