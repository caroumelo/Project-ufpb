import axios from 'axios';


axios.get('http://localhost:3000/pitSitters')
.then(response => console.log('response',response))
.catch(error => console.log(error))