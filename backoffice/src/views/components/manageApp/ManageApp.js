import React, { Component } from "react";
import PropTypes from "prop-types";
import "./ManageApp.css"

class ManageApp extends Component {
  static propTypes = {
   
  };
 
  constructor(props) {
    super(props);

    this.state = {
    
    };

    this.refData={
      "Items": {
        "EN": {
          "elefante_africano": {
            "audioFile": "elefante_africano.ogg",
            "description": "The African elephant (Loxodonta) is a genus of the elephantidae family. The genus is composed of two existing species of elephant: the savannah elephant (Loxodonta africana) and the forest elephant (Loxodonta cyclotis).\nThe male of one of the species of Loxodonta, the savannah elephant, reaches an average of 3.2 meters in height and weighs 6 tons, which makes it the largest terrestrial animal. The largest specimen ever recorded was about 12.3 tonnes.\nCompared to the elephant elephant of the Elephas genus, it is distinguished by the larger ears (an adaptation to the higher temperatures) and the presence of ivory teeth in females of about 70 kilograms each.",
            "id": "elefante_africano",
            "imageFile": "elefante_africano.png",
            "name": "Elefante-Africano"
          },
          "foca_comum": {
            "audioFile": "foca_comum.ogg",
            "description": "The common seal (Phoca vitulina) is a carnivorous mammal from the Phoenician family, also known as harbor seal, and is found along the temperate and arctic marine coasts of the Northern Hemisphere. It is one of the most widely distributed species of pinnipeds (walrus, sea lions, sea lions and seals), they are found in coastal waters of the North Atlantic and Pacific, the Baltic Sea and the North Sea.\nCommon seals are brown, beige or gray with V-shaped nostrils. An adult can reach a length of 1.85 m and a weight of 132 kg. a layer of insulating fat under the skin helps maintain body temperature. Females survive longer than males (30-35 years vs. 20-25 years). Seals live in familiar groups, resting in generally rocky areas (although ice, sand and mud can also be used), where they are protected from adverse weather conditions and predators, in an area near the sea where they feed. Males can fight for companions in the water and on land. The females have a single cub, after a pregnancy of nine months, that they take care of alone. The puppies can weigh up to 16 kg and are able to swim and dive hours after birth. They develop quickly thanks to their mothers' fat-rich milk and are weaned after four to six weeks.\nThe world population of seals is 350,000-500,000 animals, but subspecies in certain habitats are threatened. Once a common practice, hunting, now illegal in many countries within the reach of the animal, almost decimated the species.",
            "id": "foca_comum",
            "imageFile": "foca_comum.png",
            "name": "Common Seal"
          }
        }
  }
}
}

onHoverEdit(booleanValue, item){
  this.setState({
  })
}

onHoverDelete(booleanValue, item){
  this.setState({
  })
}

renderTable(data){
  let auxList= [];
  auxList.push(
    <div className="row" style={{paddingTop: 15}}>
        <div className="col-md-4 labelRow" style={{fontSize: 20}}>
            Object
        </div>
        <div className="col-md-4 labelRow" style={{fontSize: 20}}>
            Name
        </div>
        <div className="col-md-2 labelRow" style={{fontSize: 20}}>
            Action                        
        </div>
        <div className="col-md-2">
            {" "}                        
        </div>
      </div>
  );
  Object.keys(data).forEach(function(prop) {
      // `prop` is the property name
      // `data[prop]` is the property value
    auxList.push(
      <div className="row" style={{}}>
        <div className="col-md-4 labelRow">
            {data[prop].id}
        </div>
        <div className="col-md-4 labelRow">
            {data[prop].name}
        </div>
        <div className="col-md-2 labelRow" style={{display: "flex"}}>
            <div style={{cursor:"pointer"}}>{"Edit"}</div>
            <div>{' | '}</div>
            <div style={{cursor:"pointer"}}>{"Delete"}</div>                        
        </div>
        <div className="col-md-2">
            {" "}                        
        </div>
      </div>
    );
    });
    return auxList; 
}

  render() {    
    return (
      <div>
          <div>
          <button className="buttonBO" style={{outline: "none"}}>New</button>
          </div>          
          <div>
           {this.renderTable(this.refData.Items.EN)}
          </div>
      </div>
    );
  }
}

export default ManageApp;
