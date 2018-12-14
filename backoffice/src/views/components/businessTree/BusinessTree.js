import React, { Component } from "react";
import PropTypes from "prop-types";
import { Treebeard } from "react-treebeard";
import { treeStyle } from "./BusinessTreeStyles";
import { Redirect } from "react-router-dom";
/**
 * Fetchs the business tree from server and presents on the application, for the user to choose the team node to load.
 */
class BusinessTree extends Component {
  static propTypes = {
    match: PropTypes.object,
    businessTree: PropTypes.object,
    requestTeamById: PropTypes.func.isRequired,
    closeTreeCallback: PropTypes.func,
    updateOvertime: PropTypes.func
  };
  /**
   * @param {Object} props props received when building the component
   */
  constructor(props) {
    super(props);

    this.state = {
      redirect: false,
      cursor: undefined
    };
    this.onToggle = this.onToggle.bind(this);

    this.counter = 0;
    this.convertedTree = this.convertToTreebeardStructure(
      props.businessTree.payload
    );
  }
  /**
   * Whenever received new data of the business tree, it will again render the tree on the application
   * @param {Object} props props of the component
   */
  componentWillReceiveProps(props) {
    this.convertedTree = this.convertToTreebeardStructure(
      props.businessTree.payload
    );
  }

  /**
   * Convert data from server to TreebeardStructure.
   * @param {*} dataFromDb business tree data from the database
   */
  convertToTreebeardStructure(dataFromDb) {
    let netWorkServiceAreas = dataFromDb.networkServiceAreas;

    return this.getNetworkSAreas(netWorkServiceAreas);
  }

  /**
   * Process and map the network service areas fetched
   * @param {*} networkServiceAreas Object with all network service areas of the business
   */
  getNetworkSAreas(networkServiceAreas) {
    let auxNSAreas = [];
    let objNSArea = {
      name: "",
      id: 0,
      idFromDb: 0,
      children: []
    };

    if (networkServiceAreas !== undefined) {
      for (let i = 0; i < networkServiceAreas.length; i++) {
        objNSArea.name = networkServiceAreas[i].name;
        objNSArea.children = this.getDistributionAreas(
          networkServiceAreas[i].distributionAreas
        );
        objNSArea.id = this.counter++;
        objNSArea.idFromDb = networkServiceAreas[i].id;
        auxNSAreas.push(Object.assign({}, objNSArea));
      }
    }
    return auxNSAreas;
  }

  /**
   * Process and map the distribution areas fetched
   *
   * @param {*} distAreas Object with distribution areas from a specific network service area
   */
  getDistributionAreas(distAreas) {
    let auxDistAreas = [];
    let objDistArea = {
      id: 0,
      idFromDb: 0,
      name: "",
      children: []
    };

    for (let i = 0; i < distAreas.length; i++) {
      objDistArea.name = distAreas[i].name;
      objDistArea.children = this.getTeams(distAreas[i].teams);
      objDistArea.idFromDb = distAreas[i].id;
      objDistArea.id = this.counter++;

      auxDistAreas.push(Object.assign({}, objDistArea));
    }
    return auxDistAreas;
  }

  /**
   * Process and map the teams fetched
   *
   * @param {*} teams Object with teams from a specific distribution area
   */
  getTeams(teams) {
    let auxTeams = [];

    let objTeam = {
      id: 0,
      idFromDb: 0,
      name: "",
      isTeam: true
    };

    for (let j = 0; j < teams.length; j++) {
      objTeam.name = teams[j].name;
      objTeam.id = this.counter++;
      objTeam.idFromDb = teams[j].id;
      objTeam.organisationalUnit = teams[j].organisationalUnit;
      auxTeams.push(Object.assign({}, objTeam));
    }
    return auxTeams;
  }

  /**
   * Handler for nodes state (to collapsed or expanded)
   *
   * @param {*} node node of the business tree clicked
   * @param {*} toggled current toggled state of the node
   */
  onToggle(node, toggled) {
    let prevNode = this.state.cursor;
    if (prevNode !== undefined) {
      prevNode.active = false;
    }

    node.active = true;
    if (node.children) {
      node.toggled = toggled;
    }
    this.setState({ cursor: node });
  }

  /**
   * Request to load the team from the selected node
   */
  loadTeam() {
    if (this.state.cursor !== undefined) {
      let node = this.state.cursor;
      if (node.isTeam) {
        this.props.requestTeamById(
          node.idFromDb,
          node.name,
          node.organisationalUnit
        );
        this.props.closeTreeCallback();
        this.props.updateOvertime(node.idFromDb);

        this.setState({ redirect: true });
      }
    }
  }

  render() {
    if (this.state.redirect) {
      return <Redirect push to="/" />;
    }
    return (
      <div>
        <Treebeard
          data={this.convertedTree}
          onToggle={this.onToggle}
          style={treeStyle}
        />
        <button
          type="button"
          className="ConfirmButton"
          style={{
            position: "absolute",
            bottom: "5%",
            right: "8%"
          }}
          onClick={this.loadTeam.bind(this)}
        >
          {"Confirm"}
        </button>
      </div>
    );
  }
}

export default BusinessTree;
