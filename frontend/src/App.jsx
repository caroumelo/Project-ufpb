
import React from "react";
import Header from "./components/Header/Header";
import Home from './pages/Home';
import FormsUser from "./pages/formsUser";
import Edit from "./pages/Edit";
import {Route,Routes}from "react-router-dom"
function App() {
  return (
    <>
    <Header>
    </Header>
    <Routes>
      <Route path="/" exact Component={Home}/>
      <Route path="/createProfile" exact Component={FormsUser}/>
      <Route path="/edit" exact Component={Edit}/>
    </Routes>
    
    
    
    </>
  )
}

export default App;
