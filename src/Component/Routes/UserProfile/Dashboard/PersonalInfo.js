import React, { Component } from "react";
import { Avatar } from 'antd';
export default class PersonalInfo extends Component {
  render(props) {
    return (
      <div >
        <div className="Grey R25 p-4">
          <div className="d-inline-flex pt-2 mx-auto col-12">
            <Avatar size="large" icon={<img src={this.props.Profile.img} alt=""></img>} />
            <p className="my-auto ms-2 fw-bold">{this.props.Profile.firstName}  {this.props.Profile.lastName}</p>
          </div>
          <div className="d-flex pt-2">
            <div className="me-auto w-50">
              <p className="Font14 m-0 fw-bold">{this.props.Profile.following}</p>
              <p className="Font14 m-0">No. of Accounts Following</p>
            </div>
            <div className="me-auto w-50">
              <p className="Font14 m-0 Purple fw-bold">{this.props.Profile.totalPNL}</p>
              <p className="Font14 m-0">Total PnL Rate</p>
            </div>
          </div>
          <div className="d-flex pt-2">
            <div className="me-auto w-50">
              <p className="Font14 m-0 fw-bold">{this.props.Profile.totalTraders}</p>
              <p className="Font14 m-0">Total Trades Copied</p>
            </div>
            <div className="me-auto w-50">
              <p className="Font14 m-0 Purple fw-bold">{this.props.Profile.todayPNL}</p>
              <p className="Font14 m-0">Today’s PnL Rate</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
