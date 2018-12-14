import React, { Component } from "react";
import PropTypes from "prop-types";
import Home from "../../components/home/Home"
import ManageApp from "../../components/manageApp/ManageApp"
import Statistics from "../../components/statistics/Statistics"
import Backups from "../../components/backups/Backups"
import {ButtonsMenuValues} from "../../../global/constants";

class ContentContainer extends Component {
  
  static propTypes = {
  };
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  validateSelectedOption(selectedOption){
    switch (selectedOption) {
      case ButtonsMenuValues.HOME_PAGE:
        return  <Home/>;
      case ButtonsMenuValues.MANAGEAPP_PAGE:
        return  <ManageApp/>;
      case ButtonsMenuValues.BACKUPS_PAGE:
        return <Statistics/>;
      case ButtonsMenuValues.STATISTICS_PAGE:
        return <Backups/>;      
      default:
        break;
    }
  }

  render() {    
    return (
      <div>
       {this.validateSelectedOption(this.props.selectedButtonValue)}        
      </div>
    );
  }
}

export default ContentContainer;