import React, { Component } from "react";
import PropTypes from "prop-types";
import "./ButtonsMenu.css"
import {ButtonsMenuValues} from "../../../global/constants";

class ButtonsMenu extends Component {
  static propTypes = {
   
  };
 
  constructor(props) {
    super(props);

    this.state = {
    
    };
    
  }

  onClickButton(seletectButtonValue){
    this.props.callBackSelectedButton(seletectButtonValue);
    this.setState({a: true})
  }

  render() {    
    return (
      <div>
        <div className="row" style={{width: 100+"%"}}><button className="buttonsMenuBO" onClick={() => this.onClickButton(ButtonsMenuValues.HOME_PAGE)}>Home</button></div>
        <div className="row" style={{width: 100+"%"}}><button className="buttonsMenuBO" onClick={() => this.onClickButton(ButtonsMenuValues.MANAGEAPP_PAGE)}>Manage App</button></div>
        <div className="row" style={{width: 100+"%"}}><button className="buttonsMenuBO" onClick={() => this.onClickButton(ButtonsMenuValues.BACKUPS_PAGE)}>Backups</button></div>
        <div className="row" style={{width: 100+"%"}}><button className="buttonsMenuBO"  onClick={() => this.onClickButton(ButtonsMenuValues.STATISTICS_PAGE)}>Statistics</button></div>
      </div>
    );
  }
}

export default ButtonsMenu;
