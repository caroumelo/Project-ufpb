import person from "../../assets/images/person.svg";
import api from "../../api";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Card = () =>{
 const [pitSitters,setPitSitters] = useState([]);
 
useEffect(()=>{
  api.get('pitSitters').then(({data})=>{
    console.log('data', data);
    setPitSitters(data);
  })
  console.log(pitSitters);

 // eslint-disable-next-line react-hooks/exhaustive-deps
 },[])
function deleteUser(id){
    api.delete(`/pitSitters/delete/${id}`)
    setPitSitters(pitSitters.filter(pitSitter => pitSitter.uid !== id));
}

return(
        <div className="card" style={{"width": "18rem"}}>

        {pitSitters?.map((pitSitter)=>(
          
          <div className="card" style={{"width": "18rem"}}>
          <img src={person}  className="card-img-top" alt="avatar"/>          
            <div className="card-body">
            <h5 className="card-title">{pitSitter.firstName} {pitSitter.lastName}</h5>
            
            <p className="card-text">{pitSitter.address}</p>
            <p className="card-text">R${pitSitter.price} </p>
            <p className="card-text">{pitSitter.preferences} </p>
        <Link to={{pathname:`/edit/${pitSitter.uid}`}}>
            <button href="#" className="btn btn-primary" >Editar</button>
        </Link>
            <button href="#" className="btn btn-primary" onClick={() => deleteUser(pitSitter.uid)} >Excluir</button>
          </div>
          </div>
        ))}
          
        </div>
    )
}
export default Card;