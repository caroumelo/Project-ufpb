import react from 'react';
// import {useHistory} from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

// import './Form.css'; // ?

// const initialValue = {
//   FirstName:'',
//   LastName:'',
//   Adress:'',
//   currency:'',
//   value:'',
//   Date:'',
//   cpf:'',
// }

// const formUser=()=>{
  
// }
const FormsUser = () => {
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Adress, setAdress] = useState("");
  const [cpf, setCpf] = useState("");
  const [Date, setDate] = useState("");
  
  function onSubmit(ev){
    ev.preventDefault();


    console.log(FirstName, LastName, Adress, cpf, Date);
    const newUser = {FirstName, LastName, Adress, cpf, Date};

    axios.post('pitSitters/create', newUser).then((response)=>{
      console.log('response',response);
      
      // history.push('/');
   }).catch((error) =>{console.log(error)}); //add axios. URL da api e valor é todo o valor do forms incluindo os campos
  }
  return (
    <form className="row g-3 needs-validation" onSubmit={(ev)=>onSubmit(ev)}>
      <div className="col-md-4">
        <label htmlFor="validationCustom01" className="form-label">Nome</label>
        <input type="text" className="form-control" id="validationCustom01" required  onChange={(e) => setFirstName(e.target.value)}/>
        <div className="valid-feedback">
          OK
        </div>
      </div>
      <div className="col-md-4">
        <label htmlFor="validationCustom02" className="form-label">Sobrenome</label>
        <input type="text" className="form-control" id="validationCustom02" required onChange={(e) => setLastName(e.target.value)} />
        <div className="valid-feedback">
          OK
        </div>
      </div>

      <div className="col-md-6">
        <label htmlFor="inputAddress" className="form-label">Endereço</label>
        <input type="text" className="form-control" id="inputAddress" required onChange={(e) => setAdress(e.target.value)}/>
      </div>
      <div className="col-md-3">
        <label htmlFor="validationCustom04" className="form-label">CPF</label>
        <input type="text" className="form-control" id="validationCustom04" required onChange={(e) => setCpf(e.target.value)} />
        <div className="valid-feedback">
          OK
        </div>
        <div className="invalid-feedback">
          Por favor, insira um CPF válido.
        </div>
      </div>    
        <div className="col-md-3">
          <label htmlFor="validationCustom05" className="form-label">Data de Nascimento</label>
          <input type="date" className="form-control" id="validationCustom05" required onChange={(e) => setDate(e.target.value)} />
          <div className="valid-feedback">
            OK
          </div>
          <div className="invalid-feedback">
            Por favor, insira uma data válida.
          </div>
        </div>    
        <div className="col-12">
          <button className="btn btn-primary" type="submit">Salvar</button>
        </div>
    </form>
  )

}
export default FormsUser; 