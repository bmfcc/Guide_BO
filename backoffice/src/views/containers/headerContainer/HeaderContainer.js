import React, { Component } from "react";
import PropTypes from "prop-types";
import Header from "../../components/header/Header"

class HeaderContainer extends Component {
  
  static propTypes = {
  };
 
  constructor(props) {
    super(props);

    this.state = {
    };
    
  }

  render() {    
    return (
      <div style={{textAlign: "center"}}>
        <Header/>
      </div>
    );
  }
}

export default HeaderContainer;
