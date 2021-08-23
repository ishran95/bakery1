import React from "react";

class List extends React.Component{
  
    render() {
      return (
        <div>
          <button class="btn btn-primary" type="onClick">{this.props.children}</button>
        </div>
       
    
      )
    }
  }














export default List;