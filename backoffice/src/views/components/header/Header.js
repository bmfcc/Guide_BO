import React, { Component } from "react";
import PropTypes from "prop-types";
import logoBackOffice from "../../../assets/images/logoBo.PNG";

class Header extends Component {
  static propTypes = {
   
  };
 
  constructor(props) {
    super(props);

    this.state = {
    
    };
    
  }

  render() {    
    return (
      <div>
        <img style={{ padding: 5 }}
         src={logoBackOffice}
         alt=""
         />
      </div>
    );
  }
}

export default Header;
