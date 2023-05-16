import person from "../../assets/images/person.svg";
import api from "../../api";
import { useEffect, useState } from "react";
const Card = () =>{
 const [pitSitters,setPitSitters] = useState([]);
 
useEffect(()=>{
  api.get('pitSitters').then(({data})=>{
    setPitSitters(data);
  })
  console.log(pitSitters);

 // eslint-disable-next-line react-hooks/exhaustive-deps
 },[])


return(
        <div className="card" style={{"width": "18rem"}}>

        {pitSitters?.map((pitSitter)=>(
          
          <div className="card" style={{"width": "18rem"}}>
          <img src={person}  className="card-img-top" alt="avatar"/>          
            <div className="card-body">
            <h5 className="card-title">{pitSitter.FirstName} {pitSitter.LastName}</h5>
            
            <p className="card-text">{pitSitter.Address}</p>
            <p className="card-text"> {pitSitter.money.currency} {pitSitter.money.value}</p>
        
            <button href="#" className="btn btn-primary" >Contatar</button>
          </div>
          </div>
        ))}
          
        </div>
    )
}
export default Card;