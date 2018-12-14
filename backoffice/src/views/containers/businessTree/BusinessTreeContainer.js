import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import BusinessTree from "../../components/businessTree/BusinessTree";
import { team, teamMonthly } from "../../../state/team/team-actions";
import { ui } from "../../../state/UI/ui-actions";
import cookie from "react-cookies";
import "./BusinessTreeContainer.css";
import Spinner from "../../components/spinner/Spinner";
import moment from "moment-timezone";
import { stepper } from "../../../state/UI/ui-actions";
import { RESET_JOBVALIDATIONLIST } from "../../../state/job/job-actions";
import {
  COOKIE_MAX_AGE,
  COOKIE_EXPIRES_DATE,
  buttonIndex,
  permissions,
  USER_PERMISSIONS,
  ORGANISATIONAL_UNIT
} from "../../../global/constants";
import { containsPermission } from "../../../global/arrayUtils";

import { overtimeCount } from "../../../state/overtime/overtime-actions";

/**
 * Business Tree Container of the Menu
 */
class BusinessTreeContainer extends Component {
  static propTypes = {
    dispatch: PropTypes.func,
    match: PropTypes.object,
    businessTreeToLoad: PropTypes.object,
    teamDesc: PropTypes.object,
    buttonsState: PropTypes.object
  };

  constructor(props) {
    super(props);

    this.userPermissionList = cookie.load(USER_PERMISSIONS);

    this.requestTeamById = this.requestTeamById.bind(this);
    this.closeTreeCallback = this.closeTreeCallback.bind(this);
    this.updateOvertime = this.updateOvertime.bind(this);
  }

  componentWillMount() {
    this.props.dispatch(team.getInfo());
  }

  /**
   * Requests new gantt data based on teamId
   * @param {*} teamId
   * @param {*} name
   * @param {*} organisationalUnit
   */
  requestTeamById(teamId, name, organisationalUnit) {
    const teamDesc = this.props.teamDesc;
    const interval = moment(teamDesc.finish).diff(
      moment(teamDesc.start),
      "days"
    );

    if (interval > 8) {
      this.props.dispatch(
        teamMonthly.request(teamId, teamDesc.start, teamDesc.finish)
      );
    } else {
      this.props.dispatch(
        team.request(teamId, teamDesc.start, teamDesc.finish)
      );
    }

    this.props.dispatch(team.setInfo(teamId, name));
    this.props.dispatch(stepper.resetProps());
    this.props.dispatch(RESET_JOBVALIDATIONLIST);
    cookie.save("teamId", teamId, {
      path: "/",
      maxAge: COOKIE_MAX_AGE,
      expires: moment(COOKIE_EXPIRES_DATE).toDate()
    });
    cookie.save("teamName", name, {
      path: "/",
      maxAge: COOKIE_MAX_AGE,
      expires: moment(COOKIE_EXPIRES_DATE).toDate()
    });
    cookie.save(ORGANISATIONAL_UNIT, organisationalUnit, {
      path: "/",
      maxAge: COOKIE_MAX_AGE,
      expires: moment(COOKIE_EXPIRES_DATE).toDate()
    });
  }
  /**
   * Update businessTree button state from buttons Menu.
   * Example: (open/close)
   */
  updateBtnsMenuState() {
    this.props.dispatch(ui.setBtnsInfo(buttonIndex.businessTree, false));
  }

  /**
   * Closes Business Tree form.
   */
  closeTreeCallback() {
    this.updateBtnsMenuState();
    return <Link to={"/"} />;
  }
  /**
   * Sends overtime request counter to update overtime counter
   *  when the user holds the permision for that.
   * @param {*} id
   */
  updateOvertime(id) {
    if (containsPermission(permissions.OVERTIMEREAD, this.userPermissionList))
      this.props.dispatch(overtimeCount.request(id));
  }

  render() {
    const { businessTreeToLoad } = this.props;
    if (this.props.businessTreeToLoad.payload === undefined) {
      return <div />;
    }
    if (this.props.businessTreeToLoad.isFetching) {
      return (
        <div
          className="businessTreeSpinDiv"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Spinner isLoading={this.props.businessTreeToLoad.isFetching} />
        </div>
      );
    } else {
      return (
        <div style={{ padding: 20 }}>
          <div className="hierarchyArea">
            <BusinessTree
              businessTree={businessTreeToLoad}
              requestTeamById={this.requestTeamById}
              closeTreeCallback={this.closeTreeCallback}
              updateOvertime={this.updateOvertime}
            />
          </div>
        </div>
      );
    }
  }
}
const mapStateToProps = state => {
  return {
    businessTreeToLoad: state.businessTree,
    teamDesc: state.team,
    buttonsState: state.ui.buttonsMenu
  };
};

export default connect(mapStateToProps)(BusinessTreeContainer);
