import React, { Component } from "react";
import { Avatar } from 'antd';
export default class Returns extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="Grey R25 p-4">
          <h6 className="text-center pt-3">HIGHEST RETURNS</h6>
          <div className="d-flex justify-content-around">
            <p className="F1_2v mb-0" >Time Period:</p>
            <button className="btn p-0 F1_2v">1D</button>
            <button className="btn p-0 F1_2v">1W</button>
            <button className="btn p-0 F1_2v">1M</button>
            <button className="btn p-0 F1_2v">All Time</button>
          </div>
          {this.props.Returns.map((index) => {
            return (
              <div className="Grey R25 mt-3">
                <div className="d-flex justify-content-around">
                  <Avatar size="small" icon={<img src={index.img} alt=""></img>} style={{ width: "20%", height: "auto" }} />
                  <p className="my-auto Font12">{index.name} <br></br> {index.followers} Follower(s)</p>
                  <p className="my-auto Font12"><span className="Green">{index.price}</span><br></br>{index.currency}</p>

                </div>
              </div>
            )
          })}
        </div>
      </React.Fragment>
    );
  }
}
