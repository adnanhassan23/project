import React, { Component } from "react";
export default class Sponsored extends Component {
  render() {
    return (
      <div className="Grey R25 p-4 mt-4 Sponsored" >
        <h6 className="text-center">SPONSORED</h6>
        {this.props.Sponsored.map((each, index) => {
          return (
            <React.Fragment>
              <img key={index} src={each.img} alt="" className="w-100 mb-3"></img>
            </React.Fragment>
          )
        })}
      </div>
    );
  }
}
