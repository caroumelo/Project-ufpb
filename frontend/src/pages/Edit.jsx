import react from 'react';
// import {useHistory} from 'react-router-dom';
import { useState,useEffect} from 'react';
import{useNavigate,useParams} from 'react-router-dom'
import axios from 'axios';
import api from '../api';

const Edit = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [address, setAdress] = useState("");
    const [cpf, setCpf] = useState("");
    const [price, setPrice] = useState("");
    const [preferences, setPreferences] = useState("");
    const [date, setDate] = useState("");
    const[user,setUser] = useState(null);
    const [pitSitters,setPitSitters] = useState([]);
  

    const navigate = useNavigate();
    const{id}=useParams();
   

  function handleSubmitEdit(ev){
    const user = {firstName, lastName, address, cpf, date, price, preferences};
    console.log('user',user);
    ev.preventDefault();

    api.put(`/pitSitters/update/${id}`, user).then((response)=>{
      setUser(response);
      console.log('response',response);
      navigate('/')
      
   
   }).catch((error) =>{console.log(error)}); //add axios. URL da api e valor é todo o valor do forms incluindo os campos
  }
  useEffect(()=>{
    const result = api.get(`/pitSitters/${id}`).then(({data})=>{
    
      console.log('data', data);
      setUser(result.data);
    })

   // eslint-disable-next-line react-hooks/exhaustive-deps
   },[])
  return (
    <form className="row g-3 needs-validation" onSubmit={(ev)=>handleSubmitEdit(ev)}>
      <div className="col-md-4">
        <label htmlFor="validationCustom01" className="form-label">Nome</label>
        <input type="text" className="form-control" id="validationCustom01" required  value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
        <div className="valid-feedback">
          OK
        </div>
      </div>
      <div className="col-md-4">
        <label htmlFor="validationCustom02" className="form-label">Sobrenome</label>
        <input type="text" className="form-control" id="validationCustom02" required value={lastName} onChange={(e) => setLastName(e.target.value)} />
        <div className="valid-feedback">
          OK
        </div>
      </div>

      <div className="col-md-6">
        <label htmlFor="inputAddress" className="form-label">Endereço</label>
        <input type="text" className="form-control" id="inputAddress" required value={address} onChange={(e) => setAdress(e.target.value)}/>
      </div>
      <div className="col-md-3">
        <label htmlFor="validationCustom04" className="form-label">CPF</label>
        <input type="text" className="form-control" id="validationCustom04" required value={cpf} onChange={(e) => setCpf(e.target.value)} />
        <div className="valid-feedback">
          OK
        </div>
        <div className="invalid-feedback">
          Por favor, insira um CPF válido.
        </div>
      </div>    
      <div className="col-md-3">
        <label htmlFor="validationCustom04" className="form-label">Preço</label>
        <input type="text" className="form-control" id="validationCustom04" required  value={price}  onChange={(e) => setPrice(e.target.value)} />
        <div className="valid-feedback">
          OK
        </div>
        <div className="invalid-feedback">
          Por favor, insira um Valor válido.
        </div>
      </div>  
      <div className="col-md-3">
        <label htmlFor="validationCustom01" className="form-label">Preferências</label>
        <input type="text" className="form-control" id="validationCustom01" required value={preferences} onChange={(e) => setPreferences(e.target.value)}/>
        <div className="valid-feedback">
          OK
        </div>
      </div>  
        <div className="col-md-3">
          <label htmlFor="validationCustom05" className="form-label">Data de Nascimento</label>
          <input type="date" className="form-control" id="validationCustom05" required value={date} onChange={(e) => setDate(e.target.value)} />
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
export default Edit; 