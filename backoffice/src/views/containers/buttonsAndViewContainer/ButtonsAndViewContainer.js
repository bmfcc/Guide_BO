import React, { Component } from "react";
import PropTypes from "prop-types";
import ButtonsMenu from "../../components/buttonsMenu/ButtonsMenu"
import ContentContainer from "../contentContainer/ContentContainer"
import {ButtonsMenuValues} from "../../../global/constants";


class ButtonsAndViewContainer extends Component {
  
  static propTypes = {
  };
 
  constructor(props) {
    super(props);

    this.state = {
      selectedButton: ButtonsMenuValues.HOME_PAGE
    };
    
    // This binding is necessary to make `this` work in the callback
    this.callBackSelectedButton = this.callBackSelectedButton.bind(this);
  }

  callBackSelectedButton(selectedOption){
    this.setState({
      selectedButton: selectedOption
    })
  }

  render() {    
    return (
      <div className="row" style={{marginLeft: 0, marginRight: 0, minHeight:560}}>
          <div className="col-md-2">
            <div style={{textAlign: "left"}}>
              <ButtonsMenu callBackSelectedButton={this.callBackSelectedButton}/>
            </div>
          </div>
          <div className="col-md-10" style={{textAlign: "center"}}>
          <ContentContainer selectedButtonValue={this.state.selectedButton}/>
          </div>
      </div>
    );
  }
}

export default ButtonsAndViewContainer;
