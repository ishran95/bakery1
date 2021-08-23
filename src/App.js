import React from "react";
import Add from './Component/Add.js';
import Button from './Component/Button.jsx';
import List from './Component/List.js';
import Pay from './Component/Pay.js';
import './App.css';
import'bootstrap/dist/css/bootstrap.min.css';
class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      activeTab:'add',
      items:[]
    };
    
     
  
}
render() {
  return (
    <div>
   <Button>add</Button>
   <Button>list</Button>
   <Button>pay</Button>
   
    </div>
   

  )
}
}

export default App;



















//var myObjet={name:"ishran"}