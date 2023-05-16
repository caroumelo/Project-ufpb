import React from "react";
import person from "../../assets/images/person.svg";
import logo from "../../assets/images/PetSpace.png"

const Header = () =>{
    return(

  <div className="container" id= "nav-container">
       <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"><img id="logo" src={logo} alt="petSpace"></img></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" >
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Cadastro</a>
              </li>

            </ul>
          </div>
         {/* <img src={person}  alt="avatar" /> */}
          </div>
        
      </nav>
   
  </div>    
   
    )
}
export default Header;